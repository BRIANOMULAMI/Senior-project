"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sender = exports.mailTrapClient = void 0;
const mailtrap_1 = require("mailtrap");
const token = process.env.MAILTRAP_TOKEN;
exports.mailTrapClient = new mailtrap_1.MailtrapClient({
    token,
});
exports.Sender = {
    email: "info@gklelei.online",
    name: "E-Music",
};
