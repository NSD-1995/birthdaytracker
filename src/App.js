import "./App.css";
import BirthdayForm from "./components/BirthdayForm";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <h1 className="Heading">Birthday Tracker</h1>
      <div className="Split">
        <List />
        <BirthdayForm />
      </div>
    </div>
  );
}

export default App;
