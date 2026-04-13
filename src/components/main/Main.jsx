import React, { useState, useEffect } from "react";
import videoData from "../../data/videos.json";

const Main = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos(videoData);
  }, []);

  return (
    <div className="ml-0 lg:ml-[17%] bg-black min-h-screen px-2">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-neutral-800 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition"
          >
            {/* 🔥 عکس با نسبت ثابت */}
            <div className="w-full aspect-video">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-2 text-white">
              <h3 className="text-[0.95rem] font-semibold mb-1 line-clamp-2">
                {video.title}
              </h3>

              <div className="flex items-center gap-2 mb-1">
                <img
                  src={video.channelLogo}
                  alt={video.channel}
                  className="w-[1.5rem] h-[1.5rem] rounded-full"
                />
                <p className="text-gray-400 text-[0.8rem]">
                  {video.channel}
                </p>
              </div>

              <p className="text-gray-400 text-[0.8rem]">
                {video.views} • {video.time}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Main;