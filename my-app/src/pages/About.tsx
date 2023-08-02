export const About = () => {
  return (
    <>
      <h2 className="content-spacing page-container" id="about">
        Hi there! My name is Shinichi
      </h2>

      <div
        className="page-container"
        style={{
          backgroundColor: "rgba(40, 44, 52, 0.7)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}></div>
        <article className="content-spacing text-color font-family">
          Whether I'm spending time at the desk, playing the bass, or in the gym
          I try to keep things light and put a smile on peoples faces. I'm
          pursuing roles focused around software, so I've been building simple
          and functional apps with a focus on user friendliness. Come check them
          out!
        </article>
      </div>
    </>
  );
};
