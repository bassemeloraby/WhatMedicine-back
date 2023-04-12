const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      // unique: [true, 'Please change your name'],
      set: function(value) {
        if (!value) {
          return value;
        }
        return value.charAt(0).toUpperCase() + value.slice(1);
      },
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
    role: {
      type: String,
      required: [true, 'Please add a role'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);