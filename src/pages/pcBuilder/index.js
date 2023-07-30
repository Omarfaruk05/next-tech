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
  const monitor = pcBuilder.find((product) => product.category === "Monitor");
  const motherboard = pcBuilder.find(
    (product) => product.category === "motherBoard"
  );
  const RAM = pcBuilder.find((product) => product.category === "RAM");
  const powerSupply = pcBuilder.find(
    (product) => product.category === "powerSupply"
  );
  const storageDevice = pcBuilder.find(
    (product) => product.category === "storageDevice"
  );

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
                <button className="btn bg-red-500 text-white hover:bg-red-600 hover:text-white btn-sm ">
                  Delete
                </button>
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
              {monitor && (
                <>
                  <p className="font-semibold">Name: {monitor?.productName}</p>
                  <small className="text-sm font-semibold">
                    Price: {monitor?.price}
                    <span className="text-lg">৳</span>
                  </small>
                </>
              )}
            </div>
            <div>
              {monitor ? (
                <button className="btn bg-red-500 text-white hover:bg-red-600 hover:text-white btn-sm ">
                  Delete
                </button>
              ) : (
                <Link
                  className="btn btn-outline btn-sm hover:text-purple-800 hover:bg-white hover:border-2"
                  href={`/category/monitor`}
                >
                  Choose
                </Link>
              )}
            </div>
          </div>
          <div className="flex justify-between items-center bordered border-2 p-4 rounded-md bg-base-200 mb-4">
            <div>
              <h2 className="text-xl font-semibold">Motherboard</h2>
              {motherboard && (
                <>
                  <p className="font-semibold">
                    Name: {motherboard?.productName}
                  </p>
                  <small className="text-sm font-semibold">
                    Price: {motherboard?.price}
                    <span className="text-lg">৳</span>
                  </small>
                </>
              )}
            </div>
            <div>
              {motherboard ? (
                <button className="btn bg-red-500 text-white hover:bg-red-600 hover:text-white btn-sm ">
                  Delete
                </button>
              ) : (
                <Link
                  className="btn btn-outline btn-sm hover:text-purple-800 hover:bg-white hover:border-2"
                  href={`/category/motherboard`}
                >
                  Choose
                </Link>
              )}
            </div>
          </div>
          <div className="flex justify-between items-center bordered border-2 p-4 rounded-md bg-base-200 mb-4">
            <div>
              <h2 className="text-xl font-semibold">RAM</h2>
              {RAM && (
                <>
                  <p className="font-semibold">Name: {RAM?.productName}</p>
                  <small className="text-sm font-semibold">
                    Price: {RAM?.price}
                    <span className="text-lg">৳</span>
                  </small>
                </>
              )}
            </div>
            <div>
              {RAM ? (
                <button className="btn bg-red-500 text-white hover:bg-red-600 hover:text-white btn-sm ">
                  Delete
                </button>
              ) : (
                <Link
                  className="btn btn-outline btn-sm hover:text-purple-800 hover:bg-white hover:border-2"
                  href={`/category/ram`}
                >
                  Choose
                </Link>
              )}
            </div>
          </div>
          <div className="flex justify-between items-center bordered border-2 p-4 rounded-md bg-base-200 mb-4">
            <div>
              <h2 className="text-xl font-semibold">Power Supply</h2>
              {powerSupply && (
                <>
                  <p className="font-semibold">
                    Name: {powerSupply?.productName}
                  </p>
                  <small className="text-sm font-semibold">
                    Price: {powerSupply?.price}
                    <span className="text-lg">৳</span>
                  </small>
                </>
              )}
            </div>
            <div>
              {powerSupply ? (
                <button className="btn bg-red-500 text-white hover:bg-red-600 hover:text-white btn-sm ">
                  Delete
                </button>
              ) : (
                <Link
                  className="btn btn-outline btn-sm hover:text-purple-800 hover:bg-white hover:border-2"
                  href={`/category/powerSupply`}
                >
                  Choose
                </Link>
              )}
            </div>
          </div>
          <div className="flex justify-between items-center bordered border-2 p-4 rounded-md bg-base-200 mb-4">
            <div>
              <h2 className="text-xl font-semibold">Storage Device</h2>
              {storageDevice && (
                <>
                  <p className="font-semibold">
                    Name: {storageDevice?.productName}
                  </p>
                  <small className="text-sm font-semibold">
                    Price: {storageDevice?.price}
                    <span className="text-lg">৳</span>
                  </small>
                </>
              )}
            </div>
            <div>
              {storageDevice ? (
                <button className="btn bg-red-500 text-white hover:bg-red-600 hover:text-white btn-sm ">
                  Delete
                </button>
              ) : (
                <Link
                  className="btn btn-outline btn-sm hover:text-purple-800 hover:bg-white hover:border-2"
                  href={`/category/storageDevic`}
                >
                  Choose
                </Link>
              )}
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
