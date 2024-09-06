import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import styled from "styled-components";

const StyledComponent = styled.div`
  width: 32ch;
  padding: 1rem;
  background-color: ${({ $color }) => $color};
  color: white;
`;
const NavWrapper = styled.div`
  width: 18ch;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
`;
const ItemBody = styled.section`
  display: flex;
  flex-flow: row nowrap;
  background: linear-gradient(to right, #333433, #223222, #666555);
  padding: 1rem;
`;
const ULItem = styled.ul`
  width: 100%;
  padding: 0;
`;
const LineItem = styled.li`
  width: 100%;
  list-style: none;
`;
const TextComponent = styled.p`
  width: 100%;
  font-weight: ${({ $variant }) => ($variant === "strong" ? 800 : 100)};
  background-color: ${({ $color }) => $color};
  color: #ddd;
`;

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books, color } = volume;

  return (
    <StyledComponent $color={color}>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{title}</h1>
      <TextComponent>{description}</TextComponent>
      <ItemBody>
        <ULItem>
          {books.map(({ ordinal, title }) => (
            <LineItem key={title}>
              <TextComponent $variant="normal">{ordinal}:</TextComponent>
              <TextComponent $variant="strong">{title}</TextComponent>
            </LineItem>
          ))}
        </ULItem>
        <Image
          src={cover}
          alt={`Cover image of ${title}`}
          width={140}
          height={230}
        />
      </ItemBody>
      <NavWrapper>
        {previousVolume ? (
          <div>
            <Link href={`/volumes/${previousVolume.slug}`}>
              ←<TextComponent>Previous Volume</TextComponent>
              <TextComponent>: {previousVolume.title}</TextComponent>
            </Link>
          </div>
        ) : null}
        {nextVolume ? (
          <div>
            <Link href={`/volumes/${nextVolume.slug}`}>
              <TextComponent>Next Volume:</TextComponent>
              <TextComponent>{nextVolume.title}</TextComponent>→
            </Link>
          </div>
        ) : null}
      </NavWrapper>
    </StyledComponent>
  );
}
