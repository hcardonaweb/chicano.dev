import { FaSpotify } from "react-icons/fa";
import SpotifyLoading from "./SpotifyLoading";
import SpotifyNotPlaying from "./SpotifyNotPlaying";

const SpotifyPlayer = ({ nowPlaying, loading }) => {
  const { albumImageUrl, albumName, artist, songUrl, title } = nowPlaying;

  return (
    <a
      href={songUrl}
      target="_blank"
      className="w-full md:w-1/2 md:max-w-[350px]"
    >
      <div className="mb-5 md:mb-0  mt-2 relative z-10 rounded-lg ">
        <FaSpotify
          size={19}
          fill="#6b7280"
          className="absolute top-3 right-3"
        />

        <div className="transition-all duration-500 charcoal-clear transition-all duration-500 rounded-lg p-3 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8">
          {loading ? (
            <SpotifyLoading />
          ) : (
            <>
              {nowPlaying === "Currently Not Playing" ? (
                <SpotifyNotPlaying />
              ) : (
                <div className="flex items-end space-x-4">
                  <img
                    src={albumImageUrl}
                    loading="lazy"
                    decoding="async"
                    alt={albumName}
                    className="flex-none rounded-md bg-zinc-800"
                    width="75"
                    height="75"
                  />
                  <div className="min-w-0 flex-auto font-semibold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#fff"
                    >
                      <rect
                        class="eq-bar eq-bar--1"
                        x="4"
                        y="4"
                        width="2"
                        height="8"
                      />
                      <rect
                        class="eq-bar eq-bar--2"
                        x="10.2"
                        y="4"
                        width="2"
                        height="16"
                      />
                      <rect
                        class="eq-bar eq-bar--3"
                        x="16.3"
                        y="4"
                        width="2"
                        height="11"
                      />
                    </svg>

                    <p className="text-grey-500 transition-all duration-500 text-md leading-6 truncate">
                      {title} - {albumName}
                    </p>
                    <h2 className="text-grey-700 transition-all duration-500 text-sm leading-6 truncate">
                      {artist}
                    </h2>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </a>
  );
};

export default SpotifyPlayer;
