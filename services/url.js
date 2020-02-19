var urlModel = require('../models').Url;

var urlService = {};
// Define the service functions
urlService.getUrls = getUrls;

// Get urls when load the home page.
function getUrls(callback) {
  urlModel.findAll()
    .then(results => {
      var sendData = [];

      for(var obj of results) {
        sendData.push(obj.get());
      }

      callback({
        success: true,
        urls: sendData
      });
    })
    .catch(error => {
      console.log(`Get URLs error found: ${error}`);
      callback({
        success: false,
        urls: error
      });
    });
}

module.exports = urlService;
