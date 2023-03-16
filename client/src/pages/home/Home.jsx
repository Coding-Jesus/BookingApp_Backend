import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import './home.css'
import Featured from '../../components/featured/Featured'
import PropertyList from '../../components/propertyList/PorpertyList'
import Properties from '../../components/featuredProperties/Properties'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured />
                <h1 className="homeTitle">Browse a propert type</h1>
                <PropertyList />
                <h1 className="homeTitle">Homes guests love</h1>
                <Properties />
                <MailList />
                <Footer />
            </div>
        </div>
    )
}

export default Home