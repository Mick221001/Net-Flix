import NavBar from './components/NavBar';
import React from 'react';

function App() {
  return (
    <div>
      <NavBar />
      {/* Aggiungi un po' di contenuto per testare la navbar */}
      <main style={{ padding: '20px' }}>
        <h1>Benvenuto nella mia App!</h1>
        <p>Scorri verso il basso per vedere l'effetto della navbar.</p>
        <div style={{ height: '2000px' }}> {/* Aggiungi spazio per lo scroll */}
          <p>Contenuto di esempio...</p>
        </div>
      </main>
    </div>
  );
}

export default App;