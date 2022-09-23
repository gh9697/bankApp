import React from "react";
import styles from "./style";
import {
  NavBar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  States,
  Footer,
  Testimonials,
  Hero,
} from "./components/index";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>
      <div className={`${styles.flexStart} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`${styles.flexStart} ${styles.paddingX} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          <States />
          <Business />
          <Billing />
          {/* https://www.sennep.com/our-approach  https://forner.studio/about https://www.parsonsbranding.com/*/}
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default App;
