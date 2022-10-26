import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="max-w-custom container mx-auto h-screen flex justify-center items-center overflow-hidden px-4">
      <main className="py-4">{children}</main>
    </div>
  );
};

export default Layout;
