import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="max-w-custom container mx-auto overflow-hidden px-4">
      <Nav />
      <main className="py-4">{children}</main>
    </div>
  );
};

export default Layout;
