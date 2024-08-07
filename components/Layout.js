import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between scroll-smooth">
      <Nav />
      <div className="lg:w-3/4 container mx-auto px-5">
        <main className="py-4">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
