const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
      required: true,
      set: function(value) {
        if (!value) {
          return value;
        }
        return value.charAt(0).toUpperCase() + value.slice(1);
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Product', productSchema);
