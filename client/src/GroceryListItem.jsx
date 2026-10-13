const GroceryListItem = (props) => {
  return <li   onClick={()=>  console.log("clicked ! ") }   > {props.el} </li>;
};

export default GroceryListItem;
