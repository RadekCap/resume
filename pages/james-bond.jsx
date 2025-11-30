import React, { useState, useEffect } from 'react';
import { Crosshair, Briefcase, FileText, Globe, Lock, Wifi, Watch, Shield, Radio, Target, Search } from 'lucide-react';

// --- Assets & Styles ---
// Gun Barrel Transition Component
const GunBarrelIntro = ({ onComplete }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    setTimeout(() => setStage(1), 100); // Start moving
    setTimeout(() => setStage(2), 2000); // Blood/Red fade
    setTimeout(() => {
        onComplete();
    }, 2500); 
  }, [onComplete]);

  if (stage === 3) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500 ${stage === 2 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className={`relative w-full h-full overflow-hidden transition-all duration-[2000ms] ease-in-out ${stage >= 1 ? 'scale-100' : 'scale-150'}`}>
         {/* The Barrel Circles */}
         <div className="absolute inset-0 bg-white" style={{ clipPath: 'circle(15% at 50% 50%)' }}></div>
         <div className="absolute inset-0 bg-black" style={{ clipPath: 'path("M 0 0 h 100 v 100 h -100 Z M 50 50 m -15 0 a 15 15 0 1 0 30 0 a 15 15 0 1 0 -30 0")' }}>
             {/* Rifling Lines */}
             {[...Array(24)].map((_, i) => (
                 <div 
                    key={i} 
                    className="absolute top-1/2 left-1/2 w-[200vw] h-1 bg-gray-900 origin-left"
                    style={{ transform: `rotate(${i * 15}deg) translateX(15vw)` }}
                 ></div>
             ))}
         </div>
      </div>
      {/* Red Overlay for the 'shot' */}
      <div className={`absolute inset-0 bg-red-900 mix-blend-multiply transition-transform duration-500 ease-out ${stage === 2 ? 'translate-y-0' : '-translate-y-full'}`}></div>
    </div>
  );
};

// --- Data: MI6 Archives ---
const RESUME_DATA = {
  header: {
    name: "BOND... JAMES BOND (NO, IT'S RADOSLAV CAP)",
    codename: "AGENT 00-SQE",
    status: "ACTIVE DUTY",
    location: "STATION B (BRNO)",
    clearance: "TOP SECRET // FOR YOUR EYES ONLY"
  },
  gadgets: [ // Skills
    { name: "K8s Watch Laser", type: "OFFENSIVE", level: "95%", icon: <Watch className="text-yellow-600" /> },
    { name: "Aston Martin (OpenShift)", type: "TRANSPORT", level: "90%", icon: <Globe className="text-blue-500" /> },
    { name: "Walther PPK (Red Hat)", type: "SIDEARM", level: "92%", icon: <Crosshair className="text-red-600" /> },
    { name: "Decoder Ring (C#)", type: "CIPHER", level: "88%", icon: <Lock className="text-gray-400" /> },
    { name: "Skyfall Uplink (Azure)", type: "COMMS", level: "85%", icon: <Wifi className="text-sky-500" /> },
    { name: "Explosive Pen (Agile)", type: "TACTICAL", level: "90%", icon: <Briefcase className="text-yellow-500" /> }
  ],
  missions: [ // Experience
    {
      year: "2025 - PRESENT",
      code: "OPERATION: RED STORM",
      role: "Commander (Senior SQE)",
      location: "RED HAT HQ",
      briefing: "Managing Advanced Cluster Management protocols. Orchestrating global defense networks against bugs. Maintaining the integrity of the fleet.",
      status: "ONGOING",
      icon: <Target className="w-6 h-6 text-red-600" />
    },
    {
      year: "2023 - 2025",
      code: "OPERATION: JAVA SOLSTICE",
      role: "Cryptographer",
      location: "OPENJDK BUNKER",
      briefing: "Sustaining Engineering. Deep cover analysis of the Java Runtime Environment. Neutralizing critical vulnerabilities before they compromise the system.",
      status: "COMPLETED",
      icon: <Search className="w-6 h-6 text-yellow-600" />
    },
    {
      year: "2019 - 2023",
      code: "OPERATION: CROSSING",
      role: "The Defector",
      location: "RED HAT OUTPOST",
      briefing: "A strategic pivot from the .NET Syndicate to the Open Source Alliance. QA for container vessels.",
      status: "COMPLETED",
      icon: <Shield className="w-6 h-6 text-gray-500" />
    },
    {
      year: "2016 - 2018",
      code: "OPERATION: SKYFALL",
      role: "Q-Branch Specialist",
      location: "KENTICO TOWER",
      briefing: "DevOps Specialist. Monitoring Azure satellite uplinks. Deploying automated countermeasures.",
      status: "COMPLETED",
      icon: <Radio className="w-6 h-6 text-blue-500" />
    },
    {
      year: "2013 - 2015",
      code: "OPERATION: SPECTRE",
      role: "Squad Leader",
      location: "IDOKLAD FRONT",
      briefing: "Scrum Master. Leading the resistance against chaotic codebases. Securing the product delivery timeline.",
      status: "COMPLETED",
      icon: <FileText className="w-6 h-6 text-gray-400" />
    }
  ]
};

