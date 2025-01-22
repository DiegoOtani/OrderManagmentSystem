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

  checkStock(productId, quantity) {
    const product = this.products.find(prod => prod.id === productId);
    
    if(!product) {
      console.log("CatalogService: Produto não encontrado.");
      return false;
    }

    if(product.stock < quantity) {
      console.log("CatalogService: Estoque insuficiente.");
      return false;
    }

    console.log("CatalogService: Estoque disponível.");
    return true;
  }
}

module.exports = CatalogService;