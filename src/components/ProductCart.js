/* eslint-disable @next/next/no-img-element */
import { AiFillStar } from "react-icons/ai";

const ProductCart = ({ product }) => {
  return (
    <div>
      <div className="bg-base-100 rounded-sm shadow-sm hover:shadow-lg mb-8 w-40">
        <div className="" onClick={() => navigate(``)}>
          <div className="">
            <div>
              <img
                className=" mx-auto rounded-t-sm bg-gray-300 w-full h-52 mt-2"
                src={product?.productImage[0]}
                alt=""
              />
            </div>
            <div className="px-3">
              <h3 className="text-normal sm:text-sm font-bold text-gray-600">
                {product?.productName.slice(0, 20)} ...
              </h3>
              <h2 className="text-2xl font-semibold text-green-500">
                <span className="font-normal">৳ </span>
                {product?.price}
              </h2>
              <div className="flex justify-start items-center my-2">
                <AiFillStar className="h-5 w-5 text-orange-400" />
                <AiFillStar className="h-5 w-5 text-orange-400" />
                <AiFillStar className="h-5 w-5 text-orange-400" />
                <AiFillStar className="h-5 w-5 text-orange-400" />
                <AiFillStar className="h-5 w-5 text-orange-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
