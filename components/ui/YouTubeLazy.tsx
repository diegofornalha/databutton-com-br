"use client";
import { useState } from "react";

interface YouTubeLazyProps {
  videoId: string;
  alt?: string;
}

export default function YouTubeLazy({ videoId, alt = "Capa do vídeo" }: YouTubeLazyProps) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div
      className="youtube-container rounded-lg overflow-hidden shadow-2xl"
      data-video-id={videoId}
      onClick={() => setShowVideo(true)}
      style={{ cursor: "pointer" }}
    >
      {!showVideo ? (
        <>
          <img
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt={alt}
            className="youtube-thumbnail w-full h-full object-cover"
          />
          <div className="play-button" />
        </>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&showinfo=0`}
          width="100%"
          height="100%"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={alt}
        />
      )}
    </div>
  );
} 