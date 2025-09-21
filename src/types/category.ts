export interface ICategory {
  Id: number;
  Name: string;
  Description?: string;
  CategoryTemplateId?: number;
  MetaKeywords?: string;
  MetaDescription?: string;
  MetaTitle?: string;
  ParentCategoryId?: number;
  PictureId?: number;
  PictureUrl?: string;
  PageSize?: number;
  AllowCustomersToSelectPageSize?: boolean;
  PageSizeOptions?: string;
  PriceRanges?: string;
  ShowOnHomepage?: boolean;
  IncludeInTopMenu?: boolean;
  HasDiscountsApplied?: boolean;
  DisplayOrder?: number;
  Published?: boolean;
  CreatedOnUtc?: string;
  UpdatedOnUtc?: string;
  SubCategories?: string[];
}
