import { mySocials } from "../constants";
const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3 items-center">
        <div>
          <a
            href="https://www.linkedin.com/in/rohithsunil7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/socials/linkedIn.svg"
              className="w-5 h-5 block"
              alt="LinkedIn"
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.github.com/Rohith-Sunil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/logos/gith.svg"
              className="w-7 h-7 "
              alt="GitHub"
            />
          </a>
        </div>
      </div>

      {/* <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a
            href={social.href}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={social.icon} className={social.size} alt={social.name} />
          </a>
        ))}
      </div> */}

      <p>© 2025 Rohith. All rights reserved.</p>
    </section>
  );
};

export default Footer;
