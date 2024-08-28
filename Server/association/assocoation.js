import sequelize from "../config/db.js";
import Order from '../models/order.model.js';
import User from "../models/user.model.js";


// Define associations here
User.hasMany(Order, { foreignKey: 'userId', onDelete: 'CASCADE' });
Order.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });

// Export models and sequelize instance
export { Order, User, sequelize };

