exports.view = (req, res) => {
  res.status(200);
  res.setHeader('Content-Type', 'text/plain');
  res.end('Home | Welcome');
};
