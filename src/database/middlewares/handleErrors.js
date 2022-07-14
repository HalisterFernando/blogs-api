module.exports = (err, _req, res, _next) => {
    const { name, message } = err;
    switch (name) {
        case 'InvalidFields':
            return res.status(400).json({ message });
        case 'AlreadyExists':
            return res.status(409).json({ message });
        default:
            return res.status(500).json({ message });
    }
};