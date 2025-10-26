
export default function Footer() {
  return (
    <footer id="contact" className="relative bg-blue-haze">

      <div
        className="absolute inset-0 bg-cover opacity-80 bg-center"
        // style={{ backgroundImage: `url("../chicago_bg.png")` }}
      />
      <div className="absolute inset-0 " />

      <div className="relative ml-20 w-full px-4 py-20">
        <div
          className="max-w-xl w-full rounded-2xl bg-black/55 p-10
          backdrop-blur-sm shadow-[0_12px_32px_rgba(0,0,0,0.35)]
          ring-1 ring-white/10 overflow-hidden"
        >
          <h3 className="text-4xl font-bolder leading-tight text-white">
            Let's Work Together!
          </h3>
          <p className="mt-4 text-lg text-white/75">
            I'm always interested in new opportunities and exciting projects!
            Let's get in touch and build something amazing!
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="mailto:cindynakh@example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[55px] border-2 border-white/75 px-6 py-3 text-white/75 transition-all duration-300 hover:bg-white hover:text-black"
            >
              cindynakh@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/cindy-nakhammouane-348a63247/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[55px] border-2 border-white/75 px-6 py-3 text-white/75 transition-all duration-300 hover:bg-white hover:text-black"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/cnakha"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[55px] border-2 border-white/75 px-6 py-3 text-white/75 transition-all duration-300 hover:bg-white hover:text-black"
            >
              Github
            </a>
          </div>
        </div>
      </div>
             {/* <div className="absolute h-full w-full bg-gradient-to-b from-[#008BE8] to-transparent" /> */}

    </footer>
  );
}