const { getProductById } = require("@/services/productServices");

export default function handler(req, res) {
  if (req.method === "GET") {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ error: "Missing product ID" });
    }

    const product = getProductById(id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(product);
  } else {
    res.status(405).end();
  }
}
