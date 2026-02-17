'use client';

import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/ectc', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/ectc', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/ectc', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/ectc', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/@ectc', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gradient-to-b from-card to-secondary/40 border-t border-border py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-lg">ECTC 2025</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Emergency, Critical Care and Trauma Conference - Advancing healthcare through knowledge and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#venue" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Venue
                </Link>
              </li>
              <li>
                <Link href="#tickets" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Tickets
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-accent flex-shrink-0 mt-0.5" />
                <a href="mailto:info@ectc2025.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  info@ectc2025.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-accent flex-shrink-0 mt-0.5" />
                <a href="tel:+919876543210" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +91 (800) 123-4567
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">New Delhi, India</span>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Code of Conduct
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} ECTC - Emergency, Critical Care and Trauma Conference. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Designed & Developed by{' '}
              <a href="https://www.linkedin.com/in/ahmad-abdullah-hashmi-802a372a9/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:text-primary/80 transition-colors">
                Abdullah
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
