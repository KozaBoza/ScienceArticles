export default function AboutPage() {
  return (
    <div className="w-full max-w-5xl flex flex-col items-center pt-16 px-8">
      <h1 className="font-serif text-[3.5rem] md:text-[5rem] mb-20 uppercase text-center leading-none tracking-tight">
        About The<br />Magazine
      </h1>
      
      <div className="flex flex-col md:flex-row gap-16 w-full items-start">
        {/* Lewa Strona: Abstrakcyjny, geometryczny blok akcentujący */}
        <div className="w-full md:w-1/3 aspect-square bg-[var(--color-secondary)] transition-colors duration-500 rounded-sm relative">
          <div className="absolute top-4 left-4 w-full h-full border border-[var(--color-primary)] transition-colors duration-500 pointer-events-none"></div>
        </div>

        {/* Prawa Strona: Treść opisująca inicjatywę i wytyczne */}
        <div className="w-full md:w-2/3 flex flex-col gap-10 text-justify">
          <section>
            <h2 className="text-2xl font-serif uppercase tracking-wider mb-4 border-b border-[var(--color-primary)]/30 pb-2">Our Initiative</h2>
            <p className="opacity-80 leading-relaxed text-sm">
              Scientized Science Search was founded on the principle that groundbreaking research should be accessible, transparent, and beautifully presented. We aim to bridge the gap between rigorous academic standards and modern, human-centric design. Our initiative supports researchers globally by providing a platform that respects both the data and the reader.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif uppercase tracking-wider mb-4 border-b border-[var(--color-primary)]/30 pb-2">Open Access Mission</h2>
            <p className="opacity-80 leading-relaxed text-sm">
              We strongly believe that knowledge belongs to humanity. All articles published in our magazine are fully open-access, peer-reviewed by leading experts in their respective fields, and distributed freely. By removing paywalls, we accelerate the pace of discovery and foster interdisciplinary collaboration across mathematics, computer science, education, and science popularization.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif uppercase tracking-wider mb-4 border-b border-[var(--color-primary)]/30 pb-2">Commitment to Accessibility</h2>
            <p className="opacity-80 leading-relaxed text-sm">
              Science is for everyone. As part of our core values, our platform integrates sensory-friendly themes and distraction-free reading environments, ensuring that neurodivergent individuals and those with visual sensitivities can engage with complex scientific literature comfortably.
            </p>
          </section>

          {/* NOWA SEKCJA: Informacje dla autorów */}
          <section className="mt-8 bg-[var(--color-muted)] p-8 border border-[var(--color-primary)] transition-colors duration-500">
            <h2 className="text-2xl font-serif uppercase tracking-wider mb-4">Information for Authors</h2>
            <p className="opacity-80 leading-relaxed text-sm mb-8">
              We welcome original research contributions. Prior to submission, please ensure your manuscript adheres strictly to our formatting guidelines, including complete anonymization for the double-blind peer review process. Our comprehensive author guidelines provide detailed instructions on structuring your paper, citing sources, and preparing data visualizations.
            </p>
            
            {/* Przycisk pobierania szablonu (Stylizowany na outline button) */}
            <a 
              href="/template.docx" 
              download 
              className="inline-flex items-center justify-center border border-[var(--color-primary)] px-8 py-3 text-[9px] tracking-[0.2em] uppercase font-semibold text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-bg)] transition-colors duration-300"
            >
              Download Article Template
            </a>
          </section>

        </div>
      </div>
    </div>
  );
}