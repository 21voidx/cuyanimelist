import Link from "next/link";


const NotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-4xl font-bold text-[#eab308]">404 - Not Found</h1>
            <p className="text-2xl font-bold text-[#eab308] mt-4">Page not found.</p>
            <Link href={"/"} className="md:text-xl text-m font-bold text-[#eab308] underline hover:text-[#ffc639] transition-all p-10 ">Back to Home</Link>
        </div>
    );
};

export default NotFound;