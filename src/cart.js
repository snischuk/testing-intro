function notImplemented() {
  throw new Error("Корзина ещё не реализована. Сначала прочитайте тесты.");
}

const MIN_SUBTOTAL_FOR_FREE_DELIVERY = 50000;
const DELIVERY_PRICE = 30000;
const MIN_SUBTOTAL_FOR_DISCOUNT = 20000;
const SAVE10_DISCOUNT_RATE = 0.1;

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

function calculateCartSubtotal(cart) {
  return cart.reduce(
    (subtotal, item) => subtotal + item.price * item.quantity,
    0,
  );
}

function calculateOrderTotal(cart, promoCode) {
  const subtotal = calculateCartSubtotal(cart);

  const isEligibleForDiscount =
    promoCode === "SAVE10" && subtotal >= MIN_SUBTOTAL_FOR_DISCOUNT;

  const discount = isEligibleForDiscount
    ? Math.round(subtotal * SAVE10_DISCOUNT_RATE)
    : 0;

  const delivery =
    subtotal < MIN_SUBTOTAL_FOR_FREE_DELIVERY ? DELIVERY_PRICE : 0;

  return {
    subtotal,
    discount,
    delivery,
    total: subtotal - discount + delivery,
  };
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
