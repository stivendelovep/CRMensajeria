import styled from 'styled-components';

export function Login() {
  return (

    <Container>
        <div className='Formulario'>
|           <label>Usuario</label>
            <input type='text'></input>
            <label>Contraseña</label>
            <input type='password'></input>
            <a href='#' className='link-login'>¿olvido su Contraseña? </a>
            <a href='#' className='link-login'>Registarse</a>
            <button>Iniciar sesion</button>
        </div>
        
    </Container>
  )
}

const Container = styled.div`

display: grid;


    .Formulario{
        display: flex;
        justify-content: center;
        align-items: center;
    }

`;