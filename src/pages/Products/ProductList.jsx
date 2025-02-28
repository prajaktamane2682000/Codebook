import { useEffect, useState } from "react";
import { ProductCard } from "../../components/Elements/ProductCard";
import { ProductFilter } from "../Products/components/ProductFilter";
import { useLocation } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import { useFilter } from "../../context/FilterContext";
import { getProductList } from "../../services/productService";
import { toast } from "react-toastify";

export const ProductList = () => {
  const { productList, initialProductList } = useFilter();

  const [show, setShow] = useState(false);

  const search = useLocation().search;

  // console.log(search)

  const searchTerm = new URLSearchParams(search).get("query");
  // console.log(searchTerm)
  useTitle("Explore E-book Collection");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProductList(searchTerm);
        initialProductList(data);
      } catch (error) {
        toast.error(error.message, {
          closeButton: true,
          position: "bottom-center",
        });
      }
    }
    fetchProducts();
  }, [searchTerm]);

  return (
    <main>
      <section className="my-5">
        <div className="my-5 flex justify-between">
          <span className="text-2xl font-semibold dark:text-slate-100 mb-5">
            All eBooks ({productList.length})
          </span>
          <span>
            <button
              onClick={() => setShow(!show)}
              id="dropdownMenuIconButton"
              data-dropdown-toggle="dropdownDots"
              className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700"
              type="button"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
              </svg>
            </button>

            {show && <ProductFilter setShow={setShow} />}
          </span>
        </div>

        <div className="flex flex-wrap justify-center lg:flex-row">
          {/* Product Card */}
          {productList.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>

        {/* <ProductFilter/> */}
      </section>
    </main>
  );
};
