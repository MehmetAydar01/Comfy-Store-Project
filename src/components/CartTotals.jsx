import { useSelector } from 'react-redux';
import { formatPrice } from '../utils';

const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  );

  return (
    <div className='card bg-base-200'>
      <div className='card-body'>
        {/* SUBTOTAL */}
        <p className='flex justify-between font-medium text-sm border-b border-base-300 pb-2'>
          <span>Subtotal</span>
          <span className='font-semibold'>{formatPrice(cartTotal)}</span>
        </p>
        {/* SHIPPING */}
        <p className='flex justify-between font-medium text-sm border-b border-base-300 pb-2'>
          <span>Shipping</span>
          <span className='font-semibold'>{formatPrice(shipping)}</span>
        </p>
        {/* TAX */}
        <p className='flex justify-between font-medium text-sm border-b border-base-300 pb-2'>
          <span>Tax</span>
          <span className='font-semibold'>{formatPrice(tax)}</span>
        </p>
        {/* ORDER TOTAL */}
        <p className='flex justify-between text-md mt-4 pb-2'>
          <span className='font-bold'>Order Total</span>
          <span className='font-bold'>{formatPrice(orderTotal)}</span>
        </p>
      </div>
    </div>
  );
};

export default CartTotals;
