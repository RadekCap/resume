import React, { useState, useEffect } from 'react';
import { Brain, Dna, Zap, Shield, Users, Activity, Globe, Hexagon, Fingerprint, ChevronRight } from 'lucide-react';

// --- Assets & Styles ---
const CerebroBackground = () => (
  <div className="fixed inset-0 bg-[#050b14] pointer-events-none z-0 overflow-hidden">
    {/* Cerebro Globe Lines */}
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-blue-500/30 rounded-full animate-[spin_60s_linear_infinite]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-400/20 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-blue-300/10 rounded-full" />
    </div>
    {/* Grid Floor */}
    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[linear-gradient(rgba(0,100,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,100,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px] [transform:perspective(500px)_rotateX(60deg)] origin-bottom" />
  </div>
);

// --- Data: Mutant Registry ---
const RESUME_DATA = {
  header: {
    name: "RADOSLAV 'ARCHITECT' CAP",
    classification: "OMEGA LEVEL ENGINEER",
    affiliation: "X-FORCE / RED HAT DIV",
    powerSet: "TECHNOPATHY & SWARM CONTROL",
    location: "GENOSHA (BRNO SECTOR)"
  },
  xGenes: [ // Skills
    { name: "KUBERNETES", alias: "MULTIPLE MAN", level: 95, icon: <Users className="text-blue-400" /> },
    { name: "OPENSHIFT", alias: "GATEWAY", level: 90, icon: <Hexagon className="text-blue-400" /> },
    { name: "RED HAT LINUX", alias: "BEAST MODE", level: 92, icon: <Fingerprint className="text-blue-400" /> },
    { name: "AZURE CLOUD", alias: "STORM FRONT", level: 85, icon: <Zap className="text-yellow-400" /> },
    { name: "C# / .NET", alias: "CYPHER", level: 88, icon: <Activity className="text-blue-400" /> },
    { name: "AGILE SCRUM", alias: "TELEPATHY", level: 90, icon: <Brain className="text-purple-400" /> }
  ],
  missions: [ // Experience
    {
      year: "2025 - PRESENT",
      title: "THE INSTITUTE (RED HAT)",
      role: "HEADMASTER OF CLUSTERS",
      desc: "Advanced Cluster Management. Coordinating the defense of the global mutant network. Ensuring stability of the production Cerebro units.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      year: "2023 - 2025",
      title: "DANGER ROOM OPS (OPENJDK)",
      role: "CORE LOGIC SENTINEL",
      desc: "Sustaining Engineering. Analyzing the genetic code of the Java Runtime. Neutralizing bugs before they adapt.",
      icon: <Dna className="w-6 h-6" />
    },
    {
      year: "2019 - 2023",
      title: "THE TRANSFORMATION",
      role: "GENETIC SHIFT",
      desc: "Evolution from the .NET Brotherhood to the Open Source X-Men. Managing container transport for the resistance.",
      icon: <Activity className="w-6 h-6" />
    },
    {
      year: "2016 - 2018",
      title: "CLOUD SECTOR",
      role: "WEATHER CONTROL (DEVOPS)",
      desc: "DevOps Specialist. Controlling the Azure elements. Scripting automated Blackbird deployments.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      year: "2013 - 2015",
      title: "SQUAD LEADER",
      role: "TACTICAL FIELD LEADER",
      desc: "Scrum Master. Leading the team through chaotic missions. Ensuring velocity and focus against the chaos.",
      icon: <Brain className="w-6 h-6" />
    }
  ]
};

// --- Components ---

const MutantGene = ({ gene }) => (
  <div className="relative bg-blue-950/30 border border-blue-500/30 p-4 rounded-lg group hover:bg-blue-900/40 hover:border-blue-400 transition-all duration-300">
    <div className="absolute -top-3 left-4 bg-[#050b14] px-2 text-[10px] text-blue-400 font-bold tracking-widest uppercase">
      X-Gene: {gene.alias}
    </div>
    
    <div className="flex items-center gap-4 mb-3">
      <div className="p-2 bg-blue-900/50 rounded-full border border-blue-400/50 group-hover:scale-110 transition-transform text-white">
        {gene.icon}
      </div>
      <div className="flex-1">
        <div className="text-sm font-bold text-white tracking-wide">{gene.name}</div>
        <div className="text-xs text-blue-300 opacity-70">Power Level: {gene.level}/100</div>
      </div>
    </div>

    {/* DNA Bar */}
    <div className="h-2 w-full bg-blue-900/30 rounded-full overflow-hidden flex gap-0.5">
      {[...Array(10)].map((_, i) => (
        <div 
          key={i}
          className={`h-full w-full rounded-sm transition-all duration-500 ${i < gene.level / 10 ? 'bg-blue-500 shadow-[0_0_10px_#3b82f6]' : 'bg-transparent'}`}
          style={{ transitionDelay: `${i * 50}ms` }}
        />
      ))}
    </div>
  </div>
);

const MissionFile = ({ mission, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative pl-8 pb-12 border-l-2 border-blue-500/20 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Node Marker */}
      <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-blue-500 bg-[#050b14] transition-all duration-300 ${isHovered ? 'bg-blue-500 shadow-[0_0_15px_#3b82f6]' : ''}`} />

      <div className="bg-blue-950/20 border border-blue-500/30 p-6 rounded-br-3xl hover:border-blue-400 hover:bg-blue-900/20 transition-all duration-300 backdrop-blur-sm">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold text-white tracking-widest flex items-center gap-2">
              {mission.title}
            </h3>
            <div className="text-yellow-400 text-sm font-bold tracking-wider mb-1">
              CODENAME: {mission.role}
            </div>
          </div>
          <span className="text-blue-300 text-xs font-mono border border-blue-500/50 px-2 py-1 rounded">
            {mission.year}
          </span>
        </div>

        <p className="text-blue-100/80 text-sm leading-relaxed">
          {mission.desc}
        </p>

        {/* Hover Hologram Effect */}
        <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent pointer-events-none transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      </div>
    </div>
  );
};

// --- Main Application ---
export default function XMenResume() {
  const [scanComplete, setScanComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setScanComplete(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#050b14] text-blue-100 font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden relative">
      <CerebroBackground />

      {/* Intro Scan Overlay */}
      {!scanComplete && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050b14]">
          <div className="w-64 h-64 border-4 border-blue-500 rounded-full animate-ping absolute opacity-20" />
          <div className="w-48 h-48 border-2 border-blue-400 rounded-full flex items-center justify-center relative">
            <Fingerprint className="w-24 h-24 text-blue-500 animate-pulse" />
            <div className="absolute inset-0 border-t-4 border-blue-500 rounded-full animate-spin" />
          </div>
          <div className="mt-8 text-blue-400 font-mono tracking-[0.3em] animate-pulse">
            CALIBRATING CEREBRO...
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={`relative z-10 max-w-6xl mx-auto px-6 py-12 transition-opacity duration-1000 ${scanComplete ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Header */}
        <header className="mb-16 border-b border-blue-500/30 pb-8 flex flex-col md:flex-row items-center md:items-end justify-between gap-6 text-center md:text-left">
          <div>
            <div className="text-blue-500 text-xs font-bold tracking-[0.3em] mb-2 uppercase">Subject Identification</div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-2 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              {RESUME_DATA.header.name}
            </h1>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm font-bold text-yellow-400 tracking-widest">
              <span className="flex items-center gap-1"><Shield size={14} /> {RESUME_DATA.header.classification}</span>
              <span className="flex items-center gap-1"><Activity size={14} /> {RESUME_DATA.header.affiliation}</span>
            </div>
          </div>
          
          <div className="hidden md:block text-right">
             <div className="w-32 h-32 border-2 border-blue-500/50 rounded-full relative overflow-hidden mx-auto bg-blue-900/20 group">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Radoslav&backgroundColor=050b14&clothing=blazerAndShirt&eyes=surprised" 
                  alt="Mutant Profile"
                  className="w-full h-full object-cover filter brightness-125 sepia-[.5] hue-rotate-[190deg]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,100,255,0.2)_50%)] bg-[length:100%_4px]" />
             </div>
             <div className="text-[10px] text-blue-400 mt-2 font-mono">MATCH: 100%</div>
          </div>
        </header>

        <div className="grid md:grid-cols-[1fr_350px] gap-12">
          
          {/* Left Column: Missions */}
          <main>
             <div className="flex items-center gap-3 mb-8">
               <Globe className="text-blue-500 animate-spin-slow" />
               <h2 className="text-2xl font-bold text-white tracking-widest uppercase">Field Missions</h2>
             </div>
             
             {RESUME_DATA.missions.map((mission, index) => (
               <MissionFile key={index} mission={mission} index={index} />
             ))}
          </main>

          {/* Right Column: X-Genes */}
          <aside className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Dna className="text-yellow-400" />
                <h2 className="text-2xl font-bold text-white tracking-widest uppercase">X-Gene Profile</h2>
              </div>
              
              <div className="space-y-4">
                {RESUME_DATA.xGenes.map((gene, index) => (
                  <MutantGene key={index} gene={gene} />
                ))}
              </div>
            </div>

            {/* Certifications Card */}
            <div className="bg-gradient-to-br from-blue-900/40 to-black border border-blue-500/40 p-6 rounded-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-2 opacity-20">
                 <Shield size={64} />
               </div>
               <h3 className="text-yellow-400 font-bold mb-4 tracking-widest uppercase text-sm">Clearance Levels</h3>
               <ul className="space-y-3 text-xs font-mono text-blue-200">
                 <li className="flex justify-between border-b border-blue-500/20 pb-1">
                   <span>RED HAT SPECIALIST</span>
                   <span className="text-green-400">GRANTED</span>
                 </li>
                 <li className="flex justify-between border-b border-blue-500/20 pb-1">
                   <span>RHCSA RAPID</span>
                   <span className="text-green-400">GRANTED</span>
                 </li>
                 <li className="flex justify-between">
                   <span>AI/ML PROTOCOLS</span>
                   <span className="text-green-400">GRANTED</span>
                 </li>
               </ul>
            </div>
            
            <div className="text-center mt-8">
               <a 
                 href="https://www.linkedin.com/in/radoslavcap" 
                 target="_blank" 
                 rel="noreferrer"
                 className="inline-flex items-center gap-2 bg-yellow-500 text-black font-bold py-3 px-8 rounded-full hover:bg-yellow-400 hover:scale-105 transition-all shadow-[0_0_20px_rgba(234,179,8,0.4)] uppercase tracking-wider text-sm"
               >
                 <Brain size={16} /> Contact Cerebro
               </a>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}