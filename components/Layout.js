import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between scroll-smooth px-5">
      <Nav />
      <div className="mx-auto container">
        <main className="py-4">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
