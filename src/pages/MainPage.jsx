import React, { useState, useEffect, Fragment } from 'react';
import './MainPage.css';
import ReactTypingEffect from 'react-typing-effect';

function MainPage() {
  const greetings = [" Kubilay", " Yazılımcıyım", " Girişimciyim", " Mühendisim"];

  return (
    <div className="MainPage">
      <nav class="bg-white fixed w-full z-1 top-0 border-b border-kgold dark:bg-kdark">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Hello there !</span>
          </a>
          <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#home" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-kgold-700 md:p-0 dark:text-white md:dark:text-kgold" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#about" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-kgold md:p-0 dark:text-white md:dark:hover:text-kgold dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
              </li>
              <li>
                <a href="#projects" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-kgold md:p-0 dark:text-white md:dark:hover:text-kgold dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className='full-bg'>
        <main className='h-screen '>

          <div id="home" className="h-full section bg-kdark flex flex-col justify-center items-center">
            <h1 className="text-kgold font-bold italic text-8xl mb-8">
              Merhaba
            </h1>
            <h1 className="text-kwhite text-6xl mb-8">
              <ReactTypingEffect text={greetings} staticText='Ben' typingDelay={500} eraseSpeed={50} eraseDelay={1000} speed={100} />
            </h1>
            <h1 className="text-2xl text-kwhite text-center mt-12 mb-8">"Hazırlamış olduğum bu portfolyoda kaydırıp beni tanımaya başlayabilirsiniz."</h1>
            <span className="text-kgold text-5xl">&#8595;</span>
          </div>

          <div id="about" className="h-full section bg-kwhite flex flex-col justify-center items-center">
            <h1 className="text-kdark font-bold italic text-8xl mb-12">Hakkımda</h1>
            <p className="text-kdark text-2xl text-center ">Öncelikle ben Kubilay Güler. 20 Yaşındayım. Manisa'nın Akhisar ilçesinde doğdum. 4 Yaşımdan beri bilgisayar kullanıyorum. Bilgisayar Mühendisliği öğrencisiyim. 2022 Yılından beri kendimi bu alanda geliştiriyorum. <a href="https://www.healaways.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Healaways</a> adında bir girişimcilikle uğraşıyorum. Dizi/Film izlemeyi ve oyun oynamayı seviyorum. Hedefim yazılım sektöründe tecrübe kazanıp yurtdışında kariyerimi devam ettirmek.Ayrıca başta tarihini araştırıp beğendiğim ülkeleri gezip yapılacaklar listemde üst sırada yer alan dünyayı gezme görevini tamamlamak. </p>
          </div>

          <div id="projects" className="h-full section bg-kdark flex flex-col justify-center items-center">
            <h1 className="text-kwhite font-bold italic text-8xl mb-8">
              Projelerim
            </h1>
            <h1 className="text-2xl text-kwhite text-center mb-8">
              <span className='text-kgold italic font-bold'>"</span>2022 Yılından itibaren paylaştığım
              <span className='text-kgold italic font-bold'> bazı</span> projeler.<span className='text-kgold italic font-bold'>"</span>
            </h1>
            <div className='w-full h-3/5 flex flex-wrap justify-center items-center overflow-auto'>

              <a href='https://kubilayguler.github.io/weather/' className='resim1 bg-cover bg-center w-64 h-64 m-2 relative overflow-hidden transition duration-300 transform brightness-75 rounded border-solid border-2 border-kgold hover:scale-105 hover:brightness-100'>
              </a>

              <div className='bg-cover bg-center w-64 h-64 m-2 relative overflow-hidden transition duration-300 transform brightness-50 rounded border border-kwhite '>
                <h1 className='text-6xl text-kwhite italic font-bold justify-center items-center flex h-full w-full'>EMPTY</h1>
              </div>

              <div className='bg-cover bg-center w-64 h-64 m-2 relative overflow-hidden transition duration-300 transform brightness-50 rounded border border-kwhite '>
                <h1 className='text-6xl text-kwhite italic font-bold justify-center items-center flex h-full w-full'>EMPTY</h1>
              </div>

              <div className='bg-cover bg-center w-64 h-64 m-2 relative overflow-hidden transition duration-300 transform brightness-50 rounded border border-kwhite '>
                <h1 className='text-6xl text-kwhite italic font-bold justify-center items-center flex h-full w-full'>EMPTY</h1>
              </div>
            </div>


          </div>


        </main>
      </div>
    </div>
  );
}

export default MainPage;
