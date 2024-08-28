import { Order, User } from "../association/assocoation.js";
// Your existing createOrder and getOrders functions...


// Create a new order
export const createOrder = async (req, res) => {
    try {
        const { email, bookTitle, quantity } = req.body;

        // Search for the user by email
        const user = await User.findOne({ where: { email } });

        // If the user does not exist, return an error
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // If the user exists, create the order and associate it with the user
        const order = await Order.create({
            bookTitle,
            quantity,
            status: 'Pending', // Default status
            userId: user.id // Associate the order with the user
        });

        res.status(201).json({ message: 'Order placed successfully', order });
    } catch (error) {
        res.status(500).json({ message: 'Failed to place order', error: error.message });
    }
};


// Fetch all orders
export const getOrders = async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.status(200).json({ orders });
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch orders', error: error.message });
    }
};
