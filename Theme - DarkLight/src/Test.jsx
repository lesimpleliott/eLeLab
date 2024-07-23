import styled from "styled-components";

const Test = () => {
  return (
    <TestStyled>
      <p>The goal in this test is to try to set a dark or light theme.</p>
      <p>Stack: React + Vite / Styled-Components and SCSS</p>
    </TestStyled>
  );
};

const TestStyled = styled.div`
  background: var(--textColor);
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export default Test;
