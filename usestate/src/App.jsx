import { useState } from "react";
import RestaurantsContainer from "./components/RestaurantsContainer";
import { restaurants as initialRestaurants } from "./data/data.js";
import "./App.css";

function App() {
  // state to store the list of restaurants
  const [restaurantState, setRestaurants] = useState([...initialRestaurants]);

  // state for the form inputs (name, type, address, etc.)
  const [newRestaurant, setNewRestaurant] = useState({
    name: "",
    type: "",
    address: "",
    phone: "",
    cuisine: "",
    rating: "",
    image: "",
    menu: [],
    hours: {}
  });

  // form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRestaurant((prevRestaurant) => ({
      ...prevRestaurant,
      [name]: value,
    }));
  };

  // form submission to add a new restaurant
  const handleSubmit = (e) => {
    e.preventDefault();

    // add the new restaurant to the state (if all fields are filled)
    if (newRestaurant.name && newRestaurant.type && newRestaurant.address) {
      setRestaurants((prevRestaurants) => [...prevRestaurants, newRestaurant]);

      // clear the form fields
      setNewRestaurant({
        name: "",
        type: "",
        address: "",
        phone: "",
        cuisine: "",
        rating: "",
        image: "",
        menu: [],
        hours: {}
      });
    } else {
      alert("Please fill in all required fields");
    }
  };

  return (
    <div className="App">
      <h1>Restaurant List</h1>

      {/* controlled form when adding new restaurant */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Restaurant Name:
            <input
              type="text"
              name="name"
              value={newRestaurant.name}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Type:
            <input
              type="text"
              name="type"
              value={newRestaurant.type}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={newRestaurant.address}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Phone:
            <input
              type="text"
              name="phone"
              value={newRestaurant.phone}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Cuisine:
            <input
              type="text"
              name="cuisine"
              value={newRestaurant.cuisine}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Rating:
            <input
              type="number"
              name="rating"
              value={newRestaurant.rating}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Image URL:
            <input
              type="text"
              name="image"
              value={newRestaurant.image}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button type="submit">Add Restaurant</button>
      </form>

      {/* restaurants list */}
      <RestaurantsContainer restaurants={restaurantState} />
    </div>
  );
}

export default App;
