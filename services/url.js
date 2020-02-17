var urlModel = require('../models').url;

var urlService = {};
// Define the service functions
urlService.getUrls = getUrls;

// Get urls when load the home page.
function getUrls(callback) {
  urlModel.findAll()
    .then(results => {
      callback({
        success: true,
        data: results
      });
    })
    .catch(error => {
      console.log(`Get URLs error found: ${error}`);
      callback({
        success: false,
        data: error
      });
    });
}

module.exports = urlService;
