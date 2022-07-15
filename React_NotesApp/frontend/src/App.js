import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import NotesPageList from './pages/NotesPageList';
import NotePage from './pages/NotePage';

function App() {
  return (
    <Router>
    <div className="App">

      <Header/>
      <Routes>
      <Route path="/" element={<NotesPageList/>}/>
      <Route path="/note/:id" element= {<NotePage/>}/>
      </Routes>
    </div>
    </Router>

  );
}

export default App;
