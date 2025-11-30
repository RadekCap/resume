import React, { useState, useEffect } from 'react';
import { Map, Scroll, Sword, Crown, Mountain, Castle, Shield, Feather, Gem, Sparkles, BookOpen, Compass } from 'lucide-react';

// --- Assets & Styles ---
// We use a CSS-only parchment effect to avoid external image dependencies
const ParchmentBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0">
    <div className="absolute inset-0 bg-[#d4cdb4]" />
    <div className="absolute inset-0 opacity-30 mix-blend-multiply filter contrast-150" 
         style={{ 
           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")` 
         }} 
    />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(60,40,20,0.4)_100%)]" />
  </div>
);

// --- Data: The Fellowship of the Code ---
const RESUME_DATA = {
  header: {
    name: "RADOSLAV OF BRNO",
    title: "HIGH WARDEN OF QUALITY ASSURANCE",
    location: "THE CZECH REALMS",
    summary: "A Ranger of the Code-Thickets with 20 winters of experience. I have traversed the realms of Desktop, Web, and Mobile. Now, I stand watch at the Red Citadel, guarding the Container Clusters against the darkness."
  },
  skills: [
    { name: "Cluster Command (K8s)", level: 95, icon: <Crown size={16} /> },
    { name: "Shift Strategy (OpenShift)", level: 90, icon: <Compass size={16} /> },
    { name: "Lore of Red Hat", level: 92, icon: <BookOpen size={16} /> },
    { name: "Cloud Magic (Azure)", level: 85, icon: <Sparkles size={16} /> },
    { name: "Tongue of C#", level: 88, icon: <Scroll size={16} /> },
    { name: "The Agile Way", level: 90, icon: <Map size={16} /> }
  ],
  quests: [
    {
      year: "2025 - PRESENT",
      role: "The Architect",
      location: "THE RED CITADEL (Red Hat)",
      desc: "Guarding the Advanced Cluster Management. Orchestrating the great armies of containers. Ensuring the defenses of the production realms hold true.",
      icon: <Castle className="w-8 h-8 text-red-900" />,
      type: "major"
    },
    {
      year: "2023 - 2025",
      role: "Keeper of the Runes",
      location: "THE FORGES OF JAVA (OpenJDK)",
      desc: "Sustaining Engineering. Mending the ancient runestones (Runtime) and patching the cracks in the foundation before the bugs swarm.",
      icon: <Gem className="w-8 h-8 text-amber-700" />,
      type: "minor"
    },
    {
      year: "2019 - 2023",
      role: "The Oath to the Red Hat",
      location: "THE CROSSING",
      desc: "A pivotal journey. Leaving the .NET lands to serve the Open Source Alliance. Quality Assurance for the container vessels.",
      icon: <Mountain className="w-8 h-8 text-stone-700" />,
      type: "pivotal"
    },
    {
      year: "2016 - 2018",
      role: "The Cloud Watcher",
      location: "SPIRE OF KENTICO",
      desc: "DevOps Specialist. Watching the Azure skies for storms. Weaving spells of automated deployment.",
      icon: <Sparkles className="w-8 h-8 text-blue-800" />,
      type: "minor"
    },
    {
      year: "2013 - 2015",
      role: "Captain of the Squad",
      location: "THE FELLOWSHIP (iDoklad)",
      desc: "Scrum Master & Product Owner. Leading the company against the chaos of spaghetti code. Managing the velocity of the fellowship.",
      icon: <Shield className="w-8 h-8 text-emerald-800" />,
      type: "minor"
    },
    {
      year: "2003 - 2012",
      role: "The Origin Story",
      location: "THE SHIRE (Early Career)",
      desc: "From the alchemy of Chemistry to the forging of C++. The beginning of the long journey through the lands of software.",
      icon: <Feather className="w-8 h-8 text-amber-900" />,
      type: "origin"
    }
  ]
};

// --- Components ---

const RuneText = ({ children, className = "" }) => (
  <span className={`font-serif tracking-widest ${className}`} style={{ fontFamily: 'Cinzel, serif' }}>
    {children}
  </span>
);

