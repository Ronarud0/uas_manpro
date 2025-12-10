import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Zap, Globe, Gamepad2 } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import GlassCard from "@/components/GlassCard";

const Index = () => {
  const programs = [
    { icon: Globe, name: "Sistem Informasi", path: "/programs/sistem-informasi" },
    { icon: Zap, name: "E-Commerce", path: "/programs/e-commerce" },
    { icon: Gamepad2, name: "Game Technology", path: "/programs/game-technology" },
    { icon: Sparkles, name: "Akuntansi SI", path: "/programs/akuntansi-si" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-soft-blue/30 rounded-full blur-[80px] animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-baby-blue/40 rounded-full blur-[100px] animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow-blue/10 rounded-full blur-[120px]" />
        </div>

        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 bg-soft-blue/40 rounded-full animate-float"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + i}s`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 pt-24 pb-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation animation="fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
                <Sparkles size={16} className="text-glow-blue" />
                <span className="text-sm font-medium text-navy">Future of Education</span>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={100}>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-navy mb-6 leading-tight">
                SIEGA
                <span className="block text-3xl md:text-4xl font-semibold mt-2 text-gradient">
                  Explore Future Technology & Digital Innovation
                </span>
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={200}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                Program teknologi modern yang menggabungkan sistem informasi, bisnis digital, 
                game development, dan akuntansi digital untuk mempersiapkan generasi masa depan.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/programs"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-navy text-white font-semibold shadow-button hover:scale-105 hover:shadow-glow transition-all duration-300"
                >
                  Explore Programs
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass border-2 border-navy/20 text-navy font-semibold hover-glow transition-all duration-300"
                >
                  Daftar Sekarang
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-navy/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-navy/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto">
          <ScrollAnimation animation="fade-up" className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
              4 Program Unggulan
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Pilih jalur karir teknologi yang sesuai dengan passion dan minat kamu
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <ScrollAnimation key={program.name} animation="fade-up" delay={index * 100}>
                <Link to={program.path}>
                  <GlassCard className="h-full group">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-soft-blue to-baby-blue flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <program.icon size={28} className="text-navy" />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-navy mb-2">
                      {program.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Pelajari lebih lanjut tentang program ini
                    </p>
                    <ArrowRight size={16} className="mt-4 text-glow-blue group-hover:translate-x-2 transition-transform duration-300" />
                  </GlassCard>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-soft-blue/20 via-transparent to-baby-blue/20" />
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "1000+", label: "Mahasiswa Aktif" },
              { value: "95%", label: "Tingkat Kelulusan" },
              { value: "50+", label: "Partner Industri" },
              { value: "4", label: "Program Studi" },
            ].map((stat, index) => (
              <ScrollAnimation key={stat.label} animation="scale-in" delay={index * 100}>
                <div className="text-center">
                  <div className="font-display text-4xl md:text-5xl font-bold text-navy mb-2 glow-text">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <ScrollAnimation animation="scale-in">
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-navy" />
              <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-96 h-96 bg-soft-blue/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-glow-blue/20 rounded-full blur-[80px]" />
              </div>
              <div className="relative z-10 py-16 px-8 md:px-16 text-center">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                  Siap Memulai Perjalanan Digital?
                </h2>
                <p className="text-white/70 max-w-xl mx-auto mb-8">
                  Bergabung dengan ribuan mahasiswa yang telah memilih SIEGA untuk masa depan mereka
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-soft-blue to-baby-blue text-navy font-semibold shadow-button hover:scale-105 transition-all duration-300"
                >
                  Daftar Sekarang
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Index;
