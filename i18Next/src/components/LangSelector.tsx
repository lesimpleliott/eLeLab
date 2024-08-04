import { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import languages from "../../locales/lang.json";

const LangSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setSelectedLanguage(lang);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <LangSelectorStyled>
      <div className="langSelector">
        <div className="langSelector__current" onClick={toggleDropdown}>
          <img
            className="flag"
            src={`./${selectedLanguage}.svg`}
            alt={selectedLanguage}
          />
          <img
            className="chevron"
            src="./chevron-down-solid.svg"
            alt="chevron"
          />
        </div>

        {isOpen && (
          <div className="langSelector__dropdownMenu">
            {languages.map((lang, index) => (
              <label
                className="option"
                htmlFor={lang.id}
                key={index}
                onClick={() => handleLanguageChange(lang.id)}
              >
                <img className="flag" src={lang.flag} alt={lang.name} />
                {lang.name}
                <input
                  type="radio"
                  name="language"
                  id={lang.id}
                  checked={selectedLanguage === lang.id}
                  readOnly
                />
              </label>
            ))}
          </div>
        )}
      </div>
    </LangSelectorStyled>
  );
};

const LangSelectorStyled = styled.div`
  .langSelector {
    position: relative;
    display: flex;
    flex-direction: column;

    &__current {
      all: unset;
      cursor: pointer;
      width: fit-content;
      padding-inline: 0.6rem;
      padding-block: 0.4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.5rem;
      border-radius: 0.5rem;

      .flag {
        width: 30px;
        filter: drop-shadow(0 0 0.1rem rgba(0, 0, 0, 0.3));
      }

      .chevron {
        width: 1rem;
      }
    }

    &__dropdownMenu {
      background-color: rgba(255, 255, 255, 0.6);
      backdrop-filter: blur(0.2rem);
      border: #b8b8b8 1px solid;
      border-radius: 0.5rem;
      padding: 0.6rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      position: absolute;
      top: 110%;
      left: 0;
      z-index: 1;

      .option {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        cursor: pointer;

        .flag {
          width: 30px;
          filter: drop-shadow(0 0 0.1rem rgba(0, 0, 0, 0.3));
        }

        input {
          display: none;
        }
      }
    }
  }
`;

export default LangSelector;
