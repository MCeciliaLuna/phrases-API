const { Router } = require("express");
const router = Router();
const { getAllPhrases,
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
  getWork } = require("./controllers/getPhrases");

router.get("/getAllPhrases", getAllPhrases);
router.get("/getAdvicesAndPrudence", getAdvicesAndPrudence)
router.get("/getEducationAndEthic", getEducationAndEthic)
router.get("/getGoodAndEvil", getGoodAndEvil)
router.get("/getHappinessAndUnhappiness", getHappinessAndUnhappiness)
router.get("/getHealthAndMedicine", getHealthAndMedicine)
router.get("/getHumanWisdom", getHumanWisdom)
router.get("/getIntelligences", getIntelligences)
router.get("/getLawsPoliticsAndJustice", getLawsPoliticsAndJustice)
router.get("/getLife", getLife)
router.get("/getLogicReasoning", getLogicReasoning)
router.get("/getLoveAndFriendship", getLoveAndFriendship)
router.get("/getNatureAndBeauty", getNatureAndBeauty)
router.get("/getPeopleWomanAndMan", getPeopleWomanAndMan)
router.get("/getPhilosophy", getPhilosophy)
router.get("/getReligion", getReligion)
router.get("/getSayings", getSayings)
router.get("/getSuccessAndFailure", getSuccessAndFailure)
router.get("/getSufferingAndHope", getSufferingAndHope)
router.get("/getTime", getTime)
router.get("/getTruthAndLies", getTruthAndLies)
router.get("/getVirtueAndVices", getVirtueAndVices)
router.get("/getWealthAndPoverty", getWealthAndPoverty)
router.get("/getWork", getWork)

module.exports = router;
