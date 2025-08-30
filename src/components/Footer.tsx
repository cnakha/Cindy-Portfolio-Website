import imgChicago from "../assets/chicago_bg.png";

export default function Footer() {
  return (
    <footer id="contact" className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imgChicago})` }}
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-20">
        <div
          className="max-w-xl w-full rounded-2xl bg-black/55 p-10
          backdrop-blur-sm shadow-[0_12px_32px_rgba(0,0,0,0.35)]
          ring-1 ring-white/10 overflow-hidden"
        >
          <h3 className="text-4xl font-extrabold leading-tight text-white">
            Let's Work
            <br />
            Together...
          </h3>
          <p className="mt-4 text-lg text-white/75">
            I'm always interested in new opportunities and exciting projects!
            Let's connect and build something amazing!
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="mailto:cindynakh@example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[55px] border-2 border-white/75 px-6 py-3 text-white/75 transition-all duration-300 hover:bg-white hover:text-black"
            >
              Email
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
    </footer>
  );
}