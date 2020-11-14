import './App.css';
import Nav from './Components/Nav/Nav'
import routes from './routes'


function App() {
  return (
    <div className="App">
      <main>
        <Nav/>
        {routes}
        </main>
    </div>
  );
}

export default App;
