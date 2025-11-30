import React, { useState, useEffect } from 'react';
import { Biohazard, Activity, ShieldAlert, Skull, Syringe, Database, Radio, FileWarning, HeartPulse, Siren, Lock } from 'lucide-react';

// --- Assets & Styles ---
const CRTOverlay = () => (
  <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
    {/* Scanlines */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]" />
    {/* Vignette */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.4)_100%)]" />
  </div>
);

// --- Data: The Survival Log ---
const RESUME_DATA = {
  header: {
    name: "R. CAP",
    rank: "S.T.A.R.S. ALPHA TEAM (SQE)",
    status: "FINE",
    location: "RED FACILITY (BRNO SECTOR)",
    bloodType: "RH+ (RED HAT POSITIVE)",
    id: "ID-2025-RC"
  },
  inventory: [
    { name: "K8s Antivirus", type: "VACCINE", count: "95%", icon: <Syringe className="text-blue-400" /> },
    { name: "OpenShift Key", type: "KEY ITEM", count: "90%", icon: <Lock className="text-yellow-500" /> },
    { name: "Red Hat Manual", type: "FILE", count: "92%", icon: <FileWarning className="text-red-500" /> },
    { name: "Azure Radio", type: "COMMS", count: "85%", icon: <Radio className="text-green-500" /> },
    { name: ".NET Ammo", type: "AMMO", count: "88%", icon: <Database className="text-gray-400" /> },
    { name: "Agile Herb", type: "HERB (G+R)", count: "90%", icon: <Activity className="text-green-400" /> }
  ],
  files: [
    {
      year: "2025 - PRESENT",
      title: "FILE #01: THE RED FACILITY",
      role: "Senior Containment Engineer",
      location: "RED HAT SECTOR",
      desc: "Managing Advanced Cluster Protocols. Orchestrating defense systems against system infection. Ensuring the integrity of the production bio-dome.",
      dangerLevel: "CRITICAL",
      icon: <Biohazard className="w-6 h-6 text-red-600" />
    },
    {
      year: "2023 - 2025",
      title: "FILE #02: CORE SAMPLE ANALYSIS",
      role: "Viral Code Specialist",
      location: "OPENJDK LABS",
      desc: "Sustaining Engineering. Analyzing deep-level Java code structures. Patching vulnerabilities before the outbreak spreads.",
      dangerLevel: "HIGH",
      icon: <Activity className="w-6 h-6 text-green-500" />
    },
    {
      year: "2019 - 2023",
      title: "FILE #03: THE CROSSING",
      role: "Transfer to Bio-Security",
      location: "RED HAT OUTPOST",
      desc: "Transitioning from .NET Corporation to Open Source Operations. Quality Assurance for container transport vehicles.",
      dangerLevel: "MODERATE",
      icon: <ShieldAlert className="w-6 h-6 text-yellow-500" />
    },
    {
      year: "2016 - 2018",
      title: "FILE #04: CLOUD OBSERVATION",
      role: "Outbreak Response Unit",
      location: "KENTICO TOWER",
      desc: "DevOps Specialist. Monitoring Azure containment zones. Scripting automated defense turrets and deployment protocols.",
      dangerLevel: "HIGH",
      icon: <Siren className="w-6 h-6 text-blue-500" />
    },
    {
      year: "2013 - 2015",
      title: "FILE #05: SQUAD LEADER",
      role: "Team Captain",
      location: "IDOKLAD PRECINCT",
      desc: "Leading the squad through the spaghetti-code infested streets. Managing team survival rates and project velocity.",
      dangerLevel: "EXTREME",
      icon: <Skull className="w-6 h-6 text-gray-400" />
    }
  ]
};

// --- Components ---

const EKGLine = () => (
  <div className="flex items-center gap-2 h-16 bg-black/50 border-t-2 border-b-2 border-green-900 px-4 mb-8 relative overflow-hidden">
    <div className="text-green-500 font-mono text-xs animate-pulse">HR: 72 BPM</div>
    <div className="flex-1 h-full relative">
       {/* The Line */}
       <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
         <polyline 
           points="0,32 100,32 110,10 120,54 130,32 140,32 150,32 250,32 260,10 270,54 280,32 400,32" 
           fill="none" 
           stroke="#00ff00" 
           strokeWidth="2"
           className="animate-[dash_2s_linear_infinite]"
           strokeDasharray="400"
           strokeDashoffset="400"
         />
       </svg>
    </div>
  </div>
);

const InventoryItem = ({ item }) => (
  <div className="bg-[#1a1a1a] border-2 border-[#4a4a4a] p-2 relative group hover:border-green-500 transition-colors aspect-square flex flex-col items-center justify-between cursor-pointer shadow-[inset_0_0_10px_rgba(0,0,0,0.8)]">
    <div className="absolute top-1 left-1 text-[9px] text-green-500 font-mono opacity-70">{item.type}</div>
    <div className="flex-1 flex items-center justify-center group-hover:scale-110 transition-transform">
      {item.icon}
    </div>
    <div className="w-full bg-gray-900 h-4 mt-1 border border-gray-700 relative">
      <div className="absolute inset-0 flex items-center justify-center text-[9px] font-mono text-white z-10">{item.name}</div>
      <div 
        className="h-full bg-green-700 opacity-50" 
        style={{ width: item.count }} 
      />
    </div>
    {/* Selection Corner */}
    <div className="absolute -bottom-[2px] -right-[2px] w-3 h-3 border-r-2 border-b-2 border-green-500 opacity-0 group-hover:opacity-100" />
  </div>
);

