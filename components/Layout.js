import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen md:flex flex-col justify-between scroll-smooth">
      <Nav />
      <div className="max-w-custom container mx-auto px-4">
        <main className="py-4">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
