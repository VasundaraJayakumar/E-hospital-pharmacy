import React from 'react';
import { addToCart, decreasefromcart, removeFromCart } from '../../redux-store/CartSlice';
import { useDispatch, useSelector } from 'react-redux';

function CartItems({ closeCard }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <div className="cartlist">
        {cart.length === 0 ? (
          <div className="text-danger text-center mt-5">
            <h2>Cart is empty 😊!</h2>
            <div>
              <button type="button" className="btn btn-dark mt-4" onClick={closeCard}>
                🚀 Back to home
              </button>
            </div>
          </div>
        ) : (
          cart.map((product) => {
            return (
              <div className="cartlist__item d-flex align-items-center gap-3 mb-3" key={product.id}>
                <div className="img">
                  <img src={product.img} alt="" style={{ width: '106px' }} />
                </div>
                <div className="details">
                  <div className="title">
                    <div className="price">Unit Price ${product.price}</div>
                  </div>
                  <div className="add__minus d-flex align-items-center">
                    {/* "+" button to increase product quantity */}
                    <div className="increase">
                      <button
                        style={{ fontSize: '20px', padding: '5px', marginRight: '10px' }}
                        onClick={() => dispatch(addToCart(product))}
                      >
                        +
                      </button>
                    </div>
                    <div className="quantity">
                      <span style={{ padding: '5px', fontSize: '16px' }}>{product.quantity}</span>
                    </div>
                    <div className="decrease">
                      <button
                        style={{ fontSize: '20px', padding: '5px', marginLeft: '10px' }}
                        onClick={() => {
                          if (product.quantity > 1) {
                            dispatch(decreasefromcart(product));
                          } else {
                            dispatch(removeFromCart(product));
                          }
                        }}
                      >
                        -
                      </button>
                    </div>
                    <div className="totalprice ms-2">
                      ${(product.price * product.quantity).toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

export default CartItems;
