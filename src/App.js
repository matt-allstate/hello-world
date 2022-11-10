import './App.css';
import Greeting from './components/Greeting/Greeting';

function App() {
  return (
    <div>
      <p>The greeting is </p>
      <Greeting name="Matt" age="21" />
    </div>
  );
}

export default App;

