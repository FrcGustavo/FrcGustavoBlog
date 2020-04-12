async function index(req, res, next) {
  try {
    res.json({
      message: 'all successfuly',
      data: {},
    });
  } catch (error) {
    next(error);
  }
}

async function create(req, res, next) {
  try {
    res.json({
      message: 'all successfuly',
      data: {},
    });
  } catch (error) {
    next(error);
  }
}

async function show(req, res, next) {
  try {
    res.json({
      message: 'all successfuly',
      data: {},
    });
  } catch (error) {
    next(error);
  }
}

async function update(req, res, next) {
  try {
    res.json({
      message: 'all successfuly',
      data: {},
    });
  } catch (error) {
    next(error);
  }
}

async function destroy(req, res, next) {
  try {
    res.json({
      message: 'all successfuly',
      data: {},
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  index,
  create,
  show,
  update,
  destroy,
};
