import './App.css';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import About from './pages/About';
import Header from './components/Header';
import AddRecipe from './pages/AddRecipe';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SingleRecipe from './components/SingleRecipe';



function App() {
  return (
      <BrowserRouter>
      <Header/>
      <Routes>
       <Route index element = {<Home/>}/>
       <Route path='recipes' element = {<Recipes/>}/>
       <Route path='addRecipe' element = {<AddRecipe/>}/>
       <Route path='about' element = {<About/>}/>
       <Route path='recipes/:singlerecipe' element = {<SingleRecipe/>}/>
      </Routes>
      </BrowserRouter>
     
  
  );
}

export default App;