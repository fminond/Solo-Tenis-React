import Footer from "./Footer";
import NavbarComponent from "./NavBar";

export const Layout = ({ children }) => {
  return (
    <main>
      <NavbarComponent />
      <section>{children}
      <Footer></Footer>
      </section>
     
    </main>
  );
};