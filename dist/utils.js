"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDate = void 0;
const parseDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString();
};
exports.parseDate = parseDate;
