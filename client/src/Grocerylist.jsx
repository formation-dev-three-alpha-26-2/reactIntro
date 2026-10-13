import GroceryListItem from "./GroceryListItem";

const Grocerylist = (props) => {
  // app (composant principal) parent =>   composant Grocerylist

  //  composant Grocerylist  parent =>   composant GrocerylistItem
console.log(props.data);
// const items = ["Pommes", "Bananes", "Fraises"];

  return (
    <div>
      <ul>
        {props.data.map((el) => {
          return  <GroceryListItem el={el} />;
        })}
      </ul>
    </div>
  );
};

export default Grocerylist;
