"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendMail = void 0;
const mail_1 = require("./mail");
const SendMail = (_a) => __awaiter(void 0, [_a], void 0, function* ({ html, recepient, sender, subject, }) {
    try {
        yield mail_1.mailTrapClient.send({
            from: sender,
            to: recepient,
            subject,
            html,
        });
    }
    catch (error) {
        console.log({ error });
    }
});
exports.SendMail = SendMail;
