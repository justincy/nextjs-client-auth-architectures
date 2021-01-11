import cookie from 'cookie';

// We don't actually do any validation here because
// that's not the point of this demo.
export default (req, res) => {
  const cookies = cookie.parse(req.headers.cookie || '');
  res.status(200).json({
    auth: !!cookies.session
  });
};
