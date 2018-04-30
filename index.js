"use strict";
exports.__esModule = true;

var nodemailer_1 = require("nodemailer");
var config_1 = require("./config");

var transporter = nodemailer_1.createTransport({
    service: "gmail",
    auth: {
        user: config_1["default"].email,
        pass: config_1["default"].password
    }
});

var mailOptions = {
    from: "'Soft Kitty 🐱🐱🐱' <noreply@example.com>", // will be replaced by actual Gmail account used
    to: "example@example.com",
    subject: "Woof 🐶",
    text: "Hello world? Email!",
    html: "<b>Hello world?</b> Email!"
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
});
