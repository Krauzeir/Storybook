import styled from "styled-components";

const StylizedSection = styled.section<{ selected: boolean }>`
    width: 194px;
    height: 88px;
    background: ${props => props.selected ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)' : '#fff'};
    border: 1px solid;
    border-color: ${props => props.selected ? '#002f52' : '#eb9800'};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    margin: 10px;
    font-family: sans-serif;
    header {
        color: ${props => props.selected ? '#fff' : '#eb9800'};
        font-size: 12px;
        font-weight: 400;
    }
    strong {
        color: ${props => props.selected ? '#fff' : '#eb9800'};
        font-size: 700;
        font-size: 16px;
    }
    footer {
        color: ${props => props.selected ? '#fff' : 'rgba(0, 0, 0, 0.54)'};
        font-weight: 400;
        font-size: 12px;
    }
`

export const AbGrupoOpcoes = () => {
  return (
    <>
      <StylizedSection selected={false}>
        <header>E-book</header>
        <div>
          <strong>$000</strong>
        </div>
        <footer>.pdf</footer>
      </StylizedSection>
      <StylizedSection selected={true}>
        <header>E-book</header>
        <div>
          <strong>$000</strong>
        </div>
        <footer>.pdf</footer>
      </StylizedSection>
      <StylizedSection selected={false}>
        <header>E-book</header>
        <div>
          <strong>$000</strong>
        </div>
        <footer>.pdf</footer>
      </StylizedSection>
    </>
  );
};
