import Link from "next/link"
import { FaShoppingCart } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'

const HeaderComponent = () => {
  return (
    <>
      <header className="w-full bg-gray-100 flex items-center justify-center px-1 sm:px-10  md:justify-center lg:justify-between py-5">
        <div className="flex items-center gap-5">
          <div className="w-full flex items-center justify-center gap-10 sm:gap-40 md:gap-96 lg:hidden">
            <div className="flex w-full  items-center">
              <p>
                JOSEFINA
              </p>
            </div>
            <div className="flex items-center w-full cursor-pointer gap-5">
              <FiMenu className="hover:text-gray-600 " />
              <button className=" border border-black rounded-full px-3 py-1 hover:text-white hover:bg-cyan-200 hover:border-none hover:rounded-full hover:px-3 hover:py-1 text-xs">
                Entrar
              </button>
            </div>
          </div>
          <div className="hidden items-center gap-5 lg:flex">
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

        <div className="items-center gap-10 hidden lg:flex">
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