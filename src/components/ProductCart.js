/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const ProductCart = ({ product }) => {
  return (
    <div>
      <div className="bg-base-100 rounded-sm shadow-sm hover:shadow-lg mb-8 w-40">
        <div>
          <Link href={`product/${product?._id}`}>
            <div>
              <div>
                <img
                  className=" mx-auto rounded-t-sm bg-gray-300 w-full h-52 mt-2"
                  src={product?.Image}
                  alt=""
                />
              </div>
              <div className="px-3">
                <h3 className="text-normal sm:text-sm font-bold text-gray-600">
                  Name: {(product?.productName).slice(0, 7)}..
                </h3>
                <p className="text-sm font-semibold">
                  Category: {product?.category}
                </p>
                <p className="text-sm">Status: {product?.status}</p>
                <p className="text-md font-semibold text-purple-900">
                  Price: {product?.price}
                  <span className="font-normal">৳ </span>
                </p>
                <p className="text-sm">
                  Rating:{" "}
                  <span className="text-orange-500">
                    {product?.rating.toFixed(1)}
                  </span>
                </p>
                <div>
                  <Link
                    href={`/product/${product?._id}`}
                    className="mt-2 btn btn-sm w-full rounded-sm bg-purple-500 text-white hover:bg-purple-700 hover:rounded-lg"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
