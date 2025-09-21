export interface IProduct {
  Id: number;
  Name: string;
  ShortDescription: string;
  Sku: string;
  Price: number;
  OldPrice: number;
  MainImageUrl: string;
  ThumbnailUrl: string;
  InStock: boolean;
  StockAvailability: string;
  HasDiscounts: boolean;
  CreatedOnUtc: string;
  UpdatedOnUtc: string;
}

export interface IProductImage {
  Id: number;
  ImageUrl: string;
  ThumbnailUrl: string;
  AltText: string;
  Title: string;
  DisplayOrder: number;
}

export interface IProductSpecification {
  AttributeName: string;
  AttributeValue: string;
  DisplayOrder: number;
}

export interface IProductStockInfo {
  InStock: boolean;
  StockQuantity: number;
  StockAvailability: string;

  ManageInventoryMethod: number;
  ManageInventoryMethodName: string;
}

// Detailed product info extending the basic interface
export interface IProductDetails extends IProduct {
  FullDescription: string;
  ProductCost: number;
  DisableBuyButton: boolean;
  Specifications: IProductSpecification[];
  StockInfo: IProductStockInfo;
  MinimumQuantity: number;
  
  ManufacturerPartNumber: string;
  Gtin: string;
  DisableWishlistButton: boolean;
  CallForPrice: boolean;
  CustomerEntersPrice: boolean;
  MinimumCustomerEnteredPrice: number;
  MaximumCustomerEnteredPrice: number;
  Weight: number;
  Length: number;
  Width: number;
  Height: number;
  Images: IProductImage[];

}
