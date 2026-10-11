const products = require("../../src/data/products");
const { filterByCategory } = require("../../src/catalog");

describe("filterByCategory", () => {
  test("'all возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const productIDs = filterByCategory(products, "all").map(
      (product) => product.id,
    );
    expect(productIDs).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("'undefined' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const productIDs = filterByCategory(products, undefined).map(
      (product) => product.id,
    );
    expect(productIDs).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const productIDs = filterByCategory(products, "").map(
      (product) => product.id,
    );
    expect(productIDs).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("'electronics' возвращает товары с ID [1, 2]", () => {
    const productIDs = filterByCategory(products, "electronics").map(
      (product) => product.id,
    );
    expect(productIDs).toEqual([1, 2]);
  });

  test("'books' возвращает товары с ID [3, 6]", () => {
    const productIDs = filterByCategory(products, "books").map(
      (product) => product.id,
    );
    expect(productIDs).toEqual([3, 6]);
  });

  test("'home' возвращает товары с ID [4, 5]", () => {
    const productIDs = filterByCategory(products, "home").map(
      (product) => product.id,
    );
    expect(productIDs).toEqual([4, 5]);
  });

  test("'clothes' возвращает пустой массив", () => {
    const productIDs = filterByCategory(products, "clothes").map(
      (product) => product.id,
    );
    expect(productIDs).toEqual([]);
  });

  test("'toys' возвращает пустой массив", () => {
    const productIDs = filterByCategory(products, "toys").map(
      (product) => product.id,
    );
    expect(productIDs).toEqual([]);
  });

  test("'sports' возвращает пустой массив", () => {
    const productIDs = filterByCategory(products, "sports").map(
      (product) => product.id,
    );
    expect(productIDs).toEqual([]);
  });
});
