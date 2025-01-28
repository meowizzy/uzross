type SkeletonType = (items: number) => Array<null>;

export const useSkeleton: SkeletonType = (items) => {
  if (items === 0) return null;

  return new Array(items).fill(null);
};
