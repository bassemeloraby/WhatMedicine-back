const mongoose = require('mongoose');

const companySchema = mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
      unique: true,
      set: function(value) {
        if (!value) {
          return value;
        }
        return value.charAt(0).toUpperCase() + value.slice(1);
      },
    },
    website:{
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Company', companySchema);
