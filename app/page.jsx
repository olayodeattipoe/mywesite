'use client'
import Link from "next/link"
import Image from "next/image"
import { Button } from "../components/ui/button"
import {
  BarChart3,
  CheckCircle,
  ChevronRight,
  CreditCard,
  Globe,
  LayoutDashboard,
  Package,
  ShoppingCart,
} from "lucide-react"
import { useState } from "react"

export default function LandingPage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/images/logos/PasaraLogoV1.jpg" alt="Pasara Logo" width={36} height={36} className="h-9 w-9" unoptimized />
              <span className="inline-block font-bold">Pasmen Pasara</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link
                href="#features"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Features
              </Link>
              <Link
                href="#products"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Products
              </Link>
              <Link
                href="#testimonials"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Testimonials
              </Link>
              <Link
                href="#pricing"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Pricing
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <div className="relative group">
                <Button variant="ghost" size="sm">
                  Contact Us
                </Button>
                <div className="absolute right-0 mt-2 w-72 p-6 bg-white rounded-xl shadow-2xl border border-brand-orange/20 hidden group-hover:block z-50 transform transition-all duration-200">
                  <div className="absolute -top-2 right-4 w-4 h-4 bg-white transform rotate-45 border-t border-l border-brand-orange/20"></div>
                  <div className="space-y-4">
                    <p className="font-bold text-lg text-brand-orange">Get in touch with us</p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-orange-50 transition-colors duration-200">
                        <svg className="h-5 w-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <a href="tel:+233551310230" className="text-brand-orange hover:text-brand-dark font-medium">0593990166</a>
                      </div>
                      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-orange-50 transition-colors duration-200">
                        <svg className="h-5 w-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <a href="mailto:pasmenpasara@gmail.com" className="text-brand-orange hover:text-brand-dark font-medium">pasmenpasara@gmail.com</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-6 md:py-12 lg:py-20 xl:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Streamline Your Business with <span className="text-brand-orange">Pasara POS</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    The all-in-one point of sale system with integrated online store, inventory management, and business
                    analytics.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button 
                    size="lg" 
                    className="bg-brand-orange hover:bg-brand-dark transform transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-lg" 
                    asChild
                  >
                    <a href="#ready">Get Started</a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-brand-orange text-brand-orange hover:bg-brand-orange/10 transform transition-all duration-200 hover:scale-105 active:scale-95"
                    asChild
                  >
                    <a href="#ready">Book a Demo</a>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full overflow-hidden rounded-xl bg-white shadow-2xl md:h-[450px] flex flex-col items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/images/logos/PasaraLogoV2.jpg"
                      width={300}
                      height={100}
                      alt="Pasara Logo"
                      className="w-3/4 max-w-[300px] opacity-10"
                      unoptimized
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-transparent z-10 flex flex-col items-center justify-center">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Powerful POS System</h3>
                      <p className="text-gray-600 mb-1">Manage your business with ease</p>
                      <p className="mb-3 text-base text-brand-orange animate-pulse">Click the thumbnail below to watch our product demo!</p>
                      <div className="flex flex-col items-center gap-3">
                        <div
                          className="relative cursor-pointer group mb-2"
                          onClick={() => setIsVideoOpen(true)}
                          style={{ display: 'inline-block' }}
                        >
                          <img
                            src="/images/logos/PasaraLogoV2.jpg"
                            alt="Watch Demo Thumbnail"
                            className="rounded-lg shadow-lg w-full max-w-[350px] md:max-w-[400px] border-2 border-brand-orange group-hover:brightness-90 transition duration-200"
                          />
                          <span className="absolute inset-0 flex items-center justify-center">
                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
                              <circle cx="32" cy="32" r="32" fill="rgba(255,255,255,0.7)" />
                              <polygon points="26,20 48,32 26,44" fill="#F97316" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {isVideoOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <div className="relative bg-white rounded-xl shadow-2xl p-2 w-[90vw] max-w-2xl flex flex-col items-center">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-brand-orange text-2xl font-bold z-10"
                onClick={() => setIsVideoOpen(false)}
                aria-label="Close"
              >
                &times;
              </button>
              <video
                src="/videos/Pasara_POS_Demo_Final.mp4"
                controls
                autoPlay
                className="rounded-lg shadow-lg w-full max-h-[70vh] border border-brand-orange bg-black"
                poster="/images/logos/PasaraLogoV2.jpg"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white" id="features">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-brand-orange px-3 py-1 text-sm text-white">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything You Need to Run Your Business
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Pasara POS combines powerful features to help you manage your business efficiently and grow your
                  revenue.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="feature-card group grid gap-4 rounded-xl border p-6 text-center shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer bg-white hover:border-brand-orange">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-orange text-white mx-auto group-hover:scale-110 transition-transform duration-200">
                  <ShoppingCart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold group-hover:text-brand-orange transition-colors duration-200">Point of Sale</h3>
                <p className="text-muted-foreground">
                  Fast and intuitive checkout experience with support for multiple payment methods.
                </p>
              </div>
              <div className="feature-card group grid gap-4 rounded-xl border p-6 text-center shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer bg-white hover:border-brand-orange">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-orange text-white mx-auto group-hover:scale-110 transition-transform duration-200">
                  <Package className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold group-hover:text-brand-orange transition-colors duration-200">Inventory Control</h3>
                <p className="text-muted-foreground">
                  Real-time inventory tracking with automatic reorder alerts and stock management.
                </p>
              </div>
              <div className="feature-card group grid gap-4 rounded-xl border p-6 text-center shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer bg-white hover:border-brand-orange">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-orange text-white mx-auto group-hover:scale-110 transition-transform duration-200">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold group-hover:text-brand-orange transition-colors duration-200">Online Store</h3>
                <p className="text-muted-foreground">
                  Integrated e-commerce platform that syncs with your in-store inventory in real-time.
                </p>
              </div>
              <div className="feature-card group grid gap-4 rounded-xl border p-6 text-center shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer bg-white hover:border-brand-orange">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-orange text-white mx-auto group-hover:scale-110 transition-transform duration-200">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold group-hover:text-brand-orange transition-colors duration-200">Business Analytics</h3>
                <p className="text-muted-foreground">
                  Comprehensive reporting and insights to make data-driven business decisions.
                </p>
              </div>
              <div className="feature-card group grid gap-4 rounded-xl border p-6 text-center shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer bg-white hover:border-brand-orange">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-orange text-white mx-auto group-hover:scale-110 transition-transform duration-200">
                  <CreditCard className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold group-hover:text-brand-orange transition-colors duration-200">Payment Processing</h3>
                <p className="text-muted-foreground">
                  Secure payment processing with support for credit cards, mobile payments, and more.
                </p>
              </div>
              <div className="feature-card group grid gap-4 rounded-xl border p-6 text-center shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer bg-white hover:border-brand-orange">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-orange text-white mx-auto group-hover:scale-110 transition-transform duration-200">
                  <LayoutDashboard className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold group-hover:text-brand-orange transition-colors duration-200">Management Dashboard</h3>
                <p className="text-muted-foreground">
                  Centralized dashboard to monitor all aspects of your business from anywhere.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white" id="products">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Flagship Product</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover how Pasara POS can transform your business operations and boost your growth.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-2xl font-bold">Pasara POS System</h3>
                <p className="text-muted-foreground">
                  A complete business management solution designed for retail stores, restaurants, and service businesses of all sizes.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-orange" />
                    <span>Seamless online and in-store integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-orange" />
                    <span>Comprehensive inventory management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-orange" />
                    <span>Real-time sales and performance tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-orange" />
                    <span>Customer relationship management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-orange" />
                    <span>Employee management and scheduling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-orange" />
                    <span>Cloud-based access from anywhere</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Button size="lg" className="bg-brand-orange hover:bg-brand-dark">
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[500px] overflow-hidden rounded-xl bg-white p-6 shadow-2xl hover:shadow-xl transition-shadow duration-200">
                  <div className="flex items-center gap-2 border-b pb-4">
                    <div className="flex gap-1">
                      <div className="h-3 w-3 rounded-full bg-red-500 hover:opacity-80 transition-opacity duration-200 cursor-pointer" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500 hover:opacity-80 transition-opacity duration-200 cursor-pointer" />
                      <div className="h-3 w-3 rounded-full bg-green-500 hover:opacity-80 transition-opacity duration-200 cursor-pointer" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Image
                        src="/images/logos/PasaraLogoV1.jpg"
                        alt="Pasara Logo"
                        width={24}
                        height={24}
                        className="h-6 w-6"
                        unoptimized
                      />
                      <span className="font-semibold">Pasara POS Dashboard</span>
                      <span className="text-sm text-muted-foreground">v2.0</span>
                    </div>
                  </div>
                  <div className="space-y-4 pt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-lg bg-gray-100 p-4 hover:bg-gray-200 transition-colors duration-200 cursor-pointer">
                        <p className="text-sm text-muted-foreground">Today's Sales</p>
                        <p className="text-2xl font-bold text-brand-orange">$1,254.00</p>
                      </div>
                      <div className="rounded-lg bg-gray-100 p-4 hover:bg-gray-200 transition-colors duration-200 cursor-pointer">
                        <p className="text-sm text-muted-foreground">Orders</p>
                        <p className="text-2xl font-bold text-brand-orange">24</p>
                      </div>
                    </div>
                    <div className="rounded-lg bg-gray-100 p-4 hover:bg-gray-200 transition-colors duration-200">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold">Recent Transactions</p>
                        <Link href="#" className="text-sm text-brand-orange hover:text-brand-dark transition-colors duration-200 hover:underline">
                          View All
                        </Link>
                      </div>
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center justify-between hover:bg-gray-300 p-2 rounded-lg transition-colors duration-200 cursor-pointer">
                          <span>Order #1089</span>
                          <span>$85.00</span>
                        </div>
                        <div className="flex items-center justify-between hover:bg-gray-300 p-2 rounded-lg transition-colors duration-200 cursor-pointer">
                          <span>Order #1088</span>
                          <span>$124.50</span>
                        </div>
                        <div className="flex items-center justify-between hover:bg-gray-300 p-2 rounded-lg transition-colors duration-200 cursor-pointer">
                          <span>Order #1087</span>
                          <span>$65.75</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white" id="testimonials">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Trusted by Businesses Everywhere</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See what our customers have to say about how Pasara POS has transformed their businesses.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-1">
              <div className="flex flex-col justify-between rounded-2xl border p-6 shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer bg-white hover:border-brand-orange">
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 fill-brand-orange transform transition-transform duration-200 hover:scale-110"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "Pasara POS has revolutionized our customer service at Calabash. The queue lines have been significantly reduced, and our customers are much happier with the faster service. The system has made our operations much more efficient, hence why its used in all our branches."
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <div className="rounded-full bg-orange-100 p-2 text-brand-orange">
                    <span className="text-sm font-semibold">CL</span>
                  </div>
                  <div>
                    <p className="font-semibold">Calabash Restaurant</p>
                    <p className="text-sm text-muted-foreground">Restaurant Chain</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white" id="pricing">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple, Transparent Pricing</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                One plan. All features. No surprises.
              </p>
            </div>
            <div className="mx-auto grid max-w-4xl gap-8 py-12 md:grid-cols-2">
              {/* Subscription Card */}
              <div className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 group border border-brand-orange">
                <div>
                  <h3 className="text-2xl font-bold text-brand-orange mb-2">Monthly Subscription</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold">GHS 1,200</span>
                    <span className="ml-2 text-muted-foreground text-lg">/month</span>
                  </div>
                  <ul className="space-y-3 mb-6 text-left">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-brand-orange" />
                      <span>No hidden fees</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-brand-orange" />
                      <span>No setup charges</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-brand-orange" />
                      <span>Full access to features & support</span>
                    </li>
                  </ul>
                </div>
                <Button size="lg" className="w-full bg-brand-orange hover:bg-brand-dark transform transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-lg" asChild>
                  <a href="#ready">Get Started</a>
                </Button>
              </div>
              {/* Referral Program Card */}
              <div className="flex flex-col justify-between rounded-2xl bg-orange-50 p-8 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 group border border-brand-orange">
                <div>
                  <h3 className="text-2xl font-bold text-brand-orange mb-2">Referral Program</h3>
                  <ul className="space-y-4 text-left">
                    <li>
                      <span className="font-semibold">Refer Businesses</span><br/>
                      <span className="text-muted-foreground">Share Pasmen Pasara POS with other restaurants, cafes, or food businesses in your network.</span>
                    </li>
                    <li>
                      <span className="font-semibold">They Subscribe</span><br/>
                      <span className="text-muted-foreground">Once your referred business subscribes to any of our plans, the bonus automatically activates.</span>
                    </li>
                    <li>
                      <span className="font-semibold">Get Free Months</span><br/>
                      <span className="text-muted-foreground">You will receive one month free on your Pasmen Pasara POS subscription as a thank you.</span>
                    </li>
                    <li>
                      <span className="font-semibold">Unlimited Savings</span><br/>
                      <span className="text-muted-foreground">There's no limit to how much you can save! The more you refer, the more free months you earn.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white" id="ready">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to Transform Your Business?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of businesses that trust Pasara POS to power their operations.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <div className="relative group">
                  <Button size="lg" className="bg-brand-orange hover:bg-brand-dark transform transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-lg">
                    Contact Us Now
                  </Button>
                  <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-72 p-6 bg-white rounded-xl shadow-2xl border border-brand-orange/20 hidden group-hover:block z-50 transform transition-all duration-200">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45 border-t border-l border-brand-orange/20"></div>
                    <div className="space-y-4">
                      <p className="font-bold text-lg text-brand-orange">Get in touch with us</p>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-orange-50 transition-colors duration-200">
                          <svg className="h-5 w-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <a href="tel:+233551310230" className="text-brand-orange hover:text-brand-dark font-medium">0593990166</a>
                        </div>
                        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-orange-50 transition-colors duration-200">
                          <svg className="h-5 w-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <a href="mailto:pasmenpasara@gmail.com" className="text-brand-orange hover:text-brand-dark font-medium">pasmenpasara@gmail.com</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background">
        <div className="container flex flex-col gap-6 py-8 md:py-12">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="flex flex-col gap-4">
              <Link href="/" className="flex items-center space-x-2">
                <Image src="/images/logos/PasaraLogoV1.jpg" alt="Pasara Logo" width={36} height={36} className="h-9 w-9" unoptimized />
                <span className="inline-block font-bold">Pasmen Pasara</span>
              </Link>
              <p className="text-muted-foreground">
                Empowering businesses with innovative software solutions since 2025.
              </p>
              <div className="flex gap-4">
                <Link href="https://wa.me/233593990166" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-green-500" aria-label="WhatsApp">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.52 3.48A12.07 12.07 0 0012 0C5.37 0 0 5.37 0 12a11.93 11.93 0 001.64 6.06L0 24l6.31-1.65A12.07 12.07 0 0012 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.23-3.48-8.52zM12 22a9.93 9.93 0 01-5.09-1.39l-.36-.21-3.75.98.99-3.65-.23-.37A9.93 9.93 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.04 2.81 1.19 3.01.15.2 2.05 3.13 5.01 4.27.7.24 1.25.38 1.68.49.71.18 1.36.15 1.87.09.57-.07 1.75-.72 2-1.41.25-.69.25-1.28.18-1.41-.07-.13-.25-.2-.53-.34z"/>
                  </svg>
                  <span className="sr-only">WhatsApp: 0593990166</span>
                </Link>
                <Link href="mailto:pasmenpasara@gmail.com" className="text-muted-foreground hover:text-red-500" aria-label="Email">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z"/>
                  </svg>
                  <span className="sr-only">Email: pasmenpasara@gmail.com</span>
                </Link>
                <Link href="https://www.linkedin.com/company/pasmen-pasara" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-blue-700" aria-label="LinkedIn">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Products</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground">Pasara POS</Link></li>
                <li><Link href="#" className="hover:text-foreground">Inventory Management</Link></li>
                <li><Link href="#" className="hover:text-foreground">Online Store</Link></li>
                <li><Link href="#" className="hover:text-foreground">Analytics</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Resources</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground">Documentation</Link></li>
                <li><Link href="#" className="hover:text-foreground">Guides</Link></li>
                <li><Link href="#" className="hover:text-foreground">Support</Link></li>
                <li><Link href="#" className="hover:text-foreground">API</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Company</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground">About</Link></li>
                <li><Link href="#" className="hover:text-foreground">Blog</Link></li>
                <li><Link href="#" className="hover:text-foreground">Careers</Link></li>
                <li><Link href="#" className="hover:text-foreground">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t py-6">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-muted-foreground">
              © 2025 Pasmen Pasara. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 