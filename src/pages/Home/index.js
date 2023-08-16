import className from 'classnames/bind';
import GlobalStyles from "~/components/GlobalStyles/GlobalStyles.scss";
import styles from './Home.module.scss'
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
function Home() {
    const cx = className.bind(styles);
    return ( 
        <div>
            <Header/>
            <Footer/>
        </div>
    );
}

export default Home;