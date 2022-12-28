export const About = () => {
  return (
    <div className="page-container">
      <div className="img-name-spacing">
        <img
          src="/images/selfie.png"
          className="photo content-spacing"
          alt="selfie"
        />
        <h2 className="content-spacing">Shinichi Miyakawa</h2>
      </div>
      <article className="content-spacing">
        Hi there, my name is Shinichi. I'm a Computer Systems Validation
        Engineer by day and software developer by night! I started learning web
        development through a full-stack bootcamp and fell in love with the
        process, so I am currently pursuing a career in software development.
        Feel free to take a look at some of my work or contact me
      </article>
    </div>
  );
};
