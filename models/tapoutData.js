const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const tapoutdataSchema = new Schema({
  FILEGENERATIONDATE: String,
  FIRSTCALLDATE: String,
  LASTCALLDATE: String,
  OPERATORTADIG: String,
  VPLMNCIRCLE: String,
  SENDERTADIG: String,
  HPLMNCIRCLE: String,
  TAPOUTFILENAME: String,
  SEQUENCE: Number,
  COUNTOFCDR: Number,
  MOCCOUNT: Number,
  MOCACTUALDURATION: Number,
  MOCTOTALDURATION: Number,
  MOCTOTALSDR: Number,
  MTCCOUNT: Number,
  MTCACTUALDURATION: Number,
  MTCTOTALDURATION: Number,
  MTCTOTALSDR: Number,
  SMSMOCOUNT: Number,
  SMSMOTOTALSDR: Number,
  SMSMTCOUNT: Number,
  SMSMTTOTALSDR: Number,
  GPRSCOUNT: Number,
  GPRSACTUALVOLUME: Number,
  GPRSBILLEDVOLUME: Number,
  GPRSTOTALSDR: Number,
  NETSDR: Number,
  TAXSDR: Number,
  GROSSSDR: Number,
  NETUSD: Number,
  TAXUSD: Number,
  GROSSUSD: Number,
  Country: String,
});

const tapout = mongoose.model("tapoutdata", tapoutdataSchema);
module.exports = tapout;
