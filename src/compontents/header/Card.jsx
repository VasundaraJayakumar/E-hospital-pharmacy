import React, { useState, useMemo } from 'react';
import './card.css';
import PaymentMethodModal from './PaymentMethodModal'; // Adjust the path if necessary
import CartItems from './CartItems';
import { AiFillLock, AiOutlineClose } from 'react-icons/ai';
import { useSelector } from 'react-redux';

function Card() {
  const products = useSelector((state) => state.cart);
  const [cardOpen, setCardOpen] = useState(false);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);

  const closeCard = () => {
    setCardOpen(false);
  };

  // Calculate total price
  const totalPrice = useMemo(() => {
    return products.reduce((acc, currProduct) => {
      return acc + currProduct.price * currProduct.quantity;
    }, 0);
  }, [products]);

  const handleProceedToPayment = () => {
    setCardOpen(false); // Close the cart slider
    setPaymentModalOpen(true); // Open the payment modal
  };

  return (
    <>
      <div className="card" onClick={() => setCardOpen(!cardOpen)}>
        <AiFillLock className="cardBagIcon" />
        <span className="numberCard">{products.length}</span>
      </div>
      <div className={cardOpen ? 'overlay' : 'none'}></div>
      <div className={cardOpen ? 'showcarditem' : 'hidecarditem'}>
        <div className="title d-flex justify-content-between">
          <h2>Shopping Cart</h2>
          <button onClick={closeCard} aria-label="Close cart">
            <AiOutlineClose className="icon__close" />
          </button>
        </div>
        <div className="allproducts">
          <CartItems closeCard={closeCard} />
        </div>
        <div className="checkout">
          {/* Proceed to Payment Button */}
          <button
            onClick={handleProceedToPayment}
            className="btn btn-primary"
            style={{ margin: '20px auto', display: 'block' }}
          >
            Proceed to Payment
          </button>
          <span>Price To Checkout:</span>
          <label>
            <span style={{ marginLeft: '40px', cursor: 'pointer' }}>
              ${totalPrice.toFixed(2)}
            </span>
          </label>
          {products.length === 0 && <p>Your cart is empty.</p>}
        </div>
      </div>

      {/* Payment Modal */}
      <PaymentMethodModal isOpen={paymentModalOpen} onClose={() => setPaymentModalOpen(false)} />
    </>
  );
}

export default Card;
