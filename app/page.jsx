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

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/images/logos/PasaraLogoV1.jpg" alt="Pasara Logo" width={36} height={36} className="h-9 w-9" />
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
              <Button variant="ghost" size="sm">
                Log in
              </Button>
              <Button size="sm">Get Started</Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white">
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
                  >
                    Get Started
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-brand-orange text-brand-orange hover:bg-brand-orange/10 transform transition-all duration-200 hover:scale-105 active:scale-95"
                  >
                    Book a Demo
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full overflow-hidden rounded-xl bg-white shadow-2xl md:h-[450px]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/images/logos/PasaraLogoV2.jpg"
                      width={300}
                      height={100}
                      alt="Pasara Logo"
                      className="w-3/4 max-w-[300px] opacity-10"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-transparent">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Powerful POS System</h3>
                      <p className="text-gray-600 mb-6">Manage your business with ease</p>
                      <Button className="bg-brand-orange hover:bg-brand-dark">Watch Demo</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
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
                    "Pasara POS has completely transformed how we manage our retail store. The inventory tracking alone has saved us countless hours and prevented stockouts."
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <div className="rounded-full bg-orange-100 p-2 text-brand-orange">
                    <span className="text-sm font-semibold">SJ</span>
                  </div>
                  <div>
                    <p className="font-semibold">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">Retail Store Owner</p>
                  </div>
                </div>
              </div>
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
                    "The integrated online store feature has allowed us to expand our business beyond our physical location. Sales have increased by 40% since implementation."
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <div className="rounded-full bg-orange-100 p-2 text-brand-orange">
                    <span className="text-sm font-semibold">MR</span>
                  </div>
                  <div>
                    <p className="font-semibold">Michael Rodriguez</p>
                    <p className="text-sm text-muted-foreground">Restaurant Owner</p>
                  </div>
                </div>
              </div>
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
                    "The analytics and reporting features have given us insights we never had before. We can now make data-driven decisions that have improved our profitability."
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <div className="rounded-full bg-orange-100 p-2 text-brand-orange">
                    <span className="text-sm font-semibold">JL</span>
                  </div>
                  <div>
                    <p className="font-semibold">Jennifer Lee</p>
                    <p className="text-sm text-muted-foreground">Boutique Manager</p>
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
                Choose the plan that's right for your business. All plans include core POS features.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1 group">
                <div>
                  <h3 className="text-2xl font-bold group-hover:text-brand-orange transition-colors duration-200">Starter</h3>
                  <p className="mt-2 text-muted-foreground">Perfect for small businesses just getting started</p>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold">$49</span>
                    <span className="ml-1 text-muted-foreground">/month</span>
                  </div>
                  <ul className="mt-8 space-y-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-brand-orange" />
                      <span>Basic POS functionality</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-brand-orange" />
                      <span>Inventory management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-brand-orange" />
                      <span>Up to 500 products</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-brand-orange" />
                      <span>Basic reporting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-brand-orange" />
                      <span>Email support</span>
                    </li>
                  </ul>
                </div>
                <Button 
                  size="lg" 
                  className="mt-8 w-full bg-brand-orange hover:bg-brand-dark transform transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-lg"
                >
                  Get Started
                </Button>
              </div>
              <div className="relative flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg hover:shadow-lg transition-all duration-200 hover:-translate-y-1 group">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-brand-orange px-3 py-1 text-sm font-medium text-white">
                  Most Popular
                </div>
                <div>
                  <h3 className="text-2xl font-bold group-hover:text-brand-orange transition-colors duration-200">Professional</h3>
                  <p className="mt-2 text-muted-foreground">Ideal for growing businesses with multiple needs</p>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold">$99</span>
                    <span className="ml-1 text-muted-foreground">/month</span>
                  </div>
                  <ul className="mt-8 space-y-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-brand-orange" />
                      <span>Everything in Starter</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-brand-orange" />
                      <span>Online store integration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-brand-orange" />
                      <span>Up to 2,000 products</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-brand-orange" />
                      <span>Advanced analytics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-brand-orange" />
                      <span>Priority support</span>
                    </li>
                  </ul>
                </div>
                <Button 
                  size="lg" 
                  className="mt-8 w-full bg-brand-orange hover:bg-brand-dark transform transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-lg"
                >
                  Get Started
                </Button>
              </div>
              <div className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1 group">
                <div>
                  <h3 className="text-2xl font-bold group-hover:text-brand-orange transition-colors duration-200">Enterprise</h3>
                  <p className="mt-2 text-muted-foreground">For large businesses with complex requirements</p>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold">$199</span>
                    <span className="ml-1 text-muted-foreground">/month</span>
                  </div>
                  <ul className="mt-8 space-y-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-brand-orange" />
                      <span>Everything in Professional</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-brand-orange" />
                      <span>Multi-location support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-brand-orange" />
                      <span>Unlimited products</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-brand-orange" />
                      <span>Custom reporting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-brand-orange" />
                      <span>Dedicated account manager</span>
                    </li>
                  </ul>
                </div>
                <Button 
                  size="lg" 
                  className="mt-8 w-full bg-brand-orange hover:bg-brand-dark transform transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-lg"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
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
                <Button 
                  size="lg" 
                  className="bg-brand-orange hover:bg-brand-dark transform transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-lg"
                >
                  Get Started Today
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-brand-orange text-brand-orange hover:bg-brand-orange/10 transform transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  Contact Sales
                </Button>
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
                <Image src="/images/logos/PasaraLogoV1.jpg" alt="Pasara Logo" width={36} height={36} className="h-9 w-9" />
                <span className="inline-block font-bold">Pasmen Pasara</span>
              </Link>
              <p className="text-muted-foreground">
                Empowering businesses with innovative software solutions since 2010.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
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