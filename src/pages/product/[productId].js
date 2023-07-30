/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";
import dynamic from "next/dynamic";

const RootLayout = dynamic(() => import("@/components/Layout/RootLayout"), {
  ssr: false,
});

const ProductDetails = ({ product }) => {
  const [num, setNum] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);

  const router = useRouter();
  const { productId } = router.query;

  console.log(productId);

  const handleQuantity = (operator) => {
    if (operator === "increase") {
      setQuantity(quantity + 1);
      return;
    }
    if (operator === "decrease" && quantity === 1) {
      return;
    }
    if (operator === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
      return;
    }
  };

  const handleRating = (rating) => {
    setRating(rating);
    console.log(rating);
  };
  const handlePhoto = (num) => {
    setNum(num);
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto my-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 justify-between bg-white p-4 rounded">
          <div className="col-span-2">
            <div>
              <img
                className="text-center w-full cursor-pointer"
                src={product?.Image}
                alt=""
              />
            </div>
          </div>
          <div className="col-span-3 px-4">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-100 p-1 shadow-sm px-5">
                Price: <span className="font-normal">৳ </span>
                {product?.price}
              </span>
              <span className="rounded-full bg-slate-100 p-1 shadow-sm px-5">
                Warranty: 1 Year
              </span>
            </div>
            <div>
              <div className="px-3">
                <h3 className="text-2xl font-bold text-gray-600">
                  Name: {product?.productName}
                </h3>
                <p className="text-lg font-semibold">
                  Category: {product?.category}
                </p>
                <p className="text-lg font-semibold text-purple-800">
                  Price: {product?.price}
                  <span className="font-normal">৳ </span>
                </p>
                <p className="text-lg font-semibold">
                  Status: {product?.status}
                </p>
                <p>
                  Description:{" "}
                  <span className="text-orange-500">
                    {product?.description}
                  </span>
                </p>
                <p>
                  Rating:{" "}
                  <span className="text-orange-500">
                    {product?.rating.toFixed(1)}
                  </span>
                </p>
              </div>

              <p className="text-orange-600 text-sm px-2">
                For more info, Please scroll down..
              </p>
            </div>
            <div className="flex justify-start items-center gap-4 my-6">
              <p className="mt-1">
                <span>{product?.rating}</span>
                <span className="hover:text-orange-500 cursor-pointer">
                  BASED ON REVIEWS.{" "}
                </span>
                <span className="hover:text-orange-500 cursor-pointer">
                  -WRITE A REVIEW
                </span>
              </p>
            </div>
            <div className="sm:flex gap-5 mt-12">
              <div className="border border-blue-900 p-2 w-full mb-4 rounded">
                <h3 className="text-xl font-semibold my-1">
                  Cash Discount Price
                </h3>
                <h2 className="text-2xl font-bold text-orange-500">
                  <span className="font-normal">৳ </span>
                  {product?.price}
                </h2>
                <div>
                  <small className="text-sm">
                    Check Available Payment Method
                  </small>
                  <br />
                  <small className="text-sm">
                    <span className="text-orange-500">
                      Contact For Bulk Quantity:
                    </span>
                    <span>+8801567900262</span>
                  </small>
                </div>
              </div>
              <div className="border border-blue-900 bg-slate-100 p-2 w-full rounded mb-4">
                <h3 className="text-xl font-semibold my-1">EMI Price*</h3>
                <h2 className="text-2xl font-bold text-orange-500">140$</h2>
                <div>
                  <small className="text-sm">
                    Starting From 50$/Month. For Discount Price
                  </small>
                  <br />
                  <small className="text-sm">
                    <span className="text-orange-500">
                      Click Here To View 27 Banks EMI Plans
                    </span>
                  </small>
                </div>
              </div>
            </div>
            <div>
              <div className="fons-semibold text-center sm:flex items-center gap-4">
                <div className="flex justify-center items-center gap-3">
                  <div className="flex gap-1 items-center -mt-1">
                    <button
                      onClick={() => handleQuantity("decrease")}
                      className="btn px-4 border-2 border-gray-400"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      name=""
                      value={quantity}
                      className="input input-bordered w-16 mx-1"
                      id=""
                    />
                    <button
                      onClick={() => handleQuantity("increase")}
                      className="btn px-4"
                    >
                      +
                    </button>
                  </div>
                  {/* <button className="btn btn-success text-white font-semibold font mb-2">
                    Add to Cart
                  </button> */}
                </div>
                <button className="btn bg-purple-600 hover:bg-purple-700 text-white font-semibold font px-7 mb-2">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* product specification section. */}
        <div className="md:flex jsutify-between gap-5 my-4">
          <div className="md:w-2/3 px-2">
            {/* spacifications */}
            <div>
              {/* table  */}
              <div className="w-full bg-base-100 rounded">
                <hr />
                {/* <div className=" rounded-b-md">
                  {Object.entries(productDetails?.productDetails).map(
                    ([key, val], i) => (
                      <>
                        <div
                          className="bg-slate-50 hover:bg-base-100 flex justify-start items-center gap-6 bg py-1 px-2"
                          key={i}
                        >
                          <p className="w-1/4">{key}</p>
                          <p className="w-3/4">{val}</p>
                        </div>
                        <hr className="mx-1" />
                      </>
                    )
                  )}
                </div> */}
              </div>
            </div>
            <div className="my-4 p-4 rounded">
              <h3 className="text-2xl font-bold my-4">Description</h3>
              <div>
                <img className="w-full mx-auto" src={""} alt="" />
              </div>
              {/* {productDetails.description && (
                <p>{productDetails?.description}</p>
              )} */}
            </div>
            {/* Review Section  */}
            <div className="my-4">
              <h3 className="text-2xl font-bold my-1 mx-2">Write A Review</h3>
              <div className="border p-2 rounded border-slate-200">
                <form>
                  <div className="flex items-start gap-3 mb-2">
                    <label className="w-1/3 mt-2">Your Name*</label>
                    <input
                      className="input input-bordered mb-3 w-full"
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <label className="w-1/3 mt-1">Your Review*</label>
                    <textarea
                      className="textarea textarea-bordered w-full text-lg"
                      name=""
                      id=""
                      rows="6"
                    ></textarea>
                  </div>
                  <div className="flex items-start justify-start gap-3 mt-4">
                    <label className="w-1/3 mt-1">Rating*</label>
                    <div className="rating w-full">
                      <input
                        onClick={() => handleRating(1)}
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-500"
                      />
                      <input
                        onClick={() => handleRating(2)}
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-500"
                      />
                      <input
                        onClick={() => handleRating(3)}
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-500"
                      />
                      <input
                        onClick={() => handleRating(4)}
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-500"
                      />
                      <input
                        onClick={() => handleRating(5)}
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-500"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end w-full">
                    <input
                      className="btn btn-sm bg-purple-600 hover:bg-purple-700 text-white"
                      type="submit"
                      value="Submit"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:5000/get-product/${params.productId}`
  );
  const data = await res.json();

  return {
    props: {
      product: data,
    },
  };
};
