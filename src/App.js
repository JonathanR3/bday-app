import logo from './logo.svg';
import './App.css';
import data from './data';
import ListComponent from './Components/ListComponent';

console.log(data.length);

function App() {
  return (
    <main className = "App">
      <section>
        <label>Select bday month</label>
        <select>
      <option>January</option>
      </select>
      <h3>There are X birthdays the month of Y</h3>
      <ListComponent people = {data}/>
      </section>
    </main>
  );
}

export default App;
