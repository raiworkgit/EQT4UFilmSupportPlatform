import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const footerSections = [
    {
      title: "About Kwento",
      content: "Dedicated to supporting Filipino cinema through crowdfunding and community engagement."
    },
    {
      title: "For Filmmakers",
      links: [
        { href: "#", label: "Submit Your Project" },
        { href: "#", label: "Filmmaker Resources" },
        { href: "#", label: "Success Stories" }
      ]
    },
    {
      title: "For Supporters", 
      links: [
        { href: "#", label: "Browse All Films" },
        { href: "#", label: "How It Works" },
        { href: "#", label: "Community Guidelines" }
      ]
    },
    {
      title: "Contact",
      contact: [
        { icon: Mail, text: "support@kwento.ph" },
        { icon: Phone, text: "+63 2 8123 4567" },
        { icon: MapPin, text: "Manila, Philippines" }
      ]
    }
  ];

  return (
    <footer id="contact" className="bg-[var(--kwento-text-dark)] text-[var(--kwento-text-light)] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-heading text-lg font-bold text-[var(--kwento-secondary)]">
                {section.title}
              </h3>
              
              {section.content && (
                <p className="text-[var(--kwento-text-light)]/80 leading-relaxed">
                  {section.content}
                </p>
              )}
              
              {section.links && (
                <div className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.href}
                      className="block text-[var(--kwento-text-light)]/80 hover:text-[var(--kwento-secondary)] transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
              
              {section.contact && (
                <div className="space-y-3">
                  {section.contact.map((contact, contactIndex) => (
                    <div key={contactIndex} className="flex items-center gap-3">
                      <contact.icon size={16} className="text-[var(--kwento-secondary)]" />
                      <span className="text-[var(--kwento-text-light)]/80">
                        {contact.text}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="border-t border-[var(--kwento-text-light)]/20 pt-8 text-center">
          <p className="text-[var(--kwento-text-light)]/60">
            © 2024 Kwento. All rights reserved. Supporting Filipino cinema, one story at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}
