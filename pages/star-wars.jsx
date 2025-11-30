import React, { useState, useEffect } from 'react';
import { Rocket, Star, Zap, Globe, Shield, Radio, Terminal, ChevronRight, Anchor, Cpu, Disc } from 'lucide-react';

// --- Assets & Styles ---
// Starfield background component
const StarField = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-black">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full opacity-80 animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 3 + 2}s`
          }}
        />
      ))}
    </div>
  );
};

// --- Data: The Galactic Archives ---
const RESUME_DATA = {
  header: {
    name: "ADMIRAL RADOSLAV",
    title: "COMMANDER OF THE CLUSTER FLEET",
    affiliation: "THE RED ALLIANCE (RED HAT)",
    credits: "20+ GALACTIC CYCLES",
    intro: "A veteran of the Code Wars. From the Old Republic of C++ to the modern era of Cloud City. Currently station at Red Squadron Command, ensuring the integrity of the fleet."
  },
  skills: [
    { name: "Force Deployment (K8s)", level: 95, color: "text-blue-400", saber: "bg-blue-500 shadow-[0_0_10px_#3b82f6]" },
    { name: "OpenShift Maneuvers", level: 90, color: "text-red-500", saber: "bg-red-600 shadow-[0_0_10px_#dc2626]" },
    { name: "Red Hat Protocol", level: 92, color: "text-red-500", saber: "bg-red-600 shadow-[0_0_10px_#dc2626]" },
    { name: "Cloud City Ops (Azure)", level: 85, color: "text-cyan-400", saber: "bg-cyan-400 shadow-[0_0_10px_#22d3ee]" },
    { name: "Droid Speak (C#)", level: 88, color: "text-green-400", saber: "bg-green-500 shadow-[0_0_10px_#22c55e]" },
    { name: "Jedi Mind Tricks (Agile)", level: 90, color: "text-yellow-400", saber: "bg-yellow-400 shadow-[0_0_10px_#facc15]" }
  ],
  missions: [
    {
      year: "2025 - PRESENT",
      role: "Red Leader (Senior SQE)",
      system: "RED SQUADRON HQ",
      desc: "Advanced Cluster Management. Coordinating the fleet (Kubernetes) to ensure safety across the galaxy. Managing defense systems against bugs and instability.",
      icon: <Rocket className="w-6 h-6" />,
      faction: "rebel"
    },
    {
      year: "2023 - 2025",
      role: "Kyber Crystal Engineer",
      system: "CORE SYSTEMS (OpenJDK)",
      desc: "Sustaining the power source. Working on the Java Runtime Environment to ensure the hyperdrives don't fail during jump to lightspeed.",
      icon: <Zap className="w-6 h-6" />,
      faction: "jedi"
    },
    {
      year: "2019 - 2023",
      role: "Joining the Alliance",
      system: "THE CROSSING",
      desc: "Defecting from the .NET Empire to the Open Source Alliance. Quality Assurance for container transport vessels.",
      icon: <Shield className="w-6 h-6" />,
      faction: "rebel"
    },
    {
      year: "2016 - 2018",
      role: "Cloud City Administrator",
      system: "BESPIN (Kentico)",
      desc: "DevOps Specialist. Monitoring Azure cloud tibanna gas platforms. Scripting automated droid deployments.",
      icon: <Globe className="w-6 h-6" />,
      faction: "empire"
    },
    {
      year: "2013 - 2015",
      role: "Squad Commander",
      system: "IDOKLAD OUTPOST",
      desc: "Scrum Master. Leading a squadron of developers. clearing the spaghetti-code asteroid fields. Maintaining velocity.",
      icon: <Radio className="w-6 h-6" />,
      faction: "rebel"
    },
    {
      year: "2003 - 2012",
      role: "Old Republic Era",
      system: "EARLY SECTORS",
      desc: "Ancient archives. C++, MFC, and the early days of .NET. Building the foundations of the current technology stack.",
      icon: <Terminal className="w-6 h-6" />,
      faction: "rebel"
    }
  ]
};

