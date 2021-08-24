export type AppProps = {
  mode: true;
  lang: any;
};

export type RoutesProps = {
  initial?: boolean;
  path: string;
  component: React.ReactNode;
};

export type AppRoutesType = {
  routes: RoutesProps[];
  notFound: {
    component: React.ReactNode;
  };
};

export enum routesEnum {
  "ALL" = "todos",
  "ACTIVE" = "ativos",
  "COMPLETED" = "completos",
}
