import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Admin = sequelize.define("Admin", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
});
sequelize.sync()
    .then(() => {
        console.log("Admin table created successfully");
    })
    .catch(err => {
        console.error("Something went wrong:", err);
    });

export default Admin;
