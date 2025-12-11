
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import { cn } from "@/lib/utils";

const faqData = [
  {
    category: "Pendaftaran",
    questions: [
      {
        q: "Bagaimana cara mendaftar di SIEGA?",
        a: "Pendaftaran dapat dilakukan secara online melalui website kami atau datang langsung ke kampus. Siapkan dokumen seperti ijazah, rapor, foto, dan KTP. Proses seleksi meliputi tes tertulis dan wawancara."
      },
      {
        q: "Kapan periode pendaftaran dibuka?",
        a: "Pendaftaran dibuka dalam 3 gelombang: Gelombang 1 (Januari-Maret), Gelombang 2 (April-Juni), dan Gelombang 3 (Juli-Agustus). Disarankan mendaftar di gelombang awal untuk mendapat benefit lebih."
      },
      {
        q: "Berapa biaya kuliah di SIEGA?",
        a: "Biaya kuliah bervariasi tergantung program studi dan gelombang pendaftaran. Tersedia berbagai skema beasiswa untuk mahasiswa berprestasi dan yang membutuhkan bantuan finansial. Hubungi admisi untuk informasi detail."
      },
    ]
  },
  {
    category: "Fasilitas",
    questions: [
      {
        q: "Fasilitas apa saja yang tersedia?",
        a: "SIEGA menyediakan fasilitas lengkap: Lab komputer dengan PC gaming specs tinggi, Lab VR/AR, Co-working space, Perpustakaan digital, Ruang kelas smart, Cafeteria, dan Musholla."
      },
      {
        q: "Apakah ada fasilitas untuk mahasiswa game technology?",
        a: "Ya! Tersedia Game Development Lab dengan Unity & Unreal workstations, VR headsets (Oculus Quest, HTC Vive), Motion capture studio, dan Sound recording room."
      },
    ]
  },
  {
    category: "Mata Kuliah",
    questions: [
      {
        q: "Apa saja mata kuliah unggulan?",
        a: "Setiap program memiliki mata kuliah unggulan: SI (ERP, Data Analytics), E-Commerce (Digital Marketing, UX Design), Game Tech (Game Engine, 3D Modeling), Akuntansi SI (Financial Tech, IT Audit)."
      },
      {
        q: "Apakah ada program magang?",
        a: "Ya, program magang wajib dilakukan di semester 6-7. Kami bekerja sama dengan 50+ perusahaan teknologi untuk penempatan magang. Banyak mahasiswa yang langsung direkrut setelah magang."
      },
      {
        q: "Berapa lama masa studi?",
        a: "Masa studi reguler adalah 4 tahun (8 semester). Mahasiswa berprestasi dapat menyelesaikan lebih cepat dalam 3.5 tahun melalui program akselerasi."
      },
    ]
  },
  {
    category: "Aktivitas Mahasiswa",
    questions: [
      {
        q: "Organisasi apa saja yang ada?",
        a: "Tersedia berbagai UKM dan komunitas: Game Dev Club, E-Commerce Society, Coding Club, UI/UX Community, Photography Club, dan masih banyak lagi. Mahasiswa bebas bergabung sesuai minat."
      },
      {
        q: "Apakah ada kompetisi yang diikuti?",
        a: "Mahasiswa SIEGA aktif mengikuti kompetisi nasional dan internasional seperti Gemastik, Global Game Jam, Google Developer Student Club, dan berbagai hackathon."
      },
    ]
  },
  {
    category: "Peluang Kerja",
    questions: [
      {
        q: "Bagaimana tingkat penyerapan kerja lulusan?",
        a: "95% lulusan SIEGA terserap di industri dalam waktu 6 bulan setelah kelulusan. Banyak yang bekerja di perusahaan teknologi besar seperti Gojek, Tokopedia, Shopee, dan startup unicorn lainnya."
      },
      {
        q: "Apakah ada program career center?",
        a: "Ya, Career Development Center kami aktif membantu mahasiswa dengan job fair, career coaching, CV review, interview preparation, dan networking dengan alumni dan industri."
      },
    ]
  },
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(i => i !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute top-20 left-20 w-80 h-80 bg-soft-blue/30 rounded-full blur-[100px]" />
        
        <div className="container mx-auto relative z-10 text-center">
          <ScrollAnimation animation="fade-up">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-soft-blue to-baby-blue flex items-center justify-center mx-auto mb-6">
              <HelpCircle size={32} className="text-navy" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-navy mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Temukan jawaban untuk pertanyaan yang sering diajukan tentang SIEGA
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          {faqData.map((category, catIndex) => (
            <ScrollAnimation key={category.category} animation="fade-up" delay={catIndex * 100}>
              <div className="mb-12">
                <h2 className="font-display text-xl font-bold text-navy mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-soft-blue/30 flex items-center justify-center text-sm">
                    {catIndex + 1}
                  </span>
                  {category.category}
                </h2>
                
                <div className="space-y-3">
                  {category.questions.map((faq, qIndex) => {
                    const itemId = ${catIndex}-${qIndex};
                    const isOpen = openItems.includes(itemId);
                    
                    return (
                      <div
                        key={itemId}
                        className="glass-card rounded-xl overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(itemId)}
                          className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/30 transition-colors"
                        >
                          <span className="font-medium text-navy pr-4">{faq.q}</span>
                          <ChevronDown
                            size={20}
                            className={cn(
                              "text-muted-foreground flex-shrink-0 transition-transform duration-300",
                              isOpen && "rotate-180"
                            )}
                          />
                        </button>
                        <div
                          className={cn(
                            "overflow-hidden transition-all duration-300",
                            isOpen ? "max-h-96" : "max-h-0"
                          )}
                        >
                          <div className="px-6 pb-4 text-muted-foreground border-t border-border/30 pt-4">
                            {faq.a}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-b from-background to-baby-blue/10">
        <div className="container mx-auto">
          <ScrollAnimation animation="scale-in">
            <div className="glass-card rounded-3xl p-12 text-center max-w-2xl mx-auto">
              <h2 className="font-display text-2xl font-bold text-navy mb-4">
                Masih ada pertanyaan?
              </h2>
              <p className="text-muted-foreground mb-8">
                Tim kami siap membantu menjawab semua pertanyaan kamu
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-navy text-white font-semibold shadow-button hover:scale-105 hover:shadow-glow transition-all duration-300"
              >
                Hubungi Kami
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default FAQ;