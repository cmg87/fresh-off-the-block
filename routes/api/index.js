const router = require("express").Router();
const api = require("./api");

router.use("/backend", api);

module.exports = router;
