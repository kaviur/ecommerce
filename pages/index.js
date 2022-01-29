import { useState } from 'react'
import Saludo from '../components/Saludo'
import Link from 'next/link'
import Products from '../components/Products'
import axios from 'axios';

export async function getServerSideProps({req}){

  //console.log(req.query);
  const {data:products} = await axios.get(`http://${req.headers.host}/api/productos/filtrar?popular=true`)
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
    <div>
      <p className=' text-yellow-400 text-3xl'>Prueba tailwind</p>
      {open&&<p>Hola!!!</p>}
      <button onClick={()=>{setOpen(!open)}}>Presionar</button>
      <Saludo/>

      <Link href="/characters">Ir a personajes</Link>
      <Link href="/charactersSSR">Ir a personajes SSR</Link>
      <Products products={products}/>
    </div>
  )
}
