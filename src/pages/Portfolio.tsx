import { useState } from "react";
import { ExternalLink, Gamepad2, Globe, Smartphone, ShoppingCart } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", name: "Semua", icon: null },
  { id: "game", name: "Game", icon: Gamepad2 },
  { id: "website", name: "Website", icon: Globe },
  { id: "mobile", name: "Mobile App", icon: Smartphone },
  { id: "ecommerce", name: "E-Commerce", icon: ShoppingCart },
];

const portfolioItems = [
  {
    id: 1,
    title: "Space Odyssey VR",
    category: "game",
    image: "https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=600&h=400&fit=crop",
    author: "Tim Galaksi",
    year: "2024",
    desc: "Game VR eksplorasi luar angkasa dengan grafis stunning",
  },
  {
    id: 2,
    title: "TokoBaju.id",
    category: "ecommerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    author: "Team Commerce",
    year: "2024",
    desc: "Platform fashion e-commerce dengan AI recommendation",
  },
  {
    id: 3,
    title: "HealthTrack App",
    category: "mobile",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    author: "Tim Sehat",
    year: "2023",
    desc: "Aplikasi tracking kesehatan dengan integrasi wearable",
  },
  {
    id: 4,
    title: "EduLearn Platform",
    category: "website",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
    author: "Tim Edukasi",
    year: "2024",
    desc: "Platform e-learning interaktif untuk siswa Indonesia",
  },
  {
    id: 5,
    title: "Puzzle Nusantara",
    category: "game",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop",
    author: "Team Puzzle",
    year: "2023",
    desc: "Mobile game puzzle dengan tema budaya Indonesia",
  },
  {
    id: 6,
    title: "SmartPOS System",
    category: "ecommerce",
    image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&h=400&fit=crop",
    author: "Team Retail",
    year: "2024",
    desc: "Sistem POS modern untuk retail dengan analytics",
  },
  {
    id: 7,
    title: "TravelMate",
    category: "mobile",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
    author: "Tim Wanderer",
    year: "2023",
    desc: "Aplikasi travel companion dengan AR navigation",
  },
  {
    id: 8,
    title: "Corporate Dashboard",
    category: "website",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    author: "Tim Analytics",
    year: "2024",
    desc: "Dashboard business intelligence untuk enterprise",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute top-10 right-10 w-80 h-80 bg-soft-blue/30 rounded-full blur-[100px]" />
        
        <div className="container mx-auto relative z-10 text-center">
          <ScrollAnimation animation="fade-up">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-navy mb-6">
              Portfolio & Prestasi
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Karya terbaik dari mahasiswa SIEGA yang telah menghasilkan project-project inovatif
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 px-6 sticky top-20 z-40">
        <div className="container mx-auto">
          <ScrollAnimation animation="fade-down">
            <div className="flex flex-wrap justify-center gap-3 p-4 rounded-2xl glass">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300",
                    activeCategory === cat.id
                      ? "bg-navy text-white shadow-button"
                      : "text-navy hover:bg-white/50"
                  )}
                >
                  {cat.icon && <cat.icon size={16} />}
                  {cat.name}
                </button>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <ScrollAnimation key={item.id} animation="scale-in" delay={index * 50}>
                <div className="group relative rounded-2xl overflow-hidden glass-card hover:shadow-glow transition-all duration-500">
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <span className="text-soft-blue text-sm font-medium">{item.category.toUpperCase()} • {item.year}</span>
                    <h3 className="text-white font-display font-bold text-lg mt-1">{item.title}</h3>
                    <p className="text-white/70 text-sm mt-2 line-clamp-2">{item.desc}</p>
                    <p className="text-white/50 text-xs mt-3">by {item.author}</p>
                    
                    <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                      <ExternalLink size={18} />
                    </button>
                  </div>

                  {/* Info (visible by default) */}
                  <div className="p-4 group-hover:opacity-0 transition-opacity duration-300">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">{item.category}</span>
                    <h3 className="font-semibold text-navy mt-1">{item.title}</h3>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-baby-blue/10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "200+", label: "Project Selesai" },
              { value: "50+", label: "Penghargaan" },
              { value: "30+", label: "Kompetisi Nasional" },
              { value: "15+", label: "Startup Mahasiswa" },
            ].map((stat, index) => (
              <ScrollAnimation key={stat.label} animation="scale-in" delay={index * 100}>
                <div className="glass-card rounded-2xl p-6">
                  <div className="font-display text-4xl font-bold text-navy glow-text">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground mt-2">{stat.label}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
