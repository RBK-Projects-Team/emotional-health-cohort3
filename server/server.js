let express = require("express"),
  fs = require("fs"),
  readline = require("readline"),
  { google } = require("googleapis"),
  request = require("request"),
  { GoogleSpreadsheet } = require("google-spreadsheet");
(creds = require("../client_secret.json")), (app = express());

// change the path to deifne the path to front-end html file.
//   app.use(express.static(__dirname+"/public"));

app.get("/", (req, res) => {
  res.send("Hello World of Google APIs");
});
//adding a view engine to read ejs files.
app.set("view engine", "ejs");

//test api to render.
app.get("/test", function (req, res) {
  res.render("test");
});

//google spread sheet api - can edit.
app.get("/google-spreadsheet", async (req, res) => {
  // Identifying which document we'll be accessing/reading from
  var doc = new GoogleSpreadsheet("1305f60d2e808881deec8406dfff2792b4f529f2");
  const sheet = doc.sheetsByIndex[0];

  // authentication load directly from json file
  doc.useServiceAccountAuth(creds);
  //loading info
  //   doc.loadInfo();
  await sheet.loadInfo();
  const rows = sheet.getRows();
  console.log(rows);
  // loads document properties and worksheets
  // await doc.loadInfo();
  //console.log(data from the spead sheet)
  // console.log(doc.title);
  //updating the props.
  // await doc.updateProperties({ title: 'renamed doc' });

  // const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
  // console.log(sheet.title);
  // console.log(sheet.rowCount);

  // const newSheet = await doc.addSheet({ title: 'hot new sheet!' });
  // await newSheet.delete();

  // Authentication ------------ later use
  //   doc.useServiceAccountAuth(creds, function (err) {
  //     // Adding a row in tab #4 with the date and the number 1
  //     doc.addRow(4, { date: "=today()", progress: "1" }, callback);

  //     function callback(err) {
  //       if (err) {
  //         console.log(err);
  //       } else {
  //         console.log("You added your progress for the day.");

  //         // Rendering test page
  //         res.render("test");
  //       }
  //     }
  //   });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
  console.log(`☠☠ listening to ${PORT} ☠☠`);
});