// --- Components ---

const LightsaberBar = ({ skill }) => (
  <div className="mb-4 group">
    <div className="flex justify-between text-xs font-bold tracking-widest mb-1 font-mono text-gray-400">
      <span className="group-hover:text-white transition-colors uppercase">{skill.name}</span>
      <span>{skill.level}%</span>
    </div>
    <div className="h-3 bg-gray-800 rounded-full border border-gray-700 relative overflow-hidden flex items-center px-1">
      {/* Handle */}
      <div className="absolute left-0 top-0 bottom-0 w-4 bg-gray-400 border-r-2 border-gray-600 z-10"></div>
      {/* Blade */}
      <div 
        className={`h-1.5 rounded-r-full transition-all duration-1000 ease-out group-hover:brightness-150 ml-3 ${skill.saber}`}
        style={{ width: `${skill.level}%` }}
      />
    </div>
  </div>
);

const HoloCard = ({ mission, index }) => {
  const isRebel = mission.faction === 'rebel';
  const borderColor = isRebel ? 'border-red-500/50' : 'border-blue-400/50';
  const textColor = isRebel ? 'text-red-400' : 'text-blue-400';

  return (
    <div className="relative pl-8 pb-12 group">
      {/* Timeline Line (Laser Beam) */}
      <div className="absolute left-[15px] top-8 bottom-0 w-0.5 bg-gradient-to-b from-gray-700 to-transparent group-hover:from-yellow-500 group-hover:to-transparent transition-colors"></div>

      {/* Planet Icon */}
      <div 
        className={`absolute left-0 top-0 w-8 h-8 rounded-full border-2 bg-black flex items-center justify-center z-10 
        ${borderColor} shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:scale-125 transition-transform duration-300`}
      >
        <div className={textColor}>{mission.icon}</div>
      </div>

      {/* Content Card (Hologram Style) */}
      <div 
        className={`bg-black/80 border ${borderColor} p-6 rounded-lg backdrop-blur-sm
        shadow-[0_0_20px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(255,0,0,0.1)] transition-all
        relative overflow-hidden`}
      >
        {/* Hologram Scanlines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 pointer-events-none bg-[length:100%_4px,3px_100%]"></div>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between md:items-center mb-2">
            <h3 className={`text-xl font-bold font-mono uppercase tracking-wider ${textColor}`}>
              {mission.role}
            </h3>
            <span className="text-yellow-500 font-mono text-sm border border-yellow-500/30 px-2 py-1 rounded">
              {mission.year}
            </span>
          </div>
          
          <div className="text-gray-400 text-sm font-mono mb-3 flex items-center gap-2 uppercase">
            <Anchor className="w-4 h-4" />
            System: {mission.system}
          </div>

          <p className="text-gray-300 font-sans leading-relaxed opacity-90">
            {mission.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

// --- Main Application ---
export default function StarWarsResume() {
  const [crawlFinished, setCrawlFinished] = useState(false);

  useEffect(() => {
    // Fast forward crawl for better UX after 3s or mostly just skip it for resume readability
    const timer = setTimeout(() => setCrawlFinished(true), 500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-gray-200 font-sans selection:bg-yellow-500 selection:text-black overflow-x-hidden">
      {/* Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&display=swap');
        .font-orbitron { font-family: 'Orbitron', sans-serif; }
        .font-mono { font-family: 'Share Tech Mono', monospace; }
      `}</style>

      <StarField />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-[1fr_350px] gap-12">
        
        {/* Left Column: Mission Log */}
        <main>
          {/* Header */}
          <header className="mb-16 border-b border-gray-800 pb-8 relative">
            <div className="text-yellow-400 font-orbitron text-center md:text-left">
              <div className="text-sm tracking-[0.5em] mb-2 uppercase opacity-80">Career Log of</div>
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">
                {RESUME_DATA.header.name}
              </h1>
              <h2 className="text-xl md:text-2xl text-red-500 font-mono flex items-center gap-2 mb-6">
                <Star className="fill-current" size={20} />
                {RESUME_DATA.header.title}
                <Star className="fill-current" size={20} />
              </h2>
            </div>
            
            {/* Opening Crawl Style Intro Box */}
            <div className="bg-transparent border-l-4 border-yellow-500 pl-6 py-2">
              <p className="font-mono text-yellow-100/80 text-lg leading-relaxed max-w-2xl">
                "{RESUME_DATA.header.intro}"
              </p>
            </div>
          </header>

          {/* Timeline */}
          <div>
            <h3 className="font-orbitron text-2xl text-gray-400 mb-8 flex items-center gap-2">
              <ChevronRight className="text-yellow-500" />
              MISSION LOG
            </h3>
            
            {RESUME_DATA.missions.map((mission, index) => (
              <HoloCard key={index} mission={mission} index={index} />
            ))}
          </div>
          
          <div className="text-center py-8 font-mono text-xs text-gray-600 tracking-widest uppercase">
            // End of Transmission //
          </div>
        </main>

        {/* Right Column: Ship Systems */}
        <aside className="space-y-12">
          
          {/* Avatar / Profile Hologram */}
          <div className="relative w-full aspect-square max-w-[250px] mx-auto border-2 border-blue-500/30 rounded-full p-2 bg-blue-900/10">
            <div className="w-full h-full rounded-full overflow-hidden relative">
              <img 
                src="https://api.dicebear.com/7.x/bottts/svg?seed=Radoslav&backgroundColor=000000" 
                alt="Hologram" 
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity filter hue-rotate-180 contrast-125"
              />
              {/* Holo Lines */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,100,255,0.2)_50%)] bg-[length:100%_4px] pointer-events-none"></div>
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-black border border-blue-500 text-blue-400 px-4 py-1 text-xs font-mono rounded uppercase whitespace-nowrap">
              Hologram Transmission
            </div>
          </div>

          {/* Skills Panel (Lightsabers) */}
          <div className="bg-gray-900/50 border border-gray-700 p-6 rounded-xl backdrop-blur-sm">
            <h3 className="font-orbitron text-xl text-yellow-500 mb-6 flex items-center gap-2 border-b border-gray-700 pb-2">
              <Zap className="w-5 h-5" />
              FORCE ABILITIES
            </h3>
            {RESUME_DATA.skills.map((skill, index) => (
              <LightsaberBar key={index} skill={skill} />
            ))}
          </div>

          {/* Data Pad (Certs) */}
          <div className="bg-gray-900/50 border border-gray-700 p-6 rounded-xl backdrop-blur-sm relative overflow-hidden">
             {/* Tech decoration */}
             <div className="absolute top-2 right-2 flex gap-1">
               <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
               <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
             </div>

             <h3 className="font-orbitron text-xl text-red-500 mb-4 flex items-center gap-2">
               <Disc className="w-5 h-5" />
               DATA ARCHIVES
             </h3>
             <ul className="space-y-4 font-mono text-sm text-gray-400">
               <li className="flex items-start gap-3">
                 <span className="text-yellow-500 mt-1">::</span>
                 <span>Red Hat Certified Specialist (OpenShift)</span>
               </li>
               <li className="flex items-start gap-3">
                 <span className="text-yellow-500 mt-1">::</span>
                 <span>RHCSA Rapid Track (Sector 199)</span>
               </li>
               <li className="flex items-start gap-3">
                 <span className="text-yellow-500 mt-1">::</span>
                 <span>AI/ML Application Deployment</span>
               </li>
             </ul>
          </div>

          {/* Contact Button */}
          <div className="text-center">
            <a 
              href="https://www.linkedin.com/in/radoslavcap" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-yellow-500 text-black font-orbitron font-bold py-3 px-8 rounded hover:bg-yellow-400 transition-colors shadow-[0_0_20px_rgba(234,179,8,0.3)] uppercase tracking-wider"
            >
              Open Comms Channel
            </a>
          </div>

        </aside>
      </div>
    </div>
  );
}