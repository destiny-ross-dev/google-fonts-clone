const { Router } = require("express");
const { getAll, getPage } = require("./fonts.controller");

const fontsRouter = Router();

// GET api/v1/fonts
fontsRouter.route("/").get(getPage);
fontsRouter.route("/init").get(getAll);

module.exports = fontsRouter;
