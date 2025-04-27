import { useState } from "react";

function Restaurant(props) {
  //visibility of hours and menu
  const [hours, setHours] = useState(false);
  const [menu, setMenu] = useState(false);

  //toggle the visibility
  const handleHours = () => setHours((prev) => !prev);
  const handleMenu = () => setMenu((prev) => !prev);

  return (
    <div className="restaurant">
      <img src={props.restaurant.image} alt={props.restaurant.name} />
      <h2>{props.restaurant.name}</h2>
      <ul>
        <li>{props.restaurant.address}</li>
        <li>{props.restaurant.phone}</li>
        <li>{props.restaurant.cuisine}</li>
        <li>{props.restaurant.rating}</li>
      </ul>
      <button onClick={handleHours}>Hours</button>
      <button onClick={handleMenu}>Menu</button>
       {/* if the menu section is visible 
       (menu state is true), display the menu */}
      {menu && (
        <ul>
          {/* map through the restaurant menu array 
          and display each item and its price */}
          {props.restaurant.menu.map((menuItem, index) => (
            <li key={index}>{`${menuItem.item} $${menuItem.price}`}</li>
          ))}
        </ul>
      )}
      {hours && (
        <ul>
          {/* map through the hours object 
          and display the day and time */}
          {Object.entries(props.restaurant.hours).map(([day, time]) => (
            <li key={day}>
              <strong>{day.charAt(0).toUpperCase() + day.slice(1)}:</strong> {time}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Restaurant;
