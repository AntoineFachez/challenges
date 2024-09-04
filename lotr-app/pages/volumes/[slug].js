import { useRouter } from "next/router";
import { mockDataVolumes } from "../../mocks/mockDataVolumes"; // Import your mock data

export default function VolumeDetailPage({ volumeData }) {
  console.log(mockDataVolumes);
  const router = useRouter();
  const { slug } = router.query;
  // console.log(slug, mockDataVolumes, volumeData);
  //
  return (
    <div>
      <h1>{volumeData?.title}</h1>
      <p>{volumeData?.description}</p>
      <ul>
        {volumeData.books.map((book) => (
          <li key={book.ordinal}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}
export async function getStaticProps({ params }) {
  const { slug } = params;
  const volumeData = mockDataVolumes.find(
    (volume) =>
      volume.title.toLowerCase().replace(/ /g, "-") === slug.toLowerCase()
  );

  return {
    props: { volumeData },
  };
}
export async function getStaticPaths() {
  const paths = mockDataVolumes.map((volume) => ({
    params: { slug: volume.title.toLowerCase().replace(/ /g, "-") },
  }));

  return {
    paths,
    fallback: false, // Or 'blocking' if you want to generate pages on-demand
  };
}
