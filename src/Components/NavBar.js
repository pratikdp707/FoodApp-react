import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import MenuContext from '../Contexts/MenuContext'

export default function NavBar() {
    const {CartCount} = useContext(MenuContext);
    return (
        <div>
            <nav className="navbar bg-light" >
                <div className="container-fluid px-5">
                    <Link className="navbar-brand-app" to="/home" style={{}}>FoodApp</Link>
                    <Link to="/cart"><button type="button" className="btn btn-danger cart-btn" style={{}}><i className="fas fa-shopping-cart"></i>&nbsp;{CartCount}</button></Link>
                </div>
            </nav>
        </div>
    )
}
