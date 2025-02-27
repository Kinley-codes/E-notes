import { BookOpen, Facebook, FileText, HelpCircle, Home, Instagram, Linkedin, Mail, MessageCircle, Twitter, Users } from 'lucide-react';
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {/* About E-Bhutan */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <Home className="w-5 h-5 mr-2" />
              About E-Bhutan
            </h3>
            <p className="text-sm text-gray-400">
              Empowering students, tutors, and institutions with a collaborative platform for learning, sharing, and growth. Together, we make education accessible and effective.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <BookOpen className="w-5 h-5 mr-2" />
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/Notes" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  Notes
                </Link>
              </li>
              <li>
                <Link href="/Services" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Services
                </Link>
              </li>
              <li>
                <Link href="/About" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors flex items-center">
                  <HelpCircle className="w-4 h-4 mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/Blog" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors flex items-center">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <HelpCircle className="w-5 h-5 mr-2" />
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/Contact" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/FAQ" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors flex items-center">
                  <HelpCircle className="w-4 h-4 mr-2" />
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/Terms" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/Privacy" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Follow Us
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://facebook.com" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors flex items-center">
                  <Facebook className="w-4 h-4 mr-2" />
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors flex items-center">
                  <Twitter className="w-4 h-4 mr-2" />
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="https://instagram.com" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors flex items-center">
                  <Instagram className="w-4 h-4 mr-2" />
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="https://linkedin.com" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors flex items-center">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <br/>
        <div className="space-y-4 ">
  <h3 className="text-lg font-semibold text-white flex items-center">
    <Mail className="w-5 h-5 mr-2" />
    Subscribe to Our Newsletter
  </h3>
  <p className="text-sm text-gray-400">
    Stay updated with the latest news, resources, and offers from E-Bhutan.
  </p>
  <form className="flex items-center">
    <input
      type="email"
      placeholder="Your email"
      className="w-96 px-4 py-2 rounded-l-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
    <button
      type="submit"
      className="px-4 py-2 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-700 transition-colors"
    >
      Subscribe
    </button>
  </form>
</div>


        {/* Divider */}
        <div className="mt-12 border-t border-gray-800"></div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} E-Bhutan. All rights reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
}