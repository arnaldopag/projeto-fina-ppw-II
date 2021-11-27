module.exports = (res, req, err) => {
    res.json({
        error: err.message,
    });
};
