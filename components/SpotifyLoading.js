import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SpotifyLoading = () => {
  return (
    <SkeletonTheme baseColor="#1a1a1f" highlightColor="#26262a">
      <div className="flex items-end space-x-4">
        <div>
          <Skeleton height={75} width={75} />
        </div>
        <div className="flex w-full flex-col">
          <Skeleton height={20} containerClassName="flex-1" />
          <Skeleton height={20} containerClassName="flex-1" />
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default SpotifyLoading;
