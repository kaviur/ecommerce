import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return <nav>
      <Link href={"/"}>Inicio</Link>
      <ul>
          <li><Link href="/productos">Productos</Link></li>
          <li><Link href="/productos">Productos</Link></li>
          <li><Link href="/productos">Productos</Link></li>
      </ul>
  </nav>;
}
