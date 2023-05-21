import './App.css';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Header from './components/Header';
import AddRecipe from './pages/AddRecipe';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SingleRecipe from './components/SingleRecipe';
import Footer from './components/Footer';



function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Header/>
      <Routes>
       <Route index element = {<Home/>}/>
       <Route path='recipes' element = {<Recipes/>}/>
       <Route path='addRecipe' element = {<AddRecipe/>}/>
       <Route path='recipes/:singlerecipe' element = {<SingleRecipe/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      </div>
     
  
  );
}

export default App;
