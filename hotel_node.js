const express = require("express");
const { Worker } = require("worker_threads");

const app = express();

// app.get("/", (req, res) => {
//     res.sendFile("E:/GRE Jamboree/PENN STATE/Study/Spring 2023/OS Dr.tran/project/" + "done.html");
//   });

app.get("/done", async (req, res) => {
    const worker_1 = new Worker("./hotel_1.js");
    const worker_2 = new Worker("./hotel.js");
    worker_1.on("message", (data) => {
        console.log(data);
      });
    res.sendFile("E:/GRE Jamboree/PENN STATE/Study/Spring 2023/OS Dr.tran/project/" + "index.html");
});


var server=app.listen(3000);