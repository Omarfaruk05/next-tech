import ProductCart from "./ProductCart";

const FeaturedProduct = () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="bg-slate-100">
      <div className="max-w-7xl mx-auto mb-4 py-4 px-2">
        <h2 className="text-center text-4xl text-green-800 font-semibold mb-1">
          Featured Products
        </h2>
        <p className="text-center">Check & Get Your Desired Product!</p>
        <div className="flex flex-wrap gap-4 justify-between">
          {nums.map((x) => (
            <ProductCart key={x} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
