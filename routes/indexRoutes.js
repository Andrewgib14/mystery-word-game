const express = require("express");
const indexRoutes = express.Router();

// app.use("/", indexRoutes)

indexRoutes.get("/", (req, res) => {
    res.render("index", req.sessions);
});


module.exports = indexRoutes;







