import './App.css';
import Home from './components/home/home';
import { Route, Routes } from 'react-router';
import Recipes from './components/recipies/recipes';
// import FoodAndRecipe from './components/recipies/foodAndRecipe';



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path='/recipes' element={<Recipes />} />
    </Routes>
    </>
  );
}

export default App;
