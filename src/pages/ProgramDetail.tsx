import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Briefcase, Code, Palette, BarChart3, Globe, Zap, Gamepad2, Calculator } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import GlassCard from "@/components/GlassCard";

const programsData = {
  "sistem-informasi": {
    icon: Globe,
    name: "Sistem Informasi",
    tagline: "Build the Digital Infrastructure",
    color: "from-blue-400 to-cyan-400",
    description: "Program Sistem Informasi membekali mahasiswa dengan kemampuan untuk merancang, mengembangkan, dan mengelola sistem informasi yang mendukung operasional bisnis. Kurikulum mencakup analisis sistem, database management, dan enterprise systems.",
    skills: [
      "Database Design & Management",
      "System Analysis & Design",
      "Business Process Modeling",
      "ERP Implementation",
      "Data Analytics",
      "Project Management",
      "Cloud Computing",
      "Cybersecurity Basics",
    ],
    projects: [
      "Sistem Inventory Management untuk UMKM",
      "Platform E-Learning Interaktif",
      "Aplikasi HR Management System",
      "Dashboard Business Intelligence",
    ],
    careers: [
      "System Analyst",
      "Database Administrator",
      "IT Project Manager",
      "Business Analyst",
      "ERP Consultant",
      "Data Engineer",
    ],
  },
  "e-commerce": {
    icon: Zap,
    name: "E-Commerce",
    tagline: "Master Digital Business",
    color: "from-purple-400 to-pink-400",
    description: "Program E-Commerce dirancang untuk mencetak ahli bisnis digital yang mampu mengelola toko online, marketplace, dan strategi digital marketing. Mahasiswa akan mempelajari ekosistem e-commerce dari hulu ke hilir.",
    skills: [
      "Digital Marketing Strategy",
      "Marketplace Management",
      "SEO & SEM",
      "Social Media Marketing",
      "E-Commerce Platform Development",
      "Customer Experience Design",
      "Payment Gateway Integration",
      "Analytics & Performance Tracking",
    ],
    projects: [
      "Toko Online dengan Full Payment Integration",
      "Campaign Digital Marketing untuk Brand Lokal",
      "Marketplace Aggregator Platform",
      "Social Commerce Application",
    ],
    careers: [
      "Digital Marketing Manager",
      "E-Commerce Manager",
      "SEO Specialist",
      "Social Media Strategist",
      "Growth Hacker",
      "Product Manager",
    ],
  },
  "game-technology": {
    icon: Gamepad2,
    name: "Game Technology",
    tagline: "Create Immersive Experiences",
    color: "from-orange-400 to-red-400",
    description: "Program Game Technology menawarkan pengalaman belajar pengembangan game dari konsep hingga publikasi. Mahasiswa akan menguasai game engine, 3D modeling, dan desain game dengan standar industri.",
    skills: [
      "Unity & Unreal Engine",
      "3D Modeling & Animation",
      "Game Design Document",
      "Level Design",
      "VR/AR Development",
      "Mobile Game Development",
      "AI for Games",
      "Sound Design",
    ],
    projects: [
      "Mobile Puzzle Game dengan 50+ Levels",
      "VR Experience untuk Edukasi",
      "Multiplayer Online Battle Game",
      "AR Interactive Learning App",
    ],
    careers: [
      "Game Developer",
      "Game Designer",
      "3D Artist",
      "VR/AR Developer",
      "Technical Artist",
      "Game Producer",
    ],
  },
  "akuntansi-si": {
    icon: Calculator,
    name: "Akuntansi Sistem Informasi",
    tagline: "Integrate Finance & Technology",
    color: "from-green-400 to-teal-400",
    description: "Program unik yang mengintegrasikan ilmu akuntansi dengan teknologi informasi. Lulusan akan memiliki keahlian ganda sebagai akuntan sekaligus ahli sistem informasi akuntansi.",
    skills: [
      "Financial Accounting",
      "Management Accounting",
      "Accounting Information Systems",
      "Audit & Assurance",
      "Tax Technology",
      "Financial Analytics",
      "ERP Finance Modules",
      "Blockchain for Finance",
    ],
    projects: [
      "Sistem Akuntansi Terintegrasi untuk Startup",
      "Dashboard Financial Reporting",
      "Tax Calculation Automation App",
      "Audit Management System",
    ],
    careers: [
      "IT Auditor",
      "Financial Analyst",
      "Accounting System Consultant",
      "Tax Technology Specialist",
      "Finance Controller",
      "Risk Analyst",
    ],
  },
};

