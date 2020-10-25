export const checkAdmin = (req, res, next) => {
    let { userData } = req;
    if (userData) {
        if (userData.generate.Role === 'Admin') {
            return next();
        } else {

            return res.status(403).json({
                Message: "Unauthorized. The right reserve and Admin only",
            });
        }
    } else {
        return res.status(403).json({
            Message: "Unauthorized. Log in first",
            });
        }
};