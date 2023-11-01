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
        <div className="flex items-center max-w-screen-2xl min-h-[90vh] mx-auto">
          <div className=" w-[50%]">
            <div className="">
              <div className="mb-5" >
                <div className="">
                  <h1 className="text-7xl leading-none tracking-tighter font-light">LEARN <b className='font-bold'>SPANISH</b> ONLINE</h1>
                </div>
              </div>
              <div className="" >
                <p className="text-left text-gray-800 font-semibold leading-[1.4em] tracking-tighter text-xl">
                  Aprendé español para negocios, redes sociales, con cursos online, prácticos y certificados.
                </p>
              </div>
              <div className="flex mb-10 mt-10 mr-5">
                <a className="w-full justify-center flex items-center text-white border-2 bg-pink-600 rounded-full text-lg font-semibold tracking-tighter py-3 px-6 transform scale-100 hover:scale-90 transition-transform duration-300" href="#">
                  <span className="text-sm tracking-widest">Ver cursos online</span>
                </a>

                <a className="justify-center flex items-center cursor-pointer font-karla text-blue-900  rounded-full text-lg font-semibold tracking-tighter py-3 px-6  w-full transform scale-100 hover:scale-90 transition-transform duration-300" >
                  <div className="justify-center flex items-center gap-2">
                    <div className='bg-gray-900 rounded-full text-white'>
                      <MdNavigateNext />
                    </div>

                    <span className="tracking-widest text-sm w-full">Recursos gratis</span>
                  </div>
                </a>
              </div>




              <section className="flex items-center">
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


          <div className="flex justify-center items-center ">
            <div className="flex justify-center items-center">
              <div className="flex justify-center items-center">
                <div className="elementor-widget-container text-center">
                  <img src="/profile.webp" className="rounded-full mx-auto my-auto mb-10" />
                  <p className='text-gray-800 font-semibold leading-[1.4em] tracking-tighter text-2xl'>¡Hola! Mi nombre es Josefina. I’m your Spanish teacher.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section style={{ backgroundColor: '#00A8F4' }} className='py-10'>
          <div className='flex justify-center gap-40'>
            <div className=' text-center flex-col justify-center items-center'>
              <p className='text-white mb-5'>"Una academia para aprender todo sobre <br /> el mundo digital"</p>
              <img className='h-20 w-full flex my-auto' src="la-nacion.webp" alt="" />
            </div>
            <div className=' text-center flex-col justify-center items-center'>
              <p className='text-white mb-5'> "Una de las escuelas de Marketing Digital <br /> más influyentes de la Argentina"</p>
              <img className='h-20 w-full my-auto' src="clarin.webp" alt="" />
            </div>
            <div className=' text-center flex-col justify-center items-center'>
              <p className='text-white mb-5'>"Paula Luzzi es experta de marketing en <br /> redes sociales"</p>
              <img className='h-20 w-full my-auto' src="para.webp" alt="" />
            </div>
          </div>
        </section>

        <section className='mt-36 w-full'>
          <div className='flex-col items-center max-w-screen-2xl min-h-[90vh] mx-auto mb-24'>
            <div className='flex w-full mb-10'>
              <div>
                <div className='flex gap-3'>
                  <div className='bg-gray-900 flex items-center rounded-full p-2 h-full'>
                    <GiGraduateCap className='text-white w-full h-full' />
                  </div>
                  <p className='text-gray-900 w-full font-semibold text-lg mb-5'>Adquiri habilidades digitales</p>
                </div>
                <p className='text-4xl'>
                  La escuela para aprender Marketing Digital con <b>cursos prácticos y sin horarios</b>
                </p>
              </div>
              <div className='flex-col text-right'>
                <p className='mb-8 text-xl'>
                  Unite a miles de alumnos de todo el mundo para vender más por Internet.
                </p>
                <button className='bg-blue-950 text-white px-12 py-4 font-semibold rounded-full transform scale-100 hover:scale-90 transition-transform duration-300 '>
                  Ver todos los cursos
                </button>
              </div>
            </div>

            {/* CARD */}
            <div className='flex gap-3 w-full'>
              <div className='bg-white rounded-2xl p-5 max-w-xl w-full'>
                <div className='flex justify-end'>
                  <AiFillStar className='text-yellow-400' />
                </div>
                <div className='flex gap-5 mb-5 w-full'>
                  <img className='h-20' src="mg-image.png" alt="" />
                  <p className='text-2xl text-gray-900 font-semibold'>Community <br /> Manager</p>
                </div>
                <div>
                  <p className='leading-8 mb-10'>
                    Aprendé a gestionar redes sociales de tu marca o las de tus clientes en Instagram, TikTok, Facebook y Twitter.
                  </p>
                </div>
                <div className='flex  mb-8 w-full'>
                  <div className='flex items-center gap-2 w-full'>
                    <AiFillClockCircle className='' />
                    <p className=''>
                      8 horas
                    </p>
                  </div>
                  <div className='flex items-center gap-2  w-full'>
                    <BiSolidMessage className='' />
                    <p className=''>
                      9 modulos
                    </p>
                  </div>
                  <div className='flex items-center gap-2 w-full'>
                    <AiFillCheckSquare className='' />
                    <p className=''>
                      Certificado
                    </p>
                  </div>
                </div>
                <div>
                  <p className='font-bold text-4xl'>
                    $5.190
                  </p>
                </div>
                <div className="flex w-full mt-8 mr-5">
                  <a className="w-full justify-center flex items-center text-white border-2 bg-pink-600  rounded-full text-lg font-semibold tracking-tighter py-3 px-6 transform scale-100 hover:scale-90 hover:bg-gray-900 transition-transform duration-300" href="#">
                    <span className="text-sm tracking-widest">Comprar Cursos</span>
                  </a>

                  <a className="justify-center flex items-center cursor-pointer font-karla text-blue-900  rounded-full text-lg font-semibold tracking-tighter py-3 px-6  w-full transform scale-100 hover:scale-90 transition-transform duration-300" >
                    <div className="justify-center flex items-center gap-2">
                      <div className='bg-gray-900 rounded-full text-white'>
                        <MdNavigateNext />
                      </div>

                      <span className="tracking-widest text-sm w-full">Detalles</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className='bg-white rounded-2xl p-5 max-w-xl w-full'>
                <div className='flex justify-end'>
                  <AiFillStar className='text-yellow-400' />
                </div>
                <div className='flex gap-5 mb-5'>
                  <img className='h-20' src="music.png" alt="" />
                  <p className='text-2xl text-gray-900 font-semibold'>
                    Marketing de <br /> contenido</p>
                </div>
                <div>
                  <p className='leading-8 mb-10'>
                    Aprendé a diseñar tu estrategia y crear contenido para tus redes sociales, blog, sitio web y anuncios.
                  </p>
                </div>
                <div className='flex gap-5 mb-8'>
                  <div className='flex items-center gap-2'>
                    <AiFillClockCircle />
                    <p>
                      9 horas
                    </p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <BiSolidMessage />
                    <p>
                      6 modulos
                    </p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <AiFillCheckSquare />
                    <p>
                      Certificado
                    </p>
                  </div>
                </div>
                <div>
                  <p className='font-bold text-4xl'>
                    $5.260
                  </p>
                </div>
                <div className="flex w-full mt-8 mr-5">
                  <a className="w-full justify-center flex items-center text-white border-2 bg-pink-600 rounded-full text-lg font-semibold tracking-tighter py-3 px-6 transform scale-100 hover:scale-90 hover:bg-gray-900 transition-transform duration-300" href="#">
                    <span className="text-sm tracking-widest">Comprar Cursos</span>
                  </a>

                  <a className="justify-center flex items-center cursor-pointer font-karla text-blue-900  rounded-full text-lg font-semibold tracking-tighter py-3 px-6  w-full transform scale-100 hover:scale-90 transition-transform duration-300" >
                    <div className="justify-center flex items-center gap-2">
                      <div className='bg-gray-900 rounded-full text-white'>
                        <MdNavigateNext />
                      </div>

                      <span className="tracking-widest text-sm w-full">Detalles</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className='bg-white rounded-2xl p-5 max-w-xl w-full'>
                <div className='flex justify-end'>
                  <AiFillStar className='text-yellow-400' />
                </div>
                <div className='flex gap-5 mb-5'>
                  <img className='h-20' src="voice.png" alt="" />
                  <p className='text-2xl text-gray-900 font-semibold'>
                    Publicidad en <br /> Meta Ads</p>
                </div>
                <div>
                  <p className='leading-8 mb-10'>
                    Aprendé a vender más con anuncios en Facebook, Messenger e Instagram. Un curso práctico para obtener mejores resultados.
                  </p>
                </div>
                <div className='flex gap-5 mb-8'>
                  <div className='flex items-center gap-2'>
                    <AiFillClockCircle />
                    <p>
                      6 horas
                    </p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <BiSolidMessage />
                    <p>
                      6 modulos
                    </p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <AiFillCheckSquare />
                    <p>
                      Certificado
                    </p>
                  </div>
                </div>
                <div>
                  <p className='font-bold text-4xl'>
                    $5.230
                  </p>
                </div>
                <div className="flex w-full mt-8 mr-5">
                  <a className="w-full justify-center flex items-center text-white border-2 bg-pink-600 rounded-full text-lg font-semibold tracking-tighter py-3 px-6 transform scale-100 hover:scale-90 hover:bg-gray-900 transition-transform duration-300" href="#">
                    <span className="text-sm tracking-widest">Comprar Cursos</span>
                  </a>

                  <a className="justify-center flex items-center cursor-pointer font-karla text-blue-900  rounded-full text-lg font-semibold tracking-tighter py-3 px-6  w-full transform scale-100 hover:scale-90 transition-transform duration-300" >
                    <div className="justify-center flex items-center gap-2">
                      <div className='bg-gray-900 rounded-full text-white'>
                        <MdNavigateNext />
                      </div>

                      <span className="tracking-widest text-sm w-full">Detalles</span>
                    </div>
                  </a>
                </div>
              </div>


            </div>


          </div>
        </section>

        <section className='fixed' id='fixed' data-classname='fixed'>
          <div className='bg-white'>
            <div className='flex justify-center gap-5 max-w-screen-2xl min-h-[90vh] mx-auto'>
              <div className='flex items-center'>
                <img src="publicidad.jpg" alt="" />
              </div>
              <div className='flex justify-center items-center'>
                <div className='flex-col justify-center items-center'>
                  <div className='flex w-full gap-3 mb-10'>
                    <div className='bg-cyan-500 rounded-full flex items-center p-1'>
                      <GiPadlock className='text-white' />
                    </div>
                    <p className='text-cyan-500 text-xl font-semibold'>
                      Cursada Libre
                    </p>
                  </div>
                  <div className='text-5xl mb-10 '>
                    Modalidad <b>100% online y <br /> práctica</b>
                  </div>
                  <p className='leading-10 font-semibold text-xl mb-10'>
                    Formación con videos tutoriales grabados, lecturas, plantillas y <br /> ejercicios. En una plataforma sencilla y con rutas de <br /> aprendizaje claras.
                  </p>
                  <button className='bg-blue-950 text-white px-12 py-4 font-semibold rounded-full transform scale-100 hover:scale-90 transition-transform duration-300 '>
                    ¡Quiero aprender!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className=' ' id='fixed'>
          <div className='bg-white shadow-slate-950 shadow-2xl '>
            <div className='flex justify-center gap-24 max-w-screen-2xl min-h-[90vh] mx-auto'>
              <div className='flex items-center'>
                <img src="certificaciones.png" alt="" />
              </div>
              <div className='flex justify-center items-center'>
                <div className='flex-col justify-center items-center'>
                  <div className='flex w-full gap-3 mb-10'>
                    <div className='bg-pink-500 rounded-full flex items-center p-1'>
                      <AiFillTrophy className='text-white' />
                    </div>
                    <p className='text-pink-500 text-xl font-semibold'>
                      Formaciones certificadas
                    </p>
                  </div>
                  <div className='text-5xl mb-10 '>
                    <b>Certificate</b>  en las áreas <br /> principales de Marketing
                  </div>
                  <p className='leading-10 font-semibold text-xl mb-10'>
                    Impulsá tu currículum, tu credibilidad y tu carrera profesional. <br /> Como alumno podrás rendir un examen y obtener un certificado <br />de participación a tu nombre.
                  </p>
                  <button className='bg-blue-950 text-white px-12 py-4 font-semibold rounded-full transform scale-100 hover:scale-90 transition-transform duration-300 '>
                    Ver ejemplo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section id='fixed'>
          <div className='bg-white shadow-slate-950 shadow-2xl'>
            <div className='flex justify-center gap-24 max-w-screen-2xl min-h-[90vh] mx-auto'>
              <div className='flex items-center'>
                <img src="personas.png" alt="" />
              </div>
              <div className='flex justify-center items-center'>
                <div className='flex-col justify-center items-center'>
                  <div className='flex w-full gap-3 mb-10'>
                    <div className='bg-cyan-500 rounded-full flex items-center p-1'>
                      <AiFillStar className='text-white' />
                    </div>
                    <p className='text-cyan-500 text-xl font-semibold'>
                      Nuestra experiencia
                    </p>
                  </div>
                  <div className='text-5xl mb-10 '>
                    Llevamos <b>+4 años <br /> formando a miles de <br /> personas</b>
                  </div>
                  <p className='leading-10 font-semibold text-xl mb-10'>
                    Más del 80% de personas que aprenden con nosotros lo aplican <br /> en sus trabajos. Ayudamos a personas y empresas del mundo a <br /> lograr sus metas y objetivos.
                  </p>
                  <button className='bg-blue-950 text-white px-12 py-4 font-semibold rounded-full transform scale-100 hover:scale-90 transition-transform duration-300 '>
                    Ver testimonios
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='bg-white shadow-slate-950 shadow-2xl'>
            <div className='flex justify-center gap-24 max-w-screen-2xl min-h-[90vh] mx-auto'>
              <div className='flex items-center'>
                <img src="amarillo.webp" alt="" />
              </div>
              <div className='flex justify-center items-center'>
                <div className='flex-col justify-center items-center'>
                  <div className='flex w-full gap-3 mb-10'>
                    <div className='bg-blue-800 rounded-full flex items-center p-1'>
                      <BsFillPersonCheckFill className='text-white' />
                    </div>
                    <p className='text-blue-800 text-xl font-semibold'>
                      Nuestra experiencia
                    </p>
                  </div>
                  <div className='text-5xl mb-10 '>
                    Soporte de <b>especialistas <br /> en cada área</b>
                  </div>
                  <p className='leading-10 font-semibold text-xl mb-10'>
                    Te asistiremos durante todo tu proceso de aprendizaje. Nuestro <br /> equipo habla en tu idioma y entiende tus retos fácilmente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section >
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

        <section>
          <div className='bg-gray-100'>
            <div className='mt-20 flex-col max-w-screen-2xl min-h-[90vh] mx-auto'>
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

        <section>
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

        <section>
          <div className='bg-gray-100 mb-20'>
            <div className='max-w-screen-2xl min-h-[90vh] mx-auto  mt-40'>
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

        <section>
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