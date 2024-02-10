import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { uiAction } from '../Store/ui-slice';

const CartButton = (props) => {
  const totalquantity =useSelector(state => state.cart.totalQuant)
  const dispatch = useDispatch()
  const showCartHandler =()=>{
    dispatch(uiAction.toogle())
  }
  return (
    <button onClick={showCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalquantity}</span>
    </button>
  );
};

export default CartButton;
