import React from 'react'

const FinalSection = () => {
  return (
    <div className="finalSection">
      <h1 className="final_head">
        Interested in delving deeper into the project?
      </h1>
      <p className="final_sub">
        If you'd like to explore further details about our initiatives or any of
        our affiliated brands, don't hesitate to connect. You can reach out to
        us via email at <span className="hello">hello@abc.com</span> or give us
        a call at <span className="hello">+91 480 20802730</span>.
      </p>
      <div className="bottom-sec">
        <button className="left">Ring us on Skype</button>
        <button className="right">Contact Us</button>
      </div>
      <div className='credits'>
        <h1>
          © 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved
        </h1>
      </div>
    </div>
  );
}

export default FinalSection