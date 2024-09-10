import useSWR from "swr";
import { useRouter } from "next/router";
import Card from "../../components/Card";
import Layout from "../../components/Layout";

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }
  return response.json();
};

export default function Character() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isLoading } = useSWR(
    id ? `https://swapi.py4e.com/api/people/${id}` : null,
    fetcher
  );
  console.log(data);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <Layout>
      {data && (
        <Card
          id={id}
          name={data.name}
          height={data.height}
          eyeColor={data.eye_color}
          birthYear={data.birth_year}
        />
      )}
    </Layout>
  );
}
