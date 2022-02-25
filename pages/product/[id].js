import React from 'react';
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Detail from '../../components/Detail';
//import Page from '../components/Page';

export default function ProductScreen () {

  const router = useRouter()
  const {id} = router.query
  const [clave, setClave] = useState(id)

  //TODO:hacer la consulta por id
  useEffect(() => {
    fetch(`/api/productos/item?slug=${clave}`)
    .then(res=>res.json())
    .then(data=>{
      setProductos(data);
    })
    .catch(error=>console.log(error))
    //console.log(productos);
    
    //axios.get("/api/productos/filtrar?popular=true")
    //setProducto(products);
  }, []);

  /* console.log(productos);

  productos.map(product=>{
    if(product.id == id){
     setProduct({
       quantity:product.cantidad,
       description:product.description,
       img:product.img,
       name:product.name,
       price:product.price,       
     })
    }
  }) */

  //console.log(product);
  

  //const {data} =  axios.get(`/api/productos/item?${id}`)

  /* const result = await fetch(`/api/productos/item?${id}`,{
    method:"GET",
    headers:{
        "Content-Type":"application/json"
    }
}) */

  return <div>{id}</div>
  
}

/* import { useState } from 'react'
import Products from '../components/Products'
import axios from 'axios';
import Page from '../components/Page';

export async function getServerSideProps({req}){

  //console.log(req.query);
  const {data:products} = await axios.get(`http://${req.headers.host}/api/productos/item?${id}`)
  //console.log(process.env.API+' desde serverSide')
  //console.log(process.env.NEXT_PUBLIC_API)

  return {
      props:{
          products
      }
  }
}

export default function Home({products}) {

  
  const [open,setOpen] = useState(false)
  return (
    <Page>
      <Products products={products}/>
    </Page>
  )
} */