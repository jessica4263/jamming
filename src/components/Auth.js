// Utility function to generate a random string
export const generateRandomString = (length) => {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const values = crypto.getRandomValues(new Uint8Array(length));
  return values.reduce((acc, x) => acc + possible[x % possible.length], "");
}

// Utility function to create a SHA-256 hash
export const sha256 = async (plain) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  return window.crypto.subtle.digest('SHA-256', data);
}

// Utility function to base64 encode the input
export const base64encode = (input) => {
  return btoa(String.fromCharCode(...new Uint8Array(input)))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

// Utility function to generate the code challenge
export const generateCodeChallenge = async (codeVerifier) => {
  const hashed = await sha256(codeVerifier);
  return base64encode(hashed);
}

// Function to redirect the user to Spotify's authentication page
export const redirectToSpotify = async () => {
  const clientId = '15b7fb41cfae4ab08faae46825154140';
  const clientSecret = '7b0fad9e97784a02810aed2ebd71aaa5';
  const redirectUri = 'http://localhost:3000/callback'; // Update if needed
  const scope = 'user-read-private user-read-email';

  const codeVerifier = generateRandomString(64);
  const codeChallenge = await generateCodeChallenge(codeVerifier);

  // Store code verifier in localStorage
  localStorage.setItem('code_verifier', codeVerifier);

  const authUrl = new URL('https://accounts.spotify.com/authorize');
  const params = {
    response_type: 'code',
    client_id: clientId,
    scope,
    code_challenge_method: 'S256',
    code_challenge: codeChallenge,
    redirect_uri: redirectUri,
  };

  authUrl.search = new URLSearchParams(params).toString();
  window.location.href = authUrl.toString();
}

// Function to fetch the access token from Spotify
export const fetchToken = async (code) => {
  const clientId = '15b7fb41cfae4ab08faae46825154140';
  const redirectUri = 'http://localhost:3000/callback'; // Update if needed
  const tokenEndpoint = 'https://accounts.spotify.com/api/token';

  const codeVerifier = localStorage.getItem('code_verifier');

  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: clientId,
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectUri,
      code_verifier: codeVerifier,
    }),
  };

  const response = await fetch(tokenEndpoint, payload);
  const data = await response.json();
  localStorage.setItem('access_token', data.access_token);
}
