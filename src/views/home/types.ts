/* enums*/

import { listItemTypes } from "../../storage/reducers/list/listTypes";

export enum typeOfFilters {
  ALL = "ALL",
  ACTIVE = "ACTIVE",
  COMPLETED = "COMPLETED",
}

/*Types*/
export type EnHomeProps = {
  addListItem: any;
  defaultFilter: typeOfFilters;
  list: Array<listItemTypes>;
};
