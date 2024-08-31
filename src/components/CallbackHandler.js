import React, { useEffect } from 'react';
import { fetchToken } from './Auth';

const CallbackHandler = () => {
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code');
    if (code) {
      fetchToken(code).then(() => {
        window.location.href = '/'; // Redirect to the main page or wherever needed
      });
    }
  }, []);

  return <div>Loading...</div>;
}

export default CallbackHandler;