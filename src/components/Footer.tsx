export default function Footer() {
  return (
    <div className="bg-black pt-10">
    <footer id="contact" className="font-nhgMono relative bg-black">
      {/* Background video */}
      {/* <video
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        src="/Footer.mp4"
        autoPlay
        loop
        muted
        playsInline
      /> */}

      {/* Overlay for darkening and ensuring readability */}
      <div className="absolute inset-0 " />

      <div className="relative md:ml-10 w-full pl-10 pt-10 py-10">
        {/* <div
          className="max-w-xl w-full rounded-2xl bg-black/55 p-10
          backdrop-blur-sm shadow-[0_12px_32px_rgba(0,0,0,0.35)]
          ring-1 ring-white/10 overflow-hidden"
        > */}
         <div
          className="max-w-xl w-full rounded-2xl overflow-hidden"
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
      <p className="text-right text-white font-nhgDisplay pb-4 mr-6">Website Created by Cindy Nakhammouane</p>
    </footer>
    </div>
  );
}
