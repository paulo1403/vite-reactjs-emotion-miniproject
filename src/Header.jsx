import styled from '@emotion/styled'

const NavBar = styled.nav`
  height: 50px;
  background-color: hsla(0, 0%, 84%, 0.55);
  display: flex;
    justify-content: flex-end;
`;

const UserContent = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 48px;
    border: 1px solid hsla(0, 0%, 84%, 0.55);
    div {
        text-align: right;
    }
    img {
        width: 32px;
        height: 32px;
        border-radius: 50px;
    }
    h6 {
        font-weight: 700;
        font-size: 14px;
        line-height: 19px;
        color: #2F2E41;
    }
    label {
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: rgba(114, 114, 114, 0.5);
    }
`;

function Header() {

  return (
    <NavBar>
        <UserContent>
            <div>
                <h6>Hola, Oscar</h6>
                <label>Recursos Humanos</label>
            </div>
            <img src="https://picsum.photos/200/300" alt="user" />
        </UserContent>
    </NavBar>
  )
}

export default Header