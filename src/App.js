import { Row } from 'react-bootstrap';
import './App.css';
import Body from './components/Body';
import Body2 from './components/Body2';
import Header from './components/Header';
import Body3 from './components/Body3';
import Foott from './components/Foott';

function App() {
  return (
    <div className="App">
     <Header/>
<Row>       <Body/>
</Row>
<Row>     <Body2/>
</Row>
<Body3/>
 <Foott/> 
  
  </div>
  );
}

export default App;
