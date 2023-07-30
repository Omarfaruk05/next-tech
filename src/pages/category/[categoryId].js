import FeaturedProduct from "@/components/FeaturedProduct";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const RootLayout = dynamic(() => import("@/components/Layout/RootLayout"), {
  ssr: false,
});

const CategoryProduct = ({ products }) => {
  const router = useRouter();
  const { categoryId } = router.query;

  return (
    <div>
      <FeaturedProduct
        heading={`Available ${categoryId}s `}
        fetchPath={categoryId}
        products={products}
        pcBuild={"build"}
      />
    </div>
  );
};

export default CategoryProduct;

CategoryProduct.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:5000/product-category/${params.categoryId}`
  );
  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
};
