import './App.css';
import'./project2.css';
import Right from './Right';
import Left from './Left.js';

function App() {
  return (
    <div className="App">
      <div className='outer'>
        <div className='Left'><Left/></div>
        <div className='Right'><Right/></div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
