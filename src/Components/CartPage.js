import React, { useContext } from 'react'
import MenuContext from '../Contexts/MenuContext';

export default function CartPage() {
    const { CartItems, removeFromCart } = useContext(MenuContext);

    return (
        <>
            <div className="container mt-5 p-5">
                <div className="border-danger pb-3" style={{ height: "auto", width: "100%", borderRadius: "10px", border: "1px solid #dc3545" }}>
                    <h1 className="text-center menu-heading mt-2">Your Cart</h1>

                    {
                        CartItems.map((element, key) => {
                            return (
                                <>
                                    <div className="card text-white mb-3 bg-danger mx-2 py-2">
                                        <div className="row">
                                            <div className="col col-sm-6 text-left">
                                                <h5 className="card-title pl-3">{element.name}</h5>
                                            </div>
                                            <div className="col col-sm-6 text-right pr-3">
                                                <p className="card-text pr-3">{element.price}/-</p>
                                            </div>
                                            <div className="col col-sm-12 text-center">
                                                <button className="btn btn-md btn-light text-danger" onClick={() => removeFromCart(element.id)} style={{ fontSize: "1rem", fontWeight: "bold" }}>Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                    <div className="row pr-4">
                        <div className="col col-12 text-right">
                            <h5 className="text-danger">Total :{CartItems.reduce((sum, p) => sum + +p.price, 0)}/-</h5>
                        </div>
                        <div className="col col-12 text-center">
                            <button className="btn btn-lg btn-danger">Proceed to Pay</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
