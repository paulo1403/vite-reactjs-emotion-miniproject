import styled from "@emotion/styled";
import PersonList from "./PersonList";

const ContainerBlock = styled.nav`
  height: 100%;
  background: hsla(220, 38%, 97%, 1);
  padding: 24px 54px;
`;

const TitleText = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  color: #000000;
  margin-bottom: 14px;
`;

const InformationContainer = styled.div`
  display: flex;
  gap: 49px;
`;

const Left = styled.div`
  flex: 1;
  width: 420px;
  height: 776px;
  background: #ffffff;
  border: 1px solid rgba(213, 213, 213, 0.8);
  border-radius: 12px;
  .content-top {
    display: flex;
    gap: 19px;
    align-items: center;
    margin-bottom: 33px;
    padding: 20px;
    img {
      width: 40px;
    }
    div h5 {
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 22px;
      color: #2f2e41;
    }
    div label {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: rgba(47, 46, 65, 0.6);
    }
  }
  h4 {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #2f2e41;
    margin-bottom: 10px;
    padding: 0 20px;
  }
  hr {
    border: 1px solid hsla(0, 0%, 84%, 0.5);
  }
  .objectives-content {
    display: flex;
    justify-content: space-between;
    margin-top: 21px;
    margin-bottom: 19px;
    align-items: center;
    padding: 0 20px;
    div img:first-of-type {
      width: 18px;
      height: 18px;
    }
    div h5 {
      font-weight: 700;
      font-size: 14px;
      line-height: 18px;
      color: rgba(47, 46, 65, 0.75);
    }
    div label {
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: rgba(47, 46, 65, 0.6);
    }
    img {
      width: 22px;
      height: 22px;
    }
    div:first-child {
      display: flex;
      gap: 10px;
    }
  }
  main {
    color: hsla(0, 0%, 0%, 0.7);
  }
  main.gray {
    height: 45px;
    background: #f1f1f1;
    padding: 0 62px;
    display: flex;
    align-items: center;
  }
  main.white {
    height: 45px;
    background: #fff;
    padding: 0 62px;
    display: flex;
    align-items: center;
  }
`;

const Middle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 25px;
  height: 100%;
  .content-middle {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 7px;
    text-align: center;
    width: 300px;
    margin: 0 auto;
    margin-top: 49px;
    img {
      width: 36px;
      margin-bottom: 15px;
    }
    button {
      margin-top: 50px;
      background: #ffffff;
      border: 1px solid rgba(213, 213, 213, 0.8);
      box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.03);
      border-radius: 6px;
      color: #2f2e41;
      font-weight: 700;
      font-size: 15px;
      line-height: 20px;
      width: 186px;
      padding: 15px 10px;
    }
  }
`;

const MiddleTop = styled.div`
  min-height: 370px;
  height: 100%;
  background: #ffffff;
  border-radius: 12px;
  padding: 12px 9px;
  div {
    display: flex;
    justify-content: flex-end;
  }
  div button {
    background: hsla(2, 100%, 66%, 1);
    padding: 6px 12px;
    font-weight: 700;
    font-size: 9px;
    line-height: 12px;
    color: #ffffff;
    background: #ff5851;
    border-radius: 6px;
    width: 88px;
    border: none;
    box-shadow: 0px 4px 4px 1px hsla(0, 0%, 0%, 0.03);
  }
`;

const MiddleBottom = styled.div`
  min-height: 370px;
  height: 100%;
  background: #ffffff;
  border-radius: 12px;
  padding: 12px 9px;
  .content-middle {
    button {
      margin-top: 20px;
    }
    a {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: #0073c0;
    }
  }
`;

const Right = styled.div`
  flex: 1;
  width: 420px;
  height: 776px;
  background: #ffffff;
  border: 1px solid rgba(213, 213, 213, 0.8);
  border-radius: 12px;
  padding: 29px 31px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .title-container {
    text-align: center;
  }
  h4 {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #000000;
  }
  a {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #0073c0;
    text-align: center;
  }
  span {
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
    color: rgba(0, 0, 0, 0.65);
  }
  .card-information {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 26px 0;
    div:nth-child(1) {
      display: flex;
      gap: 14px;
      align-items: center;
    }
    img:nth-child(1) {
      width: 32px;
    }
    h5 {
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 18px;
      color: rgba(0, 0, 0, 0.75);
    }
    label {
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: #727272;
    }
  }
  button {
    margin-top: 50px;
    background: #ffffff;
    border: 1px solid rgba(213, 213, 213, 0.8);
    box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.03);
    border-radius: 6px;
    color: #2f2e41;
    font-weight: 700;
    font-size: 15px;
    line-height: 20px;
    width: 186px;
    padding: 15px 10px;
    align-self: center;
  }
`;

function Container() {
  return (
    <ContainerBlock>
      <TitleText>Período 2022 -1</TitleText>
      <InformationContainer>
        <Left>
          <div className="content-top">
            <img src="./flow.png" />
            <div>
              <h5>Período 2021 -1 en curso:</h5>
              <label>01 de enero, 2022 - 31 de julio,2022</label>
            </div>
          </div>
          <h4>Componentes habilitados</h4>
          <hr></hr>
          <div className="objectives-content">
            <div>
              <img src="./handshake.png"></img>
              <div>
                <h5>Período 2021 -1 en curso:</h5>
                <label>01 de enero, 2022 - 31 de julio,2022</label>
              </div>
            </div>
            <img src="./check.png" />
          </div>
          <main className="gray">EBITDA</main>
          <main className="white">NPS online</main>
          <main className="gray">NPS fisico</main>
          <main className="white">ECO > 80</main>
          <main className="gray">NPS fisico</main>
          <main className="white">ECO > 80</main>
          <main className="gray">NPS fisico</main>
          <main className="white">ECO > 80</main>
          <main className="gray">NPS fisico</main>
          <main className="white">ECO > 80</main>
          <main className="gray">NPS fisico</main>
          <main className="white">ECO > 80</main>
        </Left>
        <Middle>
          <MiddleTop>
            <div>
              <button>Deshabilitado</button>
            </div>
            <div className="content-middle">
              <img src="./settings.png" />
              <h4>Objetivos de Area (KPI)</h4>
              <p>
                Este componente no ha sido habilitado para el periodo actual
              </p>
              <button>Habilitar componente</button>
            </div>
          </MiddleTop>
          <MiddleBottom>
            <div className="content-middle">
              <img src="./settings.png" />
              <h4>Objetivos Corporativos</h4>
              <a>Configurar</a>
              <p>
                Este componente es calificado a todos los colaboradores de la
                organizacion por medio de una nota global
              </p>
              <button>Ver Detalle</button>
            </div>
          </MiddleBottom>
        </Middle>
        <Right>
          <div className="container-arrange">
            <div className="title-container">
              <h4>Objetivos Corporativos</h4>
              <a>Configurar</a>
            </div>
            <PersonList />
            <span>
              <b>1/4</b> Etapas completadas
            </span>
          </div>
          <button>Ver Detalle</button>
        </Right>
      </InformationContainer>
    </ContainerBlock>
  );
}

export default Container;
