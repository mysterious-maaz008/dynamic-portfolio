import React from 'react';

function App() {
  const params = new URLSearchParams(window.location.search);
  const name = params.get('name') || 'Guest';

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Welcome, {name}!</h1>
      <p>Here’s a preview of my work:</p>

      <p>
        <a 
          href="https://www.notion.so/YOUR-PUBLIC-NOTION-PAGE" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: 'blue', textDecoration: 'underline' }}
        >
          Click here to view my Notion portfolio
        </a>
      </p>
    </div>
  );
}

export default App;
