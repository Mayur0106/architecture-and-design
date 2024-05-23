const API_CONTEXT = process.env.API_CONTEXT || '/api';
const controller = require("../controllers/card.controller");
const path = require('path');

module.exports = function (app) {
    // app.use(function (req, res, next) {
    //     res.header(
    //         "Access-Control-Allow-Headers",
    //         "x-access-token, Origin, Content-Type, Accept"
    //     );
    //     next();
    // });
 

    app.post(
        API_CONTEXT + "/auth/createCard",
        controller.createcard
    );


    app.get(
        API_CONTEXT + "/auth/getCard",
        controller.getCards
    );
    
}


