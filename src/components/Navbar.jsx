import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className='bg-kdark fixed w-full z-10 top-0 border-b border-kgold'>
      <div className='max-w-screen-xl flex items-center justify-between mx-auto p-4'>
        <a
          href='/KUBILAYGULER-CV.pdf'
          target='_blank'
          className='flex items-center space-x-2 p-3 text-2xl font-semibold text-white transition-all duration-100 hover:scale-110'
        >
          <span>CV'yi İndir</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='35px'
            height='35px'
            viewBox='0 0 24 24'
            fill='none'
            className='transition-transform transform group-hover:translate-x-2'
          >
            <g id='Interface / Download'>
              <path
                id='Vector'
                d='M6 21H18M12 3V17M12 17L17 12M12 17L7 12'
                stroke='#fffFFF'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </g>
          </svg>
        </a>
        <div className='justify-end hidden lg:flex text-kgold  space-x-6 text-right px-4 py-2 text-xl font-medium '>
          <a
            href='#home'
            className='transition-all duration-200 block  py-2 px-4 hover:scale-125'
          >
            Giriş
          </a>
          <a
            href='#about'
            className='transition-all duration-200 block py-2 px-4 hover:scale-125'
          >
            Hakkımda
          </a>
          <a
            href='#projects'
            className='transition-all duration-200 block  py-2 px-4  hover:scale-125'
          >
            Projelerim
          </a>
        </div>
        <button
          onClick={toggleNavbar}
          type='button'
          className=' hover:scale-150 transition-all duration-200 inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-kdark rounded-lg hover:bg-kgold focus:outline-none focus:ring-2 focus:ring-kgold text-kgold hover:text-kdark focus:ring-kdark lg:hidden'
          aria-controls='navbar-hamburger'
          aria-expanded={isOpen}
        >
          <span className='sr-only'>Open main menu</span>
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${
              isOpen ? 'rotate-45' : 'rotate-0'
            }`}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            {isOpen ? (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            ) : (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4 6h16M4 12h16M4 18h16'
              />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className='fixed inset-0 z-20'>
          <div
            className='absolute inset-0 bg-black bg-opacity-40'
            onClick={toggleNavbar}
          ></div>

          <div className='absolute top-[64px] w-full left-0 bg-kgold rounded-b-lg shadow-lg'>
            <ul className='flex flex-col items-end text-right text-xl font-medium space-y-2 py-4 px-6'>
              <li>
                <a
                  href='#home'
                  className='transition-all block text-black hover:text-kgold hover:bg-kdark py-2 px-4 rounded-lg hover:scale-110'
                >
                  Giriş
                </a>
              </li>
              <li>
                <a
                  href='#about'
                  className='transition-all block text-black hover:text-kgold hover:bg-kdark py-2 px-4 rounded-lg hover:scale-110'
                >
                  Hakkımda
                </a>
              </li>
              <li>
                <a
                  href='#projects'
                  className='transition-all block text-black hover:text-kgold hover:bg-kdark py-2 px-4 rounded-lg hover:scale-110'
                >
                  Projelerim
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
