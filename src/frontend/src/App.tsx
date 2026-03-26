import { Instagram, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const artworks = [
  {
    id: 1,
    src: "/assets/generated/artwork1.dim_800x600.jpg",
    title: "Whispers of Form",
    year: "2024",
    medium: "Watercolour",
    description:
      "A delicate study in negative space, where soft washes of colour give way to quiet, undefined edges. This piece invites the viewer to find meaning in what is left unsaid.",
    dimensions: "30 × 40 cm",
    processSteps: [
      {
        label: "INSPIRATION",
        description:
          "A quiet afternoon studying the way light falls across an empty chair — the feeling of presence in absence.",
      },
      {
        label: "MAKING",
        description:
          "Soft watercolour washes were laid down first, wet-on-wet, letting the pigment find its own edges.",
      },
      {
        label: "FINISHING",
        description:
          "The final marks were minimal — a few deliberate lines to define what the wash had left open.",
      },
    ],
  },
  {
    id: 2,
    src: "/assets/generated/artwork2.dim_600x800.jpg",
    title: "Botanical Reverie",
    year: "2023",
    medium: "Ink",
    description:
      "Inspired by long walks through overgrown gardens, this ink drawing traces the organic rhythms of leaves and stems — loose, living, and full of quiet energy.",
    dimensions: "24 × 32 cm",
    processSteps: [
      {
        label: "INSPIRATION",
        description:
          "Long walks through overgrown gardens, noticing how leaves overlap and cast shadows on one another.",
      },
      {
        label: "MAKING",
        description:
          "Ink applied with a dip pen, following the organic rhythm of stems and veins without any underdrawing.",
      },
      {
        label: "FINISHING",
        description:
          "A few areas were gently lifted with water to soften the contrast and let the white of the paper breathe.",
      },
    ],
  },
  {
    id: 3,
    src: "/assets/generated/artwork3.dim_800x800.jpg",
    title: "Soft Spiral",
    year: "2024",
    medium: "Mixed Media",
    description:
      "Layers of paper, pigment, and texture come together in a slow, meditative composition. The spiral form emerged naturally through the making process.",
    dimensions: "40 × 40 cm",
    processSteps: [
      {
        label: "INSPIRATION",
        description:
          "The natural spiral found in shells, ferns, and galaxies — a form that holds both tension and calm.",
      },
      {
        label: "MAKING",
        description:
          "Layers of torn paper, pigment washes, and gestural marks were built up slowly over several sessions.",
      },
      {
        label: "FINISHING",
        description:
          "The piece was sealed with a matte medium and a final layer of diluted ochre to unify the palette.",
      },
    ],
  },
  {
    id: 4,
    src: "/assets/generated/artwork4.dim_800x500.jpg",
    title: "Still Horizon",
    year: "2023",
    medium: "Acrylic",
    description:
      "A wide, breathing landscape reduced to its most essential elements — sky, land, and the thin line that holds them apart. Painted in one sitting at dawn.",
    dimensions: "50 × 30 cm",
    processSteps: [
      {
        label: "INSPIRATION",
        description:
          "Painted from memory of a dawn drive through open countryside — the land barely visible beneath a pale sky.",
      },
      {
        label: "MAKING",
        description:
          "A single session, working quickly with a wide flat brush to keep the feeling of immediacy intact.",
      },
      {
        label: "FINISHING",
        description:
          "One thin glaze of warm grey across the upper half softened the horizon and unified sky and land.",
      },
    ],
  },
  {
    id: 5,
    src: "/assets/generated/artwork5.dim_600x700.jpg",
    title: "Ink & Breath",
    year: "2022",
    medium: "Ink",
    description:
      "Drawn in a single breath — fast, instinctive marks that capture the feeling of a fleeting moment rather than its exact appearance.",
    dimensions: "21 × 29 cm",
    processSteps: [
      {
        label: "INSPIRATION",
        description:
          "The challenge of capturing a fleeting emotional state before the mind can intervene and correct it.",
      },
      {
        label: "MAKING",
        description:
          "Drawn in under two minutes with undiluted ink — fast, instinctive, no corrections.",
      },
      {
        label: "FINISHING",
        description:
          "Set aside for a week, then a single wash of pale blue was added to give the marks room to settle.",
      },
    ],
  },
  {
    id: 6,
    src: "/assets/generated/golden-hours.dim_800x600.jpg",
    title: "Golden Hours",
    year: "2024",
    medium: "Watercolour",
    description:
      "Painted during the last light of a summer evening, this piece tries to hold onto that warm, fleeting quality of golden-hour light — the way it softens everything it touches.",
    dimensions: "35 × 26 cm",
    processSteps: [
      {
        label: "INSPIRATION",
        description:
          "The last twenty minutes of a summer evening — that warm, amber light that makes everything look like a memory.",
      },
      {
        label: "MAKING",
        description:
          "Wet-on-wet washes of cadmium yellow, raw sienna, and alizarin built the glow from the inside out.",
      },
      {
        label: "FINISHING",
        description:
          "Final details were kept to a minimum — a few darker edges to anchor the light and stop it floating away.",
      },
    ],
  },
];

const mediums = ["Watercolour", "Ink", "Mixed Media", "Acrylic"];

type Page = "home" | "gallery" | "about" | "process";

const navLinks: { label: string; page: Page }[] = [
  { label: "HOME", page: "home" },
  { label: "GALLERY", page: "gallery" },
  { label: "ABOUT", page: "about" },
  { label: "PROCESS", page: "process" },
];

// Pinterest SVG icon (not in lucide)
function PinterestIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  );
}

