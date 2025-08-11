"use client";

import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type ProductItemProps = {
  data: Product;
};

export const ProductItem = ({ data }: ProductItemProps) => {
  const [liked, setLiked] = useState(data.liked);
  const link = `/products/${data.id}`;

  const toggleLiked = () => {
    setLiked(!liked);
  };

  return (
    <div className="rounded-sm border border-gray-200 bg-white p-6">
      <div className="flex justify-end">
        <div
          onClick={toggleLiked}
          className="flex size-12 cursor-pointer items-center justify-center rounded-sm border border-gray-200"
        >
          {liked && (
            <Image
              src="/assets/ui/heart-3-fill.png"
              alt="Liked"
              width={24}
              height={24}
            />
          )}

          {!liked && (
            <Image
              src="/assets/ui/heart-3-line.png"
              alt="Liked"
              width={24}
              height={24}
            />
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <Link href={link}>
          <Image
            src={data.image}
            alt={data.label}
            width={200}
            height={200}
            className="h-48 max-w-full"
          />
        </Link>
      </div>
      <div className="mt-9 text-lg font-bold">
        <Link href={link}>{data.label}</Link>
      </div>
      <div className="mt-3 text-2xl font-bold text-blue-600">
        <Link href={link}>R$ {data.price.toFixed(2)}</Link>
      </div>
      <div className="mt-5 text-gray-400">Em até 12x no cartão</div>
    </div>
  );
};