const FileDossier = ({ file }) => (
  <div className="mb-6 bg-[#0f0f0f] border-l-4 border-l-red-800 border-y border-r border-gray-800 p-4 font-mono text-gray-300 relative group hover:bg-[#151515] transition-colors">
    <div className="flex items-start justify-between mb-2">
      <h3 className="text-green-500 text-lg font-bold tracking-widest flex items-center gap-2">
        {file.icon}
        {file.title}
      </h3>
      <span className="text-xs bg-red-900/30 text-red-500 border border-red-900 px-2 py-1">
        {file.year}
      </span>
    </div>
    
    <div className="grid grid-cols-2 gap-4 text-xs text-gray-500 mb-3 border-b border-gray-800 pb-2">
      <div>LOCATION: <span className="text-gray-300">{file.location}</span></div>
      <div>ROLE: <span className="text-gray-300">{file.role}</span></div>
    </div>

    <p className="text-sm leading-relaxed text-gray-400">
      "{file.desc}"
    </p>

    {/* Danger Level Stamp */}
    <div className="absolute bottom-4 right-4 opacity-20 -rotate-12 border-2 border-red-500 text-red-500 px-2 font-bold text-xs uppercase group-hover:opacity-100 transition-opacity">
      THREAT: {file.dangerLevel}
    </div>
  </div>
);

// --- Main Application ---
export default function ResidentEvilResume() {
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setBooted(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!booted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="font-mono text-green-500 animate-pulse text-xl tracking-widest">
          LOADING SYSTEM DATA...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-green-900 selection:text-white pb-12 overflow-x-hidden">
      <CRTOverlay />
      
      {/* Styles */}
      <style>{`
        @keyframes dash {
          to { stroke-dashoffset: 0; }
        }
        @import url('https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&family=Oswald:wght@400;700&display=swap');
        .font-typewriter { font-family: 'Courier Prime', monospace; }
        .font-header { font-family: 'Oswald', sans-serif; }
      `}</style>

      {/* Top Bar */}
      <header className="bg-gradient-to-b from-[#1a1a1a] to-black border-b-4 border-gray-800 p-4 sticky top-0 z-20 shadow-lg">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-header font-bold text-gray-200 tracking-tighter uppercase text-shadow">
              Status Screen
            </h1>
            <div className="text-green-600 text-xs font-typewriter tracking-widest">
              {RESUME_DATA.header.id} // {RESUME_DATA.header.name}
            </div>
          </div>
          
          {/* Health Status */}
          <div className="hidden md:flex items-center gap-4 bg-gray-900/80 px-4 py-2 border border-gray-700 rounded">
            <div className="text-right">
              <div className="text-[10px] text-gray-500 uppercase">Condition</div>
              <div className="text-green-500 font-header text-xl tracking-widest animate-pulse">
                {RESUME_DATA.header.status}
              </div>
            </div>
            <HeartPulse className="text-green-500 w-8 h-8 animate-bounce" />
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 grid md:grid-cols-[300px_1fr] gap-8 relative z-10">
        
        {/* Left Column: Inventory (Skills) */}
        <aside>
          <div className="bg-[#121212] border-2 border-gray-700 p-1 shadow-2xl mb-8">
            <h2 className="bg-gray-800 text-gray-300 font-header text-center py-1 uppercase tracking-widest text-sm mb-1">
              Inventory
            </h2>
            <div className="grid grid-cols-2 gap-1 bg-[#0a0a0a] p-1">
              {RESUME_DATA.inventory.map((item, idx) => (
                <InventoryItem key={idx} item={item} />
              ))}
            </div>
          </div>

          {/* Player Info */}
          <div className="bg-[#121212] border-2 border-gray-700 p-4 font-typewriter text-sm text-gray-400">
            <div className="mb-2">
              <span className="text-red-500">NAME:</span> {RESUME_DATA.header.name}
            </div>
            <div className="mb-2">
              <span className="text-red-500">RANK:</span> {RESUME_DATA.header.rank}
            </div>
            <div className="mb-2">
              <span className="text-red-500">BLOOD:</span> {RESUME_DATA.header.bloodType}
            </div>
            <div className="mt-4 border-t border-gray-800 pt-2 text-xs leading-relaxed opacity-70">
              "A veteran survivor of the Code Wars. Specialist in containment protocols and heavy infrastructure. Currently holding the line at the Red Facility."
            </div>
          </div>
        </aside>

        {/* Right Column: Files (Experience) */}
        <section>
          <EKGLine />
          
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-header text-2xl text-gray-300 uppercase tracking-widest border-b-2 border-red-900/50 pb-1">
              Mission Log / Files
            </h2>
            <FileWarning className="text-red-900 animate-pulse" />
          </div>

          <div className="space-y-2">
            {RESUME_DATA.files.map((file, idx) => (
              <FileDossier key={idx} file={file} />
            ))}
          </div>

          {/* Footer / Certs */}
          <div className="mt-12 border-t border-gray-800 pt-6 text-center">
            <div className="inline-block bg-[#0f0f0f] border border-gray-700 p-4 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#050505] px-2 text-xs text-green-500 font-mono">
                SECURITY CLEARANCE CARDS
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-xs font-typewriter text-gray-500">
                <span className="flex items-center gap-1"><Lock size={10} /> RED HAT SPECIALIST</span>
                <span className="flex items-center gap-1"><Lock size={10} /> RHCSA RAPID TRACK</span>
                <span className="flex items-center gap-1"><Lock size={10} /> AI/ML ACCESS</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
             <a 
              href="https://www.linkedin.com/in/radoslavcap" 
              target="_blank" 
              rel="noreferrer"
              className="font-typewriter text-green-600 hover:text-green-400 hover:underline text-sm tracking-widest"
             >
               [ CONTACT S.T.A.R.S. HQ ]
             </a>
          </div>

        </section>
      </main>
    </div>
  );
}