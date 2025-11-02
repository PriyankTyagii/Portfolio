export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="font-bold">Priyank Tyagi</h3>
            <p className="text-sm text-muted-foreground">
              Software Developer with hands-on experience in Web Development, Machine Learning, and AI.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Roorkee, Uttarakhand, India</p>
              <p>
                <a href="mailto:priyanktyagi404@gmail.com" className="hover:text-accent transition-colors">
                  priyanktyagi404@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+917983330918" className="hover:text-accent transition-colors">
                  +91-7983-330-918
                </a>
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