// --- Components ---

const MissionFolder = ({ mission, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6 relative group perspective-1000">
      {/* Folder Tab */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer bg-[#f5f0e6] border-2 border-[#b8a992] p-4 relative shadow-lg transform transition-transform hover:-translate-y-1 z-10"
      >
        {/* Paper Texture Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-50 pointer-events-none"></div>
        
        {/* Stamp */}
        <div className="absolute top-2 right-2 border-4 border-red-800 text-red-800 opacity-30 font-bold text-xs p-1 transform -rotate-12 mask-stamp">
          {mission.status}
        </div>

        <div className="flex items-center justify-between font-serif text-[#2a2a2a]">
          <div className="flex items-center gap-4">
            <div className="bg-black text-white p-2 rounded-full">
              {mission.icon}
            </div>
            <div>
              <h3 className="font-bold text-lg tracking-widest uppercase">{mission.code}</h3>
              <div className="text-sm italic text-gray-600">{mission.role} // {mission.year}</div>
            </div>
          </div>
          <div className="text-xs font-mono text-gray-500 hidden md:block">
            REF: 00{7 + index}
          </div>
        </div>
      </div>

      {/* Hidden Briefing Content (Paper sliding out) */}
      <div className={`bg-white border-x-2 border-b-2 border-[#b8a992] p-6 shadow-inner mx-2 transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <h4 className="font-mono text-xs text-red-800 mb-2 uppercase tracking-widest">Mission Briefing:</h4>
        <p className="font-serif text-gray-800 leading-relaxed text-lg">
          "{mission.briefing}"
        </p>
        <div className="mt-4 text-xs font-mono text-gray-400 flex items-center gap-2">
          <Globe size={12} />
          LOCATION: {mission.location}
        </div>
      </div>
    </div>
  );
};

const GadgetCard = ({ gadget }) => (
  <div className="bg-black border border-gray-800 p-4 flex items-center gap-4 group hover:border-yellow-600 transition-colors">
    <div className="text-gray-400 group-hover:text-yellow-500 transition-colors">
      {gadget.icon}
    </div>
    <div className="flex-1">
      <div className="flex justify-between text-xs font-mono text-gray-500 mb-1">
        <span className="uppercase tracking-widest text-yellow-600">{gadget.type}</span>
        <span>{gadget.level} EFFICIENCY</span>
      </div>
      <div className="font-serif text-white text-lg">
        {gadget.name}
      </div>
    </div>
  </div>
);

// --- Main Application ---
export default function JamesBondResume() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-gray-200 font-sans selection:bg-yellow-900 selection:text-white pb-12 overflow-x-hidden">
      
      {!introComplete && <GunBarrelIntro onComplete={() => setIntroComplete(true)} />}

      {/* Fonts Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-mono { font-family: 'Space Mono', monospace; }
        .mask-stamp { mask-image: url('https://www.transparenttextures.com/patterns/grunge-wall.png'); }
      `}</style>

      {/* Top Bar / Navbar */}
      <nav className="bg-black border-b border-gray-800 p-4 flex justify-between items-center sticky top-0 z-40">
        <div className="font-mono text-xs tracking-[0.2em] text-gray-500">
          MI6 PERSONNEL FILES
        </div>
        <div className="text-white font-serif font-bold tracking-widest text-xl">
          007
        </div>
        <div className="font-mono text-xs tracking-[0.2em] text-red-600 animate-pulse">
          TOP SECRET
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-12">
        
        {/* Header Section */}
        <header className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
          <div className="relative inline-block bg-[#1a1a1a] px-8">
            <h1 className="font-serif text-4xl md:text-6xl text-white mb-2">
              CONFIDENTIAL
            </h1>
            <h2 className="font-mono text-yellow-600 tracking-widest text-sm uppercase">
              Subject: {RESUME_DATA.header.name}
            </h2>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono text-gray-400 border-y border-gray-800 py-4 max-w-2xl mx-auto">
             <div>CODENAME: <span className="text-white">{RESUME_DATA.header.codename}</span></div>
             <div>STATUS: <span className="text-white">{RESUME_DATA.header.status}</span></div>
             <div>LOC: <span className="text-white">{RESUME_DATA.header.location}</span></div>
          </div>
        </header>

        <div className="grid md:grid-cols-[1fr_300px] gap-12">
          
          {/* Left Column: Missions */}
          <section>
             <h3 className="font-serif text-2xl text-white mb-8 border-l-4 border-red-800 pl-4 flex items-center gap-2">
               MISSION HISTORY
             </h3>
             
             {RESUME_DATA.missions.map((mission, idx) => (
               <MissionFolder key={idx} mission={mission} index={idx} />
             ))}
          </section>

          {/* Right Column: Q-Branch */}
          <aside className="space-y-12">
            
            {/* Gadgets */}
            <div>
              <h3 className="font-serif text-xl text-white mb-6 border-b border-gray-800 pb-2">
                Q-BRANCH ISSUE
              </h3>
              <div className="space-y-4">
                {RESUME_DATA.gadgets.map((gadget, idx) => (
                  <GadgetCard key={idx} gadget={gadget} />
                ))}
              </div>
            </div>

            {/* Licences */}
            <div className="bg-[#f5f0e6] text-[#2a2a2a] p-6 shadow-xl relative transform rotate-1">
              <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full border-2 border-red-800 flex items-center justify-center text-[10px] font-bold text-red-800 transform rotate-12 bg-[#f5f0e6]">
                AUTH
              </div>
              <h3 className="font-serif font-bold text-lg mb-4 border-b border-black pb-1">
                LICENCE TO KILL (BUGS)
              </h3>
              <ul className="font-mono text-xs space-y-2">
                <li className="flex justify-between">
                  <span>RH SPECIALIST</span>
                  <span className="font-bold">APPROVED</span>
                </li>
                <li className="flex justify-between">
                  <span>RHCSA RAPID</span>
                  <span className="font-bold">APPROVED</span>
                </li>
                <li className="flex justify-between">
                  <span>AI/ML DEPLOY</span>
                  <span className="font-bold">APPROVED</span>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="text-center">
              <a 
                href="https://www.linkedin.com/in/radoslavcap" 
                target="_blank" 
                rel="noreferrer"
                className="inline-block border border-yellow-600 text-yellow-600 px-8 py-3 font-mono text-xs tracking-widest hover:bg-yellow-600 hover:text-black transition-all"
              >
                ESTABLISH COMMS
              </a>
            </div>

          </aside>
        </div>

      </main>
    </div>
  );
}