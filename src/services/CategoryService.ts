import { apiClient } from "../api";
import { ICategory } from "../types";

class CategoryService {
  async getCategories(): Promise<ICategory[]> {
    return apiClient.get("/api/categories");
  }

  async getCategory(id: number): Promise<ICategory> {
    return apiClient.get(`/api/categories/${id}`);
  }

  async getCategoryProducts(id: number): Promise<{
    Category: ICategory;
    Products: any[];
    TotalProducts: number;
    PageIndex: number;
    PageSize: number;
    TotalPages: number;
  }> {
    return apiClient.get(`/api/categories/${id}/products`);
  }
}

const categoryService = new CategoryService();
export default categoryService;
