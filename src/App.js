import "./App.css";
import CartList from "./components/CartList";
import FooterCart from "./components/FooterCart";
import NavBar from "./components/NavBar";

import { useState } from "react";
import cartList from "./service/cart";

function App() {
  const [carts, setCarts] = useState(cartList);

  console.log("render start");

  const handleClickRemove = (id) => {
    const newStateCart = carts.filter((cartItem) => {
      if (cartItem.id !== id) {
        return true;
      }
    });
    console.log("newStateCart: ", newStateCart);
    setCarts(newStateCart);
  };

  const handleClickAmountUp = (cartItem) => {
    // Tìm index
    // Tăng amount phần tử đó

    const indexEl = carts.findIndex((cart) => {
      return cart.id === cartItem.id;
    });

    // Tạo mảng mới
    // Đây chỉ là Shadow Copy ko như Filter >> phải cẩn thận
    const newStateCart = [...carts];

    // Để tránh thay đổi trên mảng carts do việc gán bên trên nên gán thêm object
    // Ko dùng const ở đây nữa
    //  const newStateCart[indexEl] = {...cartItem}
    newStateCart[indexEl] = { ...cartItem };

    newStateCart[indexEl].amount++;

    console.log("cart beore: ", carts);
    console.log("cart after: ", newStateCart);

    setCarts(newStateCart);
  };

  const handleClickAmountDown = (cartItem) => {
    const indexEl = carts.findIndex((cart) => {
      return cart.id === cartItem.id;
    });

    const newStateCart = [...carts];
    // Thay thế Object có tạo địa chỉ REFERENCE mới
    newStateCart[indexEl] = { ...cartItem };

    newStateCart[indexEl].amount--;
    setCarts(newStateCart);
  };

  const handleEmptyCart = () => {
    setCarts([]);
  };

  // const handleClickRemove = (id) => {
  //   const newStateCart = carts;
  //   const index = newStateCart.findIndex((cartItem) => {
  //     return cartItem.id === id;
  //   });
  //   newStateCart.splice(index, 1);
  //   console.log("newStateCart: ", newStateCart);

  //   setCarts(newStateCart);
  // };

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

  console.dir(handleClickRemove);

  const cartCheckAmountNoEmpty = carts.filter((cartItem) => {
    if (cartItem.amount > 0) {
      return true;
    }
  });

  if (carts.length === 0 || cartCheckAmountNoEmpty.length === 0) {
    return (
      <main>
        <NavBar cartTotal={cartTotal} />
        <section className="cart">
          <header>
            <h2>Your bag is current empty</h2>
          </header>
        </section>
      </main>
    );
  }

  console.log("cartAmount: ", cartAmount);
  console.log("render end");
  return (
    <main>
      <NavBar cartTotal={cartTotal} />
      <section className="cart">
        <header>
          <h2>your bag</h2>
        </header>
        <CartList
          carts={carts}
          onClickRemove={handleClickRemove}
          onClickAmountUp={handleClickAmountUp}
          onClickAmountDown={handleClickAmountDown}
        />
        <FooterCart
          cartAmount={cartAmount}
          onClickEmptyCart={handleEmptyCart}
        />
      </section>
    </main>
  );
}

export default App;
