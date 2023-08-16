export enum HouseType {
  House = "House",
  Appartment = "Appartment",
}

export interface HouseAgent {
  image: string;
  name: string;
  phone: string;
}

export interface HouseInterface {
  id: number;
  type: HouseType;
  name: string;
  description: string;
  image: string;
  imageLg: string;
  country: string;
  address: string;
  bedrooms: string;
  bathrooms: string;
  surface: string;
  year: string;
  price: string;
  agent: HouseAgent
}
