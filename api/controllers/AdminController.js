async function create(req, res, next) {
  try {
    res.status(200).json({
      message: 'all successfuly',
    });
  } catch (error) {
    next(error);
  }
}
async function show(req, res, next) {
  try {
    res.status(200).json({
      message: 'all successfuly',
    });
  } catch (error) {
    next(error);
  }
}
async function update(req, res, next) {
  try {
    res.status(200).json({
      message: 'all successfuly',
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  create,
  show,
  update,
};
