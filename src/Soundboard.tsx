import React from "react";

const Soundboard: React.FC = () => {
  // Get all mp3 files from assets folder
  const sounds = import.meta.glob("./assets/*.mp3", { as: "url", eager: true });

  const playSound = (url: string) => {
    const audio = new Audio(url);
    audio.play();
  };

  return (
    <div>
      <h1>Soundboard</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
        }}
      >
        {Object.entries(sounds).map(([path, url]) => {
          const filename = path.split("/").pop()?.replace(".mp3", "") || "";
          return (
            <button
              key={path}
              onClick={() => playSound(url)}
              style={{ maxWidth: "200px" }}
            >
              {filename}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Soundboard;
