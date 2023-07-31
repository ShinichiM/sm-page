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
      </div>
      <article className="content-spacing text-color font-family">
        Whether I'm spending time at the desk, playing the bass, or in the gym I
        try to keep things light and always have a smile on my face. I try to
        build simple and functional apps with a focus on user friendliness. Come
        check them out!
      </article>
    </div>
  );
};
