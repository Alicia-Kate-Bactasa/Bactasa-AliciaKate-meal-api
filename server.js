const express = require("express");

const app = express();
const PORT = 3000;

const menu = [
  { id: 1, name: "Adobo", price: 120 },
  { id: 2, name: "Lumpia", price: 60 },
  { id: 3, name: "Burger", price: 150 },
  { id: 4, name: "Sinigang", price: 180 },
  { id: 5, name: "Kare-Kare", price: 210 },
  { id: 6, name: "Carbonara", price: 170 },
  { id: 7, name: "Pancit Canton", price: 140 },
  { id: 8, name: "Beef Caldereta", price: 220 },
  { id: 9, name: "Margherita Pizza", price: 260 },
  { id: 10, name: "Spicy Chicken Wrap", price: 160 },
  { id: 11, name: "Baked Salmon", price: 290 },
  { id: 12, name: "Tapsilog", price: 130 }
];

app.get("/api/menu", (req, res) => {
  res.json(menu);
});

app.get("/api/menu/:id", (req, res) => {
  const id = Number(req.params.id);
  const item = menu.find((meal) => meal.id === id);

  if (!item) {
    return res.status(404).json({
      message: "Item not found"
    });
  }

  res.json(item);
});

app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});