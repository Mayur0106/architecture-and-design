const { where } = require('sequelize');
const validator = require('../config/validator');
const db = require('../models');
const Card = db.card;

exports.createcard = async (req, res) => {
    try {
        console.log("req.body", req.body);

        const validationRules = {
            name: 'required',
            phone_number: 'required',
            address: 'required',
            email: 'required|email',
        };

        await validator(req.body, validationRules, {}, (error, status) => {
            if (!status) {
                console.log( " Validation falied ");
                return res.status(412).send({
                    success: false,
                    message: 'Validation failed',
                    data: error
                });
            }

            // Create card
            Card.create({
                name: req.body.name,
                phone_number: req.body.phone_number,
                address: req.body.address,
                email: req.body.email,
            }).then((card) => {
                res.status(200).send({
                    success: true,
                    message: "Card created successfully!",
                    data: card
                });
            }).catch((err) => {
                res.status(400).send({ 
                    success: false, 
                    message: "Error creating card",
                    error: err.message 
                });
            });
        });
    } catch (error) {
        res.status(500).send({ 
            success: false, 
            message: error.message || "Something went wrong" 
        });
    }
};

exports.getCards = async (req, res) => {
    try {
        const cards = await Card.findAll();

        if (!cards.length) {
            return res.status(404).json({
                success: false,
                message: "No cards found."
            });
        }

        return res.status(200).json({
            success: true,
            message: "Cards found successfully!",
            data: cards
        });
    } catch (error) {
        console.error("Error fetching cards:", error);
        res.status(500).json({
            success: false,
            message: "Something went wrong while fetching cards."
        });
    }
};
