import { useTranslation } from "react-i18next";
import styled from "styled-components";
import LangSelector from "./components/LangSelector";

const App = () => {
  const { t } = useTranslation();

  return (
    <AppStyled>
      <LangSelector />
      <section className="text">
        <h1>{t("welcomeMessage")}</h1>
        <h2>{t("subtitle")}</h2>
        <p>{t("paragraph")}</p>
      </section>
    </AppStyled>
  );
};

const AppStyled = styled.main`
  display: flex;
  gap: 4rem;
  user-select: none;

  .text {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export default App;
