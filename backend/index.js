/* express server*/
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const noticeRoute = require("./routes/noticeboard");

/*donenv config */

require("dotenv").config();
mongoose.set('strictQuery', false);
const app = express();
const port = process.env.PORT ||  8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/api', apiRouter);
app.use("/noticeboard", noticeRoute);
app.use("/users", require("./routes/users"));

app.get('/', (req, res) => {
    res.send('Hello World!');
});



mongoose
  .connect("mongodb+srv://abcd:1234@cluster0.txw2hah.mongodb.net/noticeApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  });
