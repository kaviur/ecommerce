import React from 'react';

export default function Product({product}) {
  return <article>
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <img src={product.img}></img>
        </article>;
}

