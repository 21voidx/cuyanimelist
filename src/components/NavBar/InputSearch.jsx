"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()
    const handleSearch = (event) => {
        const keyword = searchRef.current.value

        if(!keyword || keyword.trim() === "") return
        
        if(event.key === "Enter" || event.type === "click") {
            event.preventDefault()     
            router.push(`/search/${keyword}`) 
        }
    }

    return (
        <div className="relative">
            <input 
                className="md:w-2/3 md:text-2xl text-sm font-bold text-[#222831] bg-white rounded-sm h-8 p-4" 
                type="text" 
                placeholder="Cari anime..." 
                ref={searchRef} 
                onKeyDown={handleSearch}/>
            <button 
                className="absolute top-1 buttom-1 md:right-1/3 right-1" 
                onClick={handleSearch}>
                <MagnifyingGlass size={26}/>
            </button>
        </div>
    )
}

export default InputSearch