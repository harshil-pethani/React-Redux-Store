import React,{useEffect} from 'react';
import ProductComponent from './ProductComponent';
import axios from 'axios';
import {setProducts} from '../Redux/Actions/productActions';
import { useDispatch } from 'react-redux';

const ProductListing = () => {
    const dispatch = useDispatch();

    const fetchProduct = async () => {
        try{
            const response = await axios.get("https://fakestoreapi.com/products");
            dispatch(setProducts(response.data));

        }catch(e){
            console.log(e); 
        }
    }

    useEffect(() => {
        fetchProduct();
    }, [])

    // console.log("products : ",products);
    return (
        <div className="ui grid container">            
            <ProductComponent/>
        </div>
    )
}

export default ProductListing
