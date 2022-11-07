const PortfolioCard = () => {
  return (
    <a
      href="https://github.com/hcardonaweb/chicano.dev"
      target="_blank"
      className="block overflow-hidden rounded-lg"
    >
      <img
        alt="Chicano Dev"
        src="https://kdmitljkulczzntmmcbn.supabase.co/storage/v1/object/public/portfolio-content/assets/mockups/Chicano-Dev.jpg"
        className="h-60 w-full object-cover object-top"
      />
      <div className="p-4 charcoal-clear">
        <p className="inline-flex items-center mb-2 py-1 px-2 mr-2 text-xs capitalize font-bold nextjs rounded">
          NextJS
        </p>
        <p className="inline-flex items-center mb-2 py-1 px-2 mr-2 text-xs capitalize font-bold react rounded">
          React
        </p>
        <p className="inline-flex items-center mb-2 py-1 px-2 mr-2 text-xs capitalize font-bold supabase rounded">
          Supabase
        </p>
        <p className="inline-flex items-center mb-2 py-1 px-2 text-xs capitalize font-bold vercel rounded">
          Vercel
        </p>
        <h3 className="text-md text-white">chicano.dev</h3>
        <p className="mt-1 text-sm text-gray-400">This website!</p>
      </div>
    </a>
  );
};

export default PortfolioCard;
