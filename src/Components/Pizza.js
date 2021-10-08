import React, { useContext } from 'react'
import MenuContext from '../Contexts/MenuContext'
import Cart from './Cart';

export default function Pizza() {

    const { FoodItems, addToCart } = useContext(MenuContext);

    return (
        <div>
            <div className="p-2 m-5">
                <div className="row">
                    <div className="col col-lg-8 col-md-12 col-sm-12">
                        <div className="text-center mb-5">
                            <h1 className="menu-heading">{FoodItems[0].subItemsData.name}</h1>
                        </div>
                        <div className="row">
                            <div className="col d-none d-md-block col-md-2"></div>
                            <div className="col col-md-8">

                                {FoodItems[0].subItemsData.subItems.map(element => {
                                    return (
                                        <>
                                            <div className="row">
                                                <div className="card mb-3 border-danger style-right" style={{ maxWidth: "540px" }}>
                                                    <div className="row no-gutters">
                                                        <div className="col-md-4 bg-danger style-left text-center pt-3">
                                                            <img src={element.image} alt={element.name} style={{ height: "150px", width: "150px", borderRadius: "50%" }} />
                                                        </div>
                                                        <div className="col-md-8">
                                                            <div className="card-body">
                                                                <h5 className="card-title">{element.name}</h5>
                                                                <p className="card-text mb-1">{element.description.substring(0, 50) + "..."}</p>
                                                                <p className="card-text mt-1">Rs. {element.price}/-</p>
                                                                <button className="btn btn-danger" onClick={() => addToCart(element)}>Add to Cart</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col d-none d-md-block col-md-4">
                        <Cart/>
                    </div>
                </div>
            </div>            
        </div >
    )
}
