import React from "react";

const ThirdSection = () => {
  return (
    <>
      <div className="third_section">
        <h2 className="contribution_head">Our Contribution</h2>
        <p className="countribution_sub">
          Our core offering extends beyond mere profit generation; we emphasize
          the growth and active involvement of our user community. Collaborating
          with us represents an investment, rather than a mere expenditure. Our
          dedication to providing distinctive digital interactions guarantees
          unparalleled benefits for our clientele.
        </p>
      </div>
      <div className="contribution_cards">
        <div className="contribution_card">
          <h1 className="contribution_card_head">5M</h1>
          <p className="contribution_card_sub">Daily User Engagements</p>
        </div>
        <div className="contribution_card">
          <h1 className="contribution_card_head">$500K</h1>
          <p className="contribution_card_sub1">Revenue Surge for an Platform</p>
        </div>
        <div className="contribution_card">
          <h1 className="contribution_card_head">10X</h1>
          <p className="contribution_card_sub2">
            ROAS on all our marketing campaigns
          </p>
        </div>
      </div>
    </>
  );
};

export default ThirdSection;
