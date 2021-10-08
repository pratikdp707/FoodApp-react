import React, {useEffect, useState} from 'react'
import MenuContext from './MenuContext'
import { v4 as uuidv4 } from 'uuid';

const MenuState = (props) => {

    const [FoodItems, setFoodItems] = useState([]);
    const [CartItems, setCartItems] = useState([]);
    const [CartCount, setCartCount] = useState(0)

    const getFoodItems = async () => {
        const url = "https://fod-app.herokuapp.com/food";
        let data = await fetch(url);
        let jsonData = await data.json();
        setFoodItems(jsonData);
    }

    const addToCart = (item) => {
        setCartItems([...CartItems,{...item,id:uuidv4()}]);
        setCartCount(CartItems.length+1);
    }

    const removeFromCart = (id) => {
        setCartItems(CartItems.filter(item => item.id !== id));
        setCartCount(CartItems.length-1);
    }

    useEffect(() => {
        getFoodItems(); 
    },[]);


    return(
        <MenuContext.Provider value={{FoodItems, addToCart, CartItems, removeFromCart, CartCount}}>
            {props.children}
        </MenuContext.Provider>
    )

}

export default MenuState;