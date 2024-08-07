import { IoMusicalNotes } from "react-icons/io5";

const SpotifyNotPlaying = () => {
  return (
    <div className="flex items-end space-x-4">
      <div className="flex items-center justify-center rounded-md bg-[#1a1a1f] w-[75px] h-[75px]">
        <IoMusicalNotes fill="#6b7280" size={30} />
      </div>
      <div className="min-w-0 flex-auto font-semibold">
        <p className="text-grey-500 transition-all duration-500 text-md leading-6 truncate">
          Not listening to anything
        </p>
        <h2 className="text-grey-700 transition-all duration-500 text-sm leading-6 tracking-widest truncate">
          ...
        </h2>
      </div>
    </div>
  );
};

export default SpotifyNotPlaying;
