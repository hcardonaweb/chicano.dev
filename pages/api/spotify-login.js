export default function handler(req, res) {
  const scope = "user-read-currently-playing user-read-playback-state";
  const params = new URLSearchParams({
    response_type: "code",
    client_id: process.env.SPOTIFY_CLIENT_ID,
    scope,
    redirect_uri: "http://127.0.0.1:3000/api/spotify-callback",
  });

  res.redirect(`https://accounts.spotify.com/authorize?${params}`);
}
