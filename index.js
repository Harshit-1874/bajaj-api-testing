const express = require("express");

const app = express();

app.post("/bfhl", async (req, res) => {
  try {
    const data = req.body;
    const s = true;
    const user = "harshit_aggarwal_18072004";
    const email = "harshit1084.be21@chitkarauniversity.edu.in";
    const roll = "2111981084";
    const numbers = [];
    const alphabets = [];
    //for loop to traverse through data
    const regex = /^[a-zA-Z]+$/;
    for (let i = 0; i < data.length; i++) {
      //check if the string in data is numbers or alphabets
      if (regex.test(data[i])) {
        alphabets.push(data[i].toUppercase());
      } else {
        numbers.push(data[i]);
      }
    }
    const odd_numbers = [];
    const even_numbers = [];

    //for loop to traverse through numbers
    for (let i = 0; i < numbers.length; i++) {
      //convert the string of number into integer and check parity
      const d = parseInt(numbers[i]);
      if (d % 2 == 0) {
        even_numbers.push(numbers[i]);
      } else {
        odd_numbers.push(numbers[i]);
      }
    }

    res.json({
      is_success: s,
      user_id: user,
      email: email,
      roll_number: roll,
      odd_numbers: odd_numbers,
      even_numbers: even_numbers,
      alphabets: alphabets,
    });
  } catch (e) {
    const s = false;
    res.json({
      is_success: s,
      error: e,
    });
  }
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
