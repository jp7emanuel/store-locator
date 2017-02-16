export default (err, req, res, next, status = 500) => {
  if (res.headersSent) {
    return next(err);
  }

  return res.status(status).render('error', { error: err });
}
