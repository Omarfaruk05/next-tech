/* eslint-disable @next/next/no-img-element */

const Hero = () => {
  return (
    <div>
      <div>
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
            <img
              src="https://www.startech.com.bd/image/cache/catalog/home/banner/desktop-deal/desktop-deal-live-now-home-banner-982x500.webp"
              className="w-full h-[70vh]"
              alt=""
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src="https://www.startech.com.bd/image/cache/catalog/home/banner/express-delivery-home-banner-june-982x500.webp"
              alt=""
              className="w-full h-[70vh]"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src="https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/Daily-content-banner/gpu-offer-1024x476.webp"
              alt=""
              className="w-full h-[70vh]"
            />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img
              src="https://www.startech.com.bd/image/cache/catalog/home/banner/desktop-deal/desktop-deal-live-now-home-banner-982x500.webp"
              className="w-full h-[70vh]"
              alt="hero"
            />
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
