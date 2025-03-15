import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
    return (
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6 md:px-20 px-5">
            {api.data?.map((anime, index) => {
                return (
                    <Link 
                        href={`/anime/${anime.mal_id}`} 
                        className="cursor-pointer shadow-2xl transform transition-transform duration-00 hover:scale-102 rounded-b-xl overflow-hidden text-[#eeeeee] hover:text-[#ffc639]"
                        key={index} 
                    >
                    <div className="rounded-t-lg overflow-hidden">
                            <Image 
                                src={anime.images.webp.image_url} 
                                alt={anime.title} 
                                width={350} 
                                height={350} 
                                className="w-full max-h-64 object-cover" 
                            /> 
                        </div>
                    <h3 className="font-bold md:text-xl text-md p-4">{anime.title}</h3>
                    </Link>
                )
            })}
        </div>
    );
}
 
export default AnimeList

