import Link from 'next/link';

export default function NavMenu() {
  return (
    <nav className="flex flex-row content-center w-3/4 p-2 mx-auto font-semibold text-stone-900 dark:text-stone-50 justify-evenly">
      <ul>
        <li className="inline p-2 hover:border-t-2">
          <Link href="/">
            <a>Inicio</a>
          </Link>
        </li>
        <li className="inline p-2 hover:border-t-2">
          <Link href="/productos">
            <a>Productos</a>
          </Link>
        </li>
        <li className="inline p-2 hover:border-t-2">
          <Link href="/ofertas">
            <a>Ofertas</a>
          </Link>
        </li>
        <li className="inline p-2 hover:border-t-2">
          <Link href="/tabla-de-talles">
            <a>Tabla de talles</a>
          </Link>
        </li>
        <li className="inline p-2 hover:border-t-2">
          <Link href="/vender">
            <a>Vender</a>
          </Link>
        </li>
        <li className="inline p-2 hover:border-t-2">
          <Link href="/preguntas-frecuentes">
            <a>Preguntas frecuentes</a>
          </Link>
        </li>
        <li className="inline p-2 hover:border-t-2">
          <Link href="/ayuda">
            <a>Ayuda</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
