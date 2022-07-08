import { Link } from 'react-router-dom';
import logo from '../../assets/MotopartBikersLogo.png'

const Header = () => {
  return (
   <header className="bg-[#1f2937] h-16 p-2 border-b-[3px] border-yellow-500 flex items-center justify-end">
      <Link to="/products" className="h-full">
        <img src={ logo } alt={ logo } className="max-h-[70%] sm:max-h-[80%]" />
      </Link>
   </header>
  )
}

export default Header;