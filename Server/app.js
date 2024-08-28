import bodyParser from "body-parser";
import cors from 'cors';
import express from "express";
import fileUpload from 'express-fileupload';
import BookRouter from './routes/book.router.js';
import OrderRouter from './routes/order.router.js';
import UserRouter from './routes/user.router.js';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(fileUpload({
    useTempFiles: true
}))

app.use(cors())


app.use("/api", UserRouter);
app.use("/api", BookRouter);
app.use('/api', OrderRouter)



app.listen(3000, () => {
    console.log("Server Started....");
});
