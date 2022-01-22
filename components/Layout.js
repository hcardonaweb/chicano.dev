import Nav from "./Nav"
import Footer from "./Footer"

const Layout = ({children}) => {
  return (
    <>
    <div className="mx-auto container max-w-custom px-4 overflow-hidden">
      <Nav />
      <main className="py-4">
        {children}
      </main>
      <Footer />
    </div>
    </>
  )
}

export default Layout