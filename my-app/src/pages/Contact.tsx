export const Contact = () => {
  return (
    <div className="page-container">
      <h2>Contact</h2>
      <ul>
        <li className="text-color">
          <img
            src="/images/mail.svg"
            className="svg-size font-family"
            alt="email"
          />
          miyakawashi@gmail.com
        </li>
        <li className="text-color">
          <img
            src="/images/phone2.svg"
            className="svg-size"
            alt="phone-number"
          />
          (614)578-2539
        </li>
        <li className="text-color">
          <img
            src="/images/linkedIn.svg"
            className="svg-size font-family"
            alt="email"
          />
          <a href="https://www.linkedin.com/in/shinichi-miyakawa/">
            /in/shinichi-miyakawa
          </a>
        </li>
        <li className="text-color">
          <img
            src="/images/github.svg"
            className="svg-size font-family"
            alt="email"
          />
          <a href="https://github.com/shinichiM">shinichiM</a>
        </li>
      </ul>
      <form></form>
    </div>
  );
};
