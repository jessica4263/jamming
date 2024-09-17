import React from 'react';
// import { App } from '../components/App/App';

const clientId = "15b7fb41cfae4ab08faae46825154140";
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify&user-read-playback-state%20user-modify-playback-state`;
export default function Login() {
    return (
        <div>

        </div>
    )
} 