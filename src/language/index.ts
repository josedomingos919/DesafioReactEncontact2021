import { enLanguage } from "./en";
import { ptLanguage } from "./pt";

const languages: any = {
  ...ptLanguage,
  ...enLanguage,
};

export const language = {
  get: (type: string, props: string) => languages[type][props],
};
