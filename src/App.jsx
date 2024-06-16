import {
  Hero,
  PopularProduct,
  SuperQuality,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer,
  Services, // Ensure this component exists and is correctly imported
} from "./sections";

import Nav from "./components/Nav";

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero/>
    </section>
    <section className="padding">
      <PopularProduct />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>
    <section className="padding">
      <Subscribe />
    </section>
    <section className="padding">
      <Footer />
    </section>
  </main>
);

export default App;
