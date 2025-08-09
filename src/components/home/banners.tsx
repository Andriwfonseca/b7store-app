"use client";

import { Banner } from "@/types/banner";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

type BannerProps = {
  list: Banner[];
};

let bannerInterval: NodeJS.Timeout;
const bannerTime = 3000;

export const Banners = ({ list }: BannerProps) => {
  const [currentBanner, setCurrentBanner] = useState(0);

  const nextBanner = useCallback(() => {
    setCurrentBanner((prev) => {
      if (prev + 1 >= list.length) {
        return 0;
      }
      return prev + 1;
    });
  }, [list.length]);

  const handleBannerClick = (index: number) => {
    setCurrentBanner(index);
    clearInterval(bannerInterval);
    bannerInterval = setInterval(nextBanner, bannerTime);
  };

  useEffect(() => {
    bannerInterval = setInterval(nextBanner, bannerTime);
    return () => clearInterval(bannerInterval);
  }, [nextBanner]);

  return (
    <div className="">
      <div className="relative aspect-[3/1]">
        {list.map((banner, index) => (
          <Link
            key={index}
            href={banner.link}
            className="absolute inset-0 transition-all"
            style={{
              opacity: currentBanner === index ? 1 : 0,
              zIndex: currentBanner === index ? 1 : 0,
            }}
          >
            <Image
              src={banner.img}
              alt={banner.link}
              width={1200}
              height={400}
              className="rounded-sm"
            />
          </Link>
        ))}
      </div>
      <div className="mt-4 flex justify-center gap-4">
        {list.map((_, index) => (
          <div
            key={index}
            className={`size-4 cursor-pointer rounded-full bg-blue-600 transition-all ${
              currentBanner === index ? "opacity-100" : "opacity-30"
            }`}
            onClick={() => handleBannerClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};
