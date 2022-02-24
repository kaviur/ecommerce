import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useSession, signIn, signOut } from "next-auth/react"

export default function Navbar() {
  const {items:cart} = useSelector((state)=>state.cart)
  const { data: session } = useSession()




  return (
    <nav className="bg-slate-50 shadow-md mb-14 py-4 font-semibold">
      <div className="px-5 flex justify-between max-w-7xl mx-auto">
        <Link href={"/"}>Inicio</Link>
        <ul className="flex">
          <li>
            <p>{session ? <button className='font-semibold' onClick={() => signOut()}>Cerrar Sesion</button>:<button className='font-semibold' onClick={() => signIn()}>Inciar Sesion</button>}</p>
            {console.log(session?.user)}
            
         
          </li>
          <li className="mx-3">
            <Link href="/registrarse">
              <a>Registrarse</a>
            </Link>
          </li>
          <li>
            <Link href="/favoritos">
              <a>Favoritos</a>
            </Link>
          </li>
          <li className="mx-3">
            <Link href="/cart">
              <a>
                <div className="flex">
                  <div className="mr-1">
                    <FontAwesomeIcon
                      className="text-green-600"
                      icon={faCartShopping}
                    />
                  </div>
                  <div>{cart.length}</div>
                </div>
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
