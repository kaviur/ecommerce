import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Page({children}) {
  return <div>
    <Navbar/>
    <div className='px-5 max-w-4xl mx-auto'>
        {children}
    </div>
    <Footer></Footer>
  </div>;
}
