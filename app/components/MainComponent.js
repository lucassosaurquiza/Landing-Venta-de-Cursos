'use client'

import { GiGraduateCap, GiPadlock } from 'react-icons/gi'
import { MdKeyboardArrowRight, MdNavigateNext } from 'react-icons/md'
import { AiFillCheckSquare, AiFillClockCircle, AiFillStar, AiFillTrophy, AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai'
import { BiSolidMessage, BiLogoTiktok } from 'react-icons/bi'
import { BsFillPersonCheckFill } from 'react-icons/bs'
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'


const MainComponent = () => {

  return (
    <>
      <main className="">
        {/* YA ESTA HECHO RESPONSIVE */}
        <div className="md:flex md:items-center md:max-w-screen-2xl md:min-h-[90vh] md:mx-auto">
          <div className="md:w-[50%]">
            <div className="">
              <div className="mb-5" >
                <div className="mt-10 justify-center flex">
                  <h1 className=" md:text-7xl leading-none tracking-tighter font-light">LEARN <b className='font-bold'>SPANISH</b> ONLINE</h1>
                </div>
              </div>
              <div className="" >
                <p className="text-center md:text-left text-gray-800 font-semibold leading-[1.4em] tracking-tighter md:text-xl">
                  Aprendé español para negocios, redes sociales, con cursos online, prácticos y certificados.
                </p>
              </div>
              <div className="md:flex justify-center mb-10 mt-10 mr-5">
                <div className='flex text-center justify-center mb-5 w-full'>
                  <a className="max-w-sm lg:w-full justify-center flex items-center text-white border-2 bg-pink-600 rounded-full  font-semibold tracking-tighter py-2 px-3 md:py-3 md:px-6 transform scale-100 hover:scale-90 transition-transform duration-300" href="#">
                    <span className="text-xs md:text-sm tracking-widest w-full">Ver cursos online</span>
                  </a>
                </div>

                <a className="justify-center flex items-center cursor-pointer font-karla text-blue-900  rounded-full font-semibold tracking-tighter py-3 px-6  w-full transform scale-100 hover:scale-90 transition-transform duration-300" >
                  <div className="justify-center flex items-center gap-2">
                    <div className='bg-gray-900 rounded-full text-white'>
                      <MdNavigateNext />
                    </div>
                    <span className="tracking-normal md:tracking-widest text-sm w-full flex justify-center">Recursos gratis</span>
                  </div>
                </a>
              </div>

              <div className='md:hidden'>
                <img src="/profile.webp" className="rounded-full mx-auto my-auto mb-10" />
              </div>

              <section className="hidden md:flex items-center">
                <div className='w-full'>
                  <p className="text-md w-full text-gray-800 font-normal">
                    Elegidos por miles de  emprendedores
                  </p>
                </div>
                <div className="w-full">
                  <img src="https://www.luzzidigital.com/wp-content/uploads/2023/05/tag-stars.jpg" className=" " />
                </div>
              </section>
            </div>
          </div>

          <div className="hidden md:flex justify-center items-center ">
            <div className="flex justify-center items-center">
              <div className="flex justify-center items-center">
                <div className="text-center">
                  <img src="/profile.webp" className="rounded-full mx-auto my-auto mb-10" />
                  <p className='text-gray-800 font-semibold leading-[1.4em] tracking-tighter text-2xl'>¡Hola! Mi nombre es Josefina. I’m your Spanish teacher.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* YA ESTA HECHO RESPONSIVE */}
        <section style={{ backgroundColor: '#00A8F4' }} className='md:hidden py-3'>
        </section >

        {/* YA ESTA HECHO RESPONSIVE */}
        <section style={{ backgroundColor: '#00A8F4' }} className='hidden lg:flex lg:justify-center py-10'>
          <div className='flex justify-center gap-20 lg:gap-40 px-10'>
            <div className=' text-center flex-col justify-center items-center'>
              <p className='text-white mb-5 text-xs'>"Una academia para aprender todo sobre <br /> el mundo digital"</p>
              <img className='lg:h-20 w-full flex my-auto' src="la-nacion.webp" alt="" />
            </div>
            <div className=' text-center flex-col justify-center items-center'>
              <p className='text-white mb-5 text-xs'> "Una de las escuelas de Marketing Digital <br /> más influyentes de la Argentina"</p>
              <img className='lg:h-20 w-full my-auto' src="clarin.webp" alt="" />
            </div>
            <div className=' text-center flex-col justify-center items-center'>
              <p className='text-white mb-5 text-xs'>"Paula Luzzi es experta de marketing en <br /> redes sociales"</p>
              <img className='lg:h-20 w-full my-auto' src="para.webp" alt="" />
            </div>
          </div>
        </section>

        {/* YA ESTA HECHO RESPONSIVE */}
        <section className='mt-20 md:mt-36 w-full'>
          <div className='flex-col items-center md:max-w-screen-2xl md:min-h-[90vh] md:mx-auto mb-24 px-4'>
            <div className='md:flex p-5 w-full mb-10'>
              <div className=''>
                <div className='flex gap-3 justify-center'>
                  <div className='bg-gray-900 flex items-center rounded-full p-1 md:p-2 h-full'>
                    <GiGraduateCap className='text-white w-full h-full' />
                  </div>
                  <p className='text-gray-900 w-full font-semibold md:text-lg text-sm mb-5'>Adquiri habilidades digitales</p>
                </div>
                <p className='md:text-4xl text-lg'>
                  La escuela para aprender Marketing Digital con <b>cursos prácticos y sin horarios</b>
                </p>
              </div>
              <div className='hidden md:flex md:flex-col text-right'>
                <p className='mb-8 md:text-xl'>
                  Unite a miles de alumnos de todo el mundo para vender más por Internet.
                </p>
                <div className='flex justify-center'>
                  <button className=' bg-blue-950 text-white text-xs px-4 py-2 md:px-12 md:py-4 font-semibold rounded-full transform scale-100 hover:scale-90 transition-transform duration-300 '>
                    Ver todos los cursos
                  </button>
                </div>
              </div>
            </div>

            {/* CARD */}
            <div className='lg:flex gap-3 w-full'>
              <div className='bg-white rounded-2xl p-5 lg:max-w-xl w-full mb-5'>
                <div className='flex justify-end'>
                  <AiFillStar className='text-yellow-400' />
                </div>
                <div className='flex gap-5 mb-5 w-full'>
                  <img className='lg:h-full h-16 w-16' src="mg-image.png" alt="" />
                  <p className='lg:text-2xl text-sm text-gray-900 font-semibold w-full items-center flex'>Community <br className='hidden lg:block' /> Manager</p>
                </div>
                <div className='w-full'>
                  <p className='lg:leading-8 leading-6 text-sm mb-5 lg:mb-10'>
                    Aprendé a gestionar redes sociales de tu marca o las de tus clientes en Instagram, TikTok, Facebook y Twitter.
                  </p>
                </div>
                <div className='justify-center flex lg:flex text-center mb-8 w-full'>
                  <div className='flex items-center justify-center gap-2 w-full lg:w-1/3 '>
                    <AiFillClockCircle className='w-3 h-3  lg:w-5 lg:h-5' />
                    <p className='text-xs lg:text-sm'>
                      8 hs.
                    </p>
                  </div>
                  <div className='flex items-center justify-center gap-2 w-full lg:w-1/3 '>
                    <BiSolidMessage className='w-3 h-3  lg:w-5 lg:h-5' />
                    <p className='text-xs lg:text-sm'>
                      9 mód.
                    </p>
                  </div>
                  <div className='flex items-center justify-center gap-2 w-full lg:w-1/3'>
                    <AiFillCheckSquare className='w-3 h-3  lg:w-5 lg:h-5' />
                    <p className='text-xs lg:text-sm'>
                      Cert.
                    </p>
                  </div>
                </div>
                <div>
                  <p className='font-bold text-2xl md:text-4xl flex justify-center'>
                    $5.190
                  </p>
                </div>
                <div className="flex-col md:flex w-full mt-8 mr-5">
                  <a className="w-full justify-center flex items-center text-white border-2 bg-pink-600  rounded-full  font-semibold mb-3 py-1 px-1 md:py-3 md:px-6 transform scale-100 hover:scale-90 hover:bg-gray-900 transition-transform duration-300" href="#">
                    <span className="text-xs md:tracking-widest w-full justify-center flex items-center">Comprar Cursos</span>
                  </a>

                  <a className="justify-center  flex items-center cursor-pointer font-karla text-blue-900 border rounded-full text-lg font-semibold tracking-tighter py-1 px-1 md:py-3 md:px-6  w-full transform scale-100 hover:scale-90 transition-transform duration-300" >
                    <div className="justify-center flex items-center md:gap-2 w-full">
                      <div className='bg-gray-900 rounded-full text-white justify-center flex'>
                        <MdNavigateNext className='justify-center flex w-full' />
                      </div>

                      <span className=" justify-center flex tracking-widest text-sm w-full">Detalles</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className='bg-white rounded-2xl p-5 lg:max-w-xl w-full mb-5'>
                <div className='flex justify-end'>
                  <AiFillStar className='text-yellow-400' />
                </div>
                <div className='flex gap-5 mb-5 w-full'>
                  <img className='lg:h-20 h-16 w-16' src="mg-image.png" alt="" />
                  <p className='lg:text-2xl text-sm text-gray-900 font-semibold w-full items-center flex'>Community <br className='hidden lg:block' /> Manager</p>
                </div>
                <div className='w-full'>
                  <p className='lg:leading-8 leading-6 text-sm mb-5 lg:mb-10'>
                    Aprendé a gestionar redes sociales de tu marca o las de tus clientes en Instagram, TikTok, Facebook y Twitter.
                  </p>
                </div>
                <div className='justify-center flex lg:flex text-center mb-8 w-full'>
                  <div className='flex items-center justify-center gap-2 w-full lg:w-1/3 '>
                    <AiFillClockCircle className='w-3 h-3   lg:w-5 lg:h-5' />
                    <p className='text-xs lg:text-sm'>
                      8 hs.
                    </p>
                  </div>
                  <div className='flex items-center justify-center gap-2 w-full lg:w-1/3 '>
                    <BiSolidMessage className='w-3 h-3   lg:w-5 lg:h-5' />
                    <p className='text-xs lg:text-sm'>
                      9 mód.
                    </p>
                  </div>
                  <div className='flex items-center justify-center gap-2 w-full lg:w-1/3'>
                    <AiFillCheckSquare className='w-3 h-3   lg:w-5 lg:h-5' />
                    <p className='text-xs lg:text-sm'>
                      Cert.
                    </p>
                  </div>
                </div>
                <div>
                  <p className='font-bold text-2xl md:text-4xl flex justify-center'>
                    $5.190
                  </p>
                </div>
                <div className="flex-col md:flex w-full mt-8 mr-5">
                  <a className="w-full justify-center flex items-center text-white border-2 bg-pink-600  rounded-full  font-semibold mb-3 py-1 px-1 md:py-3 md:px-6 transform scale-100 hover:scale-90 hover:bg-gray-900 transition-transform duration-300" href="#">
                    <span className="text-xs md:tracking-widest w-full justify-center flex items-center">Comprar Cursos</span>
                  </a>

                  <a className="justify-center  flex items-center cursor-pointer font-karla text-blue-900 border rounded-full text-lg font-semibold tracking-tighter py-1 px-1 md:py-3 md:px-6  w-full transform scale-100 hover:scale-90 transition-transform duration-300" >
                    <div className="justify-center flex items-center md:gap-2 w-full">
                      <div className='bg-gray-900 rounded-full text-white justify-center flex'>
                        <MdNavigateNext className='justify-center flex w-full' />
                      </div>

                      <span className=" justify-center flex tracking-widest text-sm w-full">Detalles</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className='bg-white rounded-2xl p-5 lg:max-w-xl w-full mb-5'>
                <div className='flex justify-end'>
                  <AiFillStar className='text-yellow-400' />
                </div>
                <div className='flex gap-5 mb-5 w-full'>
                  <img className='lg:h-20 h-16 w-16' src="mg-image.png" alt="" />
                  <p className='lg:text-2xl text-sm text-gray-900 font-semibold w-full items-center flex'>Community <br className='hidden lg:block' /> Manager</p>
                </div>
                <div className='w-full'>
                  <p className='lg:leading-8 leading-6 text-sm mb-5 lg:mb-10'>
                    Aprendé a gestionar redes sociales de tu marca o las de tus clientes en Instagram, TikTok, Facebook y Twitter.
                  </p>
                </div>
                <div className='justify-center flex lg:flex text-center mb-8 w-full'>
                  <div className='flex items-center justify-center gap-2 w-full lg:w-1/3 '>
                    <AiFillClockCircle className='w-3 h-3   lg:w-5 lg:h-5' />
                    <p className='text-xs lg:text-sm'>
                      8 hs.
                    </p>
                  </div>
                  <div className='flex items-center justify-center gap-2 w-full lg:w-1/3 '>
                    <BiSolidMessage className='w-3 h-3   lg:w-5 lg:h-5' />
                    <p className='text-xs lg:text-sm'>
                      9 mód.
                    </p>
                  </div>
                  <div className='flex items-center justify-center gap-2 w-full lg:w-1/3'>
                    <AiFillCheckSquare className='w-3 h-3   lg:w-5 lg:h-5' />
                    <p className='text-xs lg:text-sm'>
                      Cert.
                    </p>
                  </div>
                </div>
                <div>
                  <p className='font-bold flex justify-center text-2xl md:text-4xl'>
                    $5.190
                  </p>
                </div>
                <div className="flex-col md:flex w-full mt-8 mr-5">
                  <a className="w-full justify-center flex items-center text-white border-2 bg-pink-600  rounded-full  font-semibold mb-3 py-1 px-1 md:py-3 md:px-6 transform scale-100 hover:scale-90 hover:bg-gray-900 transition-transform duration-300" href="#">
                    <span className="text-xs md:tracking-widest w-full justify-center flex items-center">Comprar Cursos</span>
                  </a>

                  <a className="justify-center  flex items-center cursor-pointer font-karla text-blue-900 border rounded-full text-lg font-semibold tracking-tighter py-1 px-1 md:py-3 md:px-6  w-full transform scale-100 hover:scale-90 transition-transform duration-300" >
                    <div className="justify-center flex items-center md:gap-2 w-full">
                      <div className='bg-gray-900 rounded-full text-white justify-center flex'>
                        <MdNavigateNext className='justify-center flex w-full' />
                      </div>

                      <span className=" justify-center flex tracking-widest text-sm w-full">Detalles</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className='md:hidden flex justify-center'>
                <button className=' bg-blue-950 text-white text-xs px-4 py-2 md:px-12 md:py-4 font-semibold rounded-full transform scale-100 hover:scale-90 transition-transform duration-300 '>
                  Ver todos los cursos
                </button>
              </div>
            </div>


          </div>
        </section>

        <section className='sticky top-1 z-1 shadow-2xl'>
          <div className='bg-white '>
            <div className='lg:flex justify-center  lg:gap-20 lg:max-w-screen-2xl lg:min-h-[90vh] lg:mx-auto'>
              <div className='flex justify-center items-center mb-5 '>
                <img className='h-40 lg:h-96 flex justify-center mt-10' src="publicidad.jpg" alt="" />
              </div>
              <div className='flex justify-center items-center '>
                <div className='flex-col justify-center items-center'>
                  <div className='flex justify-center items-center lg:justify-start w-full gap-3 mb-10'>
                    <div className='bg-cyan-500 rounded-full flex items-center  p-1'>
                      <GiPadlock className='text-white' />
                    </div>
                    <p className='text-cyan-500 lg:text-md font-semibold'>
                      Cursada Libre
                    </p>
                  </div>
                  <p className='lg:text-4xl text-2xl pb-5 lg:mb-3 flex-col justify-center text-center lg:text-left'>
                    Modalidad <b>100% online <br className='hidden lg:block' /> y práctica</b>
                  </p>
                  <p className='lg:leading-8 text-center lg:text-left font-semibold lg:text-xl pb-5 lg:mb-3 justify-center '>
                    Formación con videos tutoriales grabados, lecturas, plantillas y <br /> ejercicios. En una plataforma sencilla y con rutas de <br /> aprendizaje claras.
                  </p>
                  <div className='flex justify-center lg:justify-start pb-20'>
                    <button className='bg-blue-950 text-white flex text-center px-5 py-1 lg:px-8 lg:py-2 font-semibold rounded-full transform scale-100 hover:scale-90 transition-transform duration-300 '>
                      ¡Quiero aprender!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='sticky top-1 z-2 shadow-2xl'>
          <div className='bg-white '>
            <div className='lg:flex justify-center  lg:gap-20 lg:max-w-screen-2xl lg:min-h-[90vh] lg:mx-auto'>
              <div className='flex justify-center items-center mb-5 '>
                <img className='h-40 lg:h-96 flex justify-center mt-10' src="certificaciones.png" alt="" />
              </div>
              <div className='flex justify-center items-center '>
                <div className='flex-col justify-center items-center'>
                  <div className='flex justify-center items-center lg:justify-start w-full gap-3 mb-10'>
                    <div className='bg-pink-500 rounded-full flex items-center  p-1'>
                      <AiFillTrophy className='text-white' />
                    </div>
                    <p className='text-pink-500 lg:text-md font-semibold'>
                    Formaciones certificadas
                    </p>
                  </div>
                  <p className='lg:text-4xl text-2xl pb-5 lg:mb-3 flex-col justify-center text-center lg:text-left'>
                    Certificate <b>en las áreas <br className='hidden lg:block' />principales de Marketing</b>
                  </p>
                  <p className='lg:leading-8 text-center lg:text-left font-semibold lg:text-xl pb-5 lg:mb-3 justify-center '>
                    Impulsá tu currículum, tu credibilidad y tu carrera profesional.<br /> Como alumno podrás rendir un examen y obtener un certificado <br /> de participación a tu nombre.
                  </p>
                  <div className='flex justify-center lg:justify-start pb-20'>
                    <button className='bg-blue-950 text-white flex text-center px-5 py-1 lg:px-8 lg:py-2 font-semibold rounded-full transform scale-100 hover:scale-90 transition-transform duration-300 '>
                      Ver ejemplo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        <section className='sticky top-1 z-3 shadow-2xl'>
          <div className='bg-white  shadow-xl'>
            <div className='lg:flex justify-center  lg:gap-20 lg:max-w-screen-2xl lg:min-h-[90vh] lg:mx-auto'>
              <div className='flex justify-center items-center mb-5 '>
                <img className='h-40 lg:h-96 flex justify-center mt-10' src="personas.png" alt="" />
              </div>
              <div className='flex justify-center items-center '>
                <div className='flex-col justify-center items-center'>
                  <div className='flex justify-center items-center lg:justify-start w-full gap-3 mb-10'>
                    <div className='bg-cyan-500 rounded-full flex items-center  p-1'>
                      <AiFillStar className='text-white' />
                    </div>
                    <p className='text-cyan-500 lg:text-md font-semibold'>
                      Nuestra experiencia
                    </p>
                  </div>
                  <p className='lg:text-4xl text-2xl pb-5 lg:mb-3 flex-col justify-center text-center lg:text-left'>
                    Llevamos  <b>+4 años <br className='hidden lg:block' />formando a miles de</b> <br /> personas
                  </p>
                  <p className='lg:leading-8 text-center lg:text-left font-semibold lg:text-xl pb-5 lg:mb-3 justify-center '>
                    Más del 80% de personas que aprenden con nosotros lo aplican<br /> en sus trabajos. Ayudamos a personas y empresas del mundo a <br /> lograr sus metas y objetivos.
                  </p>
                  <div className='flex justify-center lg:justify-start pb-20'>
                    <button className='bg-blue-950 text-white flex text-center px-5 py-1 lg:px-8 lg:py-2 font-semibold rounded-full transform scale-100 hover:scale-90 transition-transform duration-300 '>
                      Ver testimonios
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        
        <section className='relative shadow-2xl'>
          <div className='bg-white'>
            <div className='lg:flex justify-center  lg:gap-20 lg:max-w-screen-2xl lg:min-h-[90vh] lg:mx-auto '>
              <div className='flex justify-center items-center mb-5 '>
                <img className='h-40 lg:h-96 flex justify-center mt-10' src="amarillo.webp" alt="" />
              </div>
              <div className='flex justify-center items-center '>
                <div className='flex-col justify-center items-center '>
                  <div className='flex justify-center items-center lg:justify-start w-full gap-3 mb-10'>
                    <div className='bg-yellow-500 rounded-full flex items-center  p-1'>
                      <BsFillPersonCheckFill className='text-white' />
                    </div>
                    <p className='text-yellow-500 lg:text-md font-semibold'>
                    Asistencia al alumno
                    </p>
                  </div>
                  <p className='lg:text-4xl text-2xl pb-5 lg:mb-3 flex-col justify-center text-center lg:text-left'>
                  Soporte de  <b>especialistas <br className='hidden lg:block' />en cada área</b>
                  </p>
                  <p className='lg:leading-8 text-center lg:text-left font-semibold lg:text-xl pb-5 lg:mb-3 justify-center '>
                  Te asistiremos durante todo tu proceso de aprendizaje. Nuestro<br /> equipo habla en tu idioma y entiende tus retos fácilmente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='relative'>
          <div className='flex justify-center bg-cover bg-center p-20' style={{
            backgroundImage: 'url("imagen-fondo.jpg")'
          }}>
            <div className='max-w-screen-3xl min-h-[90vh] mx-auto'>
              <div className='flex mb-3 justify-center transform gap-3'>
                <AiFillStar className='text-yellow-400 text-xl' />
                <AiFillStar className='text-yellow-400 text-xl' />
                <AiFillStar className='text-yellow-400 text-xl' />
                <AiFillStar className='text-yellow-400 text-xl' />
                <AiFillStar className='text-yellow-400 text-xl' />
              </div>
              <div className='flex-col text-center'>
                <p className='text-3xl font-semibold mb-3'>Alumnos de todo el mundo con <br /> <b> resultados reales</b></p>
                <p className='font-semibold text-md '>Mirá los testimonios de emprendedores como vos.</p>
              </div>
              <div className='bg-white rounded-xl p-5 relative shadow-2xl mt-72 pb-20'>
                <div className='bg-blue-700 rounded-full w-4 absolute top-36 left-3 cursor-pointer'>
                  <IoMdArrowDropleft className='text-white' />
                </div>
                <div className='bg-blue-700 rounded-full w-4  absolute top-36 right-3 cursor-pointer'>
                  <IoMdArrowDropright className='text-white' />
                </div>
                <div className='flex w-full'>
                  <img className='h-52' src="testimonio.jpg" alt="" />
                  <img className='h-52' src="testimonio2.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='relative'>
          <div className='bg-gray-100'>
            <div className='pt-20 flex-col max-w-screen-2xl min-h-[90vh] mx-auto'>
              <p className='text-3xl flex justify-center items-center  mb-6'>
                <b className='mr-2'>Recursos</b> gratuitos
              </p>
              <p className='flex justify-center items-center'>Accedé gratis a recursos de Marketing Digital y redes sociales.</p>


              <div className='mt-8 max-w-screen-xl mx-auto'>
                <div className='flex gap-8 w-full mb-10'>
                  <div className='bg-white px-12 py-6 flex shadow-xl rounded-lg w-full'>
                    <div className='flex items-center gap-10  cursor-pointer'>
                      <img className='h-10' src="calendar.png" alt="" />
                      <div className='flex-col'>
                        <p>
                          Gestión de redes sociales
                        </p>
                        <b> Calendario Editorial para Redes Sociales 2023</b>
                      </div>
                    </div>
                  </div>
                  <div className='bg-white px-12 py-6 flex shadow-xl rounded-lg w-full'>
                    <div className='flex items-center gap-10  cursor-pointer'>
                      <img className='h-10' src="phone.png" alt="" />
                      <div className='flex-col'>
                        <p>
                          Instagram
                        </p>
                        <b> Plantilla planificadora de feed en Canva</b>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='flex gap-8 w-full'>
                  <div className='bg-white px-12 py-6 flex shadow-xl rounded-lg w-full'>
                    <div className='flex items-center gap-10  cursor-pointer'>
                      <img className='h-10' src="lapiz.png" alt="" />
                      <div className='flex-col'>
                        <p>
                          Textos de venta poderosos
                        </p>
                        <b>Kit de Plantillas de Copywriting para vender más</b>
                      </div>
                    </div>
                  </div>
                  <div className='bg-white px-12 py-6 flex shadow-xl rounded-lg w-full'>
                    <div className='flex items-center gap-10 cursor-pointer'>
                      <img className='h-10' src="tempera.png" alt="" />
                      <div className='flex-col'>
                        <p>
                          Creación de contenido
                        </p>
                        <b>50 plantillas de Canva para Instagram​</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='relative'>
          <div className='bg-blue-900'>
            <div className='flex w-full'>
              <div className=' w-full'>
                <img src="left.png" alt="" />
              </div>
              <div className=' w-full flex justify-center items-center flex-col'>
                <p className='flex justify-center items-center text-white text-xl mb-5'>
                  Nuestro <b className='text-cyan-500 mr-1 ml-1'>newsletter</b> oficial
                </p>
                <p className='flex justify-center items-center text-white text-2xl mb-10'>
                  Recibí <b className=' mr-1 ml-1'>novedades de Marketing Digital</b> gratis
                </p>
                <div className='flex justify-center items-center'>
                  <button className='bg-pink-600 text-white px-6 py-2 font-semibold rounded-full transform scale-100 hover:scale-90 transition-transform duration-300 '>
                    ¡Quiero recibir el newletter!
                  </button>
                </div>
              </div>
              <div className=' w-full flex justify-end'>
                <img src="right.png" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className='relative'>
          <div className='bg-gray-100 pb-20'>
            <div className='max-w-screen-2xl min-h-[90vh] mx-auto  pt-40'>
              <div className=''>
                <div className='flex justify-center mb-5'>
                  <button className='text-white bg-cyan-400 px-4 py-1 rounded-md'>
                    Artículos recientes
                  </button>
                </div>
                <p className='flex justify-center text-4xl mb-20'>
                  Blog <b className='ml-2'>de Marketing y RRSS</b>
                </p>
                <div className='flex mx-20 gap-6 justify-center'>

                  <div className='shadow-lg hover:shadow-2xl transition duration-300 ease-in-out'>
                    <div className='max-w-xs cursor-pointer relative' >
                      <img className=' rounded-t-md' src="plantilla.jpg" alt="" />
                      <div className='bg-pink-500 text-white rounded-full p-1 absolute top-3 right-2 font-bold text-xs px-3'>
                        INSTAGRAM
                      </div>
                    </div>
                    <div className=' max-w-xs bg-white p-8 rounded-b-md'>
                      <p className='font-bold mb-5 cursor-pointer'>
                        Plantilla para crear un <br /> reporte redes sociales <br /> [GRATIS]
                      </p>
                      <p className='font-semibold text-xs mb-20'>
                        Si sos un profesional del marketing digital o un propietario de negocio, un reporte de
                      </p>
                      <div className='flex items-center gap-4 cursor-pointer'>
                        <p className='text-pink-500 '>
                          Leer artículo
                        </p>
                        <MdKeyboardArrowRight className='text-pink-500' />
                      </div>
                    </div>
                  </div>

                  <div className='shadow-lg hover:shadow-2xl transition duration-300 ease-in-out'>
                    <div className=' max-w-xs cursor-pointer relative' >
                      <img className=' rounded-t-md' src="marketing.jpg" alt="" />
                      <div className='bg-pink-500 text-white rounded-full p-1 absolute top-3 right-2 font-bold text-xs px-3'>
                        INSTAGRAM
                      </div>
                    </div>
                    <div className='  max-w-xs bg-white p-8 rounded-b-md'>
                      <p className='font-bold mb-5 cursor-pointer'>
                        Marketing de Influencers: <br /> qué es y cómo crear una<br /> campaña [GUÍA]
                      </p>
                      <p className='font-semibold text-xs mb-20'>
                        En este artículo te hablaré sobre el Marketing de Influencers, qué es y cómo implementarlo paso a paso para hacer crecer tu marca.
                      </p>
                      <div className='flex items-center gap-4 cursor-pointer'>
                        <p className='text-pink-500 '>
                          Leer artículo
                        </p>
                        <MdKeyboardArrowRight className='text-pink-500' />
                      </div>
                    </div>
                  </div>

                  <div className='shadow-lg hover:shadow-2xl transition duration-300 ease-in-out'>
                    <div className=' max-w-xs cursor-pointer relative' >
                      <img className=' rounded-t-md ' src="meta.jpg" alt="" />
                      <div className='bg-pink-500 text-white rounded-full p-1 absolute top-3 right-2 font-bold text-xs px-3'>
                        FACEBOOK ADS
                      </div>
                    </div>
                    <div className='  max-w-xs bg-white p-8 rounded-b-md'>
                      <p className='font-bold mb-5 cursor-pointer'>
                        Los 9 errores más comunes <br />en Meta Ads Facebook e <br /> Instagram
                      </p>
                      <p className='font-semibold text-xs mb-20'>
                        ¿Cometes alguno de estos errores en Meta Ads? Conocé los errores más habituales en tus campañas de Facebook e Instagram Ads
                      </p>
                      <div className='flex items-center gap-4 cursor-pointer'>
                        <p className='text-pink-500 '>
                          Leer artículo
                        </p>
                        <MdKeyboardArrowRight className='text-pink-500' />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='relative' >
          <div className='bg-blue-600'>
            <div className='max-w-screen-2xl min-h-[20vh] mx-auto flex items-center justify-center px-28'>
              <div className='w-full'>
                <p className='text-white text-2xl font-bold'>
                  ¡Aprendé con nuestras <br />
                  redes sociales!
                </p>
              </div>
              <div className='gap-4 flex w-full'>
                <div className='flex w-full text-center items-center  border-white border-4 rounded-full p-3 px-5 gap-8 transform scale-100 hover:scale-90 transition-transform duration-300 cursor-pointer'>
                  <AiOutlineInstagram className='text-white font-bold' />
                  <p className='text-white font-bold'>
                    Instagram
                  </p>
                </div>
                <div className='flex w-full text-center items-center  border-white border-4 rounded-full p-3 px-5  gap-8 transform scale-100 hover:scale-90 transition-transform duration-300 cursor-pointer'>
                  <AiOutlineYoutube className='text-white font-bold' />
                  <p className='text-white font-bold'>
                    Youtube
                  </p>
                </div>
                <div className='flex w-full text-center items-center  border-white border-4 rounded-full p-3 px-5  gap-8 transform scale-100 hover:scale-90 transition-transform duration-300 cursor-pointer'>
                  <BiLogoTiktok className='text-white font-bold' />
                  <p className='text-white font-bold'>
                    TikTok
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default MainComponent