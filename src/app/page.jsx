import Image from "next/image";
import AnimeList from "@/components/AnimeList";
import Link from "next/link";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs";

const Page = async () => {
  // cara lama
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`);
  // const topAnime = await response.json();

  //cara pake folder libs
  const topAnime = await getAnimeResponse("top/anime","limit=8")
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime","entry")
  recommendedAnime = reproduce(recommendedAnime, 8)
  
  return (
    <>
      <br></br>
    {/* anime terpopuler */}
      <section>
        <Header title="Paling Populer" linkHref="/populer" linkTitle="Lihat Semua"/>
        <AnimeList api={topAnime}/>
      </section>
      <br></br>
    {/* anime rekomendasi */}
      <section>
        <Header title="Rekomendasi"/>
        <AnimeList api={recommendedAnime}/>
      </section>
    </>
  );
};
 
export default Page


