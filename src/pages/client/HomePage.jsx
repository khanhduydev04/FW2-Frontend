import { useEffect, useState } from "react";
import BrandCard from "../../components/BrandCard";
import { SectionHeading } from "../../components/Heading";
import ProductSlider from "../../components/ProductSlider";
import Slider from "../../components/Slider";
import { getProducts } from "../../services/product";

const brands = [
  {
    id: 1,
    url: "/san-pham",
    imageUrl:
      "https://prod-cdn.pharmacity.io/e-com/images/banners/20240626083710-0-Web_Larocheposay_287x232.png",
    name: "La Roche Posay",
  },
  {
    id: 2,
    url: "/san-pham",
    imageUrl:
      "https://prod-cdn.pharmacity.io/e-com/images/banners/20240626084423-0-Web%20Cetaphil287x232.png",
    name: "Cetaphil",
  },
  {
    id: 3,
    url: "/san-pham",
    imageUrl:
      "https://prod-cdn.pharmacity.io/e-com/images/banners/20240626083425-0-App%20Kudos_129x129.png",
    name: "Kudos",
  },
  {
    id: 4,
    url: "/san-pham",
    imageUrl:
      "https://prod-cdn.pharmacity.io/e-com/images/banners/20240626084149-0-WebSenka_287x232.png",
    name: "Senka",
  },
];

const HomePage = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await getProducts(1, 8);

    if (res) {
      setProducts(res.data.data.products);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="">
      <div className="mt-3 md:container md:mb-4 md:mt-5">
        <div className="gid gap-4 md:flex md:aspect-[1200/302]">
          <div className="w-full md:w-[67.6%]">
            <div className="relative flex h-full w-full items-center">
              <Slider></Slider>
            </div>
          </div>
          <div className="hidden w-full grid-rows-2 gap-4 md:grid md:w-[32.4%]">
            <a href="/san-pham">
              <div className="h-full w-full">
                <img
                  className="h-full w-full object-[unset] md:rounded-xl"
                  src="https://prod-cdn.pharmacity.io/e-com/images/banners/20240712111200-0-Gioithieutinhnang.png"
                  alt="Giới thiệu tính năng mới - Top right banner"
                  loading="lazy"
                  width="500"
                  height="500"
                />
              </div>
            </a>
            <a href="/san-pham">
              <div className="h-full w-full">
                <img
                  className="h-full w-full object-[unset] md:rounded-xl"
                  src="https://prod-cdn.pharmacity.io/e-com/images/banners/20240626071539-0-389%20x143_coolpatch.png"
                  alt="0724- PMCE Cool Patch - Bottom Right Corner"
                  loading="lazy"
                  width="500"
                  height="500"
                  // quality="100"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-neutral-100 h-3"></div>
      <section>
        <div className="px-3 pb-4 md:container">
          <SectionHeading
            title={"Siêu Deals Online"}
            url={"/san-pham"}
          ></SectionHeading>
          <div className="md:-ml-1">
            <div className="relative flex h-full w-full items-center">
              <ProductSlider products={products}></ProductSlider>
            </div>
          </div>
        </div>
        <div className="bg-neutral-100 h-3"></div>
      </section>
      <section>
        <div className="px-3 pb-4 md:container">
          <SectionHeading
            title={"Top bán chạy toàn quốc"}
            url={"/san-pham"}
          ></SectionHeading>
          <div className="md:-ml-1">
            <div className="relative flex h-full w-full items-center">
              <ProductSlider products={products}></ProductSlider>
            </div>
          </div>
        </div>
        <div className="bg-neutral-100 h-3"></div>
      </section>
      <section>
        <div className="px-3 pb-4 md:container">
          <SectionHeading
            title={"Vi vu hè không sợ nắng"}
            url={"/san-pham"}
          ></SectionHeading>
          <div className="md:-ml-1">
            <div className="relative flex h-full w-full items-center">
              <ProductSlider products={products}></ProductSlider>
            </div>
          </div>
        </div>
        <div className="bg-neutral-100 h-3"></div>
      </section>
      <section>
        <div className="px-3 pb-4 md:container">
          <SectionHeading
            title={"Sản phẩm bán chạy"}
            url={"/san-pham"}
          ></SectionHeading>
          <div className="md:-ml-1">
            <div className="relative flex h-full w-full items-center">
              <ProductSlider products={products}></ProductSlider>
            </div>
          </div>
        </div>
        <div className="bg-neutral-100 h-3"></div>
      </section>
      <section>
        <div className="px-3 pb-4 md:container">
          <SectionHeading title={"Thương hiệu bán chạy"}></SectionHeading>
          <div className="grid grid-cols-3 grid-rows-2 md:grid-cols-4 md:gap-3">
            <div className="z-[1] row-span-2 -mr-1 pr-1 md:col-span-2 md:mr-0 md:h-auto md:pr-0">
              <a href="/san-pham">
                <picture>
                  <source
                    media="(max-width:767px)"
                    srcSet="https://prod-cdn.pharmacity.io/e-com/images/banners/20240626082427-0-App%20132%20x%20261.png"
                  />
                  <img
                    className="h-full w-full !object-cover shadow-image md:rounded-sm md:shadow-none"
                    src="https://prod-cdn.pharmacity.io/e-com/images/banners/20240626082434-0-Web%20592%20x%20491.png"
                    alt="Best Selling Brand Main - July 2024"
                    loading="lazy"
                    width="500"
                    height="500"
                  />
                </picture>
              </a>
            </div>
            {brands.length > 0 &&
              brands.map((brand) => (
                <BrandCard
                  key={brand.id}
                  url={brand.url}
                  imageUrl={brand.imageUrl}
                  name={brand.name}
                ></BrandCard>
              ))}
          </div>
        </div>
        <div className="bg-neutral-100 h-3"></div>
      </section>
    </div>
  );
};

export default HomePage;
