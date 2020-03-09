function postalCalculator(req, res){
      var mailType = req.query.mailType;
      var weight = req.query.weight;
      var price;

      if (mailType === 'lettersStamped' && weight < 3.5) {
        price = 0.191;
      }
      if (mailType === 'lettersStamped' && weight > 3.5) {
        price = 0.295;
      }
      if (mailType === 'lettersMetered' && weight < 3.5) {
        price = 0.2;
      }
      if (mailType === 'lettersMeterd' && weight > 3.5) {
        price = 0.3;      
      }
      if (mailType == 'largeEnvelopes' && weight < 10) {
        price = 1.2
      }
      if (mailType == 'largeEnvelopes' && weight > 10) {
        price = 2.0;
      }
      if (mailType == 'first-classPackage' && weight <= 1){
        price = 7.50
      }
      if (mailType == 'first-classPackage' && weight >= 5){
        price = 11.95
      }
      console.log(price);

      return res.render("pages/calculated", {price: price})
  }

  module.exports = {postalCalculator:postalCalculator}

