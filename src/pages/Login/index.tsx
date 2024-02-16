
import logoImg from '../../assets/logo.svg'
import TextField from '@mui/material/TextField';
import { Container } from '../../components/Container'
import { Link } from 'react-router-dom';

export function Login() {

    return (
      <Container>
        <div className='w-full flex justify-center flex-col m-auto items-center h-full mt-48'>
          <img src={logoImg} width={350} height={350} className='mb-10'></img>
          <form className='flex flex-col gap-5 m-auto border-2 p-6 w-full rounded-3xl bg-white border-white max-w-screen-md'>
            <TextField id="outlined-basic" label="Email" placeholder='Digite o email...' type='email'/>
            <TextField id="outlined-basic" label="Senha" placeholder='Digite sua senha...' type='password' />
            <button type='submit' className='bg-black text-white p-2 rounded-md'>Acessar</button>
          </form>
          <Link to="/register" className='mt-2'>
            Ainda não possui uma conta? Cadastre-se
          </Link>
        </div>
      </Container>
    )
  }
  
  