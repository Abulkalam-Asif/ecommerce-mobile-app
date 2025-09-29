export interface IBanner {
  Id: number;
  Title: string;
  LinkType?: string | null;
  CategoryId?: number | null;
  ProductId?: number | null;
  PictureId?: number;
  PictureUrl?: string;
  DisplayOrder?: number;
  IsActive?: boolean;
  IsMain?: boolean;
  CreatedOnUtc?: string;
  UpdatedOnUtc?: string;
}