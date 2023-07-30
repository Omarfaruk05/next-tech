/* eslint-disable react-hooks/exhaustive-deps */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const RootLayout = dynamic(() => import("@/components/Layout/RootLayout"), {
  ssr: false,
});

const PcBuilder = () => {
  const { pcBuilder } = useSelector((state) => state.pcBuilder);

  const cpu = pcBuilder.find((product) => product.category === "Processor");

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div>
          <h2 className="text-3xl font-bold text-teal-900 text-center my-4">
            Build Your PC
          </h2>
          <div className="flex justify-between items-center bordered border-2 p-4 rounded-md bg-base-200 mb-4">
            <div>
              <h2 className="text-xl font-semibold">Processor / CPU</h2>
              {cpu && (
                <>
                  <p className="font-semibold">Name: {cpu?.productName}</p>
                  <small className="text-sm font-semibold">
                    Price: {cpu?.price}
                    <span className="text-lg">৳</span>
                  </small>
                </>
              )}
            </div>
            <div>
              {cpu ? (
                <Link
                  className="btn btn-outline btn-sm hover:text-purple-800 hover:bg-white hover:border-2"
                  href={`/category/processor`}
                >
                  Delete
                </Link>
              ) : (
                <Link
                  className="btn btn-outline btn-sm hover:text-purple-800 hover:bg-white hover:border-2"
                  href={`/category/processor`}
                >
                  Choose
                </Link>
              )}
            </div>
          </div>
          <div className="flex justify-between items-center bordered border-2 p-4 rounded-md bg-base-200 mb-4">
            <div>
              <h2 className="text-xl font-semibold">Monitor</h2>
              <p>BenQ BG12</p>
              <small className="text-sm">Price</small>
            </div>
            <div>
              <Link
                className="btn btn-outline btn-sm hover:text-purple-800 hover:bg-white hover:border-2"
                href={`/category/monitor`}
              >
                Choose
              </Link>
            </div>
          </div>
          <div className="flex justify-between items-center bordered border-2 p-4 rounded-md bg-base-200 mb-4">
            <div>
              <h2 className="text-xl font-semibold">Motherboard</h2>
              <p>Asuse b560-plus</p>
              <small className="text-sm">Price:</small>
            </div>
            <div>
              <Link
                className="btn btn-outline btn-sm hover:text-purple-800 hover:bg-white hover:border-2"
                href={`/category/motherboard`}
              >
                Choose
              </Link>
            </div>
          </div>
          <div className="flex justify-between items-center bordered border-2 p-4 rounded-md bg-base-200 mb-4">
            <div>
              <h2 className="text-xl font-semibold">RAM</h2>
              <p>Team Delta 2</p>
              <small className="text-sm">Price:</small>
            </div>
            <div>
              <Link
                className="btn btn-outline btn-sm hover:text-purple-800 hover:bg-white hover:border-2"
                href={`/category/ram`}
              >
                Choose
              </Link>
            </div>
          </div>
          <div className="flex justify-between items-center bordered border-2 p-4 rounded-md bg-base-200 mb-4">
            <div>
              <h2 className="text-xl font-semibold">Power Supply</h2>
              <p>Corsiar CV 550</p>
              <small className="text-sm">Price:</small>
            </div>
            <div>
              <Link
                className="btn btn-outline btn-sm hover:text-purple-800 hover:bg-white hover:border-2"
                href={`/category/powerSupply`}
              >
                Choose
              </Link>
            </div>
          </div>
          <div className="flex justify-between items-center bordered border-2 p-4 rounded-md bg-base-200 mb-4">
            <div>
              <h2 className="text-xl font-semibold">Storage Device</h2>
              <p>intel core i5 10500</p>
              <small className="text-sm">Price</small>
            </div>
            <div>
              <Link
                className="btn btn-outline btn-sm hover:text-purple-800 hover:bg-white hover:border-2"
                href={`/category/storageDevice`}
              >
                Choose
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
