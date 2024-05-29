import './home.scss';

import Chart from '../../components/chart/Chart';
import Featured from '../../components/featured/Featured';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Table from '../../components/table/Table';
import Widget from '../../components/widget/Widget';

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        <div className='widgets'>
          <Widget type='user' />
          <Widget type='sellers' />
          <Widget type='coupons collected' />
          <Widget type='coupons completed' />
        </div>
        <div className='charts'>
          <Chart title='Last 6 Months (Sales)' aspect={3 / 1} />
        </div>
      </div>
    </div>
  );
};

export default Home;
