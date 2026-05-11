export default async function handler(req, res) {
  const { code, error } = req.query;

  if (error || !code) {
    return res.status(400).send(`
      <h2>Spotify returned an error</h2>
      <p><b>Error:</b> ${error ?? 'no code received'}</p>
      <p><a href="/api/spotify-login">Try again</a></p>
    `);
  }

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
      ).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: "http://127.0.0.1:3000/api/spotify-callback",
    }),
  });

  const data = await response.json();

  if (data.refresh_token) {
    res.status(200).send(`
      <h2>Copy this refresh token into your .env file:</h2>
      <pre style="word-break:break-all">${data.refresh_token}</pre>
      <p>Set: <code>SPOTIFY_REFRESH_TOKEN = '${data.refresh_token}'</code></p>
    `);
  } else {
    res.status(400).send(`
      <h2>Error</h2>
      <p><b>Code received:</b> ${code ?? 'NONE'}</p>
      <p><b>Spotify error:</b> ${data.error}</p>
      <p><b>Description:</b> ${data.error_description}</p>
      <p><b>Client ID used:</b> ${process.env.SPOTIFY_CLIENT_ID}</p>
      <p><a href="/api/spotify-login">Try again</a></p>
    `);
  }
}
