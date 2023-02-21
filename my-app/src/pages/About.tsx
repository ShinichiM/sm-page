export const About = () => {
  // const style = window.innerWidth >= 1025 ? 'width: "80vw"' : "";

  return (
    <div
      className="page-container"
      style={{
        backgroundColor: "rgba(40, 44, 52, .75)",
      }}
      id="about"
    >
      {/* <h2>About</h2> */}
      {/* <div className="img-name-spacing"> */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {/* <img
          src="/images/selfie.png"
          className="photo content-spacing"
          alt="selfie"
        /> */}
        <h2 className="content-spacing">Hi there! My name is Shinichi</h2>
        <h2 className="content-spacing">and I'm a Full Stack Web Developer</h2>
      </div>
      <article className="content-spacing text-color font-family">
        Whether I'm spending time at the desk, playing the bass, or in the gym
        you'll always find me smiling and loving every second of it. I try to
        build simple and functional apps with a focus on ease-of-use
      </article>
    </div>
  );
};
