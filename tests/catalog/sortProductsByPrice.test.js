const products = require("../../src/data/products");
const { sortProductsByPrice } = require("../../src/catalog");

describe("sortProductsByPrice", () => {
  test("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
    const productIDs = sortProductsByPrice(products, "asc").map(
      (product) => product.id,
    );

    expect(productIDs).toEqual([3, 6, 5, 4, 2, 1]);
  });

  test("все товары без направления сортируются как [3, 6, 5, 4, 2, 1]", () => {
    const productIDs = sortProductsByPrice(products, undefined).map(
      (product) => product.id,
    );

    expect(productIDs).toEqual([3, 6, 5, 4, 2, 1]);
  });

  test("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]", () => {
    const selectedProducts = products.filter((product) =>
      [1, 3, 4].includes(product.id),
    );

    const sortedProductIDs = sortProductsByPrice(selectedProducts, "asc").map(
      (product) => product.id,
    );

    expect(sortedProductIDs).toEqual([3, 4, 1]);
  });

  test("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
    const productIDs = sortProductsByPrice(products, "desc").map(
      (product) => product.id,
    );

    expect(productIDs).toEqual([1, 2, 4, 5, 6, 3]);
  });

  test("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]", () => {
    const selectedProducts = products.filter((product) =>
      [3, 1, 4].includes(product.id),
    );

    const sortedProductIDs = sortProductsByPrice(selectedProducts, "desc").map(
      (product) => product.id,
    );

    expect(sortedProductIDs).toEqual([1, 4, 3]);
  });

  test("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]", () => {
    const selectedProducts = products.filter((product) =>
      [5, 2, 6].includes(product.id),
    );

    const sortedProductIDs = sortProductsByPrice(selectedProducts, "desc").map(
      (product) => product.id,
    );

    expect(sortedProductIDs).toEqual([2, 5, 6]);
  });

  test("'asc' не меняет исходный массив [1, 3, 4]", () => {
    const selectedProducts = products.filter((product) =>
      [1, 3, 4].includes(product.id),
    );

    const originalProductIDs = selectedProducts.map((product) => product.id);

    sortProductsByPrice(selectedProducts, "asc");

    const productIDsAfterSortCall = selectedProducts.map(
      (product) => product.id,
    );

    expect(productIDsAfterSortCall).toEqual(originalProductIDs);
  });

  test("'desc' не меняет исходный массив [1, 3, 4]", () => {
    const selectedProducts = products.filter((product) =>
      [1, 3, 4].includes(product.id),
    );

    const originalProductIDs = selectedProducts.map((product) => product.id);

    sortProductsByPrice(selectedProducts, "desc");

    const productIDsAfterSortCall = selectedProducts.map(
      (product) => product.id,
    );

    expect(productIDsAfterSortCall).toEqual(originalProductIDs);
  });

  test("направление по умолчанию не меняет исходный массив всех товаров", () => {
    const originalProductIDs = products.map((product) => product.id);

    sortProductsByPrice(products);

    const productIDsAfterSortCall = products.map((product) => product.id);

    expect(productIDsAfterSortCall).toEqual(originalProductIDs);
  });
});
