// We don't actually do any validation here because
// that's not the point of this demo.
export default (req, res) => {
  if (req.headers.cookie && req.headers.cookie.includes('session')) {
    res.status(200);
  } else {
    res.status(401);
  }
  res.end();
};
