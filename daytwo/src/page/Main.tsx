import react from 'react';
import Home from '../components/Home/index';
import AboutUs from '../components/AboutUs/index';
import Accenture from '../assets/accenture.png';


const Main: React.FC = () => {
    return (
        <>
        <div className="containerCard">
            <Home/>
            <AboutUs/>
            <img className="accent" src={Accenture} alt="accenture" />

            </div>
        </>
    )

}
export default Main;