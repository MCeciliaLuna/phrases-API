const Phrase = require("../models/phrase");

const getAllPhrases = async (req, res) => {
  try {
    const allPhrases = await Phrase.find();
    await res.json(allPhrases);
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
};

const getAdvicesAndPrudence = async (req, res) => {
  try {
    const allPhrases = await Phrase.find({ type: "Advices and prudence" });
    res.json(allPhrases);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getEducationAndEthic = async (req, res) => {
  try {
    const allPhrases = await Phrase.find({ type: "Education and ethic" });
    res.json(allPhrases);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getGoodAndEvil = async (req, res) => {
  try {
    const allPhrases = await Phrase.find({ type: "Good and evil" });
    res.json(allPhrases);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getHappinessAndUnhappiness = async (req, res) => {
  try {
    const allPhrases = await Phrase.find({ type: "Happiness and unhappiness" });
    res.json(allPhrases);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getHealthAndMedicine = async (req, res) => {
  try {
    const allPhrases = await Phrase.find({ type: "Health and medicine" });
    res.json(allPhrases);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const getHumanWisdom = async (req, res) => {
  try {
    const allPhrases = await Phrase.find({ type: "Human wisdom" });
    res.json(allPhrases);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getIntelligences = async (req, res) => {
  try {
    const allPhrases = await Phrase.find({ type: "Intelligences" });
    res.json(allPhrases);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getLawsPoliticsAndJustice = async (req, res) => {
  try {
    const allPhrases = await Phrase.find({ type: "Laws, politics and justice" });
    res.json(allPhrases);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getLife = async (req, res) => {
  try {
    const allPhrases = await Phrase.find({ type: "Life" });
    res.json(allPhrases);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getLogicReasoning = async (req, res) => {
  try {
    const allPhrases = await Phrase.find({ type: "Logic reasoning" });
    res.json(allPhrases);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getLoveAndFriendship = async (req, res) => {
  try {
    const allPhrases = await Phrase.find({ type: "Love and friendship" });
    res.json(allPhrases);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getNatureAndBeauty = async (req, res) => {
  try {
    const allPhrases = await Phrase.find({ type: "Nature and beauty" });
    res.json(allPhrases);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getPeopleWomanAndMan = async (req, res) => {
  try {
    const allPhrases = await Phrase.find({ type: "People, woman and man" });
    res.json(allPhrases);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getPhilosophy = async (req, res) => {
  try {
    const allPhrases = await Phrase.find({ type: "Philosophy" });
    res.json(allPhrases);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getReligion = async (req, res) => {
  try {
    const allPhrases = await Phrase.find({ type: "Religion" });
    res.json(allPhrases);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getSayings = async (req, res) => {
  try {
    const allPhrases = await Phrase.find({ type: "Sayings" });
    res.json(allPhrases);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getSuccessAndFailure = async (req, res) => {
  try {
    const allPhrases = await Phrase.find({ type: "Success and failure" });
    res.json(allPhrases);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getSufferingAndHope = async (req, res) => {
  try {
    const allPhrases = await Phrase.find({ type: "Suffering and hope" });
    res.json(allPhrases);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getTime = async (req, res) => {
  try {
    const allPhrases = await Phrase.find({ type: "Time" });
    res.json(allPhrases);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getTruthAndLies = async (req, res) => {
  try {
    const allPhrases = await Phrase.find({ type: "Truth and lies" });
    res.json(allPhrases);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getVirtueAndVices = async (req, res) => {
  try {
    const allPhrases = await Phrase.find({ type: "Virtue and vices" });
    res.json(allPhrases);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getWealthAndPoverty = async (req, res) => {
  try {
    const allPhrases = await Phrase.find({ type: "Wealth and poverty" });
    res.json(allPhrases);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getWork = async (req, res) => {
  try {
    const allPhrases = await Phrase.find({ type: "Work" });
    res.json(allPhrases);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllPhrases,
  getAdvicesAndPrudence,
  getEducationAndEthic,
  getGoodAndEvil,
  getHappinessAndUnhappiness,
  getHealthAndMedicine,
  getHumanWisdom,
  getIntelligences,
  getLawsPoliticsAndJustice,
  getLife,
  getLogicReasoning,
  getLoveAndFriendship,
  getNatureAndBeauty,
  getPeopleWomanAndMan,
  getPhilosophy,
  getReligion,
  getSayings,
  getSuccessAndFailure,
  getSufferingAndHope,
  getTime,
  getTruthAndLies,
  getVirtueAndVices,
  getWealthAndPoverty,
  getWork
};
