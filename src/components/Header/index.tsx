
import { Link } from 'react-router-dom'
import LogoImg from '../../assets/logo.svg'
import {FiUser, FiLogIn} from 'react-icons/fi'


export function Header() {
    const signed = true;
    const loadingAuth = false;

    return (
      <div className="w-full flex items-center justify-center h-16 bg-white drop-shadow mb-4">
        <header className='flex w-full justify-between items-center max-w-7xl px-4 mx-auto'>
            <Link to='/'>
                <img src={LogoImg} alt='Logo'></img>
            </Link>
            

            {!loadingAuth && signed && ( //Quando n estiver carregando e o usuario estiver logado
                <Link to='/dashboard'>
                <div className='border-2 rounded-full p-1 border-black'>
                    <FiUser size={24} color='#000'/>
                </div>
            </Link>
            )}

            {!loadingAuth && !signed && ( //Quando n estiver carregando e o usuario não estiver logado
                <Link to='/login'>
                <FiLogIn size={24} color='#000'/>
            </Link>
            )}
        </header>
      </div>
    )
  }
  
  