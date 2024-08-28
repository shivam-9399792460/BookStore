import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Order = sequelize.define('Order', {
    bookTitle: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'Pending',
    },
});
sequelize.sync()
    .then(() => {
        console.log("Order table created successfully");
    })
    .catch(err => {
        console.error("Something went wrong:", err);
    });

export default Order;
