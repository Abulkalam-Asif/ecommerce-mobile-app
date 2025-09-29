import { IProduct } from "@/src/types";

export const tempBestPrices: IProduct[] = [
  {
    Id: 1,
    Name: "Best Price 1",
    MainImageUrl: require("@/temp/home/bestPrices/1.png"),
    Price: 2400,
    OldPrice: 2500,
  },
  {
    Id: 2,
    Name: "Best Price 2",
    MainImageUrl: require("@/temp/home/bestPrices/2.png"),
    Price: 0,
    OldPrice: 3500,
  },
  {
    Id: 3,
    Name: "Best Price 3",
    MainImageUrl: require("@/temp/home/bestPrices/3.png"),
    Price: 3450,
    OldPrice: 4500,
  },
];
