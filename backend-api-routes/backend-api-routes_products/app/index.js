"use client";
import { renderToHTML } from "next/dist/server/render";
import path from "path";
import fs from "fs";

export default function HomePage({ message }) {
  // This component will receive the 'message' prop from getServerSideProps
  return (
    // You can directly return the HTML string here, or use a client-side component
    <div dangerouslySetInnerHTML={{ __html: message }} />
  );
}

export async function getServerSideProps(context) {
  const message = context.query.message || ""; // Get message from query parameters or default to empty

  // Read the EJS template file
  const templatePath = path.join(process.cwd(), "views", "home.ejs");
  const template = fs.readFileSync(templatePath, "utf8");

  // Render the template with the message
  const html = await renderToHTML(
    null, // No React component to render, just the template
    null, // No initial props
    "home", // The name of your template (matches the filename without .ejs)
    { message }, // Pass the 'message' variable to the template
    {} // Additional options (if needed)
  );

  return {
    props: {
      message: html, // Pass the rendered HTML as a prop to the component
    },
  };
}
