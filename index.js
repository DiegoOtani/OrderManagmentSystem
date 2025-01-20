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
const catalogServic = new CatalogService();
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
  })
})