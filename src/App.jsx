import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      
      <Outlet /> {/* Qui verranno renderizzate le pagine */}
    </div>
  );
}

export default App;
