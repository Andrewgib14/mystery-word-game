const express = require("express");
const indexRoutes = express.Router();
const app = express();

// app.use("/", indexRoutes)

indexRoutes.get("/", (req, res) => {
    res.render("main", req.sessions);
});


module.exports = indexRoutes;







