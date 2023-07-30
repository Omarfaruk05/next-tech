import FeaturedProduct from "@/components/FeaturedProduct";
import React from "react";
import dynamic from "next/dynamic";

const RootLayout = dynamic(() => import("@/components/Layout/RootLayout"), {
  ssr: false,
});

const ProductPage = ({ products }) => {
  return (
    <div>
      <FeaturedProduct products={products} heading={"All products"} />
    </div>
  );
};

export default ProductPage;

ProductPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.API_URL}/get-products`);
  const products = await res.json();

  return { props: { products } };
};
