import Image from "next/image";

export const HomeBenefits = () => {
  return (
    <div className="mt-6 flex flex-col gap-4 md:mt-12 md:flex-row md:gap-8">
      <div className="flex flex-1 rounded-sm border border-gray-200 py-6">
        <div className="flex w-32 items-center justify-center border-r border-gray-200 text-center">
          <Image
            src="/assets/ui/truck-line.png"
            alt="Frete Grátis"
            width={40}
            height={40}
          />
        </div>
        <div className="flex-1 pl-8">
          <h3 className="text-xl font-bold">Frete Grátis</h3>
          <p className="text-gray-500">
            Frete grátis para compras acima de R$ 199,00
          </p>
        </div>
      </div>
      <div className="flex flex-1 rounded-sm border border-gray-200 py-6">
        <div className="flex w-32 items-center justify-center border-r border-gray-200 text-center">
          <Image
            src="/assets/ui/discount-percent-line.png"
            alt="Muitas Ofertas"
            width={40}
            height={40}
          />
        </div>
        <div className="flex-1 pl-8">
          <h3 className="text-xl font-bold">Muitas Ofertas</h3>
          <p className="text-gray-500">Ofertas exclusivas para você</p>
        </div>
      </div>
      <div className="flex flex-1 rounded-sm border border-gray-200 py-6">
        <div className="flex w-32 items-center justify-center border-r border-gray-200 text-center">
          <Image
            src="/assets/ui/arrow-left-right-line.png"
            alt="Troca Fácil"
            width={40}
            height={40}
          />
        </div>
        <div className="flex-1 pl-8">
          <h3 className="text-xl font-bold">Troca Fácil</h3>
          <p className="text-gray-500">No período de 30 dias</p>
        </div>
      </div>
    </div>
  );
};
