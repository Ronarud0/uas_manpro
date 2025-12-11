import { Link } from "react-router-dom";
import { Globe, Zap, Gamepad2, Calculator, ArrowRight } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";

const programs = [
  {
    id: "sistem-informasi",
    icon: Globe,
    name: "Sistem Informasi",
    tagline: "Build the Digital Infrastructure",
    desc: "Pelajari cara merancang, mengembangkan, dan mengelola sistem informasi yang efektif untuk organisasi modern.",
    color: "from-blue-400 to-cyan-400",
  },
  {
    id: "e-commerce",
    icon: Zap,
    name: "E-Commerce",
    tagline: "Master Digital Business",
    desc: "Kuasai strategi bisnis digital, marketplace management, dan digital marketing untuk era ekonomi digital.",
    color: "from-purple-400 to-pink-400",
  },
  {
    id: "game-technology",
    icon: Gamepad2,
    name: "Game Technology",
    tagline: "Create Immersive Experiences",
    desc: "Eksplorasi pengembangan game, VR/AR, dan teknologi interaktif dengan tools industri terkini.",
    color: "from-orange-400 to-red-400",
  },
  {
    id: "akuntansi-si",
    icon: Calculator,
    name: "Akuntansi Sistem Informasi",
    tagline: "Integrate Finance & Technology",
    desc: "Kombinasi unik antara keahlian akuntansi dan teknologi informasi untuk karir di era digital.",
    color: "from-green-400 to-teal-400",
  },
];

const Programs = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute top-10 left-10 w-96 h-96 bg-soft-blue/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-baby-blue/30 rounded-full blur-[80px]" />
        
        <div className="container mx-auto relative z-10 text-center">
          <ScrollAnimation animation="fade-up">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-navy mb-6">
              Program Studi
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pilih program yang sesuai dengan passion dan tujuan karir kamu. 
              Setiap program dirancang untuk mempersiapkan kamu menghadapi industri digital.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <ScrollAnimation key={program.id} animation="fade-up" delay={index * 100}>
                <Link to={/programs/${program.id}}>
                  <div className="group relative h-full">
                    {/* Card */}
                    <div className="relative glass-card rounded-3xl p-8 h-full overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-glow">
                      {/* Gradient overlay on hover */}
                      <div className={absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500} />
                      
                      {/* Icon */}
                      <div className={w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg}>
                        <program.icon size={32} className="text-white" />
                      </div>

                      {/* Content */}
                      <div className="relative z-10">
                        <span className="text-sm font-medium text-glow-blue">{program.tagline}</span>
                        <h3 className="font-display text-2xl font-bold text-navy mt-2 mb-4">
                          {program.name}
                        </h3>
                        <p className="text-muted-foreground mb-6">{program.desc}</p>
                        
                        <div className="flex items-center text-navy font-medium group-hover:text-glow-blue transition-colors">
                          <span>Pelajari lebih lanjut</span>
                          <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </div>

                      {/* Decorative element */}
                      <div className={absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${program.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500} />
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-baby-blue/10">
        <div className="container mx-auto">
          <ScrollAnimation animation="scale-in">
            <div className="glass-card rounded-3xl p-12 text-center max-w-2xl mx-auto">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-4">
                Masih bingung pilih program?
              </h2>
              <p className="text-muted-foreground mb-8">
                Konsultasikan dengan tim kami untuk menemukan program yang paling cocok dengan minat dan bakat kamu.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-navy text-white font-semibold shadow-button hover:scale-105 hover:shadow-glow transition-all duration-300"
              >
                Hubungi Kami
                <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Programs;
