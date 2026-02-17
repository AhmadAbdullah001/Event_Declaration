import Link from 'next/link';
import { Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">ECTC 2025</h3>
            <p className="text-sm text-muted-foreground">
              Emergency, Critical Care and Trauma Conference - Bringing together healthcare professionals and emergency medicine experts worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/registration" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Tickets
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: info@ectc2025.com</li>
              <li>Phone: +91 (800) 911-CARE</li>
              <li>Location: New Delhi, India</li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Summit 2025. All rights reserved.
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
