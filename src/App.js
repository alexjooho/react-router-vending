import { BrowserRouter } from 'react-router-dom'
import RoutesList from './RoutesList'
import NavBar from "./Navbar"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
