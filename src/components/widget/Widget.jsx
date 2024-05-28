import './widget.scss';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;

  switch (type) {
    case 'user':
      data = {
        title: 'USERS',
        isMoney: false,
        icon: (
          <PersonOutlinedIcon
            className='icon'
            style={{
              color: 'crimson',
              backgroundColor: 'rgba(255, 0, 0, 0.2)',
            }}
          />
        ),
      };
      break;
    case 'sellers':
      data = {
        title: 'SELLERS',
        isMoney: false,
        icon: (
          <ShoppingCartOutlinedIcon
            className='icon'
            style={{
              backgroundColor: 'rgba(218, 165, 32, 0.2)',
              color: 'goldenrod',
            }}
          />
        ),
      };
      break;
    case 'coupons collected':
      data = {
        title: 'COUPONS COLLECTED',
        isMoney: false,
        icon: (
          <MonetizationOnOutlinedIcon
            className='icon'
            style={{ backgroundColor: 'rgba(0, 128, 0, 0.2)', color: 'green' }}
          />
        ),
      };
      break;
    case 'coupons completed':
      data = {
        title: 'COUPONS COMPLETED',
        isMoney: false,
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className='icon'
            style={{
              backgroundColor: 'rgba(128, 0, 128, 0.2)',
              color: 'purple',
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className='widget'>
      <div className='left'>
        <span className='title'>{data.title}</span>
        <span className='counter'>
          {data.isMoney && '$'} {amount}
        </span>
        <span className='link'>{data.link}</span>
      </div>
      <div className='right'>
        <div className='percentage positive'></div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
