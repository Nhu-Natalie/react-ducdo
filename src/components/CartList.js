import CartItem from "./CartItem";

function CartList(props) {
  const { carts, onClickRemove, onClickAmountUp, onClickAmountDown } = props;

  function cartRenderList() {
    const cartListRender = carts.map((cartItem) => {
      if (cartItem.amount > 0) {
        return (
          <CartItem
            key={cartItem.id}
            cartItem={cartItem}
            onClickRemove={onClickRemove}
            onClickAmountUp={onClickAmountUp}
            onClickAmountDown={onClickAmountDown}
          />
        );
      }
    });

    console.log(cartListRender);
    return cartListRender;
  }

  return <div>{cartRenderList()}</div>;
}

export default CartList;
