import { CheckCircle2, Users, BookOpen, Briefcase, Award, Target, Lightbulb, Rocket } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import GlassCard from "@/components/GlassCard";

const About = () => {
  const advantages = [
    { icon: Lightbulb, title: "Modern & Futuristik", desc: "Kurikulum yang selalu update mengikuti perkembangan teknologi terkini" },
    { icon: Users, title: "Kolaborasi Multi-bidang", desc: "Kesempatan berkolaborasi lintas program untuk proyek inovatif" },
    { icon: BookOpen, title: "Project-based Learning", desc: "Belajar melalui proyek nyata dan studi kasus industri" },
    { icon: Award, title: "Dosen Berpengalaman", desc: "Pengajar profesional dari industri dan akademisi terkemuka" },
    { icon: Briefcase, title: "Siap Kerja", desc: "Lulusan dibekali skill praktis yang dibutuhkan industri" },
    { icon: Rocket, title: "Siap Bisnis", desc: "Program kewirausahaan untuk menciptakan startup sendiri" },
  ];

  const timeline = [
    { year: "2018", title: "Pendirian SIEGA", desc: "Awal mula perjalanan dengan fokus pada teknologi informasi" },
    { year: "2019", title: "Akreditasi A", desc: "Mendapatkan akreditasi A dari BAN-PT" },
    { year: "2020", title: "Ekspansi Program", desc: "Menambah program E-Commerce dan Game Technology" },
    { year: "2022", title: "Partnership Industri", desc: "Kerjasama dengan 50+ perusahaan teknologi" },
    { year: "2024", title: "Inovasi Kurikulum", desc: "Kurikulum berbasis AI dan teknologi masa depan" },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute top-20 right-20 w-80 h-80 bg-soft-blue/30 rounded-full blur-[100px]" />
        
        <div className="container mx-auto relative z-10">
          <ScrollAnimation animation="fade-up" className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-navy mb-6">
              Tentang SIEGA
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              SIEGA adalah program pendidikan inovatif yang menggabungkan 4 kompetensi 
              teknologi utama: Sistem Informasi, E-Commerce, Game Technology, dan 
              Akuntansi Sistem Informasi. Kami berkomitmen menciptakan lulusan yang 
              siap menghadapi tantangan era digital.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Vision Mission */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollAnimation animation="fade-up">
              <GlassCard className="h-full" hover={false}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-soft-blue to-glow-blue flex items-center justify-center mb-4">
                  <Target size={24} className="text-navy" />
                </div>
                <h3 className="font-display text-2xl font-bold text-navy mb-4">Visi</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Menjadi pusat pendidikan teknologi terdepan di Indonesia yang menghasilkan 
                  lulusan berkualitas, inovatif, dan berdaya saing global dalam era digital.
                </p>
              </GlassCard>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={100}>
              <GlassCard className="h-full" hover={false}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-baby-blue to-soft-blue flex items-center justify-center mb-4">
                  <Rocket size={24} className="text-navy" />
                </div>
                <h3 className="font-display text-2xl font-bold text-navy mb-4">Misi</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-glow-blue mt-1 flex-shrink-0" />
                    <span>Menyelenggarakan pendidikan berkualitas berbasis teknologi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-glow-blue mt-1 flex-shrink-0" />
                    <span>Mengembangkan riset dan inovasi yang bermanfaat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-glow-blue mt-1 flex-shrink-0" />
                    <span>Membangun kerjasama dengan industri teknologi</span>
                  </li>
                </ul>
              </GlassCard>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-baby-blue/10">
        <div className="container mx-auto">
          <ScrollAnimation animation="fade-up" className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
              Keunggulan Kami
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Apa yang membuat SIEGA berbeda dari yang lain
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((item, index) => (
              <ScrollAnimation key={item.title} animation="fade-up" delay={index * 100}>
                <GlassCard className="h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-soft-blue/50 to-baby-blue/50 flex items-center justify-center mb-4">
                    <item.icon size={24} className="text-navy" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </GlassCard>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <ScrollAnimation animation="fade-up" className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
              Perjalanan SIEGA
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Timeline perkembangan program kami
            </p>
          </ScrollAnimation>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <ScrollAnimation key={item.year} animation="slide-in" delay={index * 100}>
                <div className="relative pl-8 pb-12 border-l-2 border-soft-blue last:pb-0">
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-gradient-to-br from-soft-blue to-glow-blue glow" />
                  <div className="glass-card rounded-xl p-6 ml-4">
                    <span className="text-sm font-semibold text-glow-blue">{item.year}</span>
                    <h3 className="font-display font-bold text-navy text-lg mt-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mt-2">{item.desc}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
