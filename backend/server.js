import app from "./src/app.js";
import "dotenv/config";
import "./config/db.js";

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
