const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Static CSS, images etc.
app.use(express.static(path.join(__dirname, "public")));

// Routes for HTML pages
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "home.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "contact.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
