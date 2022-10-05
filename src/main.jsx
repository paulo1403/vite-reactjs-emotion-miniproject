import React from 'react'
import styled from '@emotion/styled'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import Menu from './Menu'
import Container from './Container'
import PersonList from './PersonList'
import './index.css'


const AppContent = styled.div`
  display: flex;
  height: 100vh;
`;

const ContainerRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  Header {
    flex: 1;
  }
  Container {
    flex: 10;
  }
`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContent>
      <Menu />
      <ContainerRight>
        <Header />
        <Container />
      </ContainerRight>
    </AppContent>
  </React.StrictMode>
)
