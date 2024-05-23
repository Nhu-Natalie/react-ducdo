function FooterCart(props) {
  const { cartAmount, onClickEmptyCart } = props;

  const handleEmptyCart = () => {
    onClickEmptyCart();
  };

  return (
    <footer>
      <hr />
      <div className="cart-total">
        <h4>
          total <span>{cartAmount}</span>
        </h4>
      </div>
      <button onClick={handleEmptyCart} className="btn clear-btn">
        clear cart
      </button>
    </footer>
  );
}

export default FooterCart;
