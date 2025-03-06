import Link from "next/link";
import InputSearch from "./InputSearch";


const NavBar = () => {
    return (
        <header className="bg-[#ffc639] flex justify-center p-4">
            <div className="flex md:flex-row flex-col justify-between items-center gap-1 px-40 h-25 md:h-20 w-full">
                <Link href="/">
                    <h1 className="text-3xl font-bold text-[#222831]">CuyAnimeList</h1>
                </Link>
                <InputSearch />
            </div>
        </header>
    );
};

export default NavBar;

        