import React from 'react';
import { useSelector } from 'react-redux';
import Car from '../components/Car';
import Page from '../components/Page';
//import Products from '../components/Products';

export default function cart() {
  const {items} = useSelector(state=>state.cart)

  return <Page>
      <div className="grid grid-cols-4 gap-3">
        <section className="col-span-3">
          <Car products={items}></Car>
        </section>
        <section className="col-span-1 bg-white">
          PayPal
        </section>
      </div>
  </Page>;
}
