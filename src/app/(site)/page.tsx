import { BannerCarousel } from "@/components/home/banner-carousel";
import { HomeBenefits } from "@/components/home/home-benefits";
import { ProductListSkeleton } from "@/components/home/product-list-skeleton";
import { data } from "@/data";

export default function Home() {
  return (
    <div className="pb-96">
      <BannerCarousel list={data.banners} />
      <HomeBenefits />

      <ProductListSkeleton />
      <ProductListSkeleton />
    </div>
  );
}
