/* enums*/

export enum typeOfFilters {
  ALL = "ALL",
  ACTIVE = "ACTIVE",
  COMPLETED = "COMPLETED",
}

/*Types*/
export type EnHomeProps = {
  defaultFilter: typeOfFilters;
};
