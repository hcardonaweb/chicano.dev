import Nav from "./Nav";
import Hero from "./Hero";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="max-w-custom container mx-auto px-4">
        <main className="py-4">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
