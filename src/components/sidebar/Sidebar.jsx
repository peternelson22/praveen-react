import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import StoreIcon from '@mui/icons-material/Store';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { CategorySharp, Person3Sharp } from '@mui/icons-material';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        return;
      }
      localStorage.removeItem('token');
      return navigate('/login');
    } catch (error) {
      console.error('Logout failed', error);
    }
  };
  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className='logo'>Praveen</span>
        </Link>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <li>
              <DashboardIcon className='icon' />
              <span>Dashboard</span>
            </li>
          </Link>
          <Link to='/admin' style={{ textDecoration: 'none' }}>
            <li>
              <Person3Sharp className='icon' />
              <span>Admin</span>
            </li>
          </Link>
          <Link to='/users' style={{ textDecoration: 'none' }}>
            <li>
              <PersonOutlineIcon className='icon' />
              <span>Users</span>
            </li>
          </Link>
          <Link to='/sellers' style={{ textDecoration: 'none' }}>
            <li>
              <StoreIcon className='icon' />
              <span>Sellers</span>
            </li>
          </Link>
          <Link to='/category' style={{ textDecoration: 'none' }}>
            <li>
              <CreditCardIcon className='icon' />
              <span>Category</span>
            </li>
          </Link>
          <Link to='/catalog' style={{ textDecoration: 'none' }}>
            <li>
              <CategorySharp className='icon' />
              <span>Catalog</span>
            </li>
          </Link>
          <p className='title'>USER</p>
          {/* <li>
            <AccountCircleOutlinedIcon className='icon' />
            <span>Profile</span>
          </li> */}
          <li>
            <ExitToAppIcon className='icon' />
            <span onClick={handleLogout}>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
