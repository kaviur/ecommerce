import React, {useState} from 'react';
import { motion } from "framer-motion"
import { useDispatch } from 'react-redux';
import { addToCart,saveCart } from '../features/Cart';

import { useSession} from "next-auth/react"

export default function Product({product}) {
  const [amount, setAmount] = useState(false)
  const dispatch = useDispatch()
  const { data: session } = useSession()

  const agregarCarrito = () => {
    dispatch(addToCart(product))
    dispatch(saveCart())
    setAmount(true)
  }

  return (
    <motion.article
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 2,
      }}
      animate={{
        opacity: 1,
      }}
      className="bg-white shadow-md"
    >
      <article className="shadow-md bg-slate-200">
        <img src={product.img}></img>
        <div className="py-2 mb-4">
          <h3 className="text-2xl font-bold text-center text-red-600">{product.name}</h3>
          <p className='text-center py-2 text-gray-800'>{product.description}</p>
          <h3 className="text-2xl font-bold text-center text-green-700">{"$"+product.price}</h3>
          {console.log(product.id)}
          <div className="flex justify-around">
            {session?<button className="text-white py-2 px-4 rounded-full bg-black hover:bg-neutral-900" type="button" onClick={agregarCarrito}>
              Agregar al carrito
            </button> : <p className='text-center font-bold'>Inicie sesión para realizar la compra de los articulos</p> }
            
          </div>
        </div>
      </article>
    </motion.article>
  );
}

