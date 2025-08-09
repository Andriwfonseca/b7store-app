import { BannerCarousel } from "@/components/home/banner-carousel";
import { HomeBenefits } from "@/components/home/home-benefits";
import { data } from "@/data";

export default function Home() {
  return (
    <div>
      <BannerCarousel list={data.banners} />
      <HomeBenefits />
    </div>
  );
}
