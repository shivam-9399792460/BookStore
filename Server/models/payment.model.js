import { DataTypes } from "sequelize";
import sequelize from "../config/db";

const Payment = sequelize.define('Payment', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    currency: {
        type: DataTypes.DECIMAL(10, 2)
    }
})