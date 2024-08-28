import { DataTypes } from "sequelize";
import sequelize from "../config/db.js"; // Ensure you have a db.js file in config directory


const Book = sequelize.define('Book', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    publication_year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false

    },
    image: {
        type: DataTypes.BLOB('long'), // <- type for image ( database :postgresql )
        allowNull: true
    }


});
// title,author, category,price,description

// Syncing the model with the database
sequelize.sync()
    .then(() => {
        console.log("Book table created successfully");
    })
    .catch(err => {
        console.error("Something went wrong:", err);
    });

export default Book;
