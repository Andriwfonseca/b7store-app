import { BannerCarousel } from "@/components/home/banner-carousel";
import { HomeBenefits } from "@/components/home/home-benefits";
import { MostSoldProducts } from "@/components/home/most-sold-products";
import { MostViewedProducts } from "@/components/home/most-viewed-products";
import { ProductListSkeleton } from "@/components/home/product-list-skeleton";
import { data } from "@/data";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="pb-96">
      <BannerCarousel list={data.banners} />
      <HomeBenefits />

      <Suspense fallback={<ProductListSkeleton />}>
        <MostViewedProducts />
      </Suspense>

      <Suspense fallback={<ProductListSkeleton />}>
        <MostSoldProducts />
      </Suspense>
    </div>
  );
}
