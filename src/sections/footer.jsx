const Footer = () => {
  return (
    <section
      id="footer"
      className="flex flex-wrap justify-between items-center gap-y-2 gap-x-1 c-space py-7 border-t border-black-300"
    >
      <p className="text-white-500 px-4">
        © 2024 Denitsa Slavkova. All rights reserved.
      </p>

      <div className="flex px-4 gap-3">
        <a
          href="https://github.com/deni9309"
          target="_blank"
          className="social-icon"
        >
          <img src="/assets/github.svg" alt="github" className="w-2/3 h-2/3" />
        </a>
        <a
          href="https://linkedin.com/in/denitsa-slavkova"
          target="_blank"
          className="social-icon"
        >
          <img
            src="/assets/linkedin.svg"
            alt="linkedin"
            className="w-2/3 h-2/3"
          />
        </a>
      </div>
    </section>
  )
}

export default Footer
