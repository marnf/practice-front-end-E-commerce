import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {
    const products = useLoaderData();
    
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 mt-4 gap-4'>
            {
                products.map(product =>
                     <Product
                    key={product.id}
                    product={product}
                >
                </Product>)
            }


        </div>
    );
};

export default Products;