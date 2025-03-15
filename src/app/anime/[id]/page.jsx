import { getAnimeResponse } from "@/libs/api-libs"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import Image from "next/image"

const Page = async ({ params }) => {
    const { id } = await params
    const anime =  await getAnimeResponse(`anime/${id}`)

    return (
        <>
            <div className="pt-4 px-4 pb-10">
                <h1 className="text-center font-bold text-2xl text-[#eeeeee]">{anime.data.title} - {anime.data.year}</h1>
            </div>

            <div className="pt-1 px-4 pb-1 text-[#eeeeee] flex gap-5 overflow-x-auto">
                <div className="w-36 flex flex-col justify-center items-center rounded border border-[#eeeeee] p-2">
                    <h3>PERINGKAT</h3>
                    <p>{anime.data.rank}</p>
                </div>

                <div className="w-36 flex flex-col justify-center items-center rounded border border-[#eeeeee] p-2">
                    <h3>SKOR</h3>
                    <p>{anime.data.score}</p>
                </div>

                <div className="w-36 flex flex-col justify-center items-center rounded border border-[#eeeeee] p-2">
                    <h3>ANGGOTA</h3>
                    <p>{anime.data.members}</p>
                </div>

                <div className="w-36 flex flex-col justify-center items-center rounded border border-[#eeeeee] p-2">
                    <h3>EPISODE</h3>
                    <p>{anime.data.episodes}</p>
                </div>
            </div>

            <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-4 text-[#eeeeee]">
                <Image src={anime.data.images.webp.image_url} alt={anime.data.title} width={500} height={500}/>
                <p className="text-justify text-xl">{anime.data.synopsis}</p>
            </div>
            <div>
                <VideoPlayer youtubeId={anime.data.trailer.youtube_id}/>
            </div>
        </>
    )
}

export default Page