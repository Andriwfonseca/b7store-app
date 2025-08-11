import { data } from "@/data";
import { ProductList } from "../product-list";

export const MostSoldProducts = () => {
  // TODO: Get most sold products from API

  return (
    <div className="mt-10">
      <h2 className="text-center text-2xl md:text-left">
        Produtos mais vendidos
      </h2>
      <p className="text-center text-gray-500 md:text-left">
        Campeões de vendas da nossa loja.
      </p>

      <div className="mt-9">
        <ProductList list={data.products} />
      </div>
    </div>
  );
};
