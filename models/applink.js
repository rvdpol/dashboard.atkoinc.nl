var logger = require('../logger.js')

class AppLink {
    constructor(appListJson) {
        if(appListJson){

            try {
                console.log(appListJson.label);
                this.linkUrl = appListJson.linkUrl
                this.label = appListJson.label
                this.logoUrl = appListJson.logoUrl
            }
            catch(error) {
                logger.error(error);
            }
        }
    }
}

module.exports = AppLink