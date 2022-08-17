const { userSchema, User} = require('./user.model');
const { customerSchema, Customer } = require('./customer.model');
const { categorySchema, Category } = require('./category.model');
const { productSchema, Product } = require('./product.model');
const { orderSchema, Order } = require('./order.model');
const { orderProductSchema, OrderProduct } = require('./order-product.model');

function setupModels(sequelize) {
  User.init(userSchema, User.config(sequelize));
  Customer.init(customerSchema, Customer.config(sequelize));
  Category.init(categorySchema, Category.config(sequelize));
  Product.init(productSchema, Product.config(sequelize));
  Order.init(orderSchema, Order.config(sequelize));
  OrderProduct.init(orderProductSchema, OrderProduct.config(sequelize));

  //Relations
  Customer.associate(sequelize.models);
  User.associate(sequelize.models);
  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
  Order.associate(sequelize.models);
}

module.exports = setupModels;
