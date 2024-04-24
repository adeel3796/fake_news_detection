// TwitterVerification.js
import React, { useState } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import './TwitterVerification.css'; // Import the CSS file

const TwitterVerification = () => {
  const [tweetUrl, setTweetUrl] = useState('');
  const [verificationResult, setVerificationResult] = useState('');

  const handleVerification = () => {
    // Perform your verification logic here using the tweet URL (tweetUrl)
    // Display the verification result or any additional information
    // Example: Check if the tweet URL contains the word 'fake'
    const isFakeNews = tweetUrl.toLowerCase().includes('fake');

    if (isFakeNews) {
      setVerificationResult('This news is FAKE!');
    } else {
      setVerificationResult('This news is VERIFIED!');
    }
  };

  return (
    <div className="container">
      <h1>SERVICES</h1>
      <h1>Twitter News Verification</h1>
      <p>Enter the URL of the tweet you want to verify:</p>

      <input
        type="text"
        placeholder="Tweet URL"
        value={tweetUrl}
        onChange={(e) => setTweetUrl(e.target.value)}
      />

      <button onClick={handleVerification}>Verify Tweet</button>

      <div className={`result ${verificationResult === 'This news is FAKE!' ? 'result-fake' : ''}`}>
        <p>{verificationResult}</p>
      </div>

      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="TwitterDev" // Replace with the Twitter account you want to display
        options={{ height: 400 }}
        className="twitter-timeline"
      />
    </div>
  );
};

export default TwitterVerification;
