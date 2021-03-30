import react from 'react';
import Home from '../components/Home/index';
import AboutUs from '../components/AboutUs/index';



const Main: React.FC = () => {
    return (
        <>
        <div className="containerCard">
            <Home/>
            <AboutUs/>
            </div>
        </>
    )

}
export default Main;