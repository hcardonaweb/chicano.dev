import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className="max-w-custom container mx-auto overflow-hidden px-4">
        <Nav />
        <main className="py-4">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
