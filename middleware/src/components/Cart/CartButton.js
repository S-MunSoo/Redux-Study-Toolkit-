import classes from "./CartButton.module.css";
import { uiAction } from "../../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";
const CartButton = (props) => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch(uiAction.toggle());
  };

  return (
    // 장바구니 버튼 이며 장바구니 클릭시 장바구니 ui가 실행된다
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
