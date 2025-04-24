
import RestaurantsContainer from "./components/RestaurantsContainer";
import { restaurants } from "./data/data.js";
import { useState } from "react";
import "./App.css";

//this is the main entry point of the application 
function App() {
  //create the variable to store the restaurant data, 
  //then use the spread operater to clone data array
  const [restaurantState, setRestaurants] = useState([...restaurants]);

  return (
    <div className="App">
      <RestaurantsContainer restaurants={restaurantState} />
    </div>
  );
}

export default App;

