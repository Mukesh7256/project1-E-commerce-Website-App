import React, { useState } from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div 
          className={`descriptionbox-nav-box ${activeTab === "description" ? "active" : "fade"}`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </div>
        <div 
          className={`descriptionbox-nav-box ${activeTab === "reviews" ? "active" : "fade"}`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews (122)
        </div>
      </div>
      <div className="descriptionbox-description">
        {activeTab === "description" ? (
          <>
            <p>
              An e-commerce website is an online platform that facilitates buying and
              selling of products or services over the internet. It serves as a virtual
              marketplace where businesses and individuals showcase their products,
              interact with customers, and conduct transactions without the need
              for a physical presence. E-commerce websites have gained immense
              popularity due to their convenience, accessibility, and the global reach
              they offer.
            </p>
            <p>
              E-commerce websites typically display products or services along with
              detailed descriptions, images, prices, and any available
              variations (e.g., sizes, colors). Each product usually has its own
              dedicated page with relevant information.
            </p>
          </>
        ) : (
          <>
            <p>⭐⭐⭐⭐⭐ (122 Reviews)</p>
            <p>Customers love this product! Great quality and fast shipping.</p>
            <p>★ ★ ★ ★ ☆ - "Good product but size runs small" - John D.</p>
            <p>★ ★ ★ ★ ★ - "Perfect fit, highly recommend!" - Sarah M.</p>
          </>
        )}
      </div>
    </div>
  );
};

export default DescriptionBox;