
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import TODOHero from './components/todohero';
import TODOList from './components/todolist';

function App() {
  return (
    <div className="App">
      <Header />  
      <TODOHero todos_completed={0} total_todos={0}/>
      <Form />
      <TODOList todos={[]}/>  
    </div>
  );
}

export default App;
