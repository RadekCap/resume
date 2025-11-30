import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Cpu, Users, Code, Cloud, Zap, Brain, Crosshair, Award, MapPin, ChevronRight, Activity, BookOpen, AlertCircle } from 'lucide-react';

const CareerMap = () => {
  const [activeSection, setActiveSection] = useState('summary');
  const [bootSequence, setBootSequence] = useState(true);

  // Resume Data mapped to X-Men Metaphors
  const mutantProfile = {
    name: "Radoslav Cap",
    codename: "ORCHESTRATOR",
    level: "Omega Class",
    location: "Brno, Czechia (Genosha Outpost)",
    contact: "radoslav.cap@icloud.com",
    summary: {
      title: "Psych Profile",
      description: "Veteran code manipulator with 20+ years of combat experience. Operates across desktop, web, and embedded battlefields. Believes in open comms and 'Mutant Agile' methodology. Specialist in clean code ethics and TDD (Training Danger Room Defense).",
      traits: ["Passionate Collaborator", "Software Craftsman", "Scrum Commander"]
    },
    skills: [
      { name: "Container Manipulation", level: 98, type: "Telekinesis", icon: <Cpu /> },
      { name: "Kubernetes Control", level: 95, type: "Mind Control", icon: <Cloud /> },
      { name: "Red Hat Linux", level: 92, type: "Durability", icon: <Shield /> },
      { name: "Agile Leadership", level: 90, type: "Telepathy", icon: <Users /> },
      { name: "Azure DevOps", level: 88, type: "Flight", icon: <Zap /> },
      { name: "C# / .NET", level: 85, type: "Energy Blasts", icon: <Code /> }
    ],
    timeline: [
      {
        year: "2025 - Present",
        role: "Senior Software QE - Advanced Cluster Management",
        org: "Red Hat (The Brotherhood)",
        mission: "Operation: Cluster Mind",
        desc: "Overseeing the hive mind of advanced clusters. Ensuring structural integrity of the multi-cluster orchestration systems.",
        icon: <Brain />
      },
      {
        year: "2024 - 2025",
        role: "Senior Software Engineer",
        org: "Red Hat",
        mission: "Operation: Core Stability",
        desc: "Developing core systems to sustain the mutant infrastructure.",
        icon: <Code />
      },
      {
        year: "2023 - 2024",
        role: "Senior Software QE - OpenJDK",
        org: "Red Hat Sustaining Engineering",
        mission: "Project: Java Genesis",
        desc: "Maintained the foundational genetic code (OpenJDK). Ensured long-term survival of legacy systems.",
        icon: <Shield />
      },
      {
        year: "2019 - 2023",
        role: "Software Quality Engineer",
        org: "Red Hat",
        mission: "The Danger Room",
        desc: "Container testing on RHEL 7/8. Engineered rigorous simulation environments to test .NET durability.",
        icon: <Crosshair />
      },
      {
        year: "2016 - 2018",
        role: "DevOps Specialist",
        org: "Kentico Software",
        mission: "Cloud Ascension",
        desc: "Piloted the Blackbird (Azure) for high-altitude deployment. Monitored global frequencies and code quality.",
        icon: <Cloud />
      },
      {
        year: "2013 - 2015",
        role: "Team Leader & Product Owner",
        org: "CÍGLER SOFTWARE (iDoklad)",
        mission: "Tactical Command",
        desc: "Led the Alpha Squad. Defined mission parameters (Product Ownership) and ensured squad cohesion (Scrum Master).",
        icon: <Users />
      },
      {
        year: "2009 - 2012",
        role: "Senior .NET Engineer",
        org: "Software Development Europe",
        mission: "Global Reach",
        desc: "Deployed WPF and Silverlight energy beams for international clients.",
        icon: <Zap />
      },
      {
        year: "2006 - 2009",
        role: "Developer & Analyst",
        org: "UNIS COMPUTERS",
        mission: "Ancient Translation",
        desc: "Transmuted ancient 4GL artifacts into modern .NET weaponry (Project Prytanis).",
        icon: <BookOpen />
      },
      {
        year: "2003 - 2005",
        role: "Mutant Origin",
        org: "Various (Tocoen, Buriánek)",
        mission: "The Awakening",
        desc: "First manifestation of powers. Algorithm proposals and ISO 9002 compliance training.",
        icon: <Activity />
      }
    ],
    certs: [
      "RHCSA Rapid Track (RH199)",
      "OpenShift Admin I (DO180)",
      "AI/ML on OpenShift (AI267)",
      "Moderní webové kodéřina"
    ],
    education: {
      school: "Masaryk University (Xavier's Institute)",
      degree: "Mgr., Analytical Chemistry",
      year: "1998 - 2003",
      note: "Studied molecular composition before shifting to digital alchemy."
    }
  };

  useEffect(() => {
    // Simulate Cerebro Boot Sequence
    const timer = setTimeout(() => {
      setBootSequence(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (bootSequence) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-blue-500 font-mono">
        <div className="text-center">
          <div className="animate-spin mb-4 text-6xl">✖</div>
          <h1 className="text-2xl animate-pulse">INITIALIZING CEREBRO...</h1>
          <p className="mt-2 text-sm text-blue-300">Scanning genetic database...</p>
          <p className="mt-1 text-sm text-blue-300">Subject Found: {mutantProfile.codename}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-blue-100 font-sans selection:bg-blue-500 selection:text-white overflow-hidden flex flex-col md:flex-row">
      
      {/* Sidebar / Control Panel */}
      <div className="w-full md:w-80 bg-slate-950 border-r border-blue-800 flex flex-col p-6 shadow-2xl z-10 relative">
        <div className="mb-8 text-center relative group">
          <div className="absolute inset-0 bg-blue-500 opacity-20 blur-xl rounded-full group-hover:opacity-40 transition-opacity"></div>
          <div className="w-32 h-32 mx-auto bg-slate-800 rounded-full border-4 border-blue-500 flex items-center justify-center relative z-10 overflow-hidden">
             <span className="text-6xl font-bold text-yellow-500">X</span>
          </div>
          <h1 className="mt-4 text-2xl font-bold tracking-wider text-white uppercase">{mutantProfile.name}</h1>
          <div className="text-blue-400 text-xs tracking-widest uppercase mt-1">Codename: {mutantProfile.codename}</div>
          <div className="text-yellow-500 text-xs font-bold uppercase mt-1">{mutantProfile.level}</div>
        </div>

        <nav className="space-y-2 flex-grow">
          <MenuButton 
            active={activeSection === 'summary'} 
            onClick={() => setActiveSection('summary')} 
            icon={<Brain size={18} />} 
            label="Psych Profile" 
          />
          <MenuButton 
            active={activeSection === 'abilities'} 
            onClick={() => setActiveSection('abilities')} 
            icon={<Zap size={18} />} 
            label="Mutant Abilities" 
          />
          <MenuButton 
            active={activeSection === 'timeline'} 
            onClick={() => setActiveSection('timeline')} 
            icon={<Activity size={18} />} 
            label="Mission Log" 
          />
          <MenuButton 
            active={activeSection === 'training'} 
            onClick={() => setActiveSection('training')} 
            icon={<Award size={18} />} 
            label="Academy Training" 
          />
        </nav>

        <div className="mt-8 pt-6 border-t border-blue-900 text-xs text-blue-500">
          <div className="flex items-center gap-2 mb-2">
            <MapPin size={12} /> {mutantProfile.location}
          </div>
          <div className="flex items-center gap-2 mb-2">
            <Terminal size={12} /> System Status: ONLINE
          </div>
          <div className="opacity-50">Cerebro v4.18.25</div>
        </div>
      </div>

      {/* Main Interface */}
      <div className="flex-1 relative overflow-y-auto bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]">
        {/* Holographic Grid Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-slate-900/50 pointer-events-none" style={{backgroundSize: '40px 40px', backgroundImage: 'linear-gradient(to right, rgba(59, 130, 246, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.05) 1px, transparent 1px)'}}></div>

        <div className="p-8 md:p-12 relative z-0 max-w-5xl mx-auto">
          
          <Header title={activeSection} />

          {activeSection === 'summary' && (
            <div className="space-y-8 animate-fadeIn">
              <Panel title="Subject Analysis">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-1 text-lg leading-relaxed text-blue-100">
                    <p className="mb-4">{mutantProfile.summary.description}</p>
                    <div className="p-4 bg-blue-900/20 border-l-4 border-yellow-500 rounded-r">
                      <h4 className="text-yellow-500 font-bold mb-1 flex items-center gap-2">
                        <AlertCircle size={16}/> Professor's Note
                      </h4>
                      <p className="italic text-sm text-blue-200">"Subject demonstrates exceptional capability in long-term collaboration. Their 'Scrum Master' leadership style suggests high-level telepathic coordination abilities."</p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 space-y-3">
                    <h3 className="text-blue-400 text-sm uppercase tracking-widest border-b border-blue-800 pb-2">Core Traits</h3>
                    {mutantProfile.summary.traits.map((trait, i) => (
                      <div key={i} className="flex items-center gap-3 bg-slate-800 p-3 rounded border border-blue-900 shadow-sm hover:border-yellow-500 transition-colors">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                        <span>{trait}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Panel>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Panel title="Current Location">
                   <div className="h-32 bg-blue-900/20 rounded flex items-center justify-center border border-blue-800 relative overflow-hidden group">
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-slate-900 to-slate-900"></div>
                      <MapPin className="text-yellow-500 mb-2 mr-2" />
                      <span className="font-mono text-xl tracking-widest">{mutantProfile.location}</span>
                   </div>
                </Panel>
                <Panel title="Contact Frequency">
                   <div className="h-32 bg-blue-900/20 rounded flex items-center justify-center border border-blue-800 cursor-pointer hover:bg-blue-800/30 transition-all" onClick={() => document.execCommand('copy')}>
                      <Terminal className="text-green-500 mb-2 mr-2" />
                      <span className="font-mono text-lg">{mutantProfile.contact}</span>
                   </div>
                </Panel>
              </div>
            </div>
          )}

          {activeSection === 'abilities' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
              {mutantProfile.skills.map((skill, index) => (
                <div key={index} className="bg-slate-900/80 border border-blue-800 p-6 rounded-lg relative overflow-hidden group hover:border-yellow-500 transition-all duration-300">
                  <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transform scale-150 transition-transform">
                    {skill.icon}
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-900 rounded-lg text-yellow-500">
                        {skill.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{skill.name}</h3>
                        <div className="text-xs text-blue-400 uppercase tracking-wider">{skill.type}</div>
                      </div>
                    </div>
                    <div className="text-2xl font-mono font-bold text-blue-500">{skill.level}%</div>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-yellow-500 h-full rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'timeline' && (
            <div className="relative animate-fadeIn pl-4 md:pl-0">
              <div className="absolute left-0 md:left-1/2 h-full w-px bg-blue-800 transform -translate-x-1/2 hidden md:block"></div>
              
              {mutantProfile.timeline.map((item, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center mb-12 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-slate-900 border-4 border-yellow-500 rounded-full transform -translate-x-1/2 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(234,179,8,0.5)]">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ml-10 md:ml-0 ${index % 2 === 0 ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right'}`}>
                    <div className="bg-slate-900/80 border border-blue-800 p-6 rounded-lg hover:border-blue-500 transition-colors shadow-lg group">
                      <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? '' : 'md:flex-row-reverse md:justify-start'}`}>
                        <span className="text-yellow-500 font-mono text-sm">{item.year}</span>
                        <div className="h-px bg-blue-800 flex-grow"></div>
                        <div className="text-blue-400">{item.icon}</div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">{item.mission}</h3>
                      <div className="text-blue-300 font-semibold mb-2">{item.role} @ {item.org}</div>
                      <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'training' && (
            <div className="space-y-8 animate-fadeIn">
              <Panel title="Certified Badges">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {mutantProfile.certs.map((cert, i) => (
                      <div key={i} className="flex items-center p-4 bg-slate-800 border border-blue-900 rounded hover:bg-slate-800/80">
                         <Shield className="text-yellow-500 mr-4" size={24} />
                         <span className="font-semibold">{cert}</span>
                      </div>
                    ))}
                 </div>
              </Panel>

              <Panel title="Origin Story (Education)">
                <div className="flex items-start gap-6 p-4">
                  <div className="p-4 bg-slate-800 rounded-full border-2 border-yellow-500 text-yellow-500">
                    <BookOpen size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{mutantProfile.education.school}</h3>
                    <div className="text-xl text-blue-400 mb-2">{mutantProfile.education.degree}</div>
                    <div className="text-sm font-mono text-slate-500 mb-2">{mutantProfile.education.year}</div>
                    <p className="text-slate-300 italic">"{mutantProfile.education.note}"</p>
                  </div>
                </div>
              </Panel>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

// UI Components

const MenuButton = ({ active, onClick, icon, label }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded transition-all duration-200 group ${
      active 
      ? 'bg-blue-900/40 text-yellow-500 border-l-4 border-yellow-500' 
      : 'text-slate-400 hover:bg-slate-800 hover:text-blue-300'
    }`}
  >
    <span className={`${active ? 'animate-pulse' : ''}`}>{icon}</span>
    <span className="font-semibold tracking-wide uppercase text-sm">{label}</span>
    {active && <ChevronRight className="ml-auto w-4 h-4" />}
  </button>
);

const Panel = ({ title, children }) => (
  <div className="bg-slate-950/50 border border-blue-900 rounded-lg p-6 backdrop-blur-sm relative overflow-hidden">
    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-yellow-500"></div>
    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-yellow-500"></div>
    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-yellow-500"></div>
    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-yellow-500"></div>
    
    <h3 className="text-blue-500 font-mono text-xs uppercase tracking-[0.2em] mb-6 border-b border-blue-900/50 pb-2">
      {title}
    </h3>
    {children}
  </div>
);

const Header = ({ title }) => {
  const titles = {
    summary: "Subject Overview",
    abilities: "Power Grid Analysis",
    timeline: "Operational History",
    training: "Academy Records"
  };

  return (
    <div className="mb-10 flex items-end gap-4 border-b border-blue-800 pb-4">
      <h2 className="text-4xl font-bold text-white uppercase tracking-tighter">
        {titles[title]}
      </h2>
      <div className="text-blue-500 font-mono mb-1 animate-pulse">
        // RESTRICTED ACCESS
      </div>
    </div>
  );
};

export default CareerMap;