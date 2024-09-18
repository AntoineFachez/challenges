export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, email } = req.body; // Assuming you're sending data in the request body

      // Validate input (you'd likely add more robust validation here)
      if (!name || !email) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      // Perform some action (e.g., save data to a database)
      const result = await saveUserToDatabase(name, email);

      res
        .status(201)
        .json({ message: "User created successfully", data: result });
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).end();
    // Method Not Allowed
  }
}
//
