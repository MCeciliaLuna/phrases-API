const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const phrase = new Schema({
  phrase: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true,
    uppercase: true,
  },
  type: {
    type: String,
    enum: [
      "Love and friendship",
      "Good and evil",
      "Advices and prudence",
      "Religion",
      "Education and ethic",
      "Success and failure",
      "Happiness and unhappiness",
      "Intelligences",
      "Laws, politics and justice",
      "Philosophy",
      "People, woman and man",
      "Sayings",
      "Suffering and hope",
      "Logic reasoning",
      "Wealth and poverty",
      "Human wisdom",
      "Health and medicine",
      "Time",
      "Work",
      "Truth and lies",
      "Life",
      "Virtue and vices",
      "Nature and beauty",
    ],
    required: true,
  },
});

module.exports = mongoose.model("phrase", phrase);
