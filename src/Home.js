import React from "react";
import "./Home.css";
import Product from './Product';
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
         
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Apple AirPods pro"
            price={199}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71eGsUPZm2L._AC_SL1500_.jpg"
                    />
          <Product
            id="49538094"
            title="Mr IRONSTONE Deep Gaming Desk 45.3W in x 29in D Home Office Computer Table, Black Gamer Workstation with Cup Holder, Headphone Hook and 2 Cable Management Holesl"
            price={109.99}
            rating={4}
            image= "https://images-na.ssl-images-amazon.com/images/I/71IDH4A2SLL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;