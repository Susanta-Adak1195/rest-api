const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/bfhl", async (req, res) => {
  const data = req.body;
  let arr = data.data;
  let even = [];
  let odd = [];
  let alphabet = [];
  async function check(reqarr) {
    reqarr.forEach((element) => {
      if (!isNaN(element)) {
        let number = parseInt(element);
        if (number % 2 == 0) even.push(element);
        else odd.push(element);
      } else alphabet.push(element);
    });
  }
  await check(arr);

  let resdata = {
    is_success: true,
    user_id: "john_doe_17091999",
    email: "john@xyz.com",
    roll_number: "ABCD123",
    odd_numbers: odd,
    even_numbers: even,
    alphabets: alphabet
  };
  res.status(200).json(resdata);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
