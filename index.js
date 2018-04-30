"use strict";
exports.__esModule = true;
var nodemailer_1 = require("nodemailer");
var config_1 = require("./../config");
var transporter = nodemailer_1.createTransport({
    service: "gmail",
    auth: {
        user: config_1["default"].email,
        pass: config_1["default"].password
    }
});
var mailOptions = {
    from: '"Fred Foo 👻" <foo@example.com>',
    to: 'nicosalvador@creatinginfo.com',
    subject: 'Hello ✔',
    text: 'Hello world?',
    html: '<b>Hello world?</b> Email!'
};
transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
});
