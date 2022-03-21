const getCats = (req, res) => {
    res.send({
      msg: 'getting cats'
    })
  }
  const findCat = (req, res) => {
  res.send({
    msg: `found cat with an id of ${req.params.catId}`
  })
  }
  const bothParams = (req, res) => {
    res.send({
      msg: `getting ${req.params.catName}, a cat with an id of ${req.params.catId}`
    })
  }
  const getWow = (req, res) => {
    res.send({
      msg: "Wow, that's a very detailed path for no reason"
    })
  }
  const getCatDetails = (req, res) => {
    res.send({
      msg: `my cats name is ${req.query.catName}, he/she is ${req.query.catAge} years old`
    })
  }
  const createCat = (req, res) => {
      console.log(req.params);
      
      res.send(req.body)
  }

  module.exports = {
  getCats,
  findCat,
  bothParams,
  getWow,
  getCatDetails,
  createCat
  }