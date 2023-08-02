export const Contact = () => {
  return (
    <>
      <h2 className="page-container">Contact</h2>
      <div
        className="page-container"
        style={{
          backgroundColor: "rgba(40, 44, 52, 0.7)",
        }}
        id="contact"
      >
        <ul className="contact-items">
          <li className="text-color">
            <img src="/images/mail.svg" className="font-family" alt="email" />
            <span>miyakawashi@gmail.com</span>
          </li>
          <li className="text-color">
            <img
              src="/images/phone.svg"
              className="font-family"
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
            /in/shinichi-miyakawa
          </li>
          <li className="text-color">
            <img src="/images/github.svg" className="font-family" alt="email" />
            shinichiM
          </li>
        </ul>
      </div>
    </>
  );
};