const LocationMarker = ({ quest, index, isLast }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative pl-12 pb-16 group">
      {/* The Path (Dashed Line) */}
      {!isLast && (
        <div className="absolute left-[27px] top-8 bottom-0 w-1 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjEyIj48cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSI4IiBmaWxsPSIjNTc0YTM2IiBvcGFjaXR5PSIwLjUiLz48L3N2Zz4=')] opacity-60"></div>
      )}

      {/* The Map Marker Icon */}
      <div 
        className={`absolute left-0 top-0 w-14 h-14 rounded-full border-4 border-[#3c2f2f] bg-[#e6dcc3] 
        flex items-center justify-center shadow-[0_4px_6px_rgba(0,0,0,0.3)] z-10 
        transition-transform duration-300 ${isHovered ? 'scale-110 rotate-3' : ''} cursor-pointer`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {quest.icon}
      </div>

      {/* Content Scroll/Card */}
      <div 
        className={`relative bg-[#eaddcf] border-2 border-[#5c4a3d] p-6 shadow-[4px_4px_0px_rgba(60,40,20,0.2)]
        transition-all duration-300 ${isHovered ? '-translate-y-1 shadow-[8px_8px_0px_rgba(60,40,20,0.3)]' : ''}
        before:content-[''] before:absolute before:inset-[2px] before:border before:border-[#bfaea0] before:pointer-events-none`}
      >
        {/* Decorative corner flourishes */}
        <div className="absolute top-1 left-1 w-4 h-4 border-t-2 border-l-2 border-[#5c4a3d]" />
        <div className="absolute top-1 right-1 w-4 h-4 border-t-2 border-r-2 border-[#5c4a3d]" />
        <div className="absolute bottom-1 left-1 w-4 h-4 border-b-2 border-l-2 border-[#5c4a3d]" />
        <div className="absolute bottom-1 right-1 w-4 h-4 border-b-2 border-r-2 border-[#5c4a3d]" />

        <div className="flex flex-col md:flex-row justify-between md:items-center mb-3 border-b border-[#bfaea0] pb-2">
          <div>
            <h3 className="text-xl font-bold text-[#3c2f2f] font-serif tracking-wide">{quest.role}</h3>
            <div className="text-[#6b2b2b] text-sm font-semibold flex items-center gap-2">
              <Map size={14} />
              {quest.location}
            </div>
          </div>
          <div className="mt-2 md:mt-0 font-serif font-bold text-[#5c4a3d] bg-[#d4cdb4] px-3 py-1 rounded border border-[#bfaea0]">
            {quest.year}
          </div>
        </div>

        <p className="font-serif text-[#3c2f2f] leading-relaxed italic">
          "{quest.desc}"
        </p>
      </div>
    </div>
  );
};

const SkillRing = ({ skill }) => (
  <div className="flex items-center justify-between mb-3 group cursor-pointer">
    <div className="flex items-center gap-3 font-serif text-[#3c2f2f] font-bold group-hover:text-[#8b0000] transition-colors">
      <span className="text-[#8b0000] opacity-70 group-hover:opacity-100">{skill.icon}</span>
      {skill.name}
    </div>
    <div className="flex gap-1">
      {[...Array(10)].map((_, i) => (
        <div 
          key={i}
          className={`w-2 h-2 rounded-full border border-[#5c4a3d] 
          ${i < skill.level / 10 ? 'bg-[#8b0000]' : 'bg-transparent'}`}
        />
      ))}
    </div>
  </div>
);

