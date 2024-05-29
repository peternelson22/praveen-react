import './list.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Datatable from '../../components/datatable/Datatable';
import {
  adminColumns,
  categoryColumns,
  sellerColumns,
  userColumns,
} from '../../datatablesource';
import SignupUserDialog from '../../components/dialogs/SignupUserDialog';
import SignupAdminDialog from '../../components/dialogs/SignupAdminDialog';
import SignupSellerDialog from '../../components/dialogs/SignupSellerDialog';
import CategoryDialog from '../../components/dialogs/CategoryDialog';

const List = ({ path }) => {
  return (
    <div className='list'>
      <Sidebar />
      <div className='listContainer'>
        <Navbar />
        {path === 'users' && (
          <Datatable
            title='Users'
            btn='Add Users'
            endpoint='/user/general'
            columns={userColumns}
            dialogComponent={SignupUserDialog}
          />
        )}
        {path === 'admin' && (
          <Datatable
            title='Admin'
            btn='Add Admin'
            endpoint='/user/admin'
            columns={adminColumns}
            dialogComponent={SignupAdminDialog}
          />
        )}
        {path === 'sellers' && (
          <Datatable
            title='Sellers'
            btn='Add Sellers'
            endpoint='/user/seller'
            columns={sellerColumns}
            dialogComponent={SignupSellerDialog}
          />
        )}
        {path === 'category' && (
          <Datatable
            title='Category'
            btn='Add category'
            endpoint='/category/categories'
            columns={categoryColumns}
            dialogComponent={CategoryDialog}
          />
        )}
        {path === 'catalog' && (
          <Datatable
            title='Catalog'
            btn='Add catalog'
            endpoint='/category/categories'
            columns={categoryColumns}
            dialogComponent={CategoryDialog}
          />
        )}
      </div>
    </div>
  );
};

export default List;
