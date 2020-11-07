import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import Shop from "./pages/shoppage/shop.component";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={Shop} />
    </div>
  );
}

export default App;
