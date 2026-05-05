/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  Trees, 
  Bug, 
  MapPin, 
  Coffee, 
  Plane, 
  Waves, 
  ChevronRight, 
  Menu, 
  X,
  Wind,
  Search,
  FileText
} from 'lucide-react';
import { useState, useRef } from 'react';
import { CONTENT } from './constants';

const BugEffect = ({ className }: { className?: string }) => (
  <motion.div
    animate={{ 
      rotate: [0, -5, 5, -5, 0],
      scale: [1, 1.05, 1],
    }}
    transition={{ 
      duration: 3, 
      repeat: Infinity, 
      ease: "easeInOut" 
    }}
    className={className}
  >
    <Bug />
  </motion.div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className="min-h-screen selection:bg-earth-500/30 selection:text-forest-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 transition-all duration-300">
        <div className="backdrop-blur-md bg-cream-100/70 border-b border-forest-900/10 h-16 md:h-20 flex items-center justify-between px-6 md:px-12">
          <div className="flex items-center gap-2 group cursor-pointer">
            <BugEffect className="w-6 h-6 text-earth-500 group-hover:text-forest-900 transition-colors" />
            <span className="text-xl font-serif font-black tracking-tighter text-forest-900 uppercase">
              {CONTENT.lodgeName}
            </span>
          </div>

          <div className="hidden md:flex gap-10">
            {CONTENT.nav.map((item) => (
              <a 
                key={item} 
                href={`#${item}`} 
                className="text-sm font-medium hover:text-earth-500 transition-colors tracking-widest"
              >
                {item}
              </a>
            ))}
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center gap-2 bg-forest-900 text-cream-100 px-6 py-2.5 rounded-full text-xs font-bold tracking-widest hover:bg-earth-500 transition-colors shadow-lg"
          >
            <Bug size={14} className="animate-pulse" />
            {CONTENT.cta.book}
          </motion.button>

          <button 
            className="md:hidden text-forest-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-cream-100 border-b border-forest-900/10 p-8 flex flex-col gap-6"
          >
            {CONTENT.nav.map((item) => (
              <a key={item} href={`#${item}`} className="text-lg font-medium">{item}</a>
            ))}
            <button className="bg-forest-900 text-cream-100 px-6 py-3 rounded-xl font-bold">
              {CONTENT.cta.book}
            </button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="ホーム" ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/seed/forest-resort/1920/1080" 
            alt="Amazon Rainforest"
            className="w-full h-full object-cover scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-forest-900/40 backdrop-brightness-75" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center text-cream-100 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center gap-4 mb-4">
               <div className="h-[1px] w-12 bg-cream-100/50" />
               <span className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase">{CONTENT.location}</span>
               <div className="h-[1px] w-12 bg-cream-100/50" />
            </div>
            
            <h1 className="text-5xl md:text-8xl font-serif font-black mb-6 leading-tight max-w-4xl tracking-tighter">
              {CONTENT.lodgeNameJp}
            </h1>
            
            <p className="text-base md:text-xl font-medium max-w-2xl text-cream-100/90 leading-relaxed mb-10 tracking-widest">
              {CONTENT.tagline}
            </p>

            <motion.div 
               whileHover={{ scale: 1.05 }}
               className="group flex flex-col items-center gap-4 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full border border-cream-100/30 flex items-center justify-center group-hover:bg-cream-100 group-hover:text-forest-900 transition-all">
                <ChevronRight className="rotate-90" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Vertical Decorative Text */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-12 z-10">
          <span className="vertical-text text-cream-100/40 text-xs font-medium tracking-[1em] uppercase">
             Exploration & Tranquility
          </span>
          <div className="w-[1px] h-32 bg-cream-100/20" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 md:py-32 bg-cream-100 border-b border-forest-900/5">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 text-earth-500 font-bold tracking-widest text-xs uppercase mb-4">
               <MapPin className="w-4 h-4" />
               About Lodge
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest-900 mb-8 leading-tight">
              {CONTENT.about.title}
            </h2>
            <p className="text-lg text-forest-900/70 leading-loose tracking-widest mb-10 text-justify">
              {CONTENT.about.description}
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <span className="block text-4xl font-serif font-black text-earth-500 mb-1">08</span>
                <span className="text-xs uppercase tracking-widest font-bold text-forest-900/40">Exclusive Lodges</span>
              </div>
              <div>
                <span className="block text-4xl font-serif font-black text-earth-500 mb-1">100%</span>
                <span className="text-xs uppercase tracking-widest font-bold text-forest-900/40">Solar Powered</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-12 gap-4 h-[500px]"
          >
            <div className="col-span-8 rounded-3xl overflow-hidden shadow-2xl">
               <img src="https://picsum.photos/seed/lodge-ext/800/1000" alt="Lodge Exterior" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="col-span-4 flex flex-col gap-4">
              <div className="h-1/2 rounded-3xl overflow-hidden shadow-xl">
                 <img src="https://picsum.photos/seed/jungle-view/500/500" alt="Jungle View" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="h-1/2 rounded-3xl overflow-hidden shadow-xl bg-forest-900 flex items-center justify-center p-6 text-cream-100 text-center">
                 <p className="text-xs font-medium tracking-tighter">自然との対話。</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Guiana Details Section */}
      <section className="py-24 bg-cream-100">
        <div className="container mx-auto px-6">
          <div className="bg-forest-900 border border-forest-900/10 rounded-[3rem] p-12 md:p-20 text-cream-100 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
               <img src="https://picsum.photos/seed/map-pattern/1000/1000" className="w-full h-full object-cover grayscale invert" alt="Map pattern" />
            </div>
            
            <div className="relative z-10 max-w-3xl">
              <span className="text-earth-500 font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Region Insights</span>
              <h2 className="text-4xl md:text-6xl font-serif font-black mb-10 leading-tight italic">
                {CONTENT.about.guianaDetails.title}
              </h2>
              <p className="text-lg md:text-xl text-cream-100/70 leading-relaxed tracking-widest mb-12">
                {CONTENT.about.guianaDetails.content}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-cream-100/10 pt-12">
                 <div>
                   <span className="block text-2xl font-serif font-bold text-earth-500 mb-2">98%</span>
                   <span className="text-[10px] uppercase tracking-widest text-cream-100/40">Rainforest Area</span>
                 </div>
                 <div>
                   <span className="block text-2xl font-serif font-bold text-earth-500 mb-2">26°C</span>
                   <span className="text-[10px] uppercase tracking-widest text-cream-100/40">Avg Temperature</span>
                 </div>
                 <div>
                   <span className="block text-2xl font-serif font-bold text-earth-500 mb-2">EU</span>
                   <span className="text-[10px] uppercase tracking-widest text-cream-100/40">Part of France</span>
                 </div>
                 <div>
                   <span className="block text-2xl font-serif font-bold text-earth-500 mb-2">Equatorial</span>
                   <span className="text-[10px] uppercase tracking-widest text-cream-100/40">Climate</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation Section */}
      <section id="ロッジ" className="py-24 md:py-32 bg-forest-900 text-cream-100 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-earth-500 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Our Sanctuary</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 italic">{CONTENT.accommodation.title}</h2>
            <p className="text-cream-100/60 max-w-2xl mx-auto tracking-widest leading-relaxed mb-12">
              {CONTENT.accommodation.description}
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-16">
               {CONTENT.accommodation.ecoConcept.items.map((concept, idx) => (
                 <div key={idx} className="bg-cream-100/5 backdrop-blur-sm border border-cream-100/10 px-6 py-3 rounded-full flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-earth-500" />
                   <span className="text-xs font-medium tracking-widest">{concept}</span>
                 </div>
               ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {CONTENT.accommodation.items.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group relative h-[450px] rounded-3xl overflow-hidden"
              >
                <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img 
                    src={`https://picsum.photos/seed/lodge-${item.id}/800/1200`} 
                    alt={item.name} 
                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-serif font-bold mb-2">{item.name}</h3>
                  <p className="text-sm text-cream-100/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <button className="text-xs uppercase tracking-[0.2em] font-bold border-b border-cream-100/30 pb-2 hover:border-cream-100 transition-colors">
                    {CONTENT.cta.viewMore}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Entomology Section - Special Feature */}
      <section id="昆虫学" className="py-24 md:py-32 bg-cream-100 relative overflow-hidden">
        <motion.div 
          style={{ y }}
          className="absolute -right-20 top-0 opacity-[0.03] select-none"
        >
          <Bug className="w-[600px] h-[600px]" />
        </motion.div>

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
           <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="order-2 md:order-1 relative"
           >
             <div className="aspect-square rounded-full border-2 border-forest-900/10 p-4">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img src="https://picsum.photos/seed/insect-study/1000/1000" alt="Entomology" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
             </div>
             <div className="absolute -bottom-10 -right-10 bg-earth-500 text-cream-100 p-10 rounded-2xl shadow-xl hidden lg:block">
                <Bug className="w-12 h-12 mb-4" />
                <p className="text-sm font-serif italic max-w-[150px]">
                   "A gateway to the hidden world of biodiversity."
                </p>
             </div>
           </motion.div>

           <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
           >
              <div className="inline-flex items-center gap-3 bg-earth-500/20 px-4 py-2 rounded-full border border-earth-500/30 mb-8 sm:mb-12 text-earth-500">
                <Bug size={16} className="animate-pulse" />
                <span className="text-[10px] font-black tracking-[0.2em] uppercase">Core Expertise</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-serif font-black text-forest-900 mb-8 italic">
                {CONTENT.entomology.title}
              </h2>
              <p className="text-lg text-forest-900/70 leading-loose tracking-widest mb-10">
                {CONTENT.entomology.description}
              </p>
              
              <div className="grid grid-cols-3 gap-6 mb-12 bg-forest-900/5 p-8 rounded-3xl border border-forest-900/5">
                {CONTENT.entomology.stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <span className="block text-2xl md:text-4xl font-serif font-black text-earth-500 mb-1">{stat.value}</span>
                    <span className="text-[9px] uppercase tracking-widest font-bold text-forest-900/40">{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-6 mb-12">
                 <p className="text-sm font-medium leading-relaxed border-l-2 border-earth-500 pl-6 border-opacity-30 italic text-forest-900/80">
                   {CONTENT.entomology.fauna.morpho}
                 </p>
                 <p className="text-sm font-medium leading-relaxed border-l-2 border-earth-500 pl-6 border-opacity-30 italic text-forest-900/80">
                   {CONTENT.entomology.fauna.giants}
                 </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8 mb-16">
                {CONTENT.entomology.features.map((feature: any, idx: number) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 p-4 rounded-2xl hover:bg-forest-900/5 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-earth-500/10 flex items-center justify-center text-earth-500 group-hover:bg-earth-500 group-hover:text-forest-900 transition-all">
                      {feature.icon === 'Bug' && <Bug size={20} />}
                      {feature.icon === 'Files' && <FileText size={20} />}
                      {feature.icon === 'Search' && <Search size={20} />}
                      {feature.icon === 'Spider' && <Bug size={20} className="rotate-180" />}
                    </div>
                    <div>
                      <p className="text-sm font-bold tracking-widest leading-relaxed text-forest-900">{feature.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                className="w-full sm:w-auto bg-forest-900 text-cream-100 px-10 py-5 rounded-full font-bold shadow-lg hover:bg-earth-500 transition-all flex items-center justify-center gap-4 group"
              >
                <Search size={18} />
                昆虫学ツアーの全容を見る
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
           </motion.div>
        </div>
      </section>

      {/* Export Support Section (Japanese Market Focus) */}
      <section id="日本向け輸出サポート" className="py-24 md:py-32 bg-forest-900 text-cream-100 overflow-hidden relative">
         <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <Bug className="w-[800px] h-[800px] absolute -top-40 -left-40" />
            <Bug className="w-[800px] h-[800px] absolute -bottom-40 -right-40 rotate-180" />
         </div>

         <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
               <div className="text-center mb-16">
                  <span className="text-earth-500 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Dedicated Support</span>
                  <h2 className="text-4xl md:text-7xl font-serif font-black mb-8 italic tracking-tighter">
                    {CONTENT.exportSupport.title}
                  </h2>
                  <p className="text-xl md:text-2xl font-serif italic text-earth-500 mb-12">
                    {CONTENT.exportSupport.subtitle}
                  </p>
                  <p className="text-cream-100/70 text-lg leading-loose tracking-widest max-w-3xl mx-auto">
                    {CONTENT.exportSupport.description}
                  </p>
               </div>

               <div className="grid md:grid-cols-2 gap-8 mb-16">
                  {CONTENT.exportSupport.legalDetails.map((detail, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ scale: 1.02 }}
                      className="bg-cream-100/5 p-8 rounded-3xl border border-cream-100/10 flex items-start gap-6"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-earth-500/20 flex items-center justify-center shrink-0">
                         <FileText size={24} className="text-earth-500" />
                      </div>
                      <p className="text-sm md:text-base font-medium leading-loose tracking-widest">
                        {detail}
                      </p>
                    </motion.div>
                  ))}
               </div>

               <div className="bg-earth-500/10 border border-earth-500/20 p-10 rounded-[2.5rem] text-center">
                  <p className="text-lg md:text-xl font-serif italic mb-10 leading-relaxed">
                    "{CONTENT.exportSupport.guarantee}"
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                     <button className="w-full sm:w-auto bg-cream-100 text-forest-900 px-10 py-5 rounded-full font-black tracking-widest uppercase shadow-lg hover:bg-earth-500 transition-colors">
                        輸出申告の手続き詳細
                     </button>
                     <div className="flex items-center gap-4 text-xs font-bold tracking-[0.2em] uppercase opacity-50">
                        <Bug size={16} />
                        Japanese Customs Compliant
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Amenities Grid */}
      <section id="基本情報" className="py-24 bg-forest-800 text-cream-100">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              {CONTENT.amenities.map((amenity, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-cream-100/10 flex items-center justify-center mb-6 border border-cream-100/10 group-hover:bg-earth-500 transition-colors">
                    {idx === 0 && <Coffee className="w-8 h-8" />}
                    {idx === 1 && <Plane className="w-8 h-8" />}
                    {idx === 2 && <Wind className="w-8 h-8" />}
                    {idx === 3 && <Waves className="w-8 h-8" />}
                  </div>
                  <h4 className="text-lg font-serif font-bold mb-2 italic">{amenity.title}</h4>
                  <p className="text-xs text-cream-100/50 tracking-widest uppercase">{amenity.subtitle}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Cuisine Spotlight */}
      <section className="py-32 bg-cream-100">
        <div className="container mx-auto px-6 flex flex-col md:flex-row gap-20 items-center">
          <div className="md:w-1/2">
             <div className="rounded-3xl overflow-hidden shadow-2xl relative">
                <img src="https://picsum.photos/seed/amazone-food/1000/1500" alt="Cuisine" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-forest-900/10" />
             </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-serif font-black text-forest-900 mb-8 italic">森の恵みを味わう</h2>
            <p className="text-lg text-forest-900/70 leading-loose tracking-[0.1em] mb-12">
              カイエンヌの市場から届く新鮮な魚、手作りのスパイス、そして敷地内で収穫される熱帯フルーツ。
              私たちのダイニングでは、アマゾンの豊かな生態系を「食」を通じて体験いただけます。
              都会では決して味わえない、野生と洗練が融合した一皿をお愉しみください。
            </p>
            <div className="space-y-6">
               <div className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-sm border border-forest-900/5">
                  <div className="text-2xl font-serif font-black text-earth-500 italic">01</div>
                  <div className="text-sm font-medium tracking-widest">
                     伝統的なクレオール料理の現代的解釈
                  </div>
               </div>
               <div className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-sm border border-forest-900/5">
                  <div className="text-2xl font-serif font-black text-earth-500 italic">02</div>
                  <div className="text-sm font-medium tracking-widest">
                     自家製ジャムと焼きたてパンの朝食
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-forest-900 relative overflow-hidden">
        <div className="absolute inset-0">
           <img src="https://picsum.photos/seed/forest-night/1920/600" className="w-full h-full object-cover opacity-30" referrerPolicy="no-referrer" alt="Nature night" />
           <div className="absolute inset-0 bg-forest-900/80" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center text-cream-100">
           <motion.div
             animate={{ rotate: [0, 5, -5, 0] }}
             transition={{ duration: 4, repeat: Infinity }}
             className="text-earth-500 mb-10"
           >
             <Bug size={64} />
           </motion.div>
           <h2 className="text-5xl md:text-8xl font-serif font-black mb-10 leading-none italic tracking-tighter">
             アマゾンの鼓動を感じる準備は<br/>できていますか？
           </h2>
           <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-cream-100 text-forest-900 px-16 py-6 rounded-full font-black text-lg tracking-[0.2em] uppercase shadow-2xl flex items-center gap-6 group"
           >
             <Bug className="group-hover:rotate-12 transition-transform" />
             {CONTENT.cta.book}
             <div className="w-10 h-10 rounded-full bg-forest-900 text-cream-100 flex items-center justify-center group-hover:bg-earth-500 transition-all">
                <ChevronRight />
             </div>
           </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest-900 text-cream-100 pt-24 pb-12 border-t border-cream-100/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-16 mb-24">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <BugEffect className="w-8 h-8 text-earth-500" />
                <span className="text-2xl font-serif font-black tracking-tighter uppercase">{CONTENT.lodgeName}</span>
              </div>
              <p className="text-cream-100/50 max-w-sm leading-relaxed tracking-widest mb-8">
                フランス領ギアナの野生に根ざし、自然との真の繋がりを提供します。
                私たちの旅は、森を守り、その美しさを次世代へ繋ぐことから始まります。
              </p>
              <div className="flex gap-6">
                 {/* Social links placeholder */}
                 <div className="w-10 h-10 rounded-full border border-cream-100/10 flex items-center justify-center hover:bg-earth-500 transition-colors cursor-pointer">
                    <span className="text-xs font-bold italic">Ig</span>
                 </div>
                 <div className="w-10 h-10 rounded-full border border-cream-100/10 flex items-center justify-center hover:bg-earth-500 transition-colors cursor-pointer">
                    <span className="text-xs font-bold italic">Fb</span>
                 </div>
              </div>
            </div>
            
            <div>
              <h5 className="font-serif font-bold text-lg mb-8 italic">Quick Links</h5>
              <ul className="space-y-4 text-cream-100/50 tracking-widest text-sm">
                {CONTENT.nav.map(item => (
                  <li key={item} className="hover:text-cream-100 transition-colors cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-serif font-bold text-lg mb-8 italic">Contact</h5>
              <p className="text-cream-100/50 text-sm leading-loose tracking-widest">
                Roura - Kaw Marsh Area<br />
                French Guiana<br />
                <span className="block mt-4 text-cream-100">info@amazonenature.com</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-cream-100/5 grayscale opacity-30 gap-8">
            <p className="text-[10px] tracking-[0.5em] uppercase font-bold">
               © 2026 {CONTENT.lodgeName}. Crafted with silence.
            </p>
            <div className="flex gap-8 text-[10px] tracking-[0.2em] font-medium">
               <span>PRIVACY POLICY</span>
               <span>TERMS OF SERVICE</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
