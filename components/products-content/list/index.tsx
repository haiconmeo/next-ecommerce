import useSWR from 'swr';
import { useState, useEffect, useCallback } from 'react';
import ProductItem from '../../product-item';
import ProductsLoading from './loading';
import { ProductTypeList } from 'types';

interface ProductsContentProps {
  searchQuery: string;
  sortOption: string;
  filterOption: string;
}

const ProductsContent: React.FC<ProductsContentProps> = ({
  searchQuery,
  sortOption,
  filterOption,
}) => {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState<ProductTypeList[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetcher = useCallback(
    (url: string) => fetch(url).then((res) => res.json()),
    []
  );

  const { data, error } = useSWR(
    `/api/products?page=${page}&search=${searchQuery}&sort=${sortOption}&filter=${filterOption}`,
    fetcher
  );

  useEffect(() => {
    if (data) {
      setProducts((prevProducts) => [...prevProducts, ...data]);
      setHasMore(data.length > 0);
      setIsLoading(false);
    }
  }, [data]);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight &&
      !isLoading &&
      hasMore
    ) {
      setIsLoading(true);
      setPage((prevPage) => prevPage + 1);
    }
  }, [isLoading, hasMore]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  if (error) return <div>Failed to load products</div>;

  return (
    <>
      {isLoading && <ProductsLoading />}
      <section className="products-list">
        {products.map((item: ProductTypeList) => (
          <ProductItem
            id={item.id}
            name={item.name}
            price={item.price}
            color={item.color}
            currentPrice={item.currentPrice}
            key={item.id}
            images={item.images}
          />
        ))}
      </section>
    </>
  );
};

export default ProductsContent;