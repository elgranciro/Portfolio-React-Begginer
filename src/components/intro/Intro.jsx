import "./intro.css";
import Me from "../../img/me.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, I'm </h2>
          <h1 className="i-name">Enrique</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer 💻</div>
              <div className="i-title-item">Designer</div>
              <div className="i-title-item">Father 🐶</div>
              <div className="i-title-item">Die hard Marvel Fan</div>
            </div>
          </div>
          <p className="i-desc">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" /> 
      </div>
    </div>
  );
};

export default Intro;
