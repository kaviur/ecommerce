import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const {items:cart} = useSelector((state)=>state.cart)



  return (
    <nav className="bg-slate-50 shadow-md mb-14 py-4 font-semibold">
      <div className="px-5 flex justify-between max-w-7xl mx-auto">
        <Link href={"/"}>Inicio</Link>
        <ul>
          <li className="inline p-2">
            <Link href="/iniciar-sesion">
              <a>Iniciar sesión</a>
            </Link>
          </li>
          <li className="inline p-2">
            <Link href="/registrarse">
              <a>Registrarse</a>
            </Link>
          </li>
          <li className="inline p-2">
            <Link href="/favoritos">
              <a>Favoritos</a>
            </Link>
          </li>
          <li className="inline p-2">
            <Link href="/cart">
              <a className="relative">
                <div><FontAwesomeIcon icon={faCartShopping} /></div>
                <div>{cart.length}</div> 
                {/* <span className="absolute w-4 h-4 text-xs font-thin top-1 left-5 text-stone-900 dark:text-stone-50">
                  0
                </span> */}
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
/*import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [menu,setMenu] = useState(true)

  //FIXME: when I push the btn in a small screen and i set to true and then I enlarge the screen, the menu items is visible when I come back to a small screen
  return <nav className=" bg-slate-50 shadow-md mb-14 py-4 font-semibold">
      <div className="px-5 flex justify-between max-w-7xl mx-auto">
        <Link href={"/"}>Inicio</Link>
        
        <ul className={`gap-5 ${menu?"block":"hidden"} sm:flex`}>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/products">Products</Link></li>
        </ul>
        <button className='sm:hidden' onClick={()=>setMenu(!menu)}>Menu</button>
      </div>
  </nav>;
}*/
