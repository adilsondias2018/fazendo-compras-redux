import "./App.css";

import Foods from "./components/Foods";
import Card from "./components/Cart";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Foods></Foods>
        <Card></Card>
      </header>
    </div>
  );
}

export default App;
