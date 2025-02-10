import logo from '../assets/images/logo-full.svg'

const Logo = () => {
  return (
    <>
        <img src={logo} className='w-[150px] md:w-[200px] h-[50px] mx-auto' alt="main-logo" />
    </>
  )
}

export default Logo;
