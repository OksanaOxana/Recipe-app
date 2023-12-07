import './App.css';
import NewRecipesComponents from './NewRecipesComponent';
import video from './salad.mp4';
import { useEffect, useState } from "react"



function App() {

  const MY_ID = "beb7bbd2";

  const MY_KEY = "6a30e09594872a941e5939f4297144ae";

  const [mySearch, setMySearch] = useState ("")

  const [myRecipes, setMyRecipes] = useState([])

  const [wordSubmitted, setWordSubmitted] = useState ("")

      useEffect(() => {
        const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      setMyRecipes(data.hits)
    }
    getRecipe()
  }, [wordSubmitted])


const myRecipeSearch = (e) => {
  setMySearch(e.target.value)
}

const finalSearch = (e) => {
  e.preventDefault()
  setWordSubmitted(mySearch)
}

  return (
    <div className='App'>
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      <div className='container'>  
        <h1>Recipes for you</h1>
      </div>
      <div className='container'>
        <form onSubmit = {finalSearch}>
          <input className='search' onChange = {myRecipeSearch} value = { mySearch }/>
        </form>
      </div>
      <div className='container'>
        <button onClick={finalSearch}>Find your recipe!</button> 
        {myRecipes.map((element, index) => (
          <NewRecipesComponents key={index} label = {element.recipe.label} image = {element.recipe.image} calories = {element.recipe.calories} ingredients = {element.recipe.ingredientLines}/>))}
      </div>
    </div>
  );
}

export default App;
