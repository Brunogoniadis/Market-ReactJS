import React, { useState, useEffect } from "react";
import { MainScreen } from "./style";
import { ProductCard } from "../../Components/ProductCard/ProductCard";
import { UseHookItemsByCategory } from "../../Service/CustomHooks";

export const Category = () => {
  const [paramFilter, setParamFilter] = useState("price");
  const [orderFilter, setOrderFilter] = useState("desc");

  const { items, loading, error } = UseHookItemsByCategory(
    "smartphones",
    true,
    orderFilter,
    paramFilter
  );

  const handleParamFilterChange = (event) => {
    const selectedOption = event.target.value;
    setParamFilter(selectedOption);
  };

  const handleOrderFilterChange = (event) => {
    const selectedOption = event.target.value;
    setOrderFilter(selectedOption);
  };

  return (
    <MainScreen>
      <div className="footer-information">teste</div>
      <div className="content">
        <div className="main-content">
          <div className="title-wrapper">
            <div className="title-container">
              <p>teste</p>
              <div className="order-containers">
                <select value={paramFilter} onChange={handleParamFilterChange}>
                  <option value="price">Price</option>
                  <option value="rating">Rating</option>
                </select>
                <select value={orderFilter} onChange={handleOrderFilterChange}>
                  <option value="desc">Desc</option>
                  <option value="asc">Asc</option>
                </select>{" "}
              </div>
            </div>
          </div>

          <div className="product-wrapper">
            {items.map((item) => (
              <ProductCard
                key={item.id}
                brand={item.brand}
                price={item.price}
                rating={item.rating}
                title={item.title}
                thumbnail={item.thumbnail}
              />
            ))}
          </div>
        </div>
      </div>
    </MainScreen>
  );
};

export default Category;
