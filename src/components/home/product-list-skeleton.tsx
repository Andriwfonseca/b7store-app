export const ProductListSkeleton = () => {
  return (
    <div className="mt-10">
      <div className="mx-auto mb-4 h-8 w-52 animate-pulse rounded bg-gray-200 md:mx-0"></div>
      <div className="mx-auto h-5 w-64 animate-pulse rounded bg-gray-200 md:mx-0"></div>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="h-80 animate-pulse rounded bg-gray-200"></div>
        <div className="h-80 animate-pulse rounded bg-gray-200"></div>
        <div className="h-80 animate-pulse rounded bg-gray-200"></div>
        <div className="h-80 animate-pulse rounded bg-gray-200"></div>
      </div>
    </div>
  );
};
