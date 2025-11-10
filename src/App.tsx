import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import logoMain from './5.svg';
import logoAlt from './4.svg';

// --- SZÍN KONSTANSOK ---
const brand = {
  coral: '#F7C6B7',
  deepBlue: '#003366',
  lightAccent: '#E6F0FA',
  offwhite: '#FFFBF8'
};

// --- FŐ APP KOMPONENS ---
export default function App() {
  useEffect(() => {
    document.documentElement.style.setProperty('--coral', brand.coral);
    document.documentElement.style.setProperty('--deepBlue', brand.deepBlue);
    document.documentElement.style.setProperty('--lightAccent', brand.lightAccent);
    document.documentElement.style.setProperty('--offwhite', brand.offwhite);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-[color:var(--offwhite)] text-[color:var(--deepBlue)] overflow-x-hidden">
      <Header />
      <Hero />
      <Pentakkord />
      <Gallery />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

// --- HEADER ---
function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#E6F0FA] shadow-md h-16 flex items-center">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between w-full">
        <img src={logoMain} alt="A Közös Hang logó" className="w-[120px] md:w-[140px] h-auto" />
        <nav className="hidden md:flex gap-6 items-center text-sm text-gray-700 font-medium">
          <a href="#pentakkord" className="hover:text-[color:var(--deepBlue)] transition duration-200">Pentakkord™</a>
          <a href="#gallery" className="hover:text-[color:var(--deepBlue)] transition duration-200">Galéria</a>
          <a href="#team" className="hover:text-[color:var(--deepBlue)] transition duration-200">Csapat</a>
          <a href="#contact" className="hover:text-[color:var(--deepBlue)] transition duration-200">Kapcsolat</a>
        </nav>
      </div>
    </header>
  );
}

// --- HERO ---
function Hero() {
  return (
    <section className="relative text-center py-24 px-6 md:px-12 bg-[color:var(--offwhite)]">
      <motion.img
        src={logoMain}
        alt="A Közös Hang logó"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mx-auto w-[140px] md:w-[180px] mb-8"
      />
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-4xl md:text-6xl font-extrabold text-[color:var(--deepBlue)]"
      >
        A Közös Hang
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed"
      >
        Zenés közösségépítés – emberközpontú módszer a zene, a ritmus és az együttrezdülés nyelvén.
        Felfedezni, hogy a közös alkotás miként formál közösséget, harmóniát és bizalmat.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="mt-10"
      >
        <a
          href="#contact"
          className="inline-block px-8 py-3 rounded-full bg-[color:var(--deepBlue)] text-white font-semibold shadow-lg hover:shadow-xl hover:bg-[color:var(--coral)] hover:text-[color:var(--deepBlue)] transition-colors duration-200"
        >
          Ajánlatot kérek
        </a>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1.2 }}
        className="italic text-gray-600 mt-12"
      >
        „A zene lélekgyógyító hatásként vesz körül bennünket.” – Szókratész
      </motion.p>
    </section>
  );
}

// --- PENTAKKORD ---
function Pentakkord() {
  const steps = [
    {
      number: '1',
      title: 'MEGALAPOZÁS',
      subtitle: 'Ösztönzés, bátorítás és lelkesítés',
      text: 'A beszédben rejlő zeneiség megismerése játékos gyakorlatokon keresztül. Ösztönzés, bátorítás és lelkesítés. A biztonságos tér megteremtése.'
    },
    {
      number: '2',
      title: 'ELŐKÉSZÜLET',
      subtitle: 'Dallam, ritmus és harmónia; énekeljünk és zenéljünk közösen',
      text: 'Zenei dallam, ritmus és harmónia felismerése a mindennapjainkban. Dallam, ritmus és harmónia; énekeljünk és zenéljünk közösen. Közös éneklés és zenélés a szinergia növeléséért.'
    },
    {
      number: '3',
      title: 'DALSZERZÉS',
      subtitle: 'A dal tartalmi, formai és zenei kialakítása',
      text: 'Egyedi tartalom és mondanivaló zenei formába öntve. A dal tartalmi, formai és zenei kialakítása. A szerzemény kigyakorlása és megelevenítése. A közösen alkotott dalszöveg megzenésítése betekintést ad a zeneszerzés világába; a kész dal közös megtanulása, eljátszása és rögzítése egységes közösséggé formálja a csapatot.'
    }
  ];

  return (
    <section id="pentakkord" className="relative overflow-hidden py-24 px-6 md:px-12 bg-[color:var(--offwhite)]">
      {/* Fejléc logó és cím */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center relative z-10"
      >
        <img
          src={logoMain}
          alt="A Közös Hang logó"
          className="mx-auto w-[120px] md:w-[160px] mb-6 drop-shadow-lg"
        />
        <h2 className="text-4xl md:text-5xl font-extrabold text-[color:var(--deepBlue)]">
          PENTAKKORD™ – <span className="text-[color:var(--coral)]">a közös hang módszere</span>
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Egy zenei alapú, emberközpontú közösségépítő folyamat,  
          amely a ritmus, a dallam és az együttrezdülés nyelvén keresztül kapcsol össze.  
          A program három egymásra épülő lépésből áll.
        </p>
      </motion.div>

      {/* Lépések */}
      <div className="mt-20 max-w-4xl mx-auto flex flex-col gap-16 relative z-10">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-2xl border-t-4 border-[color:var(--coral)]"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[color:var(--deepBlue)] text-white text-xl font-bold flex-shrink-0 shadow-lg">
                {step.number}
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[color:var(--deepBlue)]">
                  {step.title}
                </h3>
                <p className="text-[color:var(--coral)] font-medium">{step.subtitle}</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">{step.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Alsó logó */}
      <motion.img
        src={logoAlt}
        alt="Pentakkord fordított logó"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 0.25, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="mx-auto mt-24 w-[150px] md:w-[200px]"
      />
    </section>
  );
}

// --- GALÉRIA ---
function Gallery() {
  const images = [
    'https://i.postimg.cc/FRr7ZV0p/csapat.jpg',
    'https://i.postimg.cc/3R8dBF2f/csapat-48.jpg',
    'https://i.postimg.cc/nz3Mw91S/csapat-79.jpg'
  ];
  return (
    <section id="gallery" className="py-20 bg-[color:var(--lightAccent)]">
      <h2 className="text-4xl font-bold mb-12 text-center text-[color:var(--deepBlue)]">Pillanatképek</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">
        {images.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt={`Kép ${i + 1}`}
            className="rounded-3xl shadow-2xl object-cover w-full h-[300px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          />
        ))}
      </div>
    </section>
  );
}

// --- TEAM ---
function Team() {
  const team = [
    {
      name: 'Józsa Tamás',
      role: 'A Pentakkord™ módszer megalkotója, zeneszerző, tréner',
      img: 'https://i.postimg.cc/W3WtfP1G/Tamas-Jozsa-12.jpg',
      quote: '„Közösen zenélni nemcsak csapatépítő, hanem együtt-test formáló tevékenység.”'
    },
    {
      name: 'Kaló Kristóf',
      role: 'Zenész, előadóművész, tréner',
      img: 'https://i.postimg.cc/bJN9t85k/DSC9055.jpg',
      quote: '„A művészet mozdulatokkal kreált, színekkel festett, szavakkal mesélt, vagy zenei hangokba öltözött tapasztalás.”'
    }
  ];

  return (
    <section id="team" className="py-20 bg-[color:var(--offwhite)]">
      <h2 className="text-4xl font-bold mb-12 text-center text-[color:var(--deepBlue)]">A csapat</h2>
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
        {team.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl p-8 text-center"
          >
            <img
              src={member.img}
              alt={member.name}
              className="mx-auto rounded-2xl w-[240px] h-[260px] object-cover shadow-md mb-6"
            />
            <h3 className="text-2xl font-extrabold text-[color:var(--deepBlue)]">{member.name}</h3>
            <p className="text-gray-600 italic mt-2">{member.role}</p>
            <blockquote className="mt-4 text-gray-700 italic text-lg">{member.quote}</blockquote>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// --- CONTACT ---
function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-12 bg-[color:var(--lightAccent)] text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-extrabold text-[color:var(--deepBlue)]">Ajánlatkérés</h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Szeretnéd megtapasztalni a Pentakkord™ módszert a csapatoddal?
          Vedd fel velünk a kapcsolatot!
        </p>

        <div className="mt-10 bg-white rounded-[2rem] shadow-2xl p-8 md:p-12 text-left flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-sm uppercase tracking-wide text-[color:var(--coral)] font-semibold">
              Email
            </span>
            <a
              href="mailto:hello@akozoshang.hu"
              className="text-xl font-semibold text-[color:var(--deepBlue)] hover:text-[color:var(--coral)] transition-colors"
            >
              hello@akozoshang.hu
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-sm uppercase tracking-wide text-[color:var(--coral)] font-semibold">
              Telefon
            </span>
            <div className="flex flex-col text-xl font-semibold text-[color:var(--deepBlue)] gap-1">
              <a href="tel:+36205649299" className="hover:text-[color:var(--coral)] transition-colors">
                +36/20 564-9299
              </a>
              <a href="tel:+36309791997" className="hover:text-[color:var(--coral)] transition-colors">
                +36/30 979-1997
              </a>
            </div>
          </div>

          <a
            href="mailto:hello@akozoshang.hu"
            className="mt-4 inline-flex items-center justify-center px-8 py-3 rounded-full bg-[color:var(--deepBlue)] text-white font-semibold shadow-lg hover:shadow-xl hover:bg-[color:var(--coral)] hover:text-[color:var(--deepBlue)] transition-colors duration-200"
          >
            Küldj ajánlatkérést
          </a>
        </div>
      </motion.div>
    </section>
  );
}

// --- FOOTER ---
function Footer() {
  return (
    <footer className="mt-20 py-10 border-t text-center text-sm text-white bg-[color:var(--deepBlue)] border-[color:var(--coral)]">
      <p>© {new Date().getFullYear()} A Közös Hang – Zenés Közösségépítés. Minden jog fenntartva.</p>
    </footer>
  );
}
