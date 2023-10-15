export const CartItemsCount = () => {
  let totalCartItemsIcon = null;
  const cartJson = localStorage.getItem("cart");
  //console.log("CartJson", cartJson);
  let cartList = cartJson ? JSON.parse(cartJson) : [];

  cartList.forEach((item) => (totalCartItemsIcon += item.quantity));
  return totalCartItemsIcon;
};
