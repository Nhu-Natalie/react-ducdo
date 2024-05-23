import "./App.css";
import CartList from "./components/CartList";
import FooterCart from "./components/FooterCart";
import NavBar from "./components/NavBar";

import { useState } from "react";
import cartList from "./service/cart";

function App() {
  const [carts, setCarts] = useState(cartList);
  console.log("render start");
  // const handleClickRemove = (id) => {
  //   const newStateCart = carts.filter((cartItem) => {
  //     if (cartItem.id !== id) {
  //       return true;
  //     }
  //   });
  //   console.log("newStateCart: ", newStateCart);
  //   setCarts(newStateCart);
  // };

  const handleClickRemove = (id) => {
    const newStateCart = carts;
    const index = newStateCart.findIndex((cartItem) => {
      return cartItem.id === id;
    });
    newStateCart.splice(index, 1);
    console.log("newStateCart: ", newStateCart);

    setCarts(newStateCart);
  };

  // function cartTotal() {
  //   let cartTotal = 0;
  //   for (let i = 0; i < carts.length; i++) {
  //     cartTotal += carts[i].amount;
  //   }
  //   return cartTotal;
  // }

  const cartTotal = carts.reduce(function (total, currentValue) {
    // console.log("total: ", total);
    // console.log("currentValue: ", currentValue);
    return total + currentValue.amount;
  }, 0);

  console.log("cartTotal: ", cartTotal);
  // function cartAmount() {
  //   let cartAmount = 0;
  //   for (let i = 0; i < carts.length; i++) {
  //     cartAmount += carts[i].amount * carts[i].price;
  //   }
  //   return cartAmount;
  // }

  const cartAmount = carts.reduce(function (total, currentValue) {
    return total + currentValue.amount * currentValue.price;
  }, 0);

  console.log("cartAmount: ", cartAmount);

  console.dir(handleClickRemove);
  console.log("render end");

  return (
    <main>
      <NavBar cartTotal={cartTotal} />
      <section className="cart">
        <header>
          <h2>your bag</h2>
        </header>
        <CartList carts={carts} onClickRemove={handleClickRemove} />
        <FooterCart cartAmount={cartAmount} />
      </section>
    </main>
  );
}

export default App;
