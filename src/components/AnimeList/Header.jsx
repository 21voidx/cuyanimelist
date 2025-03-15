import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
    return (
        <div className="flex justify-between items-center p-4 px-20">
            <h1 className="text-2xl font-bold text-[#eeeeee] h-10">{title}</h1>
            {linkHref && linkTitle ? <Link href={linkHref} className="md:text-xl text-m font-bold text-[#eeeeee] underline hover:text-[#ffc639] transition-all">{linkTitle}</Link>: null}
        </div>
    );
}
 
export default Header   