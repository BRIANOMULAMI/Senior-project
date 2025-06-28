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
const __1 = require("../..");
const AdminApproveSchoolCompetition = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { status } = req.body;
    if (!id) {
        res.status(400).json({ message: "Please provide all fields" });
        return;
    }
    try {
        const participant = yield __1.db.participants.findFirst({
            where: {
                competitionId: id,
            },
            select: {
                id: true,
                school: {
                    select: {
                        user: {
                            select: {
                                name: true,
                                email: true,
                            },
                        },
                    },
                },
                competition: {
                    select: {
                        name: true,
                        schedule: true,
                        venue: true,
                    },
                },
            },
        });
        if (!participant) {
            res.status(404).json({ message: "Participation request  not found" });
            return;
        }
        yield __1.db.participants.update({
            where: {
                id: participant.id,
            },
            data: {
                status: status,
            },
        });
        res.status(200).json({ message: "Participation request updated" });
        return;
    }
    catch (error) {
        console.log({ error });
        res.status(500).json({ message: "Internal server error" });
        return;
    }
});
const AdminDeleteParticipant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({ message: "Participation Id was not provided" });
        return;
    }
    try {
        const participation = yield __1.db.participants.findFirst({
            where: {
                competitionId: id,
            },
        });
        if (!participation) {
            res.status(404).json({ message: "Participation not found" });
            return;
        }
        yield __1.db.participants.delete({
            where: {
                id: participation.id,
            },
        });
        res.status(200).json({ message: "Participation Deleted" });
        return;
    }
    catch (error) {
        console.log({ error });
        res.status(500).json({ message: "Internal server error" });
        return;
    }
});
exports.default = {
    AdminApproveSchoolCompetition,
    AdminDeleteParticipant,
};
