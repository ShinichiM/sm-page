export const Contact = () => {
  return (
    <div
      className="page-container"
      style={{
        backgroundColor: "#282c34",
      }}
      id="contact"
    >
      <h2>Contact</h2>
      <ul className="contact-items">
        <li className="text-color">
          <img
            src="/images/mail.svg"
            className="font-family"
            alt="email"
          />
          <span>miyakawashi@gmail.com</span>
        </li>
        <li className="text-color">
          <img
            src="/images/phone2.svg"
            className=""
            alt="phone-number"
          />
          <span>(614)578-2539</span>
        </li>
        <li className="text-color">
          <img
            src="/images/linkedIn.svg"
            className="font-family"
            alt="email"
          />
          <a href="https://www.linkedin.com/in/shinichi-miyakawa/">
            /in/shinichi-miyakawa
          </a>
        </li>
        <li className="text-color">
          <img
            src="/images/github.svg"
            className="font-family"
            alt="email"
          />
          <a href="https://github.com/shinichiM">shinichiM</a>
        </li>
      </ul>
      <form></form>
    </div>
  );
};
