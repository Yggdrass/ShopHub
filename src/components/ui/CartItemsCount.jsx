export const CartItemsCount = () => {
  let totalCartItemsIcon = 0;
  const cartJson = localStorage.getItem("cart");
  //console.log("CartJson", cartJson);
  let cartList = cartJson ? JSON.parse(cartJson) : [];

  cartList.forEach((item) => (totalCartItemsIcon += item.quantity));
  return totalCartItemsIcon;
};
