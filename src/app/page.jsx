import Image from "next/image";
import AnimeList from "@/components/AnimeList";
import Link from "next/link";
import Header from "@/components/AnimeList/Header";

const Page = async () => {
  
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`);
  const topAnime = await response.json();

  return (
    <>
      <br></br>
    {/* anime terpopuler */}
      <section>
        <Header title="Paling Populer" linkHref="/populer" linkTitle="Lihat Semua"/>
        <AnimeList api={topAnime}/>
      </section>
      <br></br>
    {/* anime terbaru */}
      <section>
        <Header title="Anime Terbaru" linkHref="/new" linkTitle="Ikuti sekarang"/>
        <AnimeList api={topAnime}/>
      </section>
    </>
  );
};
 
export default Page


