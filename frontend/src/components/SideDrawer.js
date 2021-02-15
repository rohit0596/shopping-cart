import { Link } from "react-router-dom";
import "./SideDrawer.css"
import {useSelector} from 'react-redux';

const SideDrawer = ({show, click}) => {
    const SideDrawerClass = ["sidedrawer"];

    if (show) {
        SideDrawerClass.push("show");
    }

    
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
      
    const getCartCount = () => {
      return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    };

    
    return <div className={SideDrawerClass.join(" ")}>
        <ul className="sidedrawer__links" onClick={click}>
            <li>
                <Link>
                    <i className="fas fa-shopping-cart"></i>
                    <span>
                        Cart <span className="sidedrawer__cartbagde">{getCartCount()}</span>
                    </span>
                </Link>
            </li>
            <li>
                <Link to="/">Shop</Link>
            </li>
        </ul>
    </div>
};

export default SideDrawer
