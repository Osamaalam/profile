"use client";

import React from "react";

const YoutubePlayer = () => {
  return (
    <div className="pt-20 pb-20">
      <h1 className="heading mb-10">
        My <span className="text-purple">Work!</span>
      </h1>
      <div
        className="lg:w-[65%] lg:h-[500px] md:w-[60%] md:h-[300px] w-[100%] h-[219px]  border border-grey m-auto"

      >
        <iframe id="youtube-video" width="100%" height="100%" src="https://www.youtube.com/embed/yf-KpswJ57g?si=NKBYlofzKBb9DbQ_" title="Customer Service Chatbot" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
         </div>
    </div>
  );
};

export default YoutubePlayer;
