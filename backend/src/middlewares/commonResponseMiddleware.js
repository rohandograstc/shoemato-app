const commonResponseMiddleware = (req, res, next) => {
  // Define a function to send the common response format
  res.sendResponse = (
    data,
    message = "Success",
    statusCode = 200,
    meta = {}
  ) => {
    const response = {
      success: true,
      message,
      data,
      ...meta,
    };

    res.status(statusCode).json(response);
  };

  // Define a function to send an error response
  res.sendError = (
    message = "Internal Server Error",
    statusCode = 500,
    error = null
  ) => {
    const response = {
      success: false,
      message,
      error,
    };

    res.status(statusCode).json(response);
  };

  next();
};

export default commonResponseMiddleware;
