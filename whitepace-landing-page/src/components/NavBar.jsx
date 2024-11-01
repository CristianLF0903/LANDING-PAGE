import LogoWhite from '../assets/LogoWhite.svg'
import ButtonPrimary from './Button.jsx'

function NavBar () {
  return (
    <>
      <header className='bg-blue-dark flex justify-between px-56 font-inter text-lg text-white'>
        <a href='#Home'>
          <img src={LogoWhite} alt='`Logo' className='h-8 text-center my-6' />
        </a>
        <nav className='flex items-center justify-center gap-x-14'>
          <ul className='flex items-center justify-center gap-x-14'>
            <li><a href='#Products' className='navLink'>Products</a></li>
            <li><a href='#Solutions' className='navLink'>Solutions</a></li>
            <li><a href='#Resources' className='navLink'>Resources</a></li>
            <li><a href='#Pricing' className='navLink'>Pricing</a></li>
          </ul>
          <div className='flex items-center justify-center gap-x-6'>
            <button className='bg-yellow-200 text-black py-4 px-10 rounded-md hover:bg-yellow-300 font-bold'>Login</button>
            <ButtonPrimary>Try Whitepace free</ButtonPrimary>
          </div>
        </nav>
      </header>
    </>
  )
}

export default NavBar
