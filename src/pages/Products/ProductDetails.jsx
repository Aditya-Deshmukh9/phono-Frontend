import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../../Redux/createApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/cartSlice";
import { IoMdCart } from "react-icons/io";
import Products from "../../components/Products";

function ProductDetails() {
  const [image, setImage] = useState(1);
  const [item, setItem] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { id } = useParams();
  const { data } = useGetProductQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data && data.response) {
      const filterProducts = data.response.filter((e) => e.id == id);
      setItem(filterProducts[0] || {});
      console.log(filterProducts[0]);

      if (filterProducts.length > 0) {
        const currentProduct = filterProducts[0];
        const relatedCategoryProducts = data.response.filter(
          (e) =>
            e.category === currentProduct.category && e.id !== currentProduct.id
        );
        setRelatedProducts(relatedCategoryProducts);
      }
    }
  }, [data, id]);

  const sendtocart = (e) => {
    dispatch(addToCart(e));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <div className="flex flex-col md:flex-row -mx-4">
        <div className="md:flex-1 px-4">
          <div>
            <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
              {item.images &&
                item.images.map((img, index) => (
                  <div
                    key={index}
                    className={`h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center ${
                      image === index + 1 ? "" : "hidden"
                    }`}
                  >
                    {/* Render your actual image using {img} */}
                    <img
                      className="object-cover h-64 md:h-80"
                      src={img}
                      alt={`Image ${index + 1}`}
                    />
                  </div>
                ))}
            </div>

            <div className="flex -mx-2 mb-4">
              {item.images &&
                item.images.map((img, index) => (
                  <div key={index} className="flex-1 px-2">
                    <button
                      onClick={() => setImage(index + 1)}
                      className={`focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center ${
                        image === index + 1
                          ? "ring-2 ring-indigo-300 ring-inset"
                          : ""
                      }`}
                    >
                      {/* Render your actual image or button content here */}
                      <img
                        className="object-cover w-full rounded-lg h-24 md:h-32"
                        src={img}
                        alt={`Image ${index + 1}`}
                      />
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="md:flex-1 px-4">
          <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
            {item.title}
          </h2>
          <p className="text-gray-500 text-sm">
            By{" "}
            <a href="#" className="text-indigo-600 hover:underline">
              {item.brand}
            </a>
          </p>

          <div className="flex items-center space-x-4 my-4">
            <div>
              <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                <span className="text-indigo-400 mr-1 mt-1">$</span>
                <span className="font-bold text-indigo-600 text-3xl">
                  {item.price}
                </span>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-green-500 text-xl font-semibold">
                Save {item.discountPercentage}%
              </p>
              <p className="text-gray-400 text-sm">Inclusive of all Taxes.</p>
            </div>
          </div>

          <p className="text-gray-500">{item.description}</p>

          <div className="flex py-4 space-x-4">
            <button
              onClick={() => sendtocart(item)}
              className="h-14 px-6 py-2 flex w-full transform items-center justify-center rounded-md bg-gray-800 font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
            >
              <IoMdCart
                size={20}
                color="white"
                className="cursor-pointer shadow-xl"
              />
              <span className="mx-1">Add to cart</span>
            </button>
          </div>
        </div>
      </div>
      <hr />
      <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
        Related Products
      </h1>
      <div className="min-h-screen flex justify-center mx-2">
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {relatedProducts.length > 1
            ? relatedProducts.map((e, index) => (
                <Products items={e} key={index} />
              ))
            : "No Related products Available"}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
