import { useState } from "react";

//this part displays the information needed about a specific resaurant
function Restaurant(props) {
  //define state variables to manage hours and menu section 
  //manages visibilty, since its false, it's hidden by default
  const [hours, setHours] = useState(false);
  const [menu, setMenu] = useState(false);

  //this is where to toggle the visibility of the hours and Menu
  const handleHours = () => {
    setHours((prev) => !prev);
  };
  const handleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <div className="restaurant">
      {/* display the restaurnt image and restaurnt information */}
      <img src={props.restaurant.image} alt={props.name} />
      <h2>{props.restaurant.name}</h2>
      <ul>
        <li>{props.restaurant.address}</li>
        <li>{props.restaurant.phone}</li>
        <li>{props.restaurant.cuisine}</li>
        <li>{props.restaurant.rating}</li>
      </ul>
      {/* These buttons to toggle the visibility for hours and menu */}
      <button onClick={handleHours}>Hours</button>
      <button onClick={handleMenu}>Menu</button>
      {/* if it's true, then the menu is rendered */}
      {menu && (
        <ul>
          {/* Mapping through the restaurnt menu and displaying each item */}
          {props.restaurant.menu.map((menuItem, index) => (
            <li key={index}>{`${menuItem.item} $${menuItem.price}`}</li>
          ))}
        </ul>
      )}
      {/* if true, the hours will be rendered */}
      {hours && (
        <ul>
          {/* same there here, mapping through the restaurnt hours displaying day and time */}
          {Object.entries(props.restaurant.hours).map(([day, time]) => (
            <li key={day}>
              {/* capitalizing the first letter of each day, just better formatting */}
              <strong>{day.charAt(0).toUpperCase() + day.slice(1)}:</strong>{" "}
              {time}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Restaurant;

