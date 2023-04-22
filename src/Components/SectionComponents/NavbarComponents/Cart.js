import { useSelector } from "react-redux";
import { BsXCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {
  incrementCart,
  decrementCart,
  handleCartDel,
} from "../../../redux/product";

function Cart() {
  const productCart = useSelector((state) => state.counter.cartProduct);
  const dispatch = useDispatch();
  const getTotals = productCart.reduce((a, b) => a + b.sum, 0);

  return (
    <div className="container mt-5 px-5 shopCart ">
      <h1>Shopping Cart</h1>
      <div className="shopCart-line"></div>
      {productCart.map((item, index) => (
        <div key={index}>
          <div className="row  ">
            <div className="col-md-3">
              <img class="card-img-top" src={item.image} />
            </div>
            <div key={index} className="col-md-9  shopCart-description ">
              <div>
                <h4>{item.title}</h4>
                <h5>${item.price}</h5>
                <p>{item.text}</p>
                <button
                  onClick={() =>
                    dispatch(
                      decrementCart({ num: 1, price: item.price, id: item.id })
                    )
                  }
                >
                  -
                </button>
                <span>{item.number}</span>
                <button
                  onClick={() =>
                    dispatch(
                      incrementCart({ num: 1, price: item.price, id: item.id })
                    )
                  }
                >
                  +
                </button>
              </div>
              <div className="shopCart-btn">
                <h5>${item.sum}</h5>
                <button onClick={() => dispatch(handleCartDel(index))}>
                  <BsXCircle />
                </button>
              </div>
            </div>
          </div>
          <div className="shopCart-line px-2"></div>
        </div>
      ))}

      <h2>{`TOTAL: $${getTotals}`}</h2>
    </div>
  );
}

export default Cart;
