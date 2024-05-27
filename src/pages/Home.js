import styled from 'styled-components';

export function Home() {
  return (
    <Container>
        <h1 className='title'>Home</h1>
        <div className='boxs'>
            <a className='box' href='#'>Dashboard</a>
        </div>
    </Container>
  )
}

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
  .box{
    background: red;
    width: 100px;
    height: 200px;
  }

  .title{
    position: relative;
    bottom: 200px;
  }
`;