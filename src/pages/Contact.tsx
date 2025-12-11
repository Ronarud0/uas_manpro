
import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, Instagram, Youtube, Linkedin } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import GlassCard from "@/components/GlassCard";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Pendaftaran berhasil!",
      description: "Tim kami akan menghubungi Anda segera.",
    });
    
    setFormData({ name: "", email: "", phone: "", program: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute top-10 right-10 w-80 h-80 bg-soft-blue/30 rounded-full blur-[100px]" />
        
        <div className="container mx-auto relative z-10 text-center">
          <ScrollAnimation animation="fade-up">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-navy mb-6">
              Hubungi Kami
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Siap memulai perjalanan pendidikanmu? Daftar sekarang atau hubungi tim kami untuk informasi lebih lanjut
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <ScrollAnimation animation="fade-up">
              <GlassCard className="p-8" hover={false}>
                <h2 className="font-display text-2xl font-bold text-navy mb-6">
                  Form Pendaftaran
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">Nama Lengkap</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-soft-blue focus:border-transparent transition-all"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-soft-blue focus:border-transparent transition-all"
                      placeholder="nama@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">Nomor WhatsApp</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-soft-blue focus:border-transparent transition-all"
                      placeholder="08xxxxxxxxxx"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">Program yang Diminati</label>
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-soft-blue focus:border-transparent transition-all"
                    >
                      <option value="">Pilih program</option>
                      <option value="sistem-informasi">Sistem Informasi</option>
                      <option value="e-commerce">E-Commerce</option>
                      <option value="game-technology">Game Technology</option>
                      <option value="akuntansi-si">Akuntansi Sistem Informasi</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">Pesan (Opsional)</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-soft-blue focus:border-transparent transition-all resize-none"
                      placeholder="Tulis pesan atau pertanyaanmu"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-navy text-white font-semibold shadow-button hover:scale-[1.02] hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Mengirim...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Kirim Pendaftaran
                      </>
                    )}
                  </button>
                </form>
              </GlassCard>
            </ScrollAnimation>

            {/* Contact Info */}
            <div className="space-y-6">
              <ScrollAnimation animation="fade-up" delay={100}>
                <GlassCard className="p-6" hover={false}>
                  <h3 className="font-display font-bold text-lg text-navy mb-4">Informasi Kontak</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-soft-blue/30 flex items-center justify-center flex-shrink-0">
                        <MapPin size={20} className="text-navy" />
                      </div>
                      <div>
                        <p className="font-medium text-navy">Alamat</p>
                        <p className="text-sm text-muted-foreground">
                          Jl. Teknologi Digital No. 123<br />
                          Jakarta Selatan, Indonesia 12345
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-soft-blue/30 flex items-center justify-center flex-shrink-0">
                        <Phone size={20} className="text-navy" />
                      </div>
                      <div>
                        <p className="font-medium text-navy">Telepon</p>
                        <p className="text-sm text-muted-foreground">+62 21 1234 5678</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-soft-blue/30 flex items-center justify-center flex-shrink-0">
                        <Mail size={20} className="text-navy" />
                      </div>
                      <div>
                        <p className="font-medium text-navy">Email</p>
                        <p className="text-sm text-muted-foreground">admisi@siega.ac.id</p>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" delay={200}>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <GlassCard className="p-6 flex items-center gap-4 bg-gradient-to-r from-green-500/10 to-green-400/5">
                    <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center">
                      <MessageCircle size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy">Chat via WhatsApp</p>
                      <p className="text-sm text-muted-foreground">Respons cepat dalam jam kerja</p>
                    </div>
                  </GlassCard>
                </a>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" delay={300}>
                <GlassCard className="p-6" hover={false}>
                  <h3 className="font-display font-bold text-lg text-navy mb-4">Social Media</h3>
                  <div className="flex gap-3">
                    {[
                      { icon: Instagram, label: "Instagram", href: "#" },
                      { icon: Youtube, label: "YouTube", href: "#" },
                      { icon: Linkedin, label: "LinkedIn", href: "#" },
                    ].map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className="w-12 h-12 rounded-xl bg-soft-blue/20 flex items-center justify-center text-navy hover:bg-soft-blue/40 hover:shadow-glow transition-all duration-300"
                        title={social.label}
                      >
                        <social.icon size={22} />
                      </a>
                    ))}
                  </div>
                </GlassCard>
              </ScrollAnimation>

              {/* Map */}
              <ScrollAnimation animation="fade-up" delay={400}>
                <GlassCard className="p-2 overflow-hidden" hover={false}>
                  <div className="aspect-video rounded-xl overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2904181168045!2d106.82714887605055!3d-6.226083661054756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta!5e0!3m2!1sen!2sid!4v1703123456789!5m2!1sen!2sid"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="SIEGA Location"
                    />
                  </div>
                </GlassCard>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;