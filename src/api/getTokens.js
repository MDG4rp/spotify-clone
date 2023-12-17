import path from 'path';
import { writeFile } from 'fs/promises';

const endpoint = 'https://accounts.spotify.com/api/token';

const clientId = '2d112e6a83e240c68e5ca1219abdcf79';
const clientSecret = '28dc47e3130c4d799af5e9cbda237f4d';
const credentialsBase64Encoded = btoa(clientId + clientSecret);

//access e refresh token entrambi aggiornati
export var access_token;
export var refresh_token;

//Funzione che rinnova l'access token tra un ora
async function refreshToken() {
  const response = await fetch(
    'https://accounts.spotify.com/api/token',
    httpRequest(
      'post',
      'application/x-www-form-urlencoded',
      `Basic ${credentialsBase64Encoded}`,
      `grant_type=refresh_token&refresh_token=${refresh_token}
  `
    )
  );
  const data = await response.json();
  tokenToJSON(data.access_token, 'AccessToken.json');
}

//Funzione che ritorna una richiesta HTTP
export function httpRequest(method, contentType, authorization, body) {
  return {
    method: method.toUpperCase(),
    headers: {
      'Content-Type': contentType,
      Authorization: authorization,
    },
    body: body,
  };
}

// Funzione che fa una chiamata HTTP di tipo post all'endpoint di Spotify API per recuperare un access e refresh token
async function tokenToJson() {
  try {
    const response = await fetch(
      endpoint,
      httpRequest(
        'post',
        'application/x-www-form-urlencoded',
        'Basic ' + credentialsBase64Encoded,
        'grant_type=client_credentials'
      )
    );

    const data = await response.json();
    tokenToJSON(data.access_token, 'AccessToken.json');
    tokenToJSON(data.refresh_token, 'RefreshToken.json');
  } catch (error) {
    console.error(error);
  }
}

async function tokenToJSON(json, tokenFileName) {
  const tokenJSONasString = JSON.stringify(json, tokenFileName);
  const tokenDirectoryPath = './token';
  const tokenPath = path.join(tokenDirectoryPath, tokenFileName);
  try {
    await writeFile(tokenPath, tokenJSONasString);
    console.log(tokenFileName + ' written successfully');
  } catch (error) {
    console.error(error);
  }
}
