import { run } from "@/lib/mongodb";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await run(); // Establish connection

      // ... Perform database operations to fetch products
      const products = await fetchProductsFromDatabase();
      console.log("products", products);

      res.status(200).json(products);
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).end();
    // Method Not Allowed
  }
}
