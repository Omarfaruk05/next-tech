import FeaturedProduct from "@/components/FeaturedProduct";
import { useRouter } from "next/router";

const CategoryProduct = () => {
  const router = useRouter();
  const { categoryId } = router.query;
  return (
    <div>
      <FeaturedProduct
        heading={`Available ${categoryId}s `}
        fetchPath={categoryId}
      />
    </div>
  );
};

export default CategoryProduct;
