import { HouseInterface } from "./House";

export interface HouseContextInterface {
  houses: HouseInterface[];
  isLoading: boolean;
}
