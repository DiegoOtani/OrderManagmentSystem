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
