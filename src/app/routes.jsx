import { Route } from "react-router-dom";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Socialicons } from "../components/socialicons";
import { About } from "../pages/about";
import { ContactUs } from "../pages/contact";
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { Routes } from "react-router-dom";

const AnimatedSwitch = () => (

  <TransitionGroup>
    <CSSTransition
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
);

function AppRoutes() {

  return (
    <div className="s_c">
      <AnimatedSwitch />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
