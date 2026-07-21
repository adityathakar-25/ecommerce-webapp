import jwt from 'jsonwebtoken'

const adminAuth = async (req, res, next) => {
    try {
        const jwtSecret = process.env.JWT_SECRET;
        if (!jwtSecret) {
            return res.status(500).json({ success: false, message: "Server misconfigured: JWT_SECRET missing" });
        }

        const { token } = req.headers;
        if (!token) {
            return res.status(401).json({ success: false, message: "Not authorized login again" });
        }

        const token_decode = jwt.verify(token, jwtSecret);

        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.status(401).json({ success: false, message: "Not authorized login again" });
        }
        return next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({ success: false, message: error.message });
    }
}

export default adminAuth
