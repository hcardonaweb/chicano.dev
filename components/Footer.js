import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer aria-label="Site Footer">
      <div class="max-w-custom container mx-auto space-y-12 px-4 py-12">
        <div class="flex items-center justify-between">
          <a
            class="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            href="#!"
            role="button"
          >
            Resume
          </a>
          <SocialLinks />
        </div>
        <p class="text-xs text-gray-500">
          &copy; 2022 Friendly Neighborhood Chicano
        </p>
      </div>
    </footer>
  );
};

export default Footer;
