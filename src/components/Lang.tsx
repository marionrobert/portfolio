import { useState } from "react";
import Select, { StylesConfig, SingleValue } from 'react-select';
import { useTranslation } from 'react-i18next';
import { Language } from "../enums/Language";
import { Option } from "../types";

const Lang = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState<Language>(i18n.language as Language);

  const options: Option[] = [
    { value: Language.FR, label: 'FR' },
    { value: Language.EN, label: 'EN' }
  ];

  const changeLanguage = (selectedOption: SingleValue<Option>) => {
    if (selectedOption) {
      setLang(selectedOption.value);
      i18n.changeLanguage(selectedOption.value);
    }
  };

  const customStyles: StylesConfig<Option, false> = {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'rgb(33, 37, 41)',
      borderColor: 'rgb(33, 37, 41)',
      boxShadow: 'none',
      cursor: 'pointer',
      '&:hover': {
        borderColor: 'rgb(33, 37, 41)',
      }
    }),
    option: (provided, state) => ({
      ...provided,
      color: 'white',
      backgroundColor: state.isFocused ? 'rgb(33, 37, 41)' : 'rgb(33, 37, 41)',
      '&:active': {
        backgroundColor: 'rgb(33, 37, 41)'
      },
      cursor: 'pointer',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'white',
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: 'rgb(33, 37, 41)',
    }),
  };

  return (
    <div className="language-switcher">
      <Select
        value={options.find(option => option.value === lang)}
        onChange={changeLanguage}
        options={options}
        styles={customStyles}
      />
    </div>
  );
};

export default Lang;
