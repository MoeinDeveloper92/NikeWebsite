import {
  Hero,
  CustomerReviews,
  Footer,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality
} from "./sections/index"
import Nav from "./components/Nav"
import { Routes, Route } from "react-router-dom"
import ShoeDetails from "./sections/ShoeDetails"
const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={(
          <main className="relative">
            <Nav />
            <section className="xl:padding-l wide:padding-l padding-b">
              <Hero />
            </section>
            <section className="padding">
              <PopularProducts />
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
            <section className="padding bg-pale-blue">
              <CustomerReviews />
            </section>
            <section className="padding-x sm:py-32 py-16 w-full">
              <Subscribe />
            </section>
            <section className="bg-black padding-x padding-t pb-8">
              <Footer />
            </section>
          </main>
        )} />
        <Route path="/shoe/:shoeName" element={<ShoeDetails />} />
      </Routes>
    </>


  )
}

export default App