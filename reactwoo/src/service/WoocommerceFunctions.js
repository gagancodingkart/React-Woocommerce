import React, { Component } from "react";
import { WooCommerce } from "./WoocommerceConnection";
import { postData , getData } from "./Common";
import Notifications, {notify} from 'react-notify-toast';

export const addToCart = (product_id, qty) =>{
    var req = {product_id:product_id,quantity:qty}
    postData('wp-json/cocart/v1/add-item', req).then((result) => {
		if(result.product_id){
            notify.show('Added to cart!');
        }
        else{

        }
    })
}

export const getCartContent = () =>{
    return new Promise((resolve, reject) => {
        getData('wp-json/cocart/v1/get-cart/').then((result) => {
            resolve(result);
        })
    });
}