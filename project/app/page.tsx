"use client";
import Chim from "@/components/chim";
import Contact from "@/components/contact";
import Projects from "@/components/Projects";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { ArrowRight, Gift, Shield, Zap } from "lucide-react";
import Link from "next/link";
import { ToastContainer } from "react-toastify";

const featuresList = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Instant delivery for digital products and services",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Multiple secure payment options including mBoB, mPay, and PNB",
  },
  {
    icon: Gift,
    title: "Free Trial",
    description: "First two transactions are free for new users",
  },
];

export default function Home() {
  return (

      <div className="flex flex-col">
        <ToastContainer />
        <section className="relative" aria-label="E-Bhutan Digital Marketplace">
          <div className="container mx-auto px-4 py-32 text-center sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Bhutan's Premier</span>
              <span className="block text-primary">Digital Marketplace</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Buy and sell digital products and services with ease. First two transactions free!
            </p>
            <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <Link href="/products" aria-label="Browse digital products">
                  Browse Products
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                <Link href="/services" aria-label="Explore digital services">
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
                Experience the best of digital commerce in Bhutan
              </p>
            </div>
            <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featuresList.map((feature, index) => (
                <Card key={index} className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-24 text-primary-foreground text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg">
              Join E-Bhutan today and enjoy your first two transactions completely free!
              After that, subscribe for just Nu 150 to continue accessing our platform.
            </p>
              <Button size="lg" variant="secondary" className="mt-10">
                Sign Up Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
          </div>
        </section>

        <Chim />
        <Projects />
        <section id="contact">
          <Contact />
        </section>
      </div>

  );
}
