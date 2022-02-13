import React, {useState} from 'react';
import { motion } from "framer-motion"
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart,reduceFromCart,saveCart } from '../features/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faCartArrowDown, faTrash } from '@fortawesome/free-solid-svg-icons';



export default function Product({product}) {
  const [amount, setAmount] = useState(false)
  const dispatch = useDispatch()

  const agregarCarrito = () => {
    dispatch(addToCart(product))
    dispatch(saveCart())
    setAmount(true)
  }

  const removerDelCarrito = () => {
    dispatch(removeFromCart(product))
    dispatch(saveCart())
  }

  const reducirDelCarrito= () =>{
    dispatch(reduceFromCart(product))
    dispatch(saveCart())
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
          <h3 className="text-2xl font-bold text-center">{product.name}</h3>
          <p className='text-center py-2'>{product.description}</p>
          {amount ? <p className='text-center text-3xl '>{product.cantidad}</p> : <div></div>}
          <div className="flex justify-around">
            <button type="button" onClick={agregarCarrito}>
              <div className="text-green-500 text-3xl">
                <FontAwesomeIcon icon={faCartPlus} />
              </div>
            </button>
            <button type="button" onClick={reducirDelCarrito}>
              <div className="text-red-500 text-3xl">
                <FontAwesomeIcon icon={faCartArrowDown} />
              </div>
            </button>
            <button type="button" onClick={removerDelCarrito}>
              <div className="text-gray-500 text-3xl">
                <FontAwesomeIcon icon={faTrash} />
              </div>
            </button>
          </div>
        </div>
      </article>
    </motion.article>
  );
}