const ProgramDetail = () => {
  const { programId } = useParams<{ programId: string }>();
  const program = programsData[programId as keyof typeof programsData];

  if (!program) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-navy mb-4">Program tidak ditemukan</h1>
          <Link to="/programs" className="text-glow-blue hover:underline">
            Kembali ke daftar program
          </Link>
        </div>
      </div>
    );
  }

  const Icon = program.icon;

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className={absolute top-20 right-20 w-96 h-96 bg-gradient-to-br ${program.color} opacity-20 rounded-full blur-[100px]} />
        
        <div className="container mx-auto relative z-10">
          <ScrollAnimation animation="fade-up">
            <Link to="/programs" className="inline-flex items-center gap-2 text-muted-foreground hover:text-navy mb-8 transition-colors">
              <ArrowLeft size={18} />
              Kembali ke Programs
            </Link>
          </ScrollAnimation>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <ScrollAnimation animation="scale-in">
              <div className={w-20 h-20 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center shadow-lg}>
                <Icon size={40} className="text-white" />
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={100} className="flex-1">
              <span className="text-sm font-medium text-glow-blue">{program.tagline}</span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-navy mt-2 mb-4">
                {program.name}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                {program.description}
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <ScrollAnimation animation="fade-up">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-soft-blue/30 flex items-center justify-center">
                <Code size={20} className="text-navy" />
              </div>
              <h2 className="font-display text-2xl font-bold text-navy">Skills yang Dipelajari</h2>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {program.skills.map((skill, index) => (
              <ScrollAnimation key={skill} animation="fade-up" delay={index * 50}>
                <GlassCard className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-glow-blue flex-shrink-0" />
                  <span className="text-navy font-medium">{skill}</span>
                </GlassCard>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 px-6 bg-gradient-to-b from-background to-baby-blue/10">
        <div className="container mx-auto">
          <ScrollAnimation animation="fade-up">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-soft-blue/30 flex items-center justify-center">
                <Palette size={20} className="text-navy" />
              </div>
              <h2 className="font-display text-2xl font-bold text-navy">Contoh Project</h2>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-6">
            {program.projects.map((project, index) => (
              <ScrollAnimation key={project} animation="slide-in" delay={index * 100}>
                <GlassCard className="flex items-start gap-4">
                  <div className={w-12 h-12 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center flex-shrink-0}>
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">{project}</h3>
                    <p className="text-sm text-muted-foreground mt-1">Project berbasis industri</p>
                  </div>
                </GlassCard>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <ScrollAnimation animation="fade-up">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-soft-blue/30 flex items-center justify-center">
                <Briefcase size={20} className="text-navy" />
              </div>
              <h2 className="font-display text-2xl font-bold text-navy">Prospek Karir</h2>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-4">
            {program.careers.map((career, index) => (
              <ScrollAnimation key={career} animation="fade-up" delay={index * 50}>
                <GlassCard className="text-center">
                  <BarChart3 size={24} className="mx-auto text-glow-blue mb-3" />
                  <h3 className="font-semibold text-navy">{career}</h3>
                </GlassCard>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <ScrollAnimation animation="scale-in">
            <div className={relative rounded-3xl overflow-hidden}>
              <div className={absolute inset-0 bg-gradient-to-br ${program.color}} />
              <div className="relative z-10 py-12 px-8 text-center">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                  Tertarik dengan {program.name}?
                </h2>
                <p className="text-white/80 max-w-xl mx-auto mb-8">
                  Daftarkan dirimu sekarang dan mulai perjalanan karirmu di dunia teknologi
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-navy font-semibold shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Daftar Sekarang
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default ProgramDetail;
