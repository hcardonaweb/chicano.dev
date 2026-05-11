import React, { useEffect, useState } from "react";
import SpotifyPlayer from "./SpotifyPlayer";

const NowPlaying = () => {
  const [nowPlaying, setNowPlaying] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchNowPlaying = async () => {
    try {
      const response = await fetch("/api/now-playing");
      const data = await response.json();
      setNowPlaying(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching currently playing song: ", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 30000);
    return () => clearInterval(interval);
  }, []);

  return <SpotifyPlayer loading={loading} nowPlaying={nowPlaying} />;
};

export default NowPlaying;
