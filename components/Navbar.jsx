import React, { useState } from 'react';
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
}
