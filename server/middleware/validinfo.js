module.exports = async (req, res, next) => {
    const { email, name, password } = req.body;

    const validEmail = (email) => {
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            email
        );
    };

    if (req.path === '/register') {
        if (![email, name, password].every(Boolean)) {
            return res.status(401).json('Missing credentials');
        }
        if (!validEmail(email)) {
            return res.status(401).json('Invalid Email');
        }
    } else if (req.path === '/login') {
        if (![email, password].every(Boolean)) {
            return res.status(401).json('Missing credentials');
        }
        if (!validEmail(email)) {
            return res.status(401).json('Invalid Email');
        }
    }

    next();
};
