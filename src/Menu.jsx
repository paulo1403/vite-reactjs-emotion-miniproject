import styled from '@emotion/styled'

const MenuContainer = styled.div`
  max-width: 60px;
  min-width: 60px;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background: #0073C0;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Logo = styled.div`
    flex: 1;
    margin-top: 20px;
`;

const MenuContent = styled.div`
    flex: 10;
`;

const UserContent = styled.div`
    flex: 1;
    position: relative;
    img {
        width: 40px;
        height: 40px;
        border-radius: 50px;
        border: 2px solid #fff;
    }
    span {
        width: 6px;
        height: 6px;
        background: hsla(157, 91%, 43%, 1);
        border-radius: 50%;
        border: 2px solid #fff;
        position: absolute;
        bottom: 41px;
        left: 35px;
    }
`;

const Home = styled.div`
    img {
        padding: 12px;
        background: #0F67A1;
        border-radius: 6px;
    }
`;

function Menu() {

  return (
    <MenuContainer>
        <Logo><img src="./logo.svg" /></Logo>
        <MenuContent>
            <Home><img src="./home.svg" /></Home>
        </MenuContent>
        <UserContent><img src="https://picsum.photos/200/300" alt="user" /><span></span></UserContent>
    </MenuContainer>
  )
}

export default Menu