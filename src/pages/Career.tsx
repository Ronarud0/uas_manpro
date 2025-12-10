import { 
  Code, 
  Palette, 
  BarChart3, 
  Shield, 
  Gamepad2, 
  TrendingUp, 
  Globe, 
  Briefcase,
  LineChart,
  Database,
  Megaphone,
  Calculator
} from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import GlassCard from "@/components/GlassCard";

const careers = [
  {
    icon: Code,
    title: "Web Developer",
    desc: "Membangun aplikasi web modern dengan teknologi terkini",
    salary: "Rp 8-25 juta/bulan",
    demand: "Sangat Tinggi",
  },
  {
    icon: BarChart3,
    title: "System Analyst",
    desc: "Menganalisis dan merancang sistem informasi untuk organisasi",
    salary: "Rp 10-30 juta/bulan",
    demand: "Tinggi",
  },
  {
    icon: Gamepad2,
    title: "Game Developer",
    desc: "Menciptakan game mobile, PC, dan console yang engaging",
    salary: "Rp 8-20 juta/bulan",
    demand: "Tinggi",
  },
  {
    icon: Palette,
    title: "UI/UX Designer",
    desc: "Mendesain pengalaman pengguna yang intuitif dan menarik",
    salary: "Rp 7-18 juta/bulan",
    demand: "Sangat Tinggi",
  },
  {
    icon: Megaphone,
    title: "Digital Marketer",
    desc: "Mengelola strategi pemasaran digital dan brand awareness",
    salary: "Rp 6-15 juta/bulan",
    demand: "Sangat Tinggi",
  },
  {
    icon: Shield,
    title: "IT Auditor",
    desc: "Mengaudit sistem teknologi informasi dan keamanan data",
    salary: "Rp 12-35 juta/bulan",
    demand: "Tinggi",
  },
  {
    icon: LineChart,
    title: "Data Analyst",
    desc: "Mengolah dan menganalisis data untuk pengambilan keputusan",
    salary: "Rp 10-25 juta/bulan",
    demand: "Sangat Tinggi",
  },
  {
    icon: TrendingUp,
    title: "Business Strategist",
    desc: "Merancang strategi bisnis digital untuk pertumbuhan perusahaan",
    salary: "Rp 15-40 juta/bulan",
    demand: "Tinggi",
  },
  {
    icon: Database,
    title: "Database Administrator",
    desc: "Mengelola dan mengoptimalkan database sistem perusahaan",
    salary: "Rp 10-25 juta/bulan",
    demand: "Tinggi",
  },
  {
    icon: Globe,
    title: "E-Commerce Manager",
    desc: "Mengelola operasional toko online dan marketplace",
    salary: "Rp 12-30 juta/bulan",
    demand: "Sangat Tinggi",
  },
  {
    icon: Calculator,
    title: "Financial Analyst",
    desc: "Menganalisis keuangan dengan dukungan teknologi modern",
    salary: "Rp 12-35 juta/bulan",
    demand: "Tinggi",
  },
  {
    icon: Briefcase,
    title: "Product Manager",
    desc: "Mengelola pengembangan produk digital dari konsep hingga launch",
    salary: "Rp 15-45 juta/bulan",
    demand: "Sangat Tinggi",
  },
];

const partners = [
  "Google", "Microsoft", "Tokopedia", "Gojek", "Shopee", 
  "Bukalapak", "Telkom", "BCA", "Mandiri", "Astra"
];

const Career = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-soft-blue/30 rounded-full blur-[100px]" />
        
        <div className="container mx-auto relative z-10 text-center">
          <ScrollAnimation animation="fade-up">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-navy mb-6">
              Prospek Karir
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Lulusan SIEGA memiliki berbagai peluang karir yang menjanjikan 
              di industri teknologi dan bisnis digital
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Career Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {careers.map((career, index) => (
              <ScrollAnimation key={career.title} animation="fade-up" delay={index * 50}>
                <GlassCard className="h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-soft-blue to-baby-blue flex items-center justify-center mb-4">
                    <career.icon size={24} className="text-navy" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-navy mb-2">
                    {career.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {career.desc}
                  </p>
                  <div className="space-y-2 pt-4 border-t border-border/50">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Gaji</span>
                      <span className="font-medium text-navy">{career.salary}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Demand</span>
                      <span className={`font-medium ${career.demand === "Sangat Tinggi" ? "text-green-600" : "text-glow-blue"}`}>
                        {career.demand}
                      </span>
                    </div>
                  </div>
                </GlassCard>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Partners */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-baby-blue/10">
        <div className="container mx-auto">
          <ScrollAnimation animation="fade-up" className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-navy mb-4">
              Partner Industri
            </h2>
            <p className="text-muted-foreground">
              Lulusan kami bekerja di perusahaan-perusahaan terkemuka
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={100}>
            <div className="flex flex-wrap justify-center gap-6">
              {partners.map((partner, index) => (
                <div
                  key={partner}
                  className="px-8 py-4 rounded-xl glass-card font-display font-semibold text-navy/70 hover:text-navy hover:shadow-glow transition-all duration-300"
                >
                  {partner}
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Employment Stats */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: "95%", label: "Tingkat Penyerapan Kerja", desc: "Dalam 6 bulan setelah lulus" },
              { value: "Rp 12 Juta", label: "Rata-rata Gaji Awal", desc: "Untuk fresh graduate" },
              { value: "85%", label: "Bekerja Sesuai Bidang", desc: "Di industri teknologi & digital" },
            ].map((stat, index) => (
              <ScrollAnimation key={stat.label} animation="scale-in" delay={index * 100}>
                <div className="glass-card rounded-2xl p-8 text-center">
                  <div className="font-display text-5xl font-bold text-navy glow-text mb-2">
                    {stat.value}
                  </div>
                  <div className="font-semibold text-navy mb-2">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.desc}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
