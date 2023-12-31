import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai"
import { BiLogoTiktok } from "react-icons/bi"

const FooterComponent = () => {
  return (
    <>
      <footer className="relative">
        <div className="bg-blue-900 py-10 ">
          <div className="flex lg:max-w-screen-2xl lg:min-h-[60vh] lg:mx-auto lg:py-20 lg:px-10 gap-5 px-5">
            <div className="lg:flex w-full">
              <div className="w-full  border-black">
                <div className="w-full">
                  <p className="text-white mb-5 w-full">
                    JOSEFINA
                  </p>
                </div>
                <div className="flex gap-2 pb-10">
                  <div className=" rounded-md bg-white hover:bg-cyan-600 p-1 cursor-pointer transform scale-100 hover:scale-90 transition-transform duration-300 ">
                    <AiOutlineInstagram className='text-black font-bold hover:text-white lg:text-2xl' />
                  </div>
                  <div className=" rounded-md bg-white hover:bg-cyan-600 p-1 cursor-pointer transform scale-100 hover:scale-90 transition-transform duration-300 ">
                    <AiOutlineYoutube className='text-black font-bold hover:text-white lg:text-2xl' />
                  </div>
                  <div className=" rounded-md bg-white hover:bg-cyan-600 p-1 cursor-pointer transform scale-100 hover:scale-90 transition-transform duration-300 ">
                    <BiLogoTiktok className='text-black font-bold hover:text-white lg:text-2xl' />
                  </div>
                </div>
              </div>
              <div className="pb-5 lg:gap-5 flex w-full">
                <div className="">
                  <p className="text-white text-xs lg:text-sm font-bold mb-3">Comenzá a aprender</p>
                  <p className="text-gray-500 font-semibold">
                    Cursos
                  </p>
                  <p className="text-gray-500 font-semibold">
                    Carreras
                  </p>
                </div>
                <div className="">
                  <p className="text-white text-xs lg:text-sm font-bold mb-3">Nosotros</p>
                  <p className="text-gray-500 font-semibold">
                    Prensa
                  </p>
                  <p className="text-gray-500 font-semibold">
                    Pau Luzzi
                  </p>
                  <p className="text-gray-500 font-semibold">
                    Cómo comprar
                  </p>
                  <p className="text-gray-500 font-semibold">
                    Manual para alumnos
                  </p>
                  <p className="text-gray-500 font-semibold">
                    Servicio a Empresas
                  </p>
                </div>
                <div className="">
                  <p className="text-white text-xs lg:text-sm font-bold mb-3">Ayuda</p>
                  <p className="text-gray-500 font-semibold">
                    Políticas de reembolsos
                  </p>
                  <p className="text-gray-500 font-semibold">
                    Aviso Legal
                  </p>
                </div>

              </div>
              <div className="w-full flex justify-center">
                <img className="lg:h-20 h-10 flex justify-end" src="scaner.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-100 w-full py-5">
            <p className="text-gray-100 flex justify-center text-xs">
              Copyright © 2023 Josefina
            </p>
          </div>
        </div>
      </footer>
    </>

  )
}

export default FooterComponent