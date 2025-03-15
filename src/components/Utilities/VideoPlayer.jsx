"use client"
import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
    const [isOpen, setIsOpen] = useState(true)
     

    const handleVideoPlayer = () => {
        setIsOpen((prevState) => !prevState)
    }
 
    const option = {
        width: "300",
        height: "250"
    }

    const Player = () => {
        return (
            <div className="fixed bottom-0 right-0 p-2">    
                <button 
                    onClick={handleVideoPlayer}
                    className="text-[#0c0000] float-right cursor-pointer text-xl font-bold px-2 mb-2 bg-[#ffc639]">X</button>
                <YouTube videoId={youtubeId} onReady={(event) => event.target.playVideo()} opts={option}/>
            </div>
        );
    }

    const ButtonOpenTrailer = () => {
        return (
            <button onClick={handleVideoPlayer} className="fixed bottom-5 right-5 w-32 bg-[#eeeeee] text-color-dark hover:bg-[#ffc639] rounded">Tonton Trailer</button>
        );
    }   

    return isOpen ? <Player /> : <ButtonOpenTrailer />;
}   

export default VideoPlayer