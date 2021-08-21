import EnHome from "./views/home";
import EnNotFound from "./views/notFound";
import { typeOfFilters } from "./views/home/types";

export const appRoutes = {
  routes: [
    {
      initial: true,
      path: "/todos",
      component: <EnHome defaultFilter={typeOfFilters.ALL} />,
    },
    {
      initial: true,
      path: "/ativos",
      component: <EnHome defaultFilter={typeOfFilters.ACTIVE} />,
    },
    {
      initial: true,
      path: "/completos",
      component: <EnHome defaultFilter={typeOfFilters.COMPLETED} />,
    },
  ],
  notFound: {
    component: <EnNotFound />,
  },
};
