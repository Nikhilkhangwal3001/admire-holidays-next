"use client";
import React, { useState } from "react";
import "../../styles/custom.css";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import Link from "next/link";
import ReactPlayer from "react-player";

const YoutubeBanner = () => {
  const youtubeBannerData = [
    {
      imageUrl:
        "https://i.ytimg.com/vi/8xtfd6UIy7U/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBzgWAAoAKigIMCAAQARhfIGUoIzAP&rs=AOn4CLCTHRCG7RC4e0mSl-2uYyyYREeVdw",
      link: "https://www.youtube.com/watch?v=8xtfd6UIy7U",
    },

    {
      imageUrl:
        "https://i.ytimg.com/vi/rI9to4tV_PY/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBzgaAAt4DigIMCAAQARhlIGUoZTAP&rs=AOn4CLC735h5cqcl1BHYCWRA8vuk43ol3Q",
      link: "https://www.youtube.com/watch?v=rI9to4tV_PY",
    },
    {
      imageUrl:
        "https://i.ytimg.com/vi/gDbC6vk2uS8/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBzgaAAuADigIMCAAQARhBIGUoYzAP&rs=AOn4CLDFiY8D07yjbQsv3XOLVXVenJPDnQ",
      link: "https://www.youtube.com/watch?v=gDbC6vk2uS8",
    },
    {
      imageUrl:
        "https://i.ytimg.com/vi/R2J53ozZ2OY/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBzgaAAuADigIMCAAQARhRIFsoZTAP&rs=AOn4CLBi0sE8cCRDKVYnDmKUyVxHXfWdrQ",
      link: "https://www.youtube.com/watch?v=R2J53ozZ2OY",
    },
    {
      imageUrl:
        "https://i.ytimg.com/vi/efEkfDzWMRo/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gSAAvACigIMCAAQARhDIGMoZTAP&rs=AOn4CLD7u5o29F0TBumRWtkWW7QOJilgVQ",
      link: "https://www.youtube.com/watch?v=efEkfDzWMRo",
    },
    {
      imageUrl:
        "https://i.ytimg.com/vi/oo5gz0t59Sg/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBzgaAAuADigIMCAAQARhFIFYoZTAP&rs=AOn4CLAp37Z5GAJC6j1fSyknZYFsjRrPJw",
      link: "https://www.youtube.com/watch?v=oo5gz0t59Sg",
    },
    {
      imageUrl:
        "https://i.ytimg.com/vi/6pEMFOpjoH0/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBzgaAAuADigIMCAAQARhlIEQoQzAP&rs=AOn4CLACMVl9x10W1iicaHooJ3EDxCN4AA",
      link: "https://www.youtube.com/watch?v=6pEMFOpjoH0",
    },
    {
      imageUrl:
        "https://i.ytimg.com/vi/ZUTj8vlGwIg/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gSAAuACigIMCAAQARhlIGUoZTAP&rs=AOn4CLBRsxxylNDWwOOF-NUFN0oNVaFsbg",
      link: "https://www.youtube.com/watch?v=ZUTj8vlGwIg",
    },
    {
      imageUrl:
        "https://i.ytimg.com/vi/uivF6z0OK9w/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBhgKAAuADigIMCAAQARgsIFYofzAP&rs=AOn4CLC6jzILUBZkpxpdyUVMt-ayNtUZpA",
      link: "https://www.youtube.com/watch?v=uivF6z0OK9w",
    },

    {
      imageUrl:
        "https://i.ytimg.com/vi/NVgKYNE_cUA/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBzgaAAuADigIMCAAQARhKIFQoZTAP&rs=AOn4CLAbvsYR6zHELw_AFdKluq8FP3Tkug",
      link: "https://www.youtube.com/watch?v=NVgKYNE_cUA",
    },
    {
      imageUrl:
        "https://i.ytimg.com/vi/FOPy1xaX-18/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBzgaAAuADigIMCAAQARhWIF0oZTAP&rs=AOn4CLC2iGsxCgoOweGKpZ-iQELW0PTg8Q",
      link: "https://www.youtube.com/watch?v=FOPy1xaX-18",
    },
    {
      imageUrl:
        "https://i.ytimg.com/vi/wmi_B-dYk3o/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBjgKAAuADigIMCAAQARhlIEcoQTAP&rs=AOn4CLBsyZ_V_etqu41f-ce219SXqXTM_A",
      link: "https://www.youtube.com/watch?v=wmi_B-dYk3o",
    },

    {
      imageUrl:
        "https://i.ytimg.com/vi/WS8GdOBYrA8/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBhgKAAuADigIMCAAQARhlIFMoRTAP&rs=AOn4CLBuDaiV5UQuXaBEQgdFMbzTppSGyQ",
      link: "https://www.youtube.com/watch?v=WS8GdOBYrA8",
    },
    {
      imageUrl:
        "https://i.ytimg.com/vi/Ft4A-EpFTsM/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gSAAvACigIMCAAQARhyIF0oNTAP&rs=AOn4CLCf8fIUx-Bp01o3vq3SEXlv8Ltz6w",
      link: "https://www.youtube.com/watch?v=Ft4A-EpFTsM",
    },
    {
      imageUrl:
        "https://i.ytimg.com/vi/k4UDSypfkko/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gSAAvACigIMCAAQARhlIFsoUzAP&rs=AOn4CLDVQmssYBK7TWk9xms3W2GV8BXeTw",
      link: "https://www.youtube.com/watch?v=k4UDSypfkko",
    },
    {
      imageUrl:
        "https://i.ytimg.com/vi/rp-eye-Yj4o/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDbCBC2HK-ScLLbm7NV0QXBwCjt8A",
      link: "https://www.youtube.com/watch?v=rp-eye-Yj4o",
    },
  ];
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = (videoUrl) => {
    setCurrentVideoUrl(videoUrl);
    setIsVideoPlaying(true);
  };

  const handlePause = () => {
    setIsVideoPlaying(false);
  };

  const handlePlay = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section className="sm:h-[600px] h-[480px]  max-w-full mx-auto px-5  lg:flex flex-col gap-5 pt-16 sm:pt-32 py-5 ">
      <h1 className="text-center md:text-5xl text-2xl ">
        Our Youtube Testimonials
      </h1>
      {
        <>
          <div className="sm:flex hidden sm:flex-row gap-4 flex-col-reverse items-center my-0 sm:my-10 justify-center w-full sm:h-[400px] md:h-full">
            <div className="sm:flex px-3 sm:flex-col scrollbar-webkit scrollbar-thin   overflow-x-auto sm:overflow-x-hidden sm:overflow-y-auto scollbar-hidden md:w-[250px] lg:w-[300px] sm:w-[200px] w-[300px] h-48 sm:h-full flex-row text-white gap-5">
              {youtubeBannerData.map((item, i) => (
                <div
                  className="relative lg:w-[300px] scrollbar-thin scrollbar-webkit md:w-[250px] sm:w-[200px] w-[300px] h-48 sm:h-full"
                  key={i}
                >
                  <img
                    src={item.imageUrl}
                    alt=""
                    className=" lg:w-[300px] md:w-[250px] sm:w-[200px] w-[300px] transition-all duration-300 hover:shadow-xl hover:opacity-75"
                  />
                  <div className="absolute rounded-xl inset-0 lg:w-[300px] w-[300px] md:w-[250px] sm:w-[200px] h-48 sm:h-full flex items-center bg-black gap-3 justify-center opacity-0 hover:opacity-100 bg-opacity-50 transition-opacity duration-300">
                    <button
                      onClick={() => handlePlayVideo(item.link)}
                      className="text-white font-bold flex items-center gap-2"
                    >
                      <FaPlay /> See Review
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="sm:flex hidden relative">
              {(isVideoPlaying || currentVideoUrl) && (
                <ReactPlayer
                  url={currentVideoUrl}
                  playing={isVideoPlaying}
                  controls
                  width="700px"
                  height="440px"
                  className="h-full lg:flex hidden rounded-xl w-[700px]"
                  onPause={handlePause}
                  onPlay={handlePlay}
                />
              )}
              {(isVideoPlaying || currentVideoUrl) && (
                <ReactPlayer
                  url={currentVideoUrl}
                  playing={isVideoPlaying}
                  controls
                  width="100%"
                  height="440px"
                  className="h-full lg:hidden md:flex  hidden  w-full"
                  onPause={handlePause}
                  onPlay={handlePlay}
                />
              )}
              {(isVideoPlaying || currentVideoUrl) && (
                <ReactPlayer
                  url={currentVideoUrl}
                  playing={isVideoPlaying}
                  controls
                  width="400px"
                  height="400px"
                  className="h-full  md:hidden sm:flex hidden rounded-xl w-[400px]"
                  onPause={handlePause}
                  onPlay={handlePlay}
                />
              )}
              {(isVideoPlaying || currentVideoUrl) && (
                <ReactPlayer
                  url={currentVideoUrl}
                  playing={isVideoPlaying}
                  controls
                  width="400px"
                  height="400px"
                  className="h-full  sm:hidden flex rounded-xl w-[400px]"
                  onPause={handlePause}
                  onPlay={handlePlay}
                />
              )}
              {!isVideoPlaying && !currentVideoUrl && (
                <div className="relative md:w-[500px] lg:w-full sm:w-[400px] w-[300px] h-48 md:h-[460px] sm:h-[400px]">
                  <img
                    src="https://i.ytimg.com/vi/R2J53ozZ2OY/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBzgaAAuADigIMCAAQARhRIFsoZTAP&rs=AOn4CLBi0sE8cCRDKVYnDmKUyVxHXfWdrQ"
                    alt=""
                    className="rounded-xl w-full h-full transition-all duration-300 hover:shadow-xl hover:opacity-75"
                  />
                  <div className="absolute rounded-xl inset-0 w-full h-full sm:h-full flex items-center bg-black gap-3 justify-center opacity-0 hover:opacity-100 bg-opacity-50 transition-opacity duration-300">
                    <button
                      onClick={() =>
                        handlePlayVideo(
                          "https://www.youtube.com/watch?v=R2J53ozZ2OY&t=1s"
                        )
                      }
                      className="text-white font-bold flex items-center gap-2"
                    >
                      <FaPlay /> See Review
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* for the small devices below to the sm */}
          <div className="sm:hidden gap-5 flex flex-col-reverse ">
            <div className="flex  overflow-y-hidden overflow-x-auto w-full max-h-48 flex-row text-white gap-5">
              {youtubeBannerData.map((item, i) => (
                <div className="relative  min-w-72 h-64" key={i}>
                  <img
                    src={item.imageUrl}
                    alt=""
                    className="min-w-64 min-h-48 transition-all duration-300 hover:shadow-xl hover:opacity-75"
                  />
                  <div className="absolute rounded-xl inset-0 w-full max-h-48 flex items-center bg-black gap-3 justify-center opacity-0 hover:opacity-100 bg-opacity-50 transition-opacity duration-300">
                    <button
                      onClick={() => handlePlayVideo(item.link)}
                      className="text-white font-bold flex items-center gap-2"
                    >
                      <FaPlay /> See Review
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="sm:hidden pt-10 flex relative">
              {(isVideoPlaying || currentVideoUrl) && (
                <ReactPlayer
                  url={currentVideoUrl}
                  playing={isVideoPlaying}
                  controls
                  width="100%"
                  height="300px"
                  className="h-full sm:hidden flex rounded-xl w-full"
                  onPause={handlePause}
                  onPlay={handlePlay}
                />
              )}
              {!isVideoPlaying && !currentVideoUrl && (
                <div className="relative w-full h-full pt-10">
                  <img
                    src="https://i.ytimg.com/vi/R2J53ozZ2OY/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBzgaAAuADigIMCAAQARhRIFsoZTAP&rs=AOn4CLBi0sE8cCRDKVYnDmKUyVxHXfWdrQ"
                    alt=""
                    className="rounded-xl w-full h-[300px] transition-all duration-300 hover:shadow-xl hover:opacity-75"
                  />
                  <div className="absolute rounded-xl inset-0 w-full h-[300px] top-10  flex items-center bg-black gap-3 justify-center opacity-0 hover:opacity-100 bg-opacity-50 transition-opacity duration-300">
                    <button
                      onClick={() =>
                        handlePlayVideo(
                          "https://www.youtube.com/watch?v=R2J53ozZ2OY&t=1s"
                        )
                      }
                      className="text-white font-bold flex items-center gap-2"
                    >
                      <FaPlay /> See Review
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      }
    </section>
  );
};

export default YoutubeBanner;
