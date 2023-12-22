import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <Skeleton className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh] bg-red-400" />
  );
};

export default Loading;