function PageTransition({
  children,
  pageKey,
}: { children: React.ReactNode; pageKey: string }) {
  return (
    <motion.div
      key={pageKey}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function HomePage({ navigate }: { navigate: (p: Page) => void }) {
  const previewWorks = [
    artworks[1], // artwork2
    artworks[3], // artwork4
    artworks[4], // artwork5
  ];

  return (
    <PageTransition pageKey="home">
      <section className="relative py-24 md:py-36 overflow-hidden">
        {/* Decorative ambient blobs */}
        <div
          className="absolute top-16 left-[8%] w-72 h-72 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(0.88 0.06 65 / 0.07) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-32 right-[10%] w-96 h-96 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(0.85 0.05 20 / 0.06) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-24 left-[30%] w-64 h-64 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(0.87 0.04 45 / 0.05) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-[1100px] mx-auto px-6 flex flex-col items-center text-center gap-8">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight tracking-wide text-foreground"
          >
            Where art speaks softly.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="text-[15px] leading-relaxed max-w-lg"
            style={{ color: "oklch(var(--text-body))" }}
          >
            Original works by Sneh Vadher — quiet, textured, and intimate. Each
            piece is a meditation on the beauty hidden in ordinary moments.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex gap-4 flex-wrap justify-center"
          >
            <button
              type="button"
              onClick={() => navigate("gallery")}
              data-ocid="hero.primary_button"
              className="px-8 py-3 text-[12px] tracking-[0.2em] uppercase font-medium transition-opacity duration-200 hover:opacity-80 rounded-sm"
              style={{
                backgroundColor: "oklch(var(--btn-fill))",
                color: "oklch(var(--btn-text))",
              }}
            >
              View Gallery
            </button>
            <button
              type="button"
              onClick={() => navigate("about")}
              data-ocid="hero.secondary_button"
              className="px-8 py-3 text-[12px] tracking-[0.2em] uppercase font-medium border transition-colors duration-200 hover:bg-accent rounded-sm border-border text-foreground"
            >
              About the Artist
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full max-w-2xl mt-8 overflow-hidden rounded-sm shadow-sm"
          >
            <img
              src="/assets/generated/artwork1.dim_800x600.jpg"
              alt="Featured artwork"
              className="w-full object-cover"
              style={{ maxHeight: "420px" }}
            />
          </motion.div>

          {/* Selected Works preview strip */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="w-full max-w-2xl mt-4"
          >
            <p
              className="text-[10px] tracking-[0.3em] uppercase mb-4 text-center"
              style={{ color: "oklch(var(--text-muted))" }}
            >
              Selected Works
            </p>
            <div className="grid grid-cols-3 gap-3">
              {previewWorks.map((work, i) => (
                <motion.button
                  key={work.id}
                  type="button"
                  onClick={() => navigate("gallery")}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 + i * 0.1 }}
                  className="group overflow-hidden rounded-sm cursor-pointer text-left"
                  data-ocid={`home.item.${i + 1}`}
                >
                  <div className="overflow-hidden">
                    <img
                      src={work.src}
                      alt={work.title}
                      className="w-full h-28 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p
                    className="text-[11px] mt-1.5 font-medium truncate"
                    style={{ color: "oklch(var(--text-body))" }}
                  >
                    {work.title}
                  </p>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}

function GalleryPage() {
  const [lightbox, setLightbox] = useState<(typeof artworks)[0] | null>(null);

  return (
    <PageTransition pageKey="gallery">
      <section className="py-20 md:py-28">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="flex flex-col items-center gap-4 mb-14">
            <div className="flex items-center gap-5 w-full">
              <div
                className="flex-1 h-px"
                style={{ backgroundColor: "oklch(var(--divider))" }}
              />
              <h2 className="font-serif text-xl tracking-[0.3em] uppercase text-foreground whitespace-nowrap">
                Gallery
              </h2>
              <div
                className="flex-1 h-px"
                style={{ backgroundColor: "oklch(var(--divider))" }}
              />
            </div>
            <p
              className="font-serif italic text-[14px] text-center"
              style={{ color: "oklch(var(--text-muted))" }}
            >
              A collection of original works — each one made slowly.
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {artworks.map((artwork, i) => (
              <motion.div
                key={artwork.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
                className="break-inside-avoid cursor-pointer group"
                onClick={() => setLightbox(artwork)}
                data-ocid={`gallery.item.${i + 1}`}
              >
                <div className="overflow-hidden rounded-sm">
                  <img
                    src={artwork.src}
                    alt={artwork.title}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="mt-2 pl-0.5">
                  <p className="text-[13px] font-medium text-foreground">
                    {artwork.title}
                  </p>
                  <p
                    className="text-[12px]"
                    style={{ color: "oklch(var(--text-muted))" }}
                  >
                    {artwork.year}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
            style={{ backgroundColor: "rgba(0,0,0,0.82)" }}
            onClick={() => setLightbox(null)}
            data-ocid="gallery.modal"
          >
            <motion.div
              initial={{ scale: 0.93, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.93, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative flex flex-col md:flex-row bg-stone-950 rounded-sm shadow-2xl overflow-hidden max-w-5xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="md:w-3/5 flex-shrink-0 bg-black flex items-center justify-center">
                <img
                  src={lightbox.src}
                  alt={lightbox.title}
                  className="w-full h-full object-contain max-h-[55vh] md:max-h-[90vh]"
                />
              </div>

              <div className="md:w-2/5 flex flex-col justify-between p-7 md:p-9 gap-6">
                <div className="flex flex-col gap-5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-xl text-white leading-snug">
                      {lightbox.title}
                    </h3>
                    <button
                      type="button"
                      onClick={() => setLightbox(null)}
                      data-ocid="gallery.close_button"
                      className="text-white/50 hover:text-white transition-colors p-0.5 mt-0.5 flex-shrink-0"
                      aria-label="Close"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  <div
                    className="w-8 h-px"
                    style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                  />

                  <dl className="flex flex-col gap-3">
                    <div className="flex flex-col gap-0.5">
                      <dt
                        className="text-[10px] tracking-[0.2em] uppercase"
                        style={{ color: "rgba(255,255,255,0.4)" }}
                      >
                        Medium
                      </dt>
                      <dd className="text-[13px] text-white/80">
                        {lightbox.medium}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <dt
                        className="text-[10px] tracking-[0.2em] uppercase"
                        style={{ color: "rgba(255,255,255,0.4)" }}
                      >
                        Year
                      </dt>
                      <dd className="text-[13px] text-white/80">
                        {lightbox.year}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <dt
                        className="text-[10px] tracking-[0.2em] uppercase"
                        style={{ color: "rgba(255,255,255,0.4)" }}
                      >
                        Dimensions
                      </dt>
                      <dd className="text-[13px] text-white/80">
                        {lightbox.dimensions}
                      </dd>
                    </div>
                  </dl>

                  <div
                    className="w-8 h-px"
                    style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                  />

                  <p className="text-[13px] leading-[1.85] text-white/65">
                    {lightbox.description}
                  </p>
                </div>

                <p className="text-[11px] tracking-[0.15em] uppercase text-white/25">
                  Artistries by Sneh
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}

function AboutPage() {
  return (
    <PageTransition pageKey="about">
      <section
        className="py-20 md:py-28"
        style={{ minHeight: "calc(100vh - 4rem)" }}
      >
        <div className="max-w-[700px] mx-auto px-6 flex flex-col gap-10">
          <div className="flex items-center gap-5">
            <div
              className="flex-1 h-px"
              style={{ backgroundColor: "oklch(var(--divider))" }}
            />
            <h2 className="font-serif text-xl tracking-[0.3em] uppercase text-foreground whitespace-nowrap">
              About the Artist
            </h2>
            <div
              className="flex-1 h-px"
              style={{ backgroundColor: "oklch(var(--divider))" }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-5"
          >
            <p
              className="font-serif text-lg tracking-[0.1em] italic"
              style={{ color: "oklch(var(--text-muted))" }}
            >
              Sneh Vadher
            </p>
            <div
              className="w-10 h-px"
              style={{ backgroundColor: "oklch(var(--divider))" }}
            />
            <p
              className="text-[15px] leading-[1.9]"
              style={{ color: "oklch(var(--text-body))" }}
            >
              Sneh Vadher is a self-taught artist whose work lives in the quiet
              spaces between intention and accident. Drawing from the language
              of nature, memory, and texture, her pieces explore the beauty
              found in stillness. Each artwork is an invitation to slow down and
              look again.
            </p>
            <p
              className="text-[15px] leading-[1.9]"
              style={{ color: "oklch(var(--text-body))" }}
            >
              Working primarily in watercolour, ink, and mixed media, Sneh
              builds each piece through layers — unhurried and attentive,
              letting the materials guide the final form.
            </p>
          </motion.div>

          {/* Animated divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="origin-left h-px"
            style={{ backgroundColor: "oklch(var(--divider))" }}
          />

          {/* Mediums */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col gap-4"
          >
            <p
              className="text-[10px] tracking-[0.3em] uppercase"
              style={{ color: "oklch(var(--text-muted))" }}
            >
              Mediums
            </p>
            <div className="flex flex-wrap gap-2">
              {mediums.map((medium) => (
                <span
                  key={medium}
                  className="px-3 py-1 rounded-full text-[12px] tracking-wide border border-border"
                  style={{ color: "oklch(var(--text-body))" }}
                >
                  {medium}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Pull-quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="pl-5 border-l-2"
            style={{ borderColor: "oklch(var(--divider))" }}
          >
            <p
              className="font-serif italic text-[18px] leading-[1.75]"
              style={{ color: "oklch(var(--text-body))" }}
            >
              &ldquo;Each piece is a meditation on beauty found in ordinary
              moments.&rdquo;
            </p>
          </motion.blockquote>

          {/* Featured artwork */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col gap-3 pb-4"
          >
            <div className="overflow-hidden rounded-sm shadow-sm">
              <img
                src="/assets/generated/artwork3.dim_800x800.jpg"
                alt="Soft Spiral"
                className="w-full object-cover"
                style={{ maxHeight: "380px" }}
              />
            </div>
            <p
              className="text-[12px] text-center tracking-wide italic"
              style={{ color: "oklch(var(--text-muted))" }}
            >
              Soft Spiral, Mixed Media, 2024
            </p>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}

function ProcessPage() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const stepNumbers = ["01", "02", "03"];

  const selectedArtwork = artworks.find((a) => a.id === selectedId) ?? null;

  return (
    <PageTransition pageKey="process">
      <section className="py-20 md:py-28">
        <div className="max-w-[1100px] mx-auto px-6">
          {/* Header */}
          <div className="flex flex-col items-center gap-4 mb-14">
            <div className="flex items-center gap-5 w-full">
              <div
                className="flex-1 h-px"
                style={{ backgroundColor: "oklch(var(--divider))" }}
              />
              <h2 className="font-serif text-xl tracking-[0.3em] uppercase text-foreground whitespace-nowrap">
                The Creative Process
              </h2>
              <div
                className="flex-1 h-px"
                style={{ backgroundColor: "oklch(var(--divider))" }}
              />
            </div>
            <p
              className="font-serif italic text-[14px] text-center max-w-md"
              style={{ color: "oklch(var(--text-muted))" }}
            >
              Select a painting to explore how it was made.
            </p>
          </div>

          {/* Artwork thumbnail grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-14">
            {artworks.map((artwork, i) => {
              const isSelected = selectedId === artwork.id;
              return (
                <motion.button
                  key={artwork.id}
                  type="button"
                  onClick={() => setSelectedId(isSelected ? null : artwork.id)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.07,
                    ease: "easeOut",
                  }}
                  className="group relative text-left rounded-sm overflow-hidden cursor-pointer focus:outline-none"
                  data-ocid={`process.item.${i + 1}`}
                  aria-pressed={isSelected}
                >
                  <div
                    className="overflow-hidden rounded-sm transition-all duration-300"
                    style={{
                      outline: isSelected
                        ? "2px solid oklch(var(--btn-fill))"
                        : "2px solid transparent",
                      outlineOffset: "2px",
                    }}
                  >
                    <img
                      src={artwork.src}
                      alt={artwork.title}
                      className={`w-full h-36 sm:h-44 object-cover transition-all duration-500 ${
                        isSelected
                          ? "scale-100"
                          : "group-hover:scale-105 opacity-80 group-hover:opacity-100"
                      }`}
                      loading="lazy"
                    />
                    {/* Overlay on selected */}
                    {isSelected && (
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(to top, oklch(var(--btn-fill) / 0.18) 0%, transparent 60%)",
                        }}
                      />
                    )}
                  </div>
                  <div className="mt-2 px-0.5">
                    <p
                      className={`text-[12px] font-medium truncate transition-colors duration-200 ${
                        isSelected ? "text-foreground" : ""
                      }`}
                      style={{
                        color: isSelected
                          ? undefined
                          : "oklch(var(--text-body))",
                      }}
                    >
                      {artwork.title}
                    </p>
                    <p
                      className="text-[11px]"
                      style={{ color: "oklch(var(--text-muted))" }}
                    >
                      {artwork.medium} · {artwork.year}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Process steps or prompt */}
          <AnimatePresence mode="wait">
            {!selectedArtwork ? (
              <motion.div
                key="prompt"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col items-center gap-3 py-16"
                data-ocid="process.empty_state"
              >
                <div
                  className="w-10 h-px mb-2"
                  style={{ backgroundColor: "oklch(var(--divider))" }}
                />
                <p
                  className="font-serif italic text-[16px] text-center"
                  style={{ color: "oklch(var(--text-muted))" }}
                >
                  Select a painting above to explore its process.
                </p>
                <div
                  className="w-10 h-px mt-2"
                  style={{ backgroundColor: "oklch(var(--divider))" }}
                />
              </motion.div>
            ) : (
              <motion.div
                key={`steps-${selectedArtwork.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                {/* Selected artwork label */}
                <div className="flex items-center gap-4 mb-10">
                  <div
                    className="flex-1 h-px"
                    style={{ backgroundColor: "oklch(var(--divider))" }}
                  />
                  <p
                    className="font-serif italic text-[13px] whitespace-nowrap"
                    style={{ color: "oklch(var(--text-muted))" }}
                  >
                    {selectedArtwork.title}
                  </p>
                  <div
                    className="flex-1 h-px"
                    style={{ backgroundColor: "oklch(var(--divider))" }}
                  />
                </div>

                {/* Steps grid */}
                <div className="grid sm:grid-cols-3 gap-8">
                  {selectedArtwork.processSteps.map((step, i) => (
                    <motion.div
                      key={`${selectedArtwork.id}-${step.label}`}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.55,
                        delay: i * 0.12,
                        ease: "easeOut",
                      }}
                      className="flex flex-col gap-4"
                      data-ocid="process.card"
                    >
                      {/* Step number */}
                      <p
                        className="font-serif leading-none select-none"
                        style={{
                          fontSize: "clamp(3rem, 6vw, 4.5rem)",
                          color: "oklch(var(--divider))",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {stepNumbers[i]}
                      </p>

                      <div className="overflow-hidden rounded-sm">
                        <img
                          src={selectedArtwork.src}
                          alt={`${selectedArtwork.title} — ${step.label}`}
                          className="w-full object-cover h-56 md:h-64"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <p
                          className="text-[11px] tracking-[0.25em] uppercase font-medium mb-1.5"
                          style={{ color: "oklch(var(--text-muted))" }}
                        >
                          {step.label}
                        </p>
                        <p
                          className="text-[14px] leading-relaxed"
                          style={{ color: "oklch(var(--text-body))" }}
                        >
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </PageTransition>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = (page: Page) => {
    setCurrentPage(page);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* ── HEADER ── */}
      <header
        className="sticky top-0 z-50 border-b border-border"
        style={{ backgroundColor: "oklch(var(--header-bg))" }}
      >
        <div className="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate("home")}
            className="font-serif text-sm font-semibold tracking-[0.2em] uppercase text-foreground"
            data-ocid="nav.link"
          >
            Artistries by Sneh
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.page}
                type="button"
                onClick={() => navigate(link.page)}
                data-ocid="nav.link"
                className={`text-[12px] tracking-[0.15em] uppercase transition-colors duration-200 ${
                  currentPage === link.page
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden text-foreground p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-border overflow-hidden"
              style={{ backgroundColor: "oklch(var(--header-bg))" }}
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <button
                    key={link.page}
                    type="button"
                    onClick={() => navigate(link.page)}
                    className="text-[12px] tracking-[0.15em] uppercase text-left text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── PAGE CONTENT ── */}
      <main>
        <AnimatePresence mode="wait">
          {currentPage === "home" && (
            <HomePage key="home" navigate={navigate} />
          )}
          {currentPage === "gallery" && <GalleryPage key="gallery" />}
          {currentPage === "about" && <AboutPage key="about" />}
          {currentPage === "process" && <ProcessPage key="process" />}
        </AnimatePresence>
      </main>

      {/* ── FOOTER ── */}
      <footer
        className="border-t border-border py-8"
        style={{ backgroundColor: "oklch(var(--header-bg))" }}
      >
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <span className="font-serif text-xs tracking-[0.2em] uppercase text-foreground">
              Artistries by Sneh
            </span>

            {/* Social links */}
            <div className="flex items-center gap-6">
              <div
                className="flex items-center gap-2"
                style={{ color: "oklch(var(--text-muted))" }}
                data-ocid="footer.instagram"
              >
                <Instagram size={15} />
                <span className="text-[11px] tracking-[0.1em]">
                  Instagram — Coming Soon
                </span>
              </div>
              <div
                className="flex items-center gap-2"
                style={{ color: "oklch(var(--text-muted))" }}
                data-ocid="footer.pinterest"
              >
                <PinterestIcon size={14} />
                <span className="text-[11px] tracking-[0.1em]">
                  Pinterest — Coming Soon
                </span>
              </div>
            </div>

            <p
              className="text-[11px]"
              style={{ color: "oklch(var(--text-muted))" }}
            >
              © {new Date().getFullYear()} Artistries by Sneh
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
