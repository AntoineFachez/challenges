import useSWR from "swr";

const url = "/api/products";

export const fetcher = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export default function ProductsPage() {
  const { data, error } = useSWR(url, fetcher);

  if (error) return <div>Failed to load products</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>All Products</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            {/* Add more product details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}
