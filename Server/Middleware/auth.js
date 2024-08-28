// import jwt from 'jsonwebtoken';

// const verifyToken = (req, res, next) => {
//     const authHeader = req.headers.authorization;

//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//         return res.status(401).json({ message: "Unauthorized user" });
//     }

//     const tokenValue = authHeader.split(" ")[1];

//     try {
//         const decoded = jwt.verify(tokenValue, "abcde");
//         console.log(decoded);

//         req.user = decoded; // Decoded information (like user ID) can be attached to the request object if needed

//         next();
//     } catch (err) {
//         console.error(err);
//         return res.status(401).json({ message: "Unauthorized user" });
//     }
// };
// export default verifyToken
