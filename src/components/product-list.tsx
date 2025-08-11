import { Product } from "@/types/product";
import { ProductItem } from "./product-item";

type ProductListProps = {
  list: Product[];
};

export const ProductList = ({ list }: ProductListProps) => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
      {list.map((product) => (
        <ProductItem key={product.id} data={product} />
      ))}
    </div>
  );
};
