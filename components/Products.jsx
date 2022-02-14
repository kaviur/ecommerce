import React from 'react';
import Product from './Product';

export default function Products({products}) {
  return <section className='grid sm:grid-cols-4 gap-5'>
            {products.map(product=><Product product={product} key={product.name}/>)}
        </section>;
}
