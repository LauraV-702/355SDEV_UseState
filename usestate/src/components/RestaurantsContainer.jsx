import Restaurant from "./Restaurant";

//the restaurnts component recieves a list of restaurnts as a prop
function RestaurantsContainer(props) {
  // console.log(props);
  return (
    <div className="restaurantContainer">
      {/*iterating over the 'restaurants' array passed as a prop */}
      {props.restaurants.map((restaurant) => (
        //for each restaurant, rendering the Restaurant component and 
        //passing the restaurant data as a prop
        <Restaurant restaurant={restaurant} />
      ))}
    </div>
  );
}

export default RestaurantsContainer;
