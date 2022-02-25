import Link from 'next/link';

export default function NavMenu() {
  return (
    <nav className="flex flex-row content-center w-3/4 p-2 mx-auto font-semibold text-stone-900 dark:text-stone-50 justify-evenly">
      <ul>
        <li className="inline p-2 hover:border-t-2">
          <Link href="/category/top">
            <a>Tops</a>
          </Link>
        </li>
        <li className="inline p-2 hover:border-t-2">
          <Link href="/category/jean">
            <a>Jeans</a>
          </Link>
        </li>
        <li className="inline p-2 hover:border-t-2">
          <Link href="/category/sport">
            <a>Sport</a>
          </Link>
        </li>
        <li className="inline p-2 hover:border-t-2">
          <Link href="/category/short">
            <a>Shorts</a>
          </Link>
        </li>
        <li className="inline p-2 hover:border-t-2">
          <Link href="/category/dress">
            <a>Dresses</a>
          </Link>
        </li>
        <li className="inline p-2 hover:border-t-2">
          <Link href="/category/bottons">
            <a>Bottons</a>
          </Link>
        </li>
        <li className="inline p-2 hover:border-t-2">
          <Link href="/category/onsale">
            <a>On Sale!</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
