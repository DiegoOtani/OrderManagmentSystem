const readline = require('readline');
const AuthService = require('./AuthService');
const CatalogService = require('./CatalogService');
const OrderService = require('./OrderService');
const PaymentService = require('./PaymentService');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const authService = new AuthService();
const catalogService = new CatalogService();
const orderService = new OrderService();
const paymentService = new PaymentService();

console.log("Bem vindo ao sistema de gerenciamento de pedidos!");

rl.question("Informe o seu usuário: ", (username) => {
  rl.question("Informe a sua senha: ", (password) => {
    const token = authService.login(username, password);
    if(!token) {
      console.log("Usuário ou senha inválidos. Encerrando sessão.");
      rl.close();
      return;
    }

    const user = authService.validateToken(token);
    console.log("Login realizado com sucesso! \n");

    console.log("Produtos disponíveis:");
    const products = catalogService.getProducts();
    console.log(products);

    rl.question("Informe o ID do produto que deseja comprar: ",(productId) => {
      rl.question("Informe a quantidade que deseja comprar:", (quantity) => {
        
        if(!catalogService.checkStock(parseInt(productId), parseInt(quantity))) {
          console.log("Estoque insuficiente. Finalizando pedido.");
          rl.close();
          return;
        }

        const updatedProduct = catalogService.reduceStock(parseInt(productId), parseInt(quantity));
        console.log("\nInformações do produto escolhido:");
        console.log(updatedProduct);
      })
    })
  })
})