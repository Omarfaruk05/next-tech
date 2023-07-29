import { GiProcessor, GiPowerGenerator } from "react-icons/gi";
import { BsMotherboard, BsBorderAll } from "react-icons/bs";
import { CiMonitor } from "react-icons/ci";
import { CgSmartphoneRam } from "react-icons/cg";

const Featured = () => {
  return (
    <div className="bg-slate-100">
      <div className="max-w-7xl mx-auto mt-4 py-4 px-2">
        <h2 className="text-center text-4xl text-green-800 font-semibold mb-1">
          Featured Category
        </h2>
        <p className="text-center">
          Get Your Desired Product from Featured Category!
        </p>
        <div className="flex flex-wrap gap-4 justify-around my-4">
          <div className="shadow-md rounded-md cursor-pointer p-2 bg-cyan-50 w-36">
            <GiProcessor className="w-20 h-20 mx-auto" />
            <p className="text-md font-semibold text-green-800 uppercase text-center">
              Processor
            </p>
          </div>
          <div className="shadow-md rounded-md cursor-pointer p-2 bg-cyan-50 w-36">
            <BsMotherboard className="w-20 h-20 mx-auto" />
            <p className="text-md font-semibold text-green-800 uppercase text-center">
              Motherboard
            </p>
          </div>
          <div className="shadow-md rounded-md cursor-pointer p-2 bg-cyan-50 w-36">
            <CiMonitor className="w-20 h-20 mx-auto" />
            <p className="text-md font-semibold text-green-800 uppercase text-center">
              Monitor
            </p>
          </div>
          <div className="shadow-md rounded-md cursor-pointer p-2 bg-cyan-50 w-36">
            <CgSmartphoneRam className="w-20 h-20 mx-auto" />
            <p className="text-md font-semibold text-green-800 uppercase text-center">
              RAM
            </p>
          </div>
          <div className="shadow-md rounded-md cursor-pointer p-2 bg-cyan-50 w-36">
            <GiPowerGenerator className="w-20 h-20 mx-auto" />
            <p className="text-md font-semibold text-green-800 uppercase text-center">
              Power Supply
            </p>
          </div>
          <div className="shadow-md rounded-md cursor-pointer p-2 bg-cyan-50 w-36">
            <BsBorderAll className="w-20 h-20 mx-auto" />
            <p className="text-md font-semibold text-green-800 uppercase text-center">
              Others
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
