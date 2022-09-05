import { BrowserRouter } from 'react-router-dom'
import RoutesList from './RoutesList'
import NavBar from "./Navbar"

function App() {
  return (
    <div className="App">
      <h2>Hi Kadeem</h2>
      <BrowserRouter>
        <NavBar />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

// ANYTHING that has a react-router-dom component included must be within BrowserRouter

export default App;
