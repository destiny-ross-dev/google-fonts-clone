const axios = require("axios");
const config = require("../../config");

let fonts = [];

const getAll = async (req, res) => {
  console.log(config);
  const fontsList = await axios.get(
    `https://www.googleapis.com/webfonts/v1/webfonts?key=${config.secrets.gFontsKey}&sort=popularity`
  );
  console.log(fontsList.data.items);

  fonts = fontsList.data.items;
};

const getPage = (req, res) => {
  let { offset } = req.query;
  !offset && (offset = 12);
  console.log(offset);
  console.log("get fonts in page");
  let arr = [];
  for (let i = offset - 12; i < offset; i++) {
    arr.push(fonts[i]);
  }
  console.log(arr);
  res.status(200).json({ length: arr.length, arr });
};

module.exports = { getAll, getPage };
