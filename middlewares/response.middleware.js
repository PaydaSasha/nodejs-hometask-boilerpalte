const responseMiddleware = (req, res, next) => {
   // TODO: Implement middleware that returns result of the query
   
    next();
}

exports.responseMiddleware = responseMiddleware;