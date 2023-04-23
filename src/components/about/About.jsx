import "./about.css";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
        Hi there! I'm Enrique, a Front Dev Jr. based in Berlin. 
        I am a young entrepreneur who enjoys working in a team. I am seeking experiences that contribute to my integral development, in which I can act as a change agent. I am deeply passionate about technology and firmly believe that in everything we do, attitude is everything.
        </p>
      </div>
    </div>
  );
};

export default About;
