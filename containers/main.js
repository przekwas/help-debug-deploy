import {
  Trending,
  Latest,
  MostPopular,
  Categories,
} from "../components/sections";

export default function MainContainer() {
  return (
    <>
      <Trending />
      <Latest />
      <MostPopular />
      <Categories />
    </>
  );
}
