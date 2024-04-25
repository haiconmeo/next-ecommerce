import { useState } from 'react';
import List from './list';

const ProductsContent: React.FC<{ searchQuery: string }> = ({ searchQuery }) => {
  const [orderProductsOpen, setOrderProductsOpen] = useState(false);
  const [sortOption, setSortOption] = useState('popular');
  const [filterOption, setFilterOption] = useState('all');

  return (
    <section className="products-content">
      <div className="products-content__intro">
        <h2>
          Men's Tops <span>(133)</span>
        </h2>
        <button
          type="button"
          onClick={() => setOrderProductsOpen(!orderProductsOpen)}
          className="products-filter-btn"
        >
          <i className="icon-filters"></i>
        </button>
        <form className={`products-content__filter ${orderProductsOpen ? 'products-order-open' : ''}`}>
          <div className="products__filter__select">
            <h4>Show products:</h4>
            <div className="select-wrapper">
              <select
                value={filterOption}
                onChange={(e) => setFilterOption(e.target.value)}
              >
                <option value="all">All</option>
                <option value="featured">Featured</option>
                <option value="sale">On Sale</option>
              </select>
            </div>
          </div>
          <div className="products__filter__select">
            <h4>Sort by:</h4>
            <div className="select-wrapper">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="popular">Popular</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </form>
      </div>
      <List searchQuery={searchQuery} sortOption={sortOption} filterOption={filterOption} />
    </section>
  );
};
  
export default ProductsContent
  