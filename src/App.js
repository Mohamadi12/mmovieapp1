
import './App.css';
import HomePage from './components/homePage/HomePage';
import {Routes,Route} from 'react-router-dom'
import TrailerMovie from './components/trailer/TrailerMovie';
import NAv from './components/NAv';
import Upder from './components/Upder';
import AddMovie from './components/AddMovie';
function App() {
  return (
<>

<Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/trailer/:id' element={<TrailerMovie/>}/>
</Routes>
</>
  );
}

export default App;
