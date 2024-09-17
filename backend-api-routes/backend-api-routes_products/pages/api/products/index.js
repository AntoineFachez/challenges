const { getAllProducts } = require("@/services/productServices");

export default function handler(req, res) {
  if (req.method === "GET") {
    // Handle GET requests only
    const products = getAllProducts();
    res.status(200).json(products);
  } else {
    // Handle other HTTP methods if needed (e.g., POST, PUT, DELETE)
    res.status(405).end(); // Method Not Allowed
  }
}
