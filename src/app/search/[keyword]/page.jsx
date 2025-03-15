import Image from "next/image";
import AnimeList from "@/components/AnimeList";
import Link from "next/link";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = async ({ params }) => {
  const { keyword }= params
  const decodedKeyword = decodeURI(keyword);
  console.log(decodedKeyword)
  const searchAnime = await getAnimeResponse("anime",`q=${decodedKeyword}`)

  return (
    <>
    {/* anime*/}
      <section>
        <Header title={`Hasil pencarian ${decodedKeyword}`} linkHref="/populer" linkTitle="Lihat Semua"/>
        <AnimeList api={searchAnime}/>
      </section>
    </>
  );
};
 
export default Page

