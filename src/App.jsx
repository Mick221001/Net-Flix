import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Benvenuto su Net&Flix</h1>
      <Outlet /> {/* Qui verranno renderizzate le pagine */}
    </div>
  );
}

export default App;
