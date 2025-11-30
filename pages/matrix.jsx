import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Code, Server, Shield, Cpu, Network, Database, ChevronRight, Lock, Unlock, Globe } from 'lucide-react';

// --- Matrix Rain Canvas Component ---
const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    const columns = Math.floor(width / 20);
    const drops = [];
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*";

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, width, height);
      
      ctx.fillStyle = '#0F0';
      ctx.font = '15px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * 20, drops[i] * 20);
        
        if (drops[i] * 20 > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-20" />;
};

// --- Main Resume Data ---
const RESUME_DATA = {
  header: {
    name: "RADOSLAV CAP",
    title: "SENIOR SOFTWARE QUALITY ENGINEER",
    location: "BRNO, CZECHIA",
    status: "CONNECTED",
    uptime: "20+ YEARS"
  },
  skills: [
    { name: "KUBERNETES", level: 95 },
    { name: "OPENSHIFT", level: 90 },
    { name: "RED HAT LINUX", level: 92 },
    { name: "AZURE / CLOUD", level: 85 },
    { name: ".NET / C#", level: 88 },
    { name: "AGILE / SCRUM", level: 90 }
  ],
  timeline: [
    {
      year: "2025 - PRESENT",
      role: "The Architect (Senior SQE)",
      company: "RED HAT",
      desc: "Advanced Cluster Management. Orchestrating the mainframe. Ensuring structural integrity of production clusters.",
      icon: <Network className="w-6 h-6" />,
      type: "current"
    },
    {
      year: "2023 - 2025",
      role: "Core System Engineer",
      company: "RED HAT",
      desc: "OpenJDK Sustaining Engineering & Core Development. Maintaining the runtime environment. Patching critical vulnerabilities.",
      icon: <Code className="w-6 h-6" />,
      type: "past"
    },
    {
      year: "2019 - 2023",
      role: "Accepted The Red Pill",
      company: "RED HAT",
      desc: "Transition to Linux Ecosystem. SQE for OpenJDK & Dotnet Containers. Quality assurance for the open source foundation.",
      icon: <Shield className="w-6 h-6" />,
      type: "pivotal"
    },
    {
      year: "2016 - 2018",
      role: " The Operator",
      company: "KENTICO SOFTWARE",
      desc: "DevOps Specialist. Monitoring the cloud signal on Azure. Scripting automated deployment protocols.",
      icon: <Server className="w-6 h-6" />,
      type: "past"
    },
    {
      year: "2013 - 2015",
      role: "Squad Leader",
      company: "CÍGLER SOFTWARE (iDoklad)",
      desc: "Product Owner & Scrum Master. Leading the resistance against spaghetti code. Managing team velocity and deliverables.",
      icon: <Cpu className="w-6 h-6" />,
      type: "past"
    },
    {
      year: "2009 - 2012",
      role: "Code Constructor",
      company: "SW DEV EUROPE",
      desc: "Senior .NET Engineer. Building structures in WPF, WCF, and Silverlight. Constructing the early web interfaces.",
      icon: <Database className="w-6 h-6" />,
      type: "past"
    },
    {
      year: "2003 - 2009",
      role: "Initial Upload / Origin",
      company: "EARLY CAREER",
      desc: "From Analytical Chemistry (Mgr.) to C++ & MFC. The source code of the career. Self-employed consulting and system analysis.",
      icon: <Terminal className="w-6 h-6" />,
      type: "origin"
    }
  ]
};

// --- Reusable Components ---

const GlitchText = ({ text, className }) => {
  return (
    <div className={`relative inline-block group ${className}`}>
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-green-500 opacity-0 group-hover:opacity-50 group-hover:translate-x-1 animate-pulse">
        {text}
      </span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-red-500 opacity-0 group-hover:opacity-50 group-hover:-translate-x-1 animate-pulse delay-75">
        {text}
      </span>
    </div>
  );
};

const SkillBar = ({ name, level }) => (
  <div className="mb-4 group cursor-pointer">
    <div className="flex justify-between text-xs font-mono text-green-500 mb-1 group-hover:text-white transition-colors">
      <span>{'>'} {name}</span>
      <span>{level}%</span>
    </div>
    <div className="w-full bg-green-900/30 h-2 border border-green-800 relative overflow-hidden">
      <div 
        className="bg-green-500 h-full shadow-[0_0_10px_#00ff00] transition-all duration-1000 ease-out group-hover:bg-white"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

const DataNode = ({ data, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isRedPill = data.type === 'pivotal';
  const isCurrent = data.type === 'current';

  return (
    <div 
      className={`relative pl-8 pb-12 border-l-2 ${isRedPill ? 'border-red-500 shadow-[0_0_10px_#ff0000]' : 'border-green-800'} ml-4 md:ml-8 transition-all duration-500`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Node Connector */}
      <div 
        className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 
        ${isRedPill ? 'bg-black border-red-500 animate-pulse' : 'bg-black border-green-500'} 
        ${isCurrent ? 'shadow-[0_0_15px_#00ff00]' : ''}
        cursor-pointer hover:scale-125 transition-transform`}
        onClick={() => setIsOpen(!isOpen)}
      />

      {/* Card Content */}
      <div 
        className={`bg-black/80 border ${isRedPill ? 'border-red-500/50' : 'border-green-500/30'} p-4 md:p-6 backdrop-blur-sm 
        hover:border-green-400 transition-all duration-300 group cursor-default`}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
          <div className="flex items-center gap-3">
             <div className={`${isRedPill ? 'text-red-500' : 'text-green-500'}`}>
                {data.icon}
             </div>
             <h3 className={`text-lg md:text-xl font-bold font-mono ${isRedPill ? 'text-red-500' : 'text-green-400'}`}>
               {data.role}
             </h3>
          </div>
          <span className="font-mono text-xs md:text-sm text-green-700 mt-2 md:mt-0 border border-green-900 px-2 py-1">
            [{data.year}]
          </span>
        </div>

        <div className="font-mono text-green-300 mb-2 flex items-center gap-2">
          <span className="text-xs opacity-50">LOCATION:</span> 
          {data.company}
        </div>

        <p className="font-mono text-sm text-gray-400 leading-relaxed max-w-2xl">
          {data.desc}
        </p>

        {/* Decoder Effect Decoration */}
        <div className="absolute top-2 right-2 text-[10px] text-green-900 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
          ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}
        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---
export default function MatrixResume() {
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    // Simulating boot sequence
    const timer = setTimeout(() => setBooted(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!booted) {
    return (
      <div className="min-h-screen bg-black text-green-500 font-mono flex items-center justify-center flex-col">
        <div className="w-64">
          <div className="mb-2 text-xs">INITIALIZING CONNECTION...</div>
          <div className="h-1 bg-green-900 w-full overflow-hidden">
            <div className="h-full bg-green-500 w-full animate-[shimmer_1s_infinite]"></div>
          </div>
          <div className="mt-2 text-xs text-right">ENCRYPTING: 100%</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden selection:bg-green-500 selection:text-black">
      <MatrixRain />
      
      {/* Main Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8 md:py-16 grid md:grid-cols-[1fr_300px] gap-12">
        
        {/* Left Column: Career Timeline */}
        <main>
          {/* Header */}
          <header className="mb-16 border-b border-green-800 pb-8">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs text-green-700 font-mono mb-2">SYSTEM_USER_ID: 0xRC</div>
                <h1 className="text-4xl md:text-6xl font-bold font-mono tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-800">
                  <GlitchText text={RESUME_DATA.header.name} />
                </h1>
                <h2 className="text-xl md:text-2xl text-green-500 font-mono mb-4 flex items-center gap-2">
                  <ChevronRight className="animate-pulse" />
                  {RESUME_DATA.header.title}
                </h2>
              </div>
              <div className="hidden md:block text-right font-mono text-xs text-green-600">
                <div>LOC: {RESUME_DATA.header.location}</div>
                <div>STATUS: {RESUME_DATA.header.status}</div>
                <div>UPTIME: {RESUME_DATA.header.uptime}</div>
              </div>
            </div>
            
            <p className="font-mono text-green-300/80 leading-relaxed mt-4 max-w-2xl border-l-4 border-green-900 pl-4">
              "I prefer open communication, long time collaboration and agile development. 
              Navigating the code matrix with 20+ years of experience. 
              Currently safeguarding the cluster mainframe at Red Hat."
            </p>
          </header>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-[23px] md:left-[39px] w-px bg-gradient-to-b from-green-500 via-green-900 to-transparent"></div>
            {RESUME_DATA.timeline.map((job, index) => (
              <DataNode key={index} data={job} index={index} />
            ))}
            
            {/* End of Line */}
            <div className="ml-4 md:ml-8 pl-8 pt-4 pb-8 border-l-2 border-transparent">
              <div className="text-green-800 font-mono text-sm animate-pulse">
                _END_OF_FILE_
              </div>
            </div>
          </div>
        </main>

        {/* Right Column: Skills & Stats */}
        <aside className="hidden md:block space-y-8 sticky top-8 h-fit">
          {/* Avatar / Profile Box */}
          <div className="border border-green-500/50 p-1 bg-black/50 backdrop-blur">
             <div className="aspect-square bg-green-900/20 flex items-center justify-center relative overflow-hidden group">
                <img 
                  src="https://api.dicebear.com/7.x/bottts/svg?seed=Radoslav&backgroundColor=000000" 
                  alt="Avatar" 
                  className="w-32 h-32 opacity-80 grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none"></div>
             </div>
             <div className="mt-2 text-center font-mono text-xs text-green-500">
               AVATAR_UPLOAD_COMPLETE
             </div>
          </div>

          {/* Skills Panel */}
          <div className="border border-green-800 bg-black/80 p-6">
            <h3 className="text-green-400 font-mono font-bold mb-6 flex items-center gap-2 border-b border-green-900 pb-2">
              <Unlock className="w-4 h-4" />
              SKILL_SET_LOADED
            </h3>
            {RESUME_DATA.skills.map((skill, index) => (
              <SkillBar key={index} {...skill} />
            ))}
          </div>

          {/* Certifications Box */}
          <div className="border border-green-800 bg-black/80 p-6">
             <h3 className="text-green-400 font-mono font-bold mb-4 flex items-center gap-2">
               <Shield className="w-4 h-4" />
               ENCRYPTION_KEYS (CERTS)
             </h3>
             <ul className="space-y-3 font-mono text-xs text-gray-400">
               <li className="flex items-start gap-2">
                 <span className="text-green-500">[*]</span> RH Certified Specialist (OpenShift)
               </li>
               <li className="flex items-start gap-2">
                 <span className="text-green-500">[*]</span> RHCSA Rapid Track
               </li>
               <li className="flex items-start gap-2">
                 <span className="text-green-500">[*]</span> AI/ML on OpenShift
               </li>
             </ul>
          </div>

          {/* Contact Box */}
          <div className="border border-green-800 bg-black/80 p-6 text-center">
            <div className="text-xs font-mono text-green-600 mb-2">INITIATE_CONTACT_PROTOCOL</div>
            <a 
              href="https://www.linkedin.com/in/radoslavcap" 
              target="_blank" 
              rel="noreferrer"
              className="inline-block border border-green-500 text-green-500 px-6 py-2 font-mono hover:bg-green-500 hover:text-black transition-all duration-300"
            >
              CONNECT VIA LINKEDIN
            </a>
          </div>
        </aside>

        {/* Mobile Footer for Skills (Visible only on small screens) */}
        <div className="md:hidden border-t border-green-800 pt-8">
           <h3 className="text-green-400 font-mono font-bold mb-6">SKILL_SET</h3>
           {RESUME_DATA.skills.map((skill, index) => (
              <SkillBar key={index} {...skill} />
            ))}
        </div>

      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}