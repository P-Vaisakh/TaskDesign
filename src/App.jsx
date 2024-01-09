import "./App.css";
import FinalSection from "./FinalSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";



function App() {
  return (
    <div className="main_section">
      <img
        src="/img/Group.png"
        alt=""
        className="cross"
        
      />
      <div className="cover_img_div">
        <h1 className="hero_text">
          Epic Games : An American video game and software developer and
          publisher based in Cary, North Carolina.
        </h1>
        <img src="/img/cover.jpg" alt="" className="cover_img" />
        <p className="bottom_text">
          Create, play, and battle with friends for free in Fortnite. Be the
          last player standing in Battle Royale and Zero Build, experience a
          concert or live event, or discover over a million creator made games,
          including racing, parkour, zombie survival, and more. Each Fortnite
          island has an individual age rating so you can find the one that's
          right for you and your friends. Find it all in Fortnite ... Drop In.
        </p>
        <button className="cover_button">Visit Website</button>
      </div>
      <SecondSection />
      <ThirdSection></ThirdSection>
      <FinalSection />
    </div>
  );
}

export default App;
