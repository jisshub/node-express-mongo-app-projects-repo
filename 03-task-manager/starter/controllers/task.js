const asyncHandler = require('../middlewares/async');
const ErrorResponse = require('../utils/errorResponse');

exports.getTask = asyncHandler(async (req, res, next) => {
    res.status(200).json({ success: true, data: 'Get task' });
})