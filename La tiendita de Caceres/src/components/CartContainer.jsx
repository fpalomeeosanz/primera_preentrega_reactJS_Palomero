import CartIcon from "./CartIcon";
import CartItems from "./CartItems";

const CartContainer = () => {
    return(
        <div className="bg-info rounded  p-3 position-relative"
        >
           <CartIcon color="white"/> 
           <CartItems count={3} />
        </div>
    );
};

export default CartContainer;