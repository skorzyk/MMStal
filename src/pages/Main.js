import Gallery from "./Gallery";
import Header from "./Header";
import Contact from "./Contact";

const Main = () => {
  return (
    <>
      <div className="main-wrapper">
        <header className="header">
          <Header />
        </header>
        <section className="gallery">
          <Gallery />
        </section>
        <section className="contact">
          <Contact />
        </section>
      </div>
    </>
  );
};
export default Main;
