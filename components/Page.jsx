import React,{useEffect} from 'react';
import { getCart } from '../features/Cart'
import { useDispatch } from 'react-redux';
import Footer from './Footer';
import Navbar from './Navbar';


export default function Page({children}) {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getCart())
  },[])
  
  return <div>
    <Navbar/>
    <main className='px-5 max-w-4xl mx-auto'>
        {children}
    </main>
    <Footer></Footer>
  </div>;
}
