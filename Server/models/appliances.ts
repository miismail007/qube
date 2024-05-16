const mongoose = require("mongoose");

const appliancesSchema = mongoose.Schema({
    serialNo:{
        type: String,
        required: true
    },
    theatreName:{
        type: String,
        required: true
    },
    location:{
        city: String,
        state: String,
        country: String
    },
    bandwidth:{
        type: String
    },
    avgBandwidth:{
        type: String,
    },
    deviceStatus:{
        type: String,
        enum: ["offline", "online"],
        required: true
    },
    downloadStatus:{
        type: String,
        enum: ["failed", "cancelled", "downloading", "succeeded"],
    },
    osVersion:{
        type: String
    },
    ispPaymentResponsibility: {
        type: String
    },
    planStartDate: {
        type: String
    },
    billingCycle: {
        type: String,
        enum: ["monthly", "quarterly", "annual"]
    },
    storage: {
        type: String
    },
});
module.exports = mongoose.model("Appliances", appliancesSchema);
