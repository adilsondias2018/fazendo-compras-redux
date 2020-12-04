//  add

export const addToCart = (food) => ({
  type: "@cart/ADD",
  food,
});

export const removeFromCart = (list) => ({
  type: "@cart/REMOVE",
  list,
});
