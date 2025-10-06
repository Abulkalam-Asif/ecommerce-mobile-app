import { ICategory, IProduct } from "@/src/types";

export const tempProducts: {
  Category: ICategory;
  SubCategories: ICategory[];
  Products: IProduct[];
}[] = [
  {
    Category: {
      Id: 1,
      Name: "Office Supplies",
    },
    SubCategories: [
      {
        Id: 1,
        Name: "Stationery",
      },
      {
        Id: 2,
        Name: "Paper Products",
      },
      {
        Id: 3,
        Name: "Writing Instruments",
      },
      {
        Id: 4,
        Name: "Art Supplies",
      },
    ],
    Products: [
      {
        Id: 1,
        MainImageUrl: require("@/temp/home/products/1.webp"),
        Name: "Mango Tang Jar 750g",
        Price: 123,
        OldPrice: 200,
      },
      {
        Id: 2,
        MainImageUrl: require("@/temp/home/products/2.webp"),
        Name: "Orange Tang Jar 750g",
        Price: 200,
      },
      {
        Id: 3,
        MainImageUrl: require("@/temp/home/products/3.webp"),
        Name: "Rooh Afza 800 ml",
        Price: 150,
        OldPrice: 250,
      },
      {
        Id: 4,
        MainImageUrl: require("@/temp/home/products/4.webp"),
        Name: "Dry aloo bukhara irrani 250 gram- خشک آلو بخارہ",
        Price: 300,
        OldPrice: 400,
      },
      {
        Id: 5,
        MainImageUrl: require("@/temp/home/products/1.webp"),
        Name: "Mango Tang Jar 750g",
        Price: 123,
        OldPrice: 200,
      },
      {
        Id: 6,
        MainImageUrl: require("@/temp/home/products/2.webp"),
        Name: "Orange Tang Jar 750g",
        Price: 200,
      },
      {
        Id: 7,
        MainImageUrl: require("@/temp/home/products/3.webp"),
        Name: "Rooh Afza 800 ml",
        Price: 150,
        OldPrice: 250,
      },
      {
        Id: 8,
        MainImageUrl: require("@/temp/home/products/4.webp"),
        Name: "Dry aloo bukhara irrani 250 gram- خشک آلو بخارہ",
        Price: 300,
        OldPrice: 400,
      },
      {
        Id: 9,
        MainImageUrl: require("@/temp/home/products/1.webp"),
        Name: "Mango Tang Jar 750g",
        Price: 123,
        OldPrice: 200,
      },
      {
        Id: 10,
        MainImageUrl: require("@/temp/home/products/2.webp"),
        Name: "Orange Tang Jar 750g",
        Price: 200,
      },
      {
        Id: 11,
        MainImageUrl: require("@/temp/home/products/3.webp"),
        Name: "Rooh Afza 800 ml",
        Price: 150,
        OldPrice: 250,
      },
      {
        Id: 12,
        MainImageUrl: require("@/temp/home/products/4.webp"),
        Name: "Dry aloo bukhara irrani 250 gram- خشک آلو بخارہ",
        Price: 300,
        OldPrice: 400,
      },
    ],
  },
  {
    Category: {
      Id: 2,
      Name: "Snacks",
    },
    SubCategories: [
      {
        Id: 1,
        Name: "Chips",
      },
      {
        Id: 2,
        Name: "Nuts",
      },
    ],
    Products: [
      {
        Id: 5,
        MainImageUrl: require("@/temp/home/products/5.webp"),
        Name: "Special Ispaghol Chilka 10 gram - اسپغول چھلکا",
        Price: 85,
        OldPrice: 100,
      },
      {
        Id: 6,
        MainImageUrl: require("@/temp/home/products/6.webp"),
        Name: "Lays Paprika 50g",
        Price: 85,
        OldPrice: 100,
      },
      {
        Id: 7,
        MainImageUrl: require("@/temp/home/products/7.webp"),
        Name: "Maxim's Creamy Choclate Fudge Toffee Pouch 500gm - 100+ Pcs",
        Price: 500,
        OldPrice: 400,
      },
      {
        Id: 8,
        MainImageUrl: require("@/temp/home/products/8.webp"),
        Name: "Candyland NOW Chocolate",
        Price: 60,
      },
    ],
  },
  {
    Category: {
      Id: 3,
      Name: "Noodle & Sauces",
    },
    SubCategories: [
      {
        Id: 1,
        Name: "Instant Noodles",
      },
      {
        Id: 2,
        Name: "Sauces",
      },
    ],
    Products: [
      {
        Id: 5,
        MainImageUrl: require("@/temp/home/products/5.webp"),
        Name: "Special Ispaghol Chilka 10 gram - اسپغول چھلکا",
        Price: 85,
        OldPrice: 100,
      },
      {
        Id: 6,
        MainImageUrl: require("@/temp/home/products/6.webp"),
        Name: "Lays Paprika 50g",
        Price: 85,
        OldPrice: 100,
      },
      {
        Id: 7,
        MainImageUrl: require("@/temp/home/products/7.webp"),
        Name: "Maxim's Creamy Choclate Fudge Toffee Pouch 500gm - 100+ Pcs",
        Price: 500,
        OldPrice: 400,
      },
      {
        Id: 8,
        MainImageUrl: require("@/temp/home/products/8.webp"),
        Name: "Candyland NOW Chocolate",
        Price: 60,
      },
    ],
  },
  {
    Category: {
      Id: 4,
      Name: "Achaar",
    },
    SubCategories: [
      {
        Id: 1,
        Name: "Pickles",
      },
    ],
    Products: [
      {
        Id: 5,
        MainImageUrl: require("@/temp/home/products/5.webp"),
        Name: "Special Ispaghol Chilka 10 gram - اسپغول چھلکا",
        Price: 85,
        OldPrice: 100,
      },
      {
        Id: 6,
        MainImageUrl: require("@/temp/home/products/6.webp"),
        Name: "Lays Paprika 50g",
        Price: 85,
        OldPrice: 100,
      },
      {
        Id: 7,
        MainImageUrl: require("@/temp/home/products/7.webp"),
        Name: "Maxim's Creamy Choclate Fudge Toffee Pouch 500gm - 100+ Pcs",
        Price: 500,
        OldPrice: 400,
      },
      {
        Id: 8,
        MainImageUrl: require("@/temp/home/products/8.webp"),
        Name: "Candyland NOW Chocolate",
        Price: 60,
      },
    ],
  },
  {
    Category: {
      Id: 5,
      Name: "Tea & Coffee",
    },
    SubCategories: [
      {
        Id: 1,
        Name: "Tea - چائے",
      },
      {
        Id: 2,
        Name: "Coffee - کافی",
      },
    ],
    Products: [
      {
        Id: 5,
        MainImageUrl: require("@/temp/home/products/5.webp"),
        Name: "Special Ispaghol Chilka 10 gram - اسپغول چھلکا",
        Price: 85,
        OldPrice: 100,
      },
      {
        Id: 6,
        MainImageUrl: require("@/temp/home/products/6.webp"),
        Name: "Lays Paprika 50g",
        Price: 85,
        OldPrice: 100,
      },
      {
        Id: 7,
        MainImageUrl: require("@/temp/home/products/7.webp"),
        Name: "Maxim's Creamy Choclate Fudge Toffee Pouch 500gm - 100+ Pcs",
        Price: 500,
        OldPrice: 400,
      },
      {
        Id: 8,
        MainImageUrl: require("@/temp/home/products/8.webp"),
        Name: "Candyland NOW Chocolate",
        Price: 60,
      },
    ],
  },
  {
    Category: {
      Id: 6,
      Name: "Baking & Desserts",
    },
    SubCategories: [
      {
        Id: 1,
        Name: "Baking",
      },
      {
        Id: 2,
        Name: "Desserts",
      },
    ],
    Products: [
      {
        Id: 5,
        MainImageUrl: require("@/temp/home/products/5.webp"),
        Name: "Special Ispaghol Chilka 10 gram - اسپغول چھلکا",
        Price: 85,
        OldPrice: 100,
      },
      {
        Id: 6,
        MainImageUrl: require("@/temp/home/products/6.webp"),
        Name: "Lays Paprika 50g",
        Price: 85,
        OldPrice: 100,
      },
      {
        Id: 7,
        MainImageUrl: require("@/temp/home/products/7.webp"),
        Name: "Maxim's Creamy Choclate Fudge Toffee Pouch 500gm - 100+ Pcs",
        Price: 500,
        OldPrice: 400,
      },
      {
        Id: 8,
        MainImageUrl: require("@/temp/home/products/8.webp"),
        Name: "Candyland NOW Chocolate",
        Price: 60,
      },
    ],
  },
];
