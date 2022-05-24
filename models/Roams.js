const mongoose = require("mongoose");

const roamSchema = new mongoose.Schema(
	{
		destination: {
			type: String,
			required: true,
		},
		country: {
			type: String,
			required: true,
		},
		region: {
			type: String,
			required: true,
		},
		budget: {
			type: Number,
			required: true,
		},
		urge: {
			type: String,
			required: true,
		},
		travel_date: {
			type: Date,
			default: Date.now,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Roams", roamSchema);
