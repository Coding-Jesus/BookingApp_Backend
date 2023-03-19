import './home.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';
import Featured from '../../components/featured chart/Featured';
import Chart from '../../components/chart/Chart';
import Table from '../../components/table/Table';

const Home = () => {
    return (
        <div className='home'>
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earnings" />
                    <Widget type="balance" />
                </div>
                <div className="charts">
                    <Featured />
                    <Chart aspect={2 / 1} title="Sales Overview ( Last 6 Months )" />
                </div>
                <div className="listContainer">
                    <div className="listTitle">
                        Latest transactions
                    </div>
                    <Table />
                </div>
            </div>
        </div>
    )
}

export default Home;