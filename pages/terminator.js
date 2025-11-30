import React, { useState, useEffect } from 'react';
import { Crosshair, Cpu, Shield, Skull, Radio, Activity, Eye, Zap, Terminal, Lock } from 'lucide-react';

// --- Assets & Styles ---
const TerminatorHUD = () => (
  <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden font-mono select-none">
    {/* Red Tint & Scanlines */}
    <div className="absolute inset-0 bg-red-900/10 mix-blend-overlay" />
    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_60%,rgba(0,0,0,0.8)_100%)]" />
    
    {/* HUD Elements */}
    <div className="absolute top-8 left-8 text-red-500 text-xs tracking-widest animate-pulse">
      <div>SYSTEM: ONLINE</div>
      <div>VISUAL: INFRA-RED</div>
      <div>MODE: ENHANCED</div>
    </div>

    <div className="absolute top-8 right-8 text-red-500 text-xs text-right tracking-widest">
      <div>BATTERY: 98%</div>
      <div>TEMP: NORMAL</div>
      <div>THREAT: LOW</div>
    </div>

    {/* Compass / Horizon Line */}
    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-96 h-1 bg-red-900/50 flex justify-between items-end overflow-hidden">
       {[...Array(20)].map((_, i) => (
         <div key={i} className="w-px h-2 bg-red-500" />
       ))}
    </div>

    {/* Crosshair Center */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-red-500/30 rounded-full flex items-center justify-center">
       <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-4 bg-red-500" />
       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-4 bg-red-500" />
       <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 w-4 bg-red-500" />
       <div className="absolute right-0 top-1/2 -translate-y-1/2 h-1 w-4 bg-red-500" />
    </div>
  </div>
);

// --- Data: Skynet Database ---
const RESUME_DATA = {
  header: {
    model: "MODEL T-800 (RADOSLAV CAP)",
    mission: "PROTECT THE CLUSTER",
    affiliation: "TECH-COM / RED HAT",
    status: "MISSION CRITICAL",
    location: "SECTOR BRNO"
  },
  subroutines: [ // Skills
    { name: "KUBERNETES", id: "K8S-CPU", eff: "95%", icon: <Cpu className="w-4 h-4" /> },
    { name: "OPENSHIFT", id: "OCP-NET", eff: "90%", icon: <Radio className="w-4 h-4" /> },
    { name: "RED HAT LINUX", id: "RHEL-OS", eff: "92%", icon: <Terminal className="w-4 h-4" /> },
    { name: "AZURE SKY-NET", id: "AZR-CLD", eff: "85%", icon: <Radio className="w-4 h-4" /> },
    { name: "C# PROTOCOL", id: "LNG-CS", eff: "88%", icon: <Terminal className="w-4 h-4" /> },
    { name: "AGILE TACTICS", id: "AGL-OPS", eff: "90%", icon: <Activity className="w-4 h-4" /> }
  ],
  logs: [ // Experience
    {
      year: "2025 - PRESENT",
      target: "CYBERDYNE SYSTEMS (RED HAT)",
      role: "DEFENSE GRID ARCHITECT",
      analysis: "MANAGING ADVANCED CLUSTER MANAGEMENT. ORCHESTRATING DEFENSE PROTOCOLS. ENSURING STRUCTURAL INTEGRITY OF PRODUCTION NEURAL NETS.",
      priority: "ALPHA",
      icon: <Shield className="w-8 h-8 text-red-500" />
    },
    {
      year: "2023 - 2025",
      target: "OPENJDK CORE",
      role: "RUNTIME MECHANIC",
      analysis: "SUSTAINING ENGINEERING. REPAIRING JAVA RUNTIME ENVIRONMENT. PATCHING MEMORY LEAKS AND SYSTEM VULNERABILITIES.",
      priority: "BETA",
      icon: <Cpu className="w-8 h-8 text-red-500" />
    },
    {
      year: "2019 - 2023",
      target: "THE CROSSING",
      role: "REPROGRAMMING",
      analysis: "PIVOTAL SHIFT DETECTED. MIGRATION FROM .NET SYNDICATE TO OPEN SOURCE RESISTANCE. QA FOR CONTAINER TRANSPORT.",
      priority: "CRITICAL",
      icon: <Zap className="w-8 h-8 text-red-500" />
    },
    {
      year: "2016 - 2018",
      target: "KENTICO OUTPOST",
      role: "CLOUD INFILTRATOR",
      analysis: "DEVOPS SPECIALIST. MONITORING AZURE SKY-NET NODES. DEPLOYING AUTOMATED COUNTERMEASURES.",
      priority: "GAMMA",
      icon: <Radio className="w-8 h-8 text-red-500" />
    },
    {
      year: "2013 - 2015",
      target: "IDOKLAD SECTOR",
      role: "SQUAD LEADER",
      analysis: "SCRUM MASTER. LEADING HUMAN RESISTANCE TEAM. ELIMINATING SPAGHETTI CODE THREATS.",
      priority: "DELTA",
      icon: <Skull className="w-8 h-8 text-red-500" />
    }
  ]
};

// --- Components ---

const AnalysisBar = ({ sub }) => (
  <div className="mb-4 font-mono text-xs group cursor-crosshair">
    <div className="flex justify-between text-red-400 mb-1 group-hover:text-white group-hover:bg-red-900/50 px-1">
      <span className="flex items-center gap-2">
        {sub.icon}
        {sub.name} <span className="text-red-700">[{sub.id}]</span>
      </span>
      <span>{sub.eff}</span>
    </div>
    <div className="h-2 bg-red-900/30 border border-red-800 flex">
      <div 
        className="h-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]" 
        style={{ width: sub.eff }} 
      ></div>
    </div>
  </div>
);

const TacticalLog = ({ log, index }) => {
  const [scanned, setScanned] = useState(false);

  return (
    <div 
      className="relative pl-8 pb-12 border-l border-red-900/50 group"
      onMouseEnter={() => setScanned(true)}
      onMouseLeave={() => setScanned(false)}
    >
      {/* Timeline Node */}
      <div className={`absolute -left-[9px] top-0 w-4 h-4 bg-black border border-red-500 transition-colors duration-300 ${scanned ? 'bg-red-600' : ''}`}></div>

      <div className="bg-black/80 border-t border-b border-red-900/30 p-4 hover:border-red-500 hover:bg-red-950/10 transition-all duration-300 relative overflow-hidden">
        {/* Scanning Effect Overlay */}
        <div className={`absolute top-0 left-0 w-1 h-full bg-red-500 shadow-[0_0_15px_red] transition-all duration-1000 ease-in-out ${scanned ? 'left-full opacity-100' : 'left-0 opacity-0'}`}></div>

        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-red-500 font-bold text-lg tracking-wider flex items-center gap-2">
              {log.target}
            </h3>
            <div className="text-red-700 text-xs font-bold tracking-widest">{log.role}</div>
          </div>
          <div className="text-right">
             <div className="bg-red-900/20 text-red-400 text-xs px-2 py-1 border border-red-900 inline-block mb-1">
               {log.year}
             </div>
             <div className="text-[10px] text-red-800">PRIORITY: {log.priority}</div>
          </div>
        </div>

        <p className="text-red-400 text-sm leading-relaxed opacity-80 font-bold">
          {log.analysis}
        </p>

        {/* Decorative Data Blocks */}
        {scanned && (
          <div className="absolute top-2 right-2 text-[8px] text-red-500 leading-tight text-right opacity-60">
            <div>MATCH: 99.9%</div>
            <div>ORIGIN: {log.target.split(' ')[0]}</div>
            <div>SECTOR: {index + 12}-A</div>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Main Application ---
export default function TerminatorResume() {
  const [bootSequence, setBootSequence] = useState(0);

  useEffect(() => {
    // Simple tracking of boot text lines
    if (bootSequence < 4) {
      const timer = setTimeout(() => setBootSequence(prev => prev + 1), 600);
      return () => clearTimeout(timer);
    }
  }, [bootSequence]);

  // Loading Screen
  if (bootSequence < 4) {
    return (
      <div className="min-h-screen bg-black text-red-600 font-mono text-xs p-8">
        <div className="mb-2">{bootSequence >= 0 && "> INITIALIZING NEURAL NET..."}</div>
        <div className="mb-2">{bootSequence >= 1 && "> LOADING TACTICAL DATABASE..."}</div>
        <div className="mb-2">{bootSequence >= 2 && "> CALIBRATING OPTICAL SENSORS..."}</div>
        <div className="mb-2">{bootSequence >= 3 && "> TARGET ACQUIRED: RADOSLAV CAP"}</div>
        <div className="animate-pulse mt-4 bg-red-600 w-4 h-4"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-red-500 font-mono selection:bg-red-900 selection:text-white pb-20 relative overflow-x-hidden cursor-crosshair">
      
      <TerminatorHUD />

      {/* Main Container */}
      <div className="relative z-10 max-w-6xl mx-auto p-6 grid md:grid-cols-[350px_1fr] gap-12 pt-24">
        
        {/* Left Column: Analysis (Skills) */}
        <aside className="space-y-8">
           
           {/* Target ID Card */}
           <div className="border-2 border-red-600 p-1 relative">
              <div className="absolute -top-3 left-4 bg-black px-2 text-red-600 font-bold tracking-widest text-xs">
                TARGET PROFILE
              </div>
              <div className="bg-red-900/10 p-4">
                 <div className="w-full aspect-square bg-red-950 mb-4 border border-red-800 relative overflow-hidden group">
                    {/* Filtered Avatar */}
                    <img 
                      src="https://api.dicebear.com/7.x/bottts/svg?seed=Radoslav&backgroundColor=000000" 
                      alt="Target"
                      className="w-full h-full object-cover mix-blend-luminosity opacity-80"
                    />
                    <div className="absolute inset-0 bg-red-500 mix-blend-multiply opacity-50"></div>
                    
                    {/* Face Tracking Box */}
                    <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] border border-red-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                       <div className="text-[10px] bg-red-900 text-white px-1 absolute -bottom-4">MATCH CONFIRMED</div>
                    </div>
                 </div>
                 
                 <div className="space-y-1 text-xs font-bold">
                    <div className="flex justify-between border-b border-red-900 pb-1">
                       <span>MODEL:</span> <span className="text-white">{RESUME_DATA.header.model}</span>
                    </div>
                    <div className="flex justify-between border-b border-red-900 pb-1 pt-1">
                       <span>MISSION:</span> <span className="text-white">{RESUME_DATA.header.mission}</span>
                    </div>
                    <div className="flex justify-between border-b border-red-900 pb-1 pt-1">
                       <span>AFFILIATION:</span> <span className="text-white">{RESUME_DATA.header.affiliation}</span>
                    </div>
                    <div className="flex justify-between pt-1">
                       <span>LOC:</span> <span className="text-white">{RESUME_DATA.header.location}</span>
                    </div>
                 </div>
              </div>
           </div>

           {/* Skills Analysis */}
           <div className="border border-red-900 p-4 bg-black/50">
             <h3 className="text-red-500 font-bold mb-6 tracking-widest border-b border-red-600 pb-2 flex items-center gap-2">
               <Cpu size={16} />
               COMBAT SUBROUTINES
             </h3>
             {RESUME_DATA.subroutines.map((sub, i) => (
               <AnalysisBar key={i} sub={sub} />
             ))}
           </div>

           {/* Certifications / Upgrades */}
           <div className="border border-red-900 p-4 bg-black/50 relative">
              <h3 className="text-red-500 font-bold mb-4 tracking-widest text-sm flex items-center gap-2">
                 <Lock size={14} /> SYSTEM UPGRADES
              </h3>
              <div className="space-y-2 text-xs">
                 <div className="flex items-center gap-2 text-red-400">
                    <div className="w-1 h-1 bg-red-500"></div> RH CERTIFIED SPECIALIST
                 </div>
                 <div className="flex items-center gap-2 text-red-400">
                    <div className="w-1 h-1 bg-red-500"></div> RHCSA RAPID TRACK
                 </div>
                 <div className="flex items-center gap-2 text-red-400">
                    <div className="w-1 h-1 bg-red-500"></div> AI/ML DEPLOYMENT
                 </div>
              </div>
           </div>

        </aside>

        {/* Right Column: Mission Logs (Experience) */}
        <main>
           <div className="flex items-center justify-between mb-12 border-b-4 border-red-600 pb-4">
              <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-900">
                TACTICAL LOGS
              </h1>
              <div className="text-right hidden md:block">
                 <div className="text-xs text-red-600">TIME DISPLACEMENT:</div>
                 <div className="text-xl font-bold">20 YEARS</div>
              </div>
           </div>

           <div className="relative border-l-2 border-red-900/30 pl-2">
             {RESUME_DATA.logs.map((log, i) => (
               <TacticalLog key={i} log={log} index={i} />
             ))}
           </div>

           <div className="mt-12 text-center">
             <a 
               href="https://www.linkedin.com/in/radoslavcap" 
               target="_blank" 
               rel="noreferrer"
               className="inline-block border-2 border-red-600 bg-red-900/20 text-red-500 px-8 py-4 font-bold tracking-[0.2em] hover:bg-red-600 hover:text-black hover:scale-105 transition-all duration-300"
             >
               INITIATE DATA LINK
             </a>
           </div>

        </main>
      </div>
      
    </div>
  );
}