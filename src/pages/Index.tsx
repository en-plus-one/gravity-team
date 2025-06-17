import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import GravityLogo from "../components/GravityLogo";
import {
  BinanceLogo,
  CoinbaseLogo,
  BitstampLogo,
  BitfinexLogo,
  BithumbLogo,
  BitbankLogo,
  BitkubLogo,
  TradingChart,
  LiquidityVisualization,
} from "../components/PartnerLogos";
import {
  FloatingOrbs,
  GridPattern,
  GlowingDots,
} from "../components/BackgroundElements";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gravity-dark text-white">
      {/* Header */}
      <header className="relative z-50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-22 py-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <GravityLogo size="medium" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-12">
              <a
                href="#"
                className="text-white text-sm font-normal tracking-[0.53px] uppercase hover:text-gravity-gray transition-colors"
              >
                About Us
              </a>
              <div className="relative group">
                <button className="text-white text-sm font-normal tracking-[0.53px] uppercase hover:text-gravity-gray transition-colors">
                  Our Services
                </button>
              </div>
              <a
                href="/product"
                className="text-white text-sm font-normal tracking-[0.53px] uppercase hover:text-gravity-gray transition-colors"
              >
                Products
              </a>
              <a
                href="#"
                className="text-white text-sm font-normal tracking-[0.53px] uppercase hover:text-gravity-gray transition-colors"
              >
                Work with Us
              </a>
              <a
                href="#"
                className="text-white text-sm font-normal tracking-[0.53px] uppercase hover:text-gravity-gray transition-colors"
              >
                Blog
              </a>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <a
                href="/contact"
                className="flex items-center px-7 py-1 text-white text-sm font-normal tracking-[0.53px] uppercase hover:opacity-90 transition-opacity"
              >
                <div className="w-4 h-4 rounded-full bg-gravity-gradient mr-2"></div>
                Get In Touch
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:text-gravity-gray transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-gravity-dark/95 backdrop-blur-md border-t border-gravity-border/50 z-50">
            <div className="px-4 py-6 space-y-4">
              <a
                href="#"
                className="block text-white text-sm font-normal tracking-[0.53px] uppercase hover:text-gravity-gray transition-colors py-2"
              >
                About Us
              </a>
              <a
                href="#"
                className="block text-white text-sm font-normal tracking-[0.53px] uppercase hover:text-gravity-gray transition-colors py-2"
              >
                Our Services
              </a>
              <a
                href="/product"
                className="block text-white text-sm font-normal tracking-[0.53px] uppercase hover:text-gravity-gray transition-colors py-2"
              >
                Products
              </a>
              <a
                href="#"
                className="block text-white text-sm font-normal tracking-[0.53px] uppercase hover:text-gravity-gray transition-colors py-2"
              >
                Work with Us
              </a>
              <a
                href="#"
                className="block text-white text-sm font-normal tracking-[0.53px] uppercase hover:text-gravity-gray transition-colors py-2"
              >
                Blog
              </a>
              <a
                href="/contact"
                className="flex items-center mt-4 px-7 py-3 text-white text-sm font-normal tracking-[0.53px] uppercase bg-gravity-gradient rounded-sm hover:opacity-90 transition-opacity"
              >
                <div className="w-3 h-3 rounded-full bg-white/30 mr-2"></div>
                Get In Touch
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <FloatingOrbs />
        <GridPattern />
        <GlowingDots />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative">
            <h1 className="text-4xl sm:text-6xl lg:text-[94px] font-medium leading-tight lg:leading-[106px] mb-6">
              <div className="mb-2">Powering</div>
              <div>Business Intelligence</div>
            </h1>

            <p className="text-lg sm:text-xl lg:text-[22px] text-gravity-gray max-w-3xl mx-auto mb-12 leading-relaxed lg:leading-9">
              Our advanced data analytics platform provides real-time insights
              and intelligence across 500+ data sources, empowering businesses
              to make data-driven decisions with confidence.
            </p>

            <button className="inline-flex items-center px-8 py-5 bg-gravity-gradient rounded-sm text-white text-lg lg:text-[23px] font-medium uppercase tracking-wide hover:opacity-90 transition-opacity">
              Get in touch
            </button>
          </div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gravity-dark to-transparent"></div>
      </section>

      {/* About Gravity Team Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-[56px] font-medium mb-6 leading-tight">
              About Gravity Team
            </h2>
            <p className="text-lg lg:text-xl text-gravity-gray max-w-3xl mx-auto leading-relaxed">
              At Gravity Team, we are on a mission to transform how businesses
              understand and leverage their data. We are a data-native analytics
              company founded by engineers, scientists, and innovators who are
              passionate about turning complex data into actionable business
              insights.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gravity-gradient">
            {/* Row 1 */}
            <div className="bg-gravity-dark p-8 text-center">
              <div className="text-2xl lg:text-[32px] font-medium mb-4">
                50+ petabytes
              </div>
              <div className="text-sm lg:text-lg text-gravity-gray leading-relaxed">
                data processed
                <br />
                annually
              </div>
            </div>

            <div className="bg-gravity-gradient p-8 text-center">
              <div className="text-3xl lg:text-[40px] font-medium mb-4">
                99.9%
              </div>
              <div className="text-lg lg:text-xl leading-relaxed">
                uptime for mission-critical analytics
              </div>
            </div>

            <div className="bg-gravity-dark p-8 text-center">
              <div className="text-2xl lg:text-[39px] font-medium mb-4">
                ~50
              </div>
              <div className="text-sm lg:text-lg text-gravity-gray leading-relaxed">
                Data Scientists
                <br />
                (& growing)
              </div>
            </div>

            <div className="bg-gravity-dark p-8 text-center">
              <div className="text-2xl lg:text-[38px] font-medium mb-4">
                500+
              </div>
              <div className="text-sm lg:text-lg text-gravity-gray leading-relaxed">
                enterprise clients globally
              </div>
            </div>

            {/* Row 2 */}
            <div className="bg-gravity-dark p-8 text-center">
              <div className="text-2xl lg:text-[37px] font-medium mb-4">
                2017
              </div>
              <div className="text-sm lg:text-[17px] text-gravity-gray leading-relaxed">
                founded, data-first
              </div>
            </div>

            <div className="bg-gravity-dark p-8 text-center">
              <div className="text-2xl lg:text-[39px] font-medium mb-4">
                10,000+
              </div>
              <div className="text-sm lg:text-[17px] text-gravity-gray leading-relaxed">
                data source integrations
              </div>
            </div>

            <div className="bg-gravity-dark p-8 text-center">
              <div className="text-2xl lg:text-[38px] font-medium mb-4">
                24/7
              </div>
              <div className="text-sm lg:text-lg text-gravity-gray leading-relaxed">
                support & monitoring
              </div>
            </div>

            <div className="bg-gravity-dark p-8 text-center">
              <div className="text-2xl lg:text-[38px] font-medium mb-4">
                1 million+
              </div>
              <div className="text-sm lg:text-lg text-gravity-gray leading-relaxed">
                insights delivered daily
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crypto Market Making Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <GlowingDots className="opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-[56px] font-medium mb-6 leading-tight">
              Enterprise Analytics Solutions
            </h2>
            <p className="text-lg lg:text-xl text-gravity-gray max-w-3xl mx-auto leading-relaxed">
              We are a global data analytics provider offering comprehensive
              business intelligence solutions. We serve Fortune 500 companies
              and growing businesses across 25+ industries worldwide.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Market Making for Crypto Projects */}
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-[36px] font-normal leading-tight">
                Analytics for Growing Companies
              </h3>
              <p className="text-lg lg:text-xl font-bold leading-relaxed">
                Accelerate your growth with data-driven insights
              </p>
              <p className="text-lg lg:text-xl text-gravity-gray leading-relaxed">
                We invest in building long-term partnerships and support growing
                companies with comprehensive analytics solutions, industry
                expertise, and strategic insights.
              </p>
              <a href="#" className="inline-flex items-center group">
                <span className="text-lg border-b-2 border-gravity-gradient pb-0.5 mr-6">
                  Learn more
                </span>
                <ArrowRight className="w-5 h-5 text-gravity-blue group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Market Making Visualization */}
            <div className="relative h-80 lg:h-96 bg-gradient-to-br from-gravity-purple/10 to-gravity-blue/10 rounded-lg p-8 border border-gravity-border/30">
              <div className="h-full w-full">
                <TradingChart />
              </div>
              <div className="absolute top-4 left-4 text-sm text-gravity-gray font-medium">
                Data Processing & Analytics
              </div>
            </div>
          </div>

          {/* Market Making for Crypto Exchanges */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mt-24">
            {/* Exchange Liquidity Visualization */}
            <div className="relative h-80 lg:h-96 bg-gradient-to-br from-gravity-blue/10 to-gravity-gold/10 rounded-lg p-8 border border-gravity-border/30 order-2 lg:order-1">
              <div className="h-full w-full">
                <LiquidityVisualization />
              </div>
              <div className="absolute top-4 left-4 text-sm text-gravity-gray font-medium">
                Global Data Network
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <h3 className="text-2xl lg:text-[36px] font-normal leading-tight">
                Enterprise Data Intelligence
              </h3>
              <p className="text-lg lg:text-xl font-bold leading-relaxed">
                Transform your business with comprehensive data insights
              </p>
              <p className="text-lg lg:text-[19px] text-gravity-gray leading-relaxed">
                Our enterprise-grade analytics platform helps Fortune 500
                companies unlock hidden value in their data and achieve
                competitive advantages with up to 40% efficiency gains.
              </p>
              <a href="#" className="inline-flex items-center group">
                <span className="text-lg border-b-2 border-gravity-gradient pb-0.5 mr-6">
                  Learn more
                </span>
                <ArrowRight className="w-5 h-5 text-gravity-blue group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partners & Friends Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <FloatingOrbs className="opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-[60px] font-medium mb-0 leading-tight">
              Our Partners & Friends
            </h2>
          </div>

          {/* Partners Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-8 max-w-md mx-auto">
              {/* Column 1 */}
              <div className="space-y-8">
                <div className="bg-gradient-to-b from-gravity-border/15 to-gravity-dark/10 border border-gravity-border/50 rounded p-14 text-center hover:border-gravity-border/70 transition-colors">
                  <div className="flex justify-center mb-4">
                    <BithumbLogo className="w-20 h-20" />
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">
                    bithumb
                  </div>
                </div>
                <div className="bg-gradient-to-b from-gravity-border/15 to-gravity-dark/10 border border-gravity-border/50 rounded p-14 text-center hover:border-gravity-border/70 transition-colors">
                  <div className="flex justify-center mb-4">
                    <BitbankLogo className="w-20 h-20" />
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">
                    bitbank
                  </div>
                </div>
                <div className="bg-gradient-to-b from-gravity-border/15 to-gravity-dark/10 border border-gravity-border/50 rounded p-14 text-center hover:border-gravity-border/70 transition-colors">
                  <div className="flex justify-center mb-4">
                    <BinanceLogo className="w-20 h-20" />
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">
                    binance
                  </div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-8 mt-12">
                <div className="bg-gradient-to-b from-gravity-border/15 to-gravity-dark/10 border border-gravity-border/50 rounded p-14 text-center hover:border-gravity-border/70 transition-colors">
                  <div className="flex justify-center mb-4">
                    <BitstampLogo className="w-20 h-20" />
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">
                    bitstamp
                  </div>
                </div>
                <div className="bg-gradient-to-b from-gravity-border/15 to-gravity-dark/10 border border-gravity-border/50 rounded p-14 text-center hover:border-gravity-border/70 transition-colors">
                  <div className="flex justify-center mb-4">
                    <CoinbaseLogo className="w-20 h-20" />
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">
                    coinbase
                  </div>
                </div>
                <div className="bg-gradient-to-b from-gravity-border/15 to-gravity-dark/10 border border-gravity-border/50 rounded p-14 text-center hover:border-gravity-border/70 transition-colors">
                  <div className="flex justify-center mb-4">
                    <BitfinexLogo className="w-20 h-20" />
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">
                    bitfinex
                  </div>
                </div>
              </div>
            </div>

            {/* Gradient overlays */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gravity-dark via-gravity-dark/88 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gravity-dark via-gravity-dark/88 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-[57px] font-medium mb-6 leading-tight">
              We are in a good company
            </h2>
            <p className="text-lg lg:text-xl text-white max-w-3xl mx-auto leading-relaxed">
              Our partnerships have delivered great value to our projects and
              we're happy to share some of their feedback below
            </p>
          </div>

          {/* Testimonial */}
          <div className="text-center mb-16">
            <blockquote className="text-xl lg:text-[26px] text-white leading-relaxed lg:leading-[44px] mb-8 max-w-4xl mx-auto">
              "Since 2020, Gravity Team has been an exceptional analytics
              partner for our organization. They have proven themselves to be
              one of the most innovative, reliable and data-driven companies
              we've worked with. Gravity Team has delivered high-quality
              insights and has proven to be a trustworthy partner. We strongly
              recommend Gravity Team as they have been instrumental in our
              digital transformation journey."
            </blockquote>

            <div className="space-y-2">
              <div className="text-lg font-bold">Sarah Mitchell</div>
              <div className="flex items-center justify-center space-x-4">
                <div className="text-sm text-white font-light">
                  Chief Data Officer, TechCorp
                </div>
                <div className="w-px h-8 bg-gray-600"></div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-center space-x-4">
            <button className="w-14 h-14 rounded-full border border-gravity-gradient flex items-center justify-center">
              <ArrowRight className="w-5 h-5 rotate-180 text-gravity-blue" />
            </button>
            <button className="w-14 h-14 rounded-full border border-gravity-gradient flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-gravity-blue" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center space-x-4 mt-8">
            <div className="w-2 h-2 rounded-full bg-gravity-gradient"></div>
            <div className="w-2 h-2 rounded-full bg-gray-600"></div>
            <div className="w-2 h-2 rounded-full bg-gray-600"></div>
          </div>
        </div>
      </section>

      {/* Join Gravity Team Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-[53px] font-medium leading-tight">
                Join
                <br />
                Gravity Team
              </h2>
            </div>

            <div className="space-y-10">
              <div className="space-y-6">
                <p className="text-lg lg:text-[19px] text-gravity-gray leading-relaxed">
                  Join our community of data scientists, engineers and
                  innovators who apply cutting-edge analytics techniques to
                  solve complex business challenges and drive meaningful
                  insights for organizations worldwide.
                </p>
                <p className="text-lg lg:text-[19px] text-gravity-gray leading-relaxed">
                  As we emphasize in our name – Gravity Team, we are a team. A
                  team of brilliant, passionate people, each masters of their
                  craft, curious about data and eager to tackle the next big
                  analytics challenge, build amazing solutions and make an
                  impact!
                </p>
              </div>

              <a href="#" className="inline-flex items-center group">
                <span className="text-lg border-b-2 border-gravity-gradient pb-0.5 mr-6">
                  Learn more about working with us
                </span>
                <ArrowRight className="w-5 h-5 text-gravity-blue group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-[56px] font-medium mb-6 leading-tight">
            Contact Us
          </h2>
          <p className="text-lg text-gravity-gray max-w-3xl mx-auto mb-12 leading-relaxed">
            We are always open to discuss new strategic partnerships and
            opportunities. Reach out if you're an enterprise looking for
            advanced analytics solutions, a data scientist interested in joining
            our team, or if you have an innovative idea you'd like to explore
            with us!
          </p>

          <button className="inline-flex items-center px-7 py-4 bg-gravity-gradient rounded-sm text-white text-lg font-medium uppercase tracking-wide hover:opacity-90 transition-opacity">
            Get In Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/25 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">
            <div className="space-y-4 mb-8 lg:mb-0">
              <h3 className="text-sm uppercase tracking-wider text-white font-normal">
                Gravity Team
              </h3>
              <div className="space-y-2">
                <div className="text-sm text-gravity-muted">About Us</div>
                <div className="text-sm text-gravity-muted">Work with Us</div>
              </div>
            </div>

            <div className="text-right space-y-4">
              <GravityLogo size="medium" />
              <div className="text-white text-xl">↗</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-transparent">
            <div className="text-sm text-gravity-muted mb-4 sm:mb-0">
              Terms of Use & Privacy Policy
            </div>
            <div className="text-sm text-gravity-muted">
              ©2022 Gravity Team. All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
