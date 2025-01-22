class CatalogService {
  constructor() {
    this.products = [
      { id: 1, name: "Produto A", price: 100, stock: 10 },
      { id: 2, name: "Produto B", price: 200, stock: 20 },
    ];
  }

  getProducts() {
    console.log("CatalogService: Retornando lista de produtos.");
    return this.products;
  }
}

module.exports = CatalogService;