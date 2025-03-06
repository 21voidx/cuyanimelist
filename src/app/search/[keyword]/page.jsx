import Image from "next/image";
import AnimeList from "@/components/AnimeList";
import Link from "next/link";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
  const { keyword }= params
  const decodedKeyword = decodeURI(keyword);
  console.log(decodedKeyword)
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`);

  const searchAnime = await response.json();

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

