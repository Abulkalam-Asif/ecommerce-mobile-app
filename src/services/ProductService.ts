import { apiClient } from "../api";
import { IProductDetails } from "../types";

class ProductService {
  async getProduct(id: number): Promise<IProductDetails> {
    return apiClient.get(`/api/products/${id}`);
  }
}

const productService = new ProductService();
export default productService;
