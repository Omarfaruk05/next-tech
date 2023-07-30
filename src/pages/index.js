import Featured from "@/components/Featured";
import FeaturedProduct from "@/components/FeaturedProduct";
import Hero from "@/components/Hero";
import Head from "next/head";
import dynamic from "next/dynamic";

const RootLayout = dynamic(() => import("../components/Layout/RootLayout"), {
  ssr: false,
});
const HomePage = ({ products }) => {
  return (
    <div>
      <Head>
        <title>NEXT TECH</title>
      </Head>
      <div>
        <Hero />
        <Featured />
        <FeaturedProduct heading={"Featured Products"} products={products} />
      </div>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export const getStaticProps = async () => {
  const res = await fetch(`${process.env.API_URL}/get-products`);
  const products = await res.json();

  const slicedProduct = products.sort(() => 0.5 - Math.random()).slice(0, 6);

  return { props: { products: slicedProduct } };
};
