import Login from "./Login";
import Dashboard from "./Dashboard";

const code = new URLSearchParams(window.location.search).get('code');

function App() {
  return (
    <div className="App">
      {/* renders dashboard if a code is obtained, renders login otherwise*/}
      {code ? <Dashboard code={code}/> : <Login/> }
    </div>
  );
}

export default App;
