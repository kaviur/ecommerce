import React from 'react';

export default function Product({product}) {
  return <article className='bg-slate-300'>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <img src={product.img}></img>
        </article>;
}

