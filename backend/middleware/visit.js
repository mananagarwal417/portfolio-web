const user=require('../models/user');

const visit = async(req, res, next) => {
  await user.create({})
    .then(() => {
      console.log('Visitor recorded');
    })
    .catch((error) => {
      console.error('Error recording visitor:', error);
    });

  next();
};

module.exports = visit;
