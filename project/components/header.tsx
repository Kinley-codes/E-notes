'use client';

import { Button } from '@/components/ui/button';
import { DialogTitle } from '@/components/ui/dialog';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton, useAuth } from '@clerk/nextjs'; // Import useAuth
import { Menu, Newspaper, Store } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Ensure to import Toastify CSS


export default function Header() {
  const { isSignedIn } = useAuth(); // Get the user's authentication status
  const { theme } = useTheme();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/About' },
    { name: 'Services', href: '/Services' },
    { name: 'Notes', href: '/Notes' },
    { name: 'Upload Note', href: '#' }, // Set href to '#' to handle in click
  ];

  const handleUploadNoteClick = () => {
    // Show toast message if user is not signed in
    if (!isSignedIn) {
      toast.info('You must be logged in to upload notes.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      // Redirect or perform the upload action here
      window.location.href = '/UploadNote'; // Change to your upload note route
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <ToastContainer />
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Store className="h-6 w-6" />
              <span className="font-bold text-xl">E-Bhutan</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href} // Use the href directly
                onClick={item.name === 'Upload Note' ? (e) => { e.preventDefault(); handleUploadNoteClick(); } : undefined} // Handle click for Upload Note
                className="text-sm font-medium transition-colors hover:scale-105 hover:shadow-2xl transform transition-300 ease-in-out"
              >
                {item.name}
              </Link>
            ))}
            
            <Button variant="outline" size="icon">
              <a href='/Blog'> <Newspaper className="h-4 w-4" /></a>
            </Button>

            {/* Clerk Authentication */}
            <SignedOut>
              <SignInButton>
                <Button className="bg-indigo-600">Sign In</Button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <DialogTitle className="text-lg font-semibold">Menu</DialogTitle>

                {/* Navigation Links */}
                <nav className="mt-4 space-y-3 text-sm">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href} // Use the href directly
                      onClick={item.name === 'Upload Note' ? (e) => { e.preventDefault(); handleUploadNoteClick(); } : undefined} // Handle click for Upload Note
                      className="block text-base font-medium transition-colors hover:text-indigo-600"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <div className="mt-6 flex flex-col space-y-3">
                  

                  <Button variant="outline" size="icon">
                    <a href='/Blog'><Newspaper className="h-5 w-5" /></a>
                  </Button>
                </div>

                {/* Authentication Buttons */}
                <div className="mt-6">
                  <SignedOut>
                    <SignInButton>
                      <Button className="w-full bg-indigo-600 text-sm">Sign In</Button>
                    </SignInButton>
                  </SignedOut>
                  <SignedIn>
                  <SignOutButton>
                    <Button className="w-full bg-indigo-600 text-sm">Sign Out</Button>
                  </SignOutButton>
                  </SignedIn>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
