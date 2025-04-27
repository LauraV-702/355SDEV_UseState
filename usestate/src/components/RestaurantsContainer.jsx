import Restaurant from "./Restaurant";

function RestaurantsContainer(props) {
  return (
    <div className="restaurantContainer">
      {/* iterate 'restaurants' array to be passed as prop */}
      {props.restaurants.map((restaurant, index) => (
        // for each restaurant, render 
        //Restaurant component and pass the restaurant data as a prop
        <Restaurant key={index} restaurant={restaurant} />
      ))}
    </div>
  );
}

export default RestaurantsContainer;
