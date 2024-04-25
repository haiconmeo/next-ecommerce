
import Layout from '../layouts/Main';
import Footer from '../components/footer';
import Breadcrumb from '../components/breadcrumb';
import ProductsFilter from '../components/products-filter';
import ProductsContent from '../components/products-content';
import { GetServerSideProps, NextPage } from 'next';

interface ProductsPageProps {
  searchQuery: string | null;
}

const Products: NextPage<ProductsPageProps> = ({ searchQuery }) => {
  return (
    <Layout>
      <Breadcrumb />
      <section className="products-page">
        <div className="container">
          <ProductsFilter />
          <ProductsContent searchQuery={searchQuery || ''}/>
        </div>
      </section>
      <Footer />
    </Layout>)
}

export const getServerSideProps: GetServerSideProps<ProductsPageProps> = async (context) => {
  const { search } = context.query;
  return {
    props: {
      searchQuery: typeof search === 'string' ? search : null,
    },
  };
};
export default Products
