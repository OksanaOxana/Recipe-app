import icon from "./icons8-50.png"
function NewRecipesComponents({label, image, calories, ingredients}) {
    return (
        <div>
            <div className="smallcont">
                <div className="container">
                    <h2>{label}</h2>
                </div>
                <div className="container">
                    <img  src= {image} width="150px" alt="pic"/>
                </div>
                <div className="container">
                    <p>{calories.toFixed()} calories</p>
                </div>
                
                <ul className="container"><h3>Ingredients:</h3>
                
                    {ingredients.map ((item, index) => (
                    <li  key={index}> <img  src={icon} alt="icon" width="10px"/>{item}</li>))}
                </ul>
            </div>
        </div>
    )
}

export default NewRecipesComponents;