import React, { useState, useEffect } from 'react';
import { Scroll, Wand2, Feather, Map, Sparkles, FlaskConical, Castle, Footprints, BookOpen, Star, Ghost, Crown, Flame } from 'lucide-react';

const CareerMap = () => {
  const [activeSection, setActiveSection] = useState('summary');
  const [revealMap, setRevealMap] = useState(false);

  // Resume Data mapped to Harry Potter Metaphors
  const wizardProfile = {
    name: "Radoslav Cap",
    title: "Head Warlock & Code Charmer",
    house: "Gryffindor (Bravery in Deployment)",
    location: "Brno (Magical Outpost)",
    wand: "12 inch, Silicon Core, Agile Flexibility",
    summary: {
      heading: "Ministry of Magic File",
      description: "A Grand Sorcerer with 20+ years of spell-casting experience. Master of desktop, web, and embedded enchantments. A firm believer in 'Agile Divination' and open communication charms. Dedicated to the Dark Arts of Clean Code and Defense Against the Buggy Arts (TDD).",
      traits: ["Order of the Scrum", "Potion Master (Craftsman)", "Head Boy Leadership"]
    },
    skills: [
      { name: "Container Transfiguration", level: 98, type: "Transfiguration", icon: <Ghost /> },
      { name: "Care of Magical Clusters (K8s)", level: 95, type: "Care of Magical Creatures", icon: <Crown /> },
      { name: "Red Hat Runes (Linux)", level: 92, type: "Ancient Runes", icon: <Scroll /> },
      { name: "Agile Divination", level: 90, type: "Divination", icon: <Sparkles /> },
      { name: "Azure Broomsticks", level: 88, type: "Flying", icon: <Feather /> },
      { name: "C# Incantations", level: 85, type: "Charms", icon: <Wand2 /> }
    ],
    timeline: [
      {
        year: "2025 - Present",
        role: "High Inquisitor of Clusters",
        org: "The Order of the Red Hat",
        mission: "The Hive Mind Prophecy",
        desc: "Overseeing the Advanced Cluster Management spells. Ensuring the structural integrity of the multi-realm orchestration systems.",
        icon: <Crown />
      },
      {
        year: "2024 - 2025",
        role: "Senior Spell Developer",
        org: "The Order of the Red Hat",
        mission: "Core Stability Charms",
        desc: "Developing foundational incantations to sustain the magical infrastructure.",
        icon: <Wand2 />
      },
      {
        year: "2023 - 2024",
        role: "Keeper of the Keys (QA)",
        org: "Red Hat Sustaining Engineering",
        mission: "The OpenJDK Goblet",
        desc: "Maintained the ancient genetic source code (OpenJDK). Ensured the eternal flame of legacy systems did not go out.",
        icon: <ShieldIcon />
      },
      {
        year: "2019 - 2023",
        role: "Quality Quidditch Captain",
        org: "Red Hat",
        mission: "Room of Requirement",
        desc: "Container testing on RHEL 7/8. Constructed rigorous duel simulations (The Danger Room) to test .NET durability.",
        icon: <Flame />
      },
      {
        year: "2016 - 2018",
        role: "DevOps Auror",
        org: "Kentico Software",
        mission: "Cloud Nimbus 2000",
        desc: "Piloted the Azure Cloud for high-altitude deployment. Monitored global magical frequencies.",
        icon: <Feather />
      },
      {
        year: "2013 - 2015",
        role: "Head Boy & Product Prefect",
        org: "CÍGLER SOFTWARE (iDoklad)",
        mission: "The Alpha Squad",
        desc: "Led the Alpha house. Defined mission parameters (Product Ownership) and ensured team cohesion (Scrum Master).",
        icon: <UsersIcon />
      },
      {
        year: "2009 - 2012",
        role: "Senior .NET Warlock",
        org: "Software Development Europe",
        mission: "International Floo Network",
        desc: "Deployed WPF and Silverlight charms for clients across the globe.",
        icon: <Sparkles />
      },
      {
        year: "2006 - 2009",
        role: "Potions Master & Analyst",
        org: "UNIS COMPUTERS",
        mission: "The Prytanis Translation",
        desc: "Transmuted ancient 4GL scrolls into modern .NET weaponry.",
        icon: <FlaskConical />
      },
      {
        year: "2003 - 2005",
        role: "Muggle Studies Origin",
        org: "Various (Tocoen, Buriánek)",
        mission: "The Sorting Ceremony",
        desc: "First manifestation of magic. Algorithm proposals and ISO 9002 compliance training.",
        icon: <Footprints />
      }
    ],
    certs: [
      "RHCSA Rapid Track (O.W.L.)",
      "OpenShift Admin I (N.E.W.T.)",
      "AI/ML on OpenShift (Alchemy)",
      "Modern Web Kodéřina (Muggle Studies)"
    ],
    education: {
      school: "Masaryk Academy of Magic",
      degree: "Mgr., Analytical Potions (Chemistry)",
      year: "1998 - 2003",
      note: "Studied molecular composition before shifting to digital sorcery."
    }
  };

  useEffect(() => {
    // Simulate Map Reveal "Solemnly Swear"
    const timer = setTimeout(() => {
      setRevealMap(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!revealMap) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[#2a1a11] text-[#d4af37] font-serif cursor-wait">
        <div className="animate-pulse mb-8">
           <Wand2 size={64} />
        </div>
        <h1 className="text-3xl tracking-widest text-center italic opacity-80">
          "I solemnly swear that I am up to no good..."
        </h1>
        <p className="mt-4 text-sm text-[#8b5a2b]">Tapping wand on parchment...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5dc] text-[#4a3728] font-serif selection:bg-[#740001] selection:text-[#d4af37] overflow-hidden flex flex-col md:flex-row relative">
      
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0 mix-blend-multiply" 
           style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/aged-paper.png")` }}></div>
      
      {/* Sidebar / Folded Map Flap */}
      <div className="w-full md:w-80 bg-[#e3dac9] border-r-4 border-[#5c4033] border-double flex flex-col p-6 shadow-2xl z-10 relative">
        <div className="mb-8 text-center relative group">
          <div className="w-32 h-32 mx-auto bg-[#740001] rounded-full border-4 border-[#d4af37] flex items-center justify-center relative z-10 overflow-hidden shadow-lg">
             <span className="text-6xl font-bold text-[#d4af37] drop-shadow-md">R</span>
          </div>
          <h1 className="mt-6 text-2xl font-bold tracking-wider text-[#2a1a11] uppercase border-b-2 border-[#5c4033] pb-2">{wizardProfile.name}</h1>
          <div className="text-[#740001] text-xs font-bold tracking-widest uppercase mt-2 italic">{wizardProfile.title}</div>
          <div className="text-[#5c4033] text-xs mt-1">{wizardProfile.location}</div>
        </div>

        <nav className="space-y-4 flex-grow relative">
          <MenuButton 
            active={activeSection === 'summary'} 
            onClick={() => setActiveSection('summary')} 
            icon={<BookOpen size={20} />} 
            label="Wizard Profile" 
          />
          <MenuButton 
            active={activeSection === 'abilities'} 
            onClick={() => setActiveSection('abilities')} 
            icon={<Wand2 size={20} />} 
            label="Magical Skills" 
          />
          <MenuButton 
            active={activeSection === 'timeline'} 
            onClick={() => setActiveSection('timeline')} 
            icon={<Footprints size={20} />} 
            label="The Journey" 
          />
          <MenuButton 
            active={activeSection === 'training'} 
            onClick={() => setActiveSection('training')} 
            icon={<Scroll size={20} />} 
            label="O.W.L.s & N.E.W.T.s" 
          />
        </nav>

        <div className="mt-8 pt-6 border-t border-[#5c4033] text-xs text-[#5c4033] italic text-center">
          "Mischief Managed"
        </div>
      </div>

      {/* Main Parchment Interface */}
      <div className="flex-1 relative overflow-y-auto z-0">
        <div className="p-8 md:p-12 max-w-5xl mx-auto">
          
          <Header title={activeSection} />

          {activeSection === 'summary' && (
            <div className="space-y-8 animate-fadeIn">
              <ParchmentPanel title={wizardProfile.summary.heading}>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-1 text-lg leading-relaxed text-[#2a1a11]">
                    <p className="mb-4 first-letter:text-5xl first-letter:font-bold first-letter:text-[#740001] first-letter:float-left first-letter:mr-2 leading-7">
                      {wizardProfile.summary.description}
                    </p>
                    <div className="p-4 bg-[#f8f5e6] border-l-4 border-[#740001] rounded shadow-inner mt-6">
                      <h4 className="text-[#740001] font-bold mb-1 flex items-center gap-2">
                        <Feather size={16}/> Daily Prophet Quote
                      </h4>
                      <p className="italic text-sm text-[#5c4033]">"A wizard of exceptional character. Their 'Scrum Master' leadership suggests a natural aptitude for Order of the Phoenix coordination."</p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 space-y-4">
                    <h3 className="text-[#740001] text-sm uppercase tracking-widest border-b border-[#5c4033] pb-2 font-bold">Wand & Traits</h3>
                    <div className="text-sm italic mb-2 text-[#5c4033]">{wizardProfile.wand}</div>
                    {wizardProfile.summary.traits.map((trait, i) => (
                      <div key={i} className="flex items-center gap-3 bg-[#e3dac9] p-3 rounded border border-[#d4af37] shadow-sm">
                        <Star size={14} className="text-[#740001] fill-current" />
                        <span className="font-semibold">{trait}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ParchmentPanel>
            </div>
          )}

          {activeSection === 'abilities' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
              {wizardProfile.skills.map((skill, index) => (
                <div key={index} className="relative p-6 bg-[#f8f5e6] border-2 border-[#5c4033] rounded-sm shadow-md group hover:shadow-xl transition-all duration-300">
                  <div className="absolute -top-3 -left-3 bg-[#740001] text-[#d4af37] p-2 rounded-full border-2 border-[#d4af37] group-hover:rotate-12 transition-transform">
                    {skill.icon}
                  </div>
                  <div className="ml-8">
                    <h3 className="font-bold text-xl text-[#2a1a11] mb-1">{skill.name}</h3>
                    <div className="text-sm text-[#740001] italic mb-3">{skill.type}</div>
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-[#e3dac9] h-3 rounded-full overflow-hidden border border-[#5c4033]">
                        <div 
                          className="bg-[#740001] h-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <span className="font-bold text-[#5c4033]">{skill.level}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'timeline' && (
            <div className="relative animate-fadeIn pl-4 md:pl-0">
              {/* Footprints Path */}
              <div className="absolute left-0 md:left-1/2 h-full w-0 border-l-2 border-dashed border-[#5c4033] transform -translate-x-1/2 hidden md:block opacity-40"></div>
              
              {wizardProfile.timeline.map((item, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center mb-16 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Footsteps Icon */}
                  <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-[#f5f5dc] border-2 border-[#5c4033] rounded-full transform -translate-x-1/2 flex items-center justify-center z-10 text-[#740001]">
                    <Footprints size={20} className={index % 2 === 0 ? "scale-x-[-1]" : ""} />
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-10 md:ml-0 ${index % 2 === 0 ? 'md:pl-16 text-left' : 'md:pr-16 md:text-right'}`}>
                    <div className="bg-[#f8f5e6] border border-[#5c4033] p-6 shadow-md relative group hover:-translate-y-1 transition-transform duration-300">
                      <div className="absolute top-0 left-0 w-full h-1 bg-[#740001] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className={`flex items-center gap-2 mb-2 text-[#5c4033] font-bold text-sm ${index % 2 === 0 ? '' : 'md:flex-row-reverse md:justify-start'}`}>
                        <span>{item.year}</span>
                        <div className="h-px bg-[#5c4033] flex-grow opacity-30"></div>
                      </div>
                      <h3 className="text-xl font-bold text-[#740001] mb-1 font-serif">{item.mission}</h3>
                      <div className="text-[#2a1a11] font-semibold mb-3 italic">{item.role} @ {item.org}</div>
                      <p className="text-sm text-[#4a3728] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'training' && (
            <div className="space-y-8 animate-fadeIn">
              <ParchmentPanel title="Academic Achievements">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {wizardProfile.certs.map((cert, i) => (
                      <div key={i} className="flex items-center p-4 bg-[#f8f5e6] border border-[#5c4033] border-dashed hover:bg-[#fffdf5] transition-colors">
                         <div className="text-[#740001] mr-4">
                           <Sparkles size={24} />
                         </div>
                         <span className="font-semibold text-[#2a1a11] font-serif">{cert}</span>
                      </div>
                    ))}
                 </div>
              </ParchmentPanel>

              <ParchmentPanel title="Magical Education">
                <div className="flex items-start gap-6 p-4">
                  <div className="p-4 bg-[#740001] rounded-sm shadow-lg text-[#d4af37]">
                    <Castle size={40} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2a1a11]">{wizardProfile.education.school}</h3>
                    <div className="text-xl text-[#740001] mb-2 italic">{wizardProfile.education.degree}</div>
                    <div className="text-sm font-bold text-[#5c4033] mb-2">{wizardProfile.education.year}</div>
                    <p className="text-[#4a3728]">"{wizardProfile.education.note}"</p>
                  </div>
                </div>
              </ParchmentPanel>
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
    className={`w-full flex items-center gap-3 px-4 py-3 transition-all duration-200 group border-b border-transparent ${
      active 
      ? 'text-[#740001] bg-[#d4c5a9] font-bold border-[#740001]' 
      : 'text-[#5c4033] hover:text-[#2a1a11] hover:bg-[#eee8dc]'
    }`}
  >
    <span className={`${active ? 'animate-bounce' : ''}`}>{icon}</span>
    <span className="tracking-wide uppercase text-sm font-serif">{label}</span>
  </button>
);

const ParchmentPanel = ({ title, children }) => (
  <div className="bg-[#f8f5e6] border-2 border-[#5c4033] p-8 shadow-lg relative">
    {/* Corner Decorations */}
    <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#740001]"></div>
    <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#740001]"></div>
    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#740001]"></div>
    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#740001]"></div>
    
    <h3 className="text-[#740001] font-serif text-xl font-bold uppercase tracking-widest mb-6 border-b-2 border-[#5c4033] pb-2 inline-block">
      {title}
    </h3>
    {children}
  </div>
);

const Header = ({ title }) => {
  const titles = {
    summary: "Personnel File",
    abilities: "Proficiency Chart",
    timeline: "The Marauder's Path",
    training: "O.W.L. Results"
  };

  return (
    <div className="mb-12 text-center relative">
      <h2 className="text-5xl font-bold text-[#2a1a11] font-serif tracking-tight drop-shadow-sm">
        {titles[title]}
      </h2>
      <div className="flex justify-center mt-2 opacity-60">
        <div className="h-1 w-24 bg-[#740001] rounded-full"></div>
      </div>
    </div>
  );
};

// Helper Icons for JSX
const ShieldIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);

const UsersIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);

export default CareerMap;