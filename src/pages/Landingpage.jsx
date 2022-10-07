import Beitrag from '../components/Beitrag'
import headerImg from './img/headerImg.avif'
import './Landingpage.css';
import { Link } from 'react-router-dom';

const Landingpage = () => {
    return (
        <div>
            <div className="header">
                <img src={headerImg} alt="" />
                <h1>Hallo Welt</h1>
                <div className='imgFlex'>
                    <Link to={"./detailpage"}> <Beitrag /> </Link>
                </div>
            </div>
        </div>
    )
}

export default Landingpage