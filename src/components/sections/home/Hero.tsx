'use client';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  CheckCircle2,
  Play,
  Calculator,
  FileText,
  TrendingUp,
  Clock,
  Shield,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Hero() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/');
  };

  const handleSecondaryAction = () => {
    setIsModalOpen(true);
  };
  // ACTION_PLACEHOLDER_END

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(149,69,53,0.04)_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:gap-20 lg:py-32">
            {/* LEFT: Content */}
            <div className="flex flex-col justify-center">
              {/* Badge */}
              <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary">
                <span className="inline-block h-2 w-2 rounded-full bg-primary"></span>
                Trusted by 50,000+ Businesses
              </div>

              {/* Headline */}
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Professional invoicing made
                <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  simple & powerful
                </span>
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Create stunning invoices, track payments, and manage your finances with Invoice App.
                Built specifically for small businesses and freelancers who demand professional
                results.
              </p>

              {/* Feature list */}
              <ul className="mt-6 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                {[
                  'Send invoices in seconds',
                  'Automated payment reminders',
                  'Real-time payment tracking',
                  'Professional templates',
                ].map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA buttons */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="group px-7 text-base"
                  onClick={handlePrimaryAction}
                  data-action-type="primary-cta"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base"
                  onClick={handleSecondaryAction}
                  data-action-type="secondary-cta"
                >
                  <Play className="mr-2 size-5" /> View Demo
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <span className="font-semibold text-foreground">4.9/5</span>
                  <span>rating</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-semibold text-foreground">$2.5M+</span>
                  <span>invoiced monthly</span>
                </div>
              </div>
            </div>

            {/* RIGHT: Visual */}
            <div className="relative">
              {/* Mockup container */}
              <div className="relative overflow-hidden rounded-2xl border bg-card shadow-2xl">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1920&auto=format&fit=crop"
                    alt="Invoice App dashboard showing professional invoice creation"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Tag overlay */}
                <div className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium shadow">
                  Live Dashboard
                </div>
              </div>

              {/* Floating accents */}
              <div className="absolute -right-6 -top-6 hidden w-36 rounded-xl border bg-background/90 p-3 shadow-xl sm:block">
                <p className="text-xs text-muted-foreground">Payments Received</p>
                <p className="text-sm">
                  <span className="font-semibold text-primary">$12,450</span> this month
                </p>
              </div>
              <div className="absolute -left-6 -bottom-6 hidden w-36 rounded-xl border bg-background/90 p-3 shadow-xl sm:block">
                <p className="text-xs text-muted-foreground">Average Pay Time</p>
                <p className="text-sm">
                  <span className="font-semibold text-primary">3.2</span> days faster
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Everything you need to manage your finances
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From invoice creation to payment tracking, Invoice App streamlines your entire billing
              process
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: FileText,
                title: 'Professional Invoices',
                description:
                  'Create branded invoices with custom templates, automated calculations, and multi-currency support',
              },
              {
                icon: Clock,
                title: 'Automated Reminders',
                description:
                  'Never chase payments again with smart reminder sequences and overdue notifications',
              },
              {
                icon: TrendingUp,
                title: 'Financial Insights',
                description:
                  'Track cash flow, monitor outstanding payments, and generate detailed financial reports',
              },
              {
                icon: Calculator,
                title: 'Expense Tracking',
                description:
                  'Capture receipts, categorize expenses, and prepare for tax season with organized records',
              },
              {
                icon: Shield,
                title: 'Secure & Compliant',
                description:
                  'Bank-level security with automatic backups and compliance with financial regulations',
              },
              {
                icon: Zap,
                title: 'Quick Setup',
                description:
                  'Get started in minutes with guided setup, template library, and client import tools',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Ready to streamline your invoicing?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using Invoice App to get paid faster and manage
            their finances better
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              variant="secondary"
              className="px-8 text-base"
              onClick={handlePrimaryAction}
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 size-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 text-base border-white/20 text-white hover:bg-white/10"
              onClick={handleSecondaryAction}
            >
              Schedule Demo Call
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-4" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-4" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-4" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
