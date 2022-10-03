import ProductDAO from "./ProductDAO.class.js";
import ProductDTO from "./ProductDTO.class.js";

class ProductRepository {
  constructor() {
    this.dao = new ProductDAO();
  }

  create = async (newProduct) => {
    return await this.dao.create(newProduct);
  };

  getAll = async () => {
    return await this.dao.getAll();
  };

  getAllWithCurrencies = async () => {
    const products = await this.dao.getAll();

    const productsDTO = products.map((product) => {
      const currencies = {
        dolarPrice: cotizador.getCurrencyPrice(product.price, "USD"),
        arsPrice: cotizador.getCurrencyPrice(product.price, "ARS"),
        uyuPrice: cotizador.getCurrencyPrice(product.price, "UYU"),
      };

      return new ProductDTO(product, currencies);
    });

    return productsDTO;
  };
}

export default ProductRepository;
