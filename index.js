import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Render يعطيك PORT تلقائياً
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ status: "Server is running ✔️" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
