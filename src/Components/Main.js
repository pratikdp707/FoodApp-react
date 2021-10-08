import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MenuContext from '../Contexts/MenuContext';
import Cart from './Cart';

export default function Main() {

    const { FoodItems } = useContext(MenuContext);

    return (
        <div>
            <div className="p-2 m-5">
                <div className="row">
                    <div className="col col-lg-8 col-md-12 col-sm-12">
                        <div className="text-center">
                            <h1 className="menu-heading">Menu</h1>
                        </div>
                        <div className="row justify-content-center text-center">
                            {
                                FoodItems.map((element, i) => {
                                    return (
                                        <Link to={"/" + element.name.toLowerCase()} style={{color:"#dc3545"}}>
                                            <div className="card bg-danger ml-5 mr-5 mt-5 mb-2 px-4 pt-3" style={{ borderRadius: "10px" }}>
                                                <img src={element.image} className="card-img-top" alt={element.name} style={{ borderRadius: "50%", height: "150px", width: "150px" }} />
                                                <div className="card-body text-light">
                                                    <h2 className="card-title">{element.name}</h2>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="col d-none d-md-block col-md-4">
                    <Cart/>
                </div>
                </div>
            </div>
        </div>



    )
}
