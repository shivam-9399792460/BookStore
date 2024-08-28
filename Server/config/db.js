import { Sequelize } from "sequelize";

const sequelize = new Sequelize("book_db", "root", "Shivam@4710", {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(result => {
        console.log("Database connected...");
    }).catch(err => {
        console.log(err);
    });

export default sequelize;