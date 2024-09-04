import Image from "next/image";
import { useRouter } from "next/router";
import { volumes } from "@/resources/lib/data"; // Import your mock data
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

export default function VolumeDetailPage({ volumesData, volumeData }) {
  const { first } = useContext(AppContext);
  console.log(first);

  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>
      <h1>{volumeData?.title}</h1>
      <p>{volumeData?.description}</p>
      <ul>
        {volumeData.books.map((book) => (
          <li key={book.ordinal}>{book.title}</li>
        ))}
      </ul>

      <Image
        src={volumeData?.cover}
        alt={volumeData?.title}
        width={500}
        height={500}
      />

      <button onClick={() => router.push(`/volumes/the-return-of-the-king`)}>
        the-return-of-the-king
      </button>
    </div>
  );
}
export async function getStaticProps({ params }) {
  const { slug } = params;
  const volumeData = volumes.find(
    (volume) =>
      volume.title.toLowerCase().replace(/ /g, "-") === slug.toLowerCase()
  );

  return {
    props: { volumes, volumeData },
  };
}
export async function getStaticPaths() {
  const paths = volumes.map((volume) => ({
    params: { slug: volume.title.toLowerCase().replace(/ /g, "-") },
  }));

  return {
    paths,
    fallback: false, // Or 'blocking' if you want to generate pages on-demand
  };
}
