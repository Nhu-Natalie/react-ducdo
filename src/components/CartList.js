import CartItem from "./CartItem";

function CartList(props) {
  const { carts, onClickRemove } = props;

  function cartRenderList() {
    const cartListRender = carts.map((cartItem) => {
      return (
        <CartItem
          key={cartItem.id}
          cartItem={cartItem}
          onClickRemove={onClickRemove}
        />
      );
    });

    console.log(cartListRender);
    return cartListRender;
  }

  return <div>{cartRenderList()}</div>;
}

export default CartList;
