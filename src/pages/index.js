import Featured from "@/components/Featured";
import FeaturedProduct from "@/components/FeaturedProduct";
import Hero from "@/components/Hero";
import Head from "next/head";
const HomePage = () => {
  return (
    <div>
      <Head>
        <title>NEXT TECH</title>
      </Head>
      <div>
        <Hero />
        <Featured />
        <FeaturedProduct />
      </div>
    </div>
  );
};

export default HomePage;
