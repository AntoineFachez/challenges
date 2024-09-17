// /pages/products/[id].js

import { useRouter } from "next/router";
import useSWR from "swr";

export const fetcher = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export default function ProductDetailsPage() {
  const router = useRouter();
  const { id } = router.query; // Get the 'id' from the URL

  const { data: product, error } = useSWR(
    id ? `/api/products/${id}` : null, // Only fetch if 'id' exists
    fetcher
  );

  if (error) return <div>Failed to load product</div>;
  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      {/* Add more product details as needed */}
    </div>
  );
}
