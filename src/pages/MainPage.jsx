import React from 'react';
import './MainPage.css';
import ReactTypingEffect from 'react-typing-effect';
import Navbar from '../components/Navbar.jsx';

function MainPage() {
  const greetings = [
    ' Kubilay',
    ' Yazılımcıyım',
    ' Girişimciyim',
    ' Mühendisim',
  ];

  return (
    <div className='MainPage'>
      <Navbar />

      <div className='full-bg'>
        <main className='min-h-screen'>
          {/* Home Bölümü */}
          <div
            id='home'
            className='h-screen section bg-kdark flex flex-col justify-center items-center p-6 md:p-12'
          >
            <h1 className='max-w-screen-lg text-kgold font-bold italic text-5xl md:text-8xl mb-6 md:mb-8'>
              Merhaba
            </h1>
            <h1 className='max-w-screen-lg text-kwhite text-4xl md:text-6xl mb-6 md:mb-8'>
              <ReactTypingEffect
                text={greetings}
                staticText='Ben'
                typingDelay={500}
                eraseSpeed={50}
                eraseDelay={1000}
                speed={100}
              />
            </h1>
            <h1 className='max-w-screen-lg text-2xl md:text-2xl text-kwhite text-center mt-6 md:mt-12 mb-6 md:mb-8'>
              "Hazırlamış olduğum bu portfolyoda kaydırıp beni tanımaya
              başlayabilirsiniz."
            </h1>
            <span className='text-kgold text-3xl md:text-5xl'>&#8595;</span>
          </div>

          {/* About Bölümü */}
          <div
            id='about'
            className='h-screen section bg-kwhite flex flex-col justify-center items-center p-6 md:p-12'
          >
            <h1 className='max-w-screen-lg text-kdark font-bold italic text-5xl md:text-8xl mb-6 md:mb-12'>
              Hakkımda
            </h1>
            <p className='max-w-screen-lg text-kdark text-xl md:text-2xl text-center'>
              Ben Kubilay Güler, 20 yaşındayım. Manisa’nın Akhisar ilçesinde
              doğdum. 4 yaşımdan beri bilgisayar kullanıyorum ve şu anda
              Bilgisayar Mühendisliği öğrencisiyim. 2022 yılından itibaren bu
              alanda kendimi geliştirmeye odaklanıyorum.
            </p>
            <br />
            <p className='max-w-screen-lg  text-kdark text-xl md:text-2xl text-center'>
              <a
                href='https://www.healaways.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-500 underline'
              >
                Healaways
              </a>
              <span> </span>adında bir girişimle uğraşıyorum. Dizi/Film izlemeyi
              ve oyun oynamayı seviyorum. Hedefim yazılım sektöründe tecrübe
              kazanıp yurtdışında kariyerimi devam ettirmek. Ayrıca başta
              tarihini araştırıp beğendiğim ülkeleri gezip yapılacaklar listemde
              üst sırada yer alan dünyayı gezme görevini tamamlamak.
            </p>
          </div>

          {/* Projects Bölümü */}
          <div
            id='projects'
            className='min-h-screen section bg-kdark flex flex-col justify-center items-center p-6 md:p-24'
          >
            <h1 className='max-w-screen-lg text-kwhite font-bold italic text-5xl md:text-8xl mb-6 md:mb-8'>
              Projelerim
            </h1>
            <h1 className='max-w-screen-lg text-xl md:text-2xl text-kwhite text-center mb-6 md:mb-8'>
              <span className='text-kgold italic font-bold'>"</span>2022
              Yılından itibaren paylaştığım
              <span className='text-kgold italic font-bold'> bazı </span>{' '}
              projeler.
              <span className='text-kgold italic font-bold'>"</span>
            </h1>

            {/* Proje Grid */}
            <div className='w-full max-w-screen-lg grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 justify-items-center'>
              {/* 1. Proje */}
              <a
                href='https://github.com/kubilayguler/weather/'
                className='bg-project-1 bg-cover bg-center w-full h-[250px] max-w-[300px] relative overflow-hidden transition duration-300 transform brightness-75 rounded-lg border-2 border-kgold hover:scale-105 hover:brightness-100'
              ></a>

              {/* 2. Proje */}
              <a
                href='https://github.com/kubilayguler/akakce-clone'
                className='bg-project-2 bg-cover bg-center w-full h-[250px] max-w-[300px] relative overflow-hidden transition duration-300 transform brightness-75 rounded-lg border-2 border-kgold hover:scale-105 hover:brightness-100'
              ></a>

              {/* 3. Proje */}
              <a
                href='https://github.com/kubilayguler/kubilayguler.github.io'
                className='bg-project-3 bg-cover bg-center w-full h-[250px] max-w-[300px] relative overflow-hidden transition duration-300 transform brightness-75 rounded-lg border-2 border-kgold hover:scale-105 hover:brightness-100'
              ></a>

              {/* Boş kutu (1) */}
              <div className='bg-cover bg-center w-full h-[250px] max-w-[300px] relative overflow-hidden transition duration-300 transform brightness-50 rounded-lg border-2 border-kwhite flex items-center justify-center'>
                <h1 className='text-2xl md:text-4xl lg:text-5xl text-kwhite italic font-bold text-center'>
                  EMPTY
                </h1>
              </div>

              {/* Boş kutu (2) */}
              <div className='bg-cover bg-center w-full h-[250px] max-w-[300px] relative overflow-hidden transition duration-300 transform brightness-50 rounded-lg border-2 border-kwhite flex items-center justify-center'>
                <h1 className='text-2xl md:text-4xl lg:text-5xl text-kwhite italic font-bold text-center'>
                  EMPTY
                </h1>
              </div>

              {/* Boş kutu (3) */}
              <div className='bg-cover bg-center w-full h-[250px] max-w-[300px] relative overflow-hidden transition duration-300 transform brightness-50 rounded-lg border-2 border-kwhite flex items-center justify-center'>
                <h1 className='text-2xl md:text-4xl lg:text-5xl text-kwhite italic font-bold text-center'>
                  EMPTY
                </h1>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default MainPage;