// --- Main Application ---
export default function LotrResume() {
  return (
    <div className="min-h-screen relative text-[#2a1a1a] font-serif overflow-x-hidden selection:bg-[#8b0000] selection:text-[#eaddcf]">
      {/* Import Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&display=swap');
        .font-cinzel { font-family: 'Cinzel', serif; }
        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
      `}</style>

      <ParchmentBackground />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-20 grid md:grid-cols-[1fr_320px] gap-16">
        
        {/* Left Column: The Journey */}
        <main>
          {/* Header */}
          <header className="text-center md:text-left mb-20">
            <div className="inline-block border-b-2 border-[#8b0000] pb-2 mb-4">
               <RuneText className="text-[#5c4a3d] text-sm md:text-base font-bold">THE CHRONICLES OF</RuneText>
            </div>
            <h1 className="text-5xl md:text-7xl font-cinzel font-black text-[#2a1a1a] mb-4 tracking-tight">
              {RESUME_DATA.header.name}
            </h1>
            <h2 className="text-xl md:text-2xl font-cinzel text-[#6b2b2b] flex items-center justify-center md:justify-start gap-3 mb-6">
              <Sword className="rotate-45" size={24} />
              {RESUME_DATA.header.title}
              <Sword className="-rotate-135" size={24} />
            </h2>
            <p className="font-cormorant text-xl md:text-2xl italic leading-relaxed text-[#3c2f2f] border-l-4 border-[#8b0000] pl-6 ml-2">
              {RESUME_DATA.header.summary}
            </p>
          </header>

          {/* Map/Timeline */}
          <div className="relative pl-4">
            <h3 className="font-cinzel text-3xl text-[#2a1a1a] mb-12 border-b-2 border-[#5c4a3d] inline-block pb-2">
              The Map of The Journey
            </h3>
            
            {RESUME_DATA.quests.map((quest, index) => (
              <LocationMarker 
                key={index} 
                quest={quest} 
                index={index} 
                isLast={index === RESUME_DATA.quests.length - 1} 
              />
            ))}
            
            <div className="pl-16 pt-4">
               <div className="text-[#5c4a3d] font-cinzel text-sm tracking-widest opacity-70">
                 HERE BEGINS THE LEGEND...
               </div>
            </div>
          </div>
        </main>

        {/* Right Column: Inventory & Stats */}
        <aside className="space-y-12">
          
          {/* Avatar Frame */}
          <div className="relative w-48 h-48 mx-auto md:mx-0">
            <div className="absolute inset-0 rounded-full border-4 border-[#5c4a3d] shadow-[0_0_20px_rgba(139,0,0,0.2)] bg-[#2a1a1a]"></div>
            <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-[#bfaea0]">
              <img 
                src="https://api.dicebear.com/7.x/notionists/svg?seed=Radoslav&backgroundColor=eaddcf" 
                alt="Character Portrait" 
                className="w-full h-full object-cover sepia-[.5]"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#8b0000] text-[#eaddcf] px-4 py-1 rounded-full font-cinzel text-xs font-bold whitespace-nowrap border-2 border-[#5c4a3d] shadow-lg">
              LEVEL 20+ RANGER
            </div>
          </div>

          {/* Skills Scroll */}
          <div className="bg-[#eaddcf] p-6 rounded-lg shadow-[inset_0_0_30px_rgba(60,40,20,0.1)] border border-[#bfaea0] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-[#5c4a3d] opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-full h-2 bg-[#5c4a3d] opacity-20"></div>
            
            <h3 className="font-cinzel text-2xl text-[#2a1a1a] mb-6 flex items-center gap-2 border-b border-[#5c4a3d] pb-2">
              <Crown className="text-[#8b0000]" size={20} />
              Masteries
            </h3>
            
            <div className="space-y-2">
              {RESUME_DATA.skills.map((skill, index) => (
                <SkillRing key={index} skill={skill} />
              ))}
            </div>
          </div>

          {/* Artifacts (Certs) */}
          <div className="relative pt-8">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[#8b0000]">
              <Sparkles size={24} />
            </div>
            <h3 className="font-cinzel text-xl text-center text-[#2a1a1a] mb-6">
              Acquired Artifacts
            </h3>
            <ul className="space-y-4 font-cormorant text-lg text-[#3c2f2f] text-center">
              <li className="italic">
                "The Scroll of OpenShift Specialist"
              </li>
              <li className="italic">
                "The Rapid Track of RHCSA"
              </li>
              <li className="italic">
                "AI/ML Lore of the OpenShift"
              </li>
            </ul>
          </div>

          {/* Contact Seal */}
          <div className="text-center mt-12">
            <a 
              href="https://www.linkedin.com/in/radoslavcap" 
              target="_blank" 
              rel="noreferrer"
              className="group relative inline-block"
            >
              <div className="absolute inset-0 bg-[#8b0000] rotate-3 rounded blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-[#8b0000] text-[#eaddcf] px-8 py-3 font-cinzel font-bold border-2 border-[#5c4a3d] shadow-lg group-hover:translate-y-[-2px] transition-transform">
                SEND A RAVEN (LinkedIn)
              </div>
            </a>
          </div>

        </aside>
      </div>
    </div>
  );
}