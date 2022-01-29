import React from 'react';

export default function Product({product}) {
  return <article className='bg-slate-300 shadow-md'>
            <img src={product.img}></img>
            <div className='p-2'>
              <h3 className='text-2xl font-bold'>{product.name}</h3>
              <p>{product.description}</p>
            </div>
        </article>;
}

