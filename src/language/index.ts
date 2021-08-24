import { enLanguage } from "./en";
import { ptLanguage } from "./pt";

const languages: any = {
  ...ptLanguage,
  ...enLanguage,
};

export const languagesPack = [
  {
    label: "En",
    value: "en",
  },
  {
    label: "Pt",
    value: "pt",
  },
];

export const language = languages;
