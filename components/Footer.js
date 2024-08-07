import SocialLinks from "./SocialLinks";
import NowPlaying from "./SpotifyNowPlaying";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer aria-label="Site Footer">
      <div className="lg:w-3/4 container mx-auto space-y-12 px-5 py-12">
        <div className="flex items-center justify-between">
          <a
            className="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            href="https://kdmitljkulczzntmmcbn.supabase.co/storage/v1/object/public/portfolio-content/assets/docs/Cardona_Hector_Resume.pdf"
            target="_blank"
            role="button"
          >
            Resume
          </a>
          <SocialLinks />
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center md:items-end justify-between">
          <NowPlaying />
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Friendly Neighborhood Chicano
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
