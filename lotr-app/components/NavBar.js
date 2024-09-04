import { mockDataVolumes } from "@/mocks/mockDataVolumes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function NavBar() {
  const router = useRouter();
  const [buttonData, setButtonData] = useState([]);

  useEffect(() => {
    const generatedButtonData = mockDataVolumes.map((volume) => {
      const formattedTitle = volume.title.toLowerCase().replace(/ /g, "-"); // Replace spaces with hyphens
      return {
        id: formattedTitle,
        onClick: () => router.push(`/volumes/${formattedTitle}`),
        textContent: volume.title,
      };
    });

    setButtonData(generatedButtonData);
  }, []);
  return (
    <div style={{ marginTop: "5rem" }}>
      <button onClick={() => router.push(`/volumes`)}>back to volumes</button>
      {buttonData.map((button) => (
        <button key={button.id} onClick={button.onClick}>
          {button.textContent}
        </button>
      ))}
    </div>
  );
}
