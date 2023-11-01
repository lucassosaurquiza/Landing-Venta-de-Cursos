import Link from "next/link"
import MenuHamburger from "./MenuHamburger"
import {FaShoppingCart} from 'react-icons/fa'

const HeaderComponent = () => {
  return (
    <>
      <header className="w-full bg-gray-100 flex items-center justify-between px-10 md:justify-between lg:justify-between py-5">
        <div className="flex items-center gap-5">
          <div>
            {/* <img className="h-20 w-20" src="/logo-luzzi-digital.png" alt="" /> */}
          </div>
          <div className="flex items-center gap-5">
            <Link href="/">
              <p className="text-gray-900 font-bold hover:text-gray-500">Blog</p>
            </Link>
            <Link href="/">
              <p className="text-gray-900 hover:text-gray-500 font-bold">Recursos</p>
            </Link>
            <Link href="/">
              <p className="text-gray-900 hover:text-gray-500 font-bold">Cursos</p>
            </Link>
            <Link href="/">
              <p className="text-gray-900 hover:text-gray-500 font-bold">Carreras</p>
            </Link>
            <Link href="/">
              <p className="text-gray-900 hover:text-gray-500 font-bold">Testimonios</p>
            </Link>
          </div>
        </div>
        <div className="sm:hidden block">
          <MenuHamburger />
        </div>
        <div className="items-center gap-10 hidden sm:flex ">
          <Link href="/">
            <p className="text-gray-900 hover:text-gray-500 font-bold">Inicio de Sesion</p>
          </Link>
          <Link href="/">
            <p className="text-gray-900 hover:text-gray-500 font-bold">Ayuda</p>
          </Link> 
          <Link href="/">
            <FaShoppingCart className="text-gray-900 hover:text-gray-500" />
          </Link>
        </div>
      </header>
    </>
  )
}

export default HeaderComponent