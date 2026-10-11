function notImplemented() {
  throw new Error("Корзина ещё не реализована. Сначала прочитайте тесты.");
}

function addToCart(cart, product, quantity) {
  if (quantity <= 0) {
    throw new RangeError("Количество должно быть положительным.");
  }

  const existingItem = cart.find((item) => item.id === product.id);
  const newQuantity = (existingItem ? existingItem.quantity : 0) + quantity;

  if (newQuantity > product.stock) {
    throw new RangeError("Количество товара превышает остаток на складе.");
  }

  if (existingItem) {
    return cart.map((item) =>
      item.id === product.id ? { ...item, quantity: newQuantity } : item,
    );
  }

  return [...cart, { ...product, quantity }];
}

function changeQuantity(cart, productId, quantity) {
  if (quantity <= 0) {
    throw new RangeError("Количество должно быть положительным.");
  }

  const existingItem = cart.find((item) => item.id === productId);
  if (existingItem && quantity > existingItem.stock) {
    throw new RangeError("Количество товара превышает остаток на складе.");
  }

  return cart.map((item) =>
    item.id === productId ? { ...item, quantity } : item,
  );
}
function removeFromCart(cart, productId) {
  return cart.filter((item) => item.id !== productId);
}

function calculateCartSubtotal() {
  return notImplemented();
}
function calculateOrderTotal() {
  return notImplemented();
}

const cartApi = {
  addToCart,
  changeQuantity,
  removeFromCart,
  calculateCartSubtotal,
  calculateOrderTotal,
};

if (typeof module !== "undefined") module.exports = cartApi;
if (typeof window !== "undefined") window.cartApi = cartApi;
