import { getNowPlaying } from "../../utils/spotify";

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const song = await response.json();

  if (song.item === null) {
    return res.status(200).json({ isPlaying: false });
  }

  return res.status(200).json({
    isPlaying: song.is_playing,
    title: song.item.name,
    artist: song.item.artists.map((a) => a.name).join(", "),
    albumName: song.item.album.name,
    albumImageUrl: song.item.album.images[0].url,
    songUrl: song.item.external_urls.spotify,
    artistUrl: song.item.album.artists[0].external_urls.spotify,
    timePlayed: song.progress_ms,
    timeTotal: song.item.duration_ms,
  });
}
