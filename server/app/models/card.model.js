module.exports = (sequelize, Sequelize) => {
    const Card = sequelize.define("cards", {
        
        name: {
            type: Sequelize.STRING
        },
        phone_number: {
            type: Sequelize.STRING
        },
        address:{
            type: Sequelize.TEXT // Change the data type to TEXT
        },
        email: {
            type: Sequelize.STRING
        }
        
    });

    return Card;
};
