import './App.css';
import Header from './Components/Header';
import Write from './Components/Write';
import Buy from './Components/Buy';
import Exercise from './Components/Exercise';
import Approve from './Components/Approve';


function App() {
  return (
    <div className='main'>
      <Header></Header>
      <div className='boxes'>
        <Write></Write>
        <Approve></Approve>
        <Buy></Buy>
        <Exercise></Exercise>
      </div>
    </div>
  );
}

export default App;
