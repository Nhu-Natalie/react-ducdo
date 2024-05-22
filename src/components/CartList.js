import CartItem from "./CartItem";

function CartList(props) {
  const { carts } = props;
  function cartRenderList() {
    const cartListRender = carts.map((cartItem) => {
      return <CartItem key={cartItem.id} cartItem={cartItem} />;
    });

    console.log(cartListRender);
    return cartListRender;
  }

  return <div>{cartRenderList()}</div>;
}

export default CartList;
