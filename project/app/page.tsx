"use client";
import AboutAi from "@/components/aboutAi";
import Contact from "@/components/contact";
import Projects from "@/components/Projects";
import Tutor from "@/components/tutor";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SignInButton, SignedOut } from '@clerk/nextjs';
import { ArrowRight, HelpCircleIcon, NotepadTextIcon, School } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { ToastContainer } from "react-toastify";


const featuresList = [
  {
    icon: NotepadTextIcon,
    title: "Shared Notes",
    description: "Access and contribute study notes to help students learn better",
  },
  {
    icon: HelpCircleIcon,
    title: "Find the right tution",
    description: "Discover the best coaching classes and private tutors near you",
  },
  {
    icon: School,
    title: "School Admissions",
    description: "Explore admission openings and opportunities in private schools",
  },
];

export default function Home() {
  const {theme} = useTheme()
  return (

      <div className="flex flex-col">
        <ToastContainer />
        <section className="relative" aria-label="E-Bhutan Digital Marketplace">
          <div className="container mx-auto px-4 py-32 text-center sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Bhutan's Premier</span>
              <span className="block text-primary">Education Marketplace</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Helping Students succeed with <span className="font-bold">shared knowledge, quality tutoring,</span> and <span className="font-bold">admission guidance.</span>
            </p>
            <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
              <Button size="lg" className="w-full sm:w-auto bg-indigo-600" asChild>
                <Link href="/Notes" aria-label="Browse digital products">
                  Explore Notes
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-black text-white" asChild>
                <Link href="/Services" aria-label="Explore digital services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-muted/50 py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Why Choose E-Bhutan?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                One stop platform for learning
              </p>
            </div>
            <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
              {featuresList.map((feature, index) => (
                <Card key={index} className="p-6 hover:scale-105 hover: shadow-2xl
            transform transition-300 ease-in-out">
                  <div  className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600 text-white dark:text-black">
                    <feature.icon className="h-6 w-6'" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <AboutAi/>

        {/* CTA Section */}
        <section className=" py-24 text-primary-foreground text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-black">
              Ready to Get Started?
            </h2> 
            <br/>
            <p className="text-gray-600 leading-relaxed text-justify max-w-2xl mx-auto text-lg">
  Are you ready to <span className="font-semibold text-indigo-600">support each other</span> and <span className="font-semibold text-indigo-600">excel in your exams</span>? Join a community where students and teachers collaborate by sharing <span className="font-medium text-gray-800">valuable notes</span>, solving <span className="font-medium text-gray-800">past year papers</span>, and exchanging <span className="italic text-gray-800">insightful study resources</span>. Whether you're looking for <span className="underline">well-organized study materials</span>, need help with <span className="underline">tough questions</span>, or want to contribute your knowledge, this platform is designed to make learning <span className="font-bold text-indigo-600">easier</span> and <span className="font-bold text-indigo-600">more effective</span>. Let's make study more <span className="font-semibold text-indigo-600">interactive</span>, <span className="font-semibold text-indigo-600">resourceful</span>, and <span className="font-semibold text-indigo-600">successful</span>—together!
</p>
<br/>
<SignedOut>
              <SignInButton>
                <Button className="bg-indigo-600">Sign Up Now <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </SignInButton>
            </SignedOut>
          </div>
        </section>
        <Tutor />
        <Projects />
        <section id="contact">
          <Contact />
        </section>
      </div>

  );
}
