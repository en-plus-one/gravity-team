import {
  ArrowRight,
  Check,
  Star,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import GravityLogo from "../components/GravityLogo";
import { FloatingOrbs, GridPattern } from "../components/BackgroundElements";

const Product = () => {
  const [selectedVariant, setSelectedVariant] = useState("pro");
  const [selectedColor, setSelectedColor] = useState("midnight");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const productImages = [
    "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=800&h=600&q=80",
  ];

  const variants = {
    standard: {
      name: "Gravity Phone Standard",
      price: "$799",
      originalPrice: "$899",
      description: "Essential features for everyday users",
      storage: "128GB",
      features: [
        "6.1-inch Super Retina display",
        "A16 Bionic chip",
        "Dual camera system",
        "All-day battery life",
        "Face ID security",
      ],
    },
    pro: {
      name: "Gravity Phone Pro",
      price: "$999",
      originalPrice: "$1099",
      description: "Advanced technology for professionals",
      storage: "256GB",
      features: [
        "6.7-inch ProMotion display",
        "A17 Pro chip with GPU",
        "Pro camera system with 3x zoom",
        "48MP main camera",
        "Action Button",
        "Titanium design",
        "USB-C connectivity",
      ],
    },
    ultra: {
      name: "Gravity Phone Ultra",
      price: "$1299",
      originalPrice: "$1399",
      description: "Ultimate performance and features",
      storage: "512GB",
      features: [
        "6.9-inch ProMotion XDR display",
        "A17 Pro Max chip",
        "Pro camera system with 5x zoom",
        "48MP + 12MP + 12MP cameras",
        "Satellite connectivity",
        "Titanium premium design",
        "MagSafe wireless charging",
      ],
    },
  };

  const colors = {
    midnight: { name: "Midnight Black", hex: "#000000" },
    starlight: { name: "Starlight Silver", hex: "#F5F5DC" },
    blue: { name: "Deep Blue", hex: "#1E3A8A" },
    purple: { name: "Cosmic Purple", hex: "#7C3AED" },
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + productImages.length) % productImages.length,
    );
  };

  return (
    <div className="min-h-screen bg-gravity-dark text-white">
      {/* Header */}
      <header className="relative z-50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-22 py-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/">
                <GravityLogo size="medium" />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-12">
              <a
                href="/"
                className="text-white text-sm font-normal tracking-[0.53px] uppercase hover:text-gravity-gray transition-colors"
              >
                Home
              </a>
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
                className="text-gravity-blue text-sm font-normal tracking-[0.53px] uppercase"
              >
                Products
              </a>
              <a
                href="#"
                className="text-white text-sm font-normal tracking-[0.53px] uppercase hover:text-gravity-gray transition-colors"
              >
                Work with Us
              </a>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <button className="flex items-center px-7 py-1 text-white text-sm font-normal tracking-[0.53px] uppercase hover:opacity-90 transition-opacity">
                <div className="w-4 h-4 rounded-full bg-gravity-gradient mr-2"></div>
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Product Hero */}
      <section className="relative overflow-hidden">
        <FloatingOrbs className="opacity-30" />
        <GridPattern className="opacity-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Product Images */}
            <div className="space-y-6">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-gravity-purple/20 to-gravity-blue/20 rounded-2xl overflow-hidden">
                <img
                  src={productImages[currentImageIndex]}
                  alt={`Gravity Phone ${selectedVariant} - View ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/800x600/333/fff?text=Gravity+Phone";
                  }}
                />
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Thumbnail Images */}
              <div className="flex space-x-4">
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      currentImageIndex === index
                        ? "border-gravity-blue"
                        : "border-gravity-border/30 hover:border-gravity-border/60"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Gravity Phone view ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://via.placeholder.com/80x80/333/fff?text=GP";
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-gravity-gold text-gravity-gold"
                      />
                    ))}
                  </div>
                  <span className="text-gravity-gray text-sm ml-2 mt-0.5">
                    (4.9) • 2,847 reviews
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                  {variants[selectedVariant as keyof typeof variants].name}
                </h1>

                <p className="text-lg text-gravity-gray leading-relaxed">
                  Experience the future of mobile technology. Engineered with
                  cutting-edge performance, stunning design, and innovative
                  features that redefine what a smartphone can do.
                </p>
              </div>

              {/* Storage & Model Selection */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Choose Your Model</h3>
                <div className="grid gap-4">
                  {Object.entries(variants).map(([key, variant]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedVariant(key)}
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        selectedVariant === key
                          ? "border-gravity-blue bg-gravity-blue/10"
                          : "border-gravity-border/30 hover:border-gravity-border/60"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold">{variant.name}</div>
                          <div className="text-sm text-gravity-gray">
                            {variant.description} • {variant.storage}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold">
                            {variant.price}
                          </div>
                          {variant.originalPrice && (
                            <div className="text-sm text-gravity-gray line-through">
                              {variant.originalPrice}
                            </div>
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Choose Your Color</h3>
                <div className="flex space-x-4">
                  {Object.entries(colors).map(([key, color]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedColor(key)}
                      className={`relative group ${
                        selectedColor === key ? "ring-2 ring-gravity-blue" : ""
                      }`}
                    >
                      <div
                        className="w-12 h-12 rounded-full border-2 border-gray-300"
                        style={{ backgroundColor: color.hex }}
                      />
                      {selectedColor === key && (
                        <div className="absolute inset-0 rounded-full border-2 border-gravity-blue" />
                      )}
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gravity-gray whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                        {color.name}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h4 className="font-semibold">Key Features:</h4>
                <div className="space-y-2">
                  {variants[
                    selectedVariant as keyof typeof variants
                  ].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-gravity-blue flex-shrink-0" />
                      <span className="text-gravity-gray">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-4">
                <button className="w-full py-4 px-8 bg-gravity-gradient rounded-lg text-white font-semibold text-lg hover:opacity-90 transition-opacity">
                  Add to Cart
                </button>
                <button className="w-full py-4 px-8 border-2 border-gravity-border/50 rounded-lg text-white font-semibold hover:border-gravity-border transition-colors">
                  Buy Now with Express Checkout
                </button>
                <p className="text-sm text-gravity-gray text-center">
                  Free shipping • 30-day returns • 2-year warranty
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Why Choose Gravity Phone?
            </h2>
            <p className="text-lg text-gravity-gray max-w-3xl mx-auto">
              Engineered with precision and built for performance, our
              smartphones combine innovative technology with elegant design to
              deliver an unmatched mobile experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Pro Camera System",
                description:
                  "Capture stunning photos and videos with our advanced multi-lens camera system",
                icon: "📸",
              },
              {
                title: "Lightning Performance",
                description:
                  "A17 Pro chip delivers console-quality gaming and professional-grade performance",
                icon: "⚡",
              },
              {
                title: "All-Day Battery",
                description:
                  "Up to 29 hours of video playback with intelligent power management",
                icon: "🔋",
              },
              {
                title: "Titanium Design",
                description:
                  "Aerospace-grade titanium construction that's both strong and lightweight",
                icon: "✨",
              },
              {
                title: "Face ID Security",
                description:
                  "Advanced facial recognition technology for secure and convenient access",
                icon: "🔒",
              },
              {
                title: "5G Connectivity",
                description:
                  "Experience blazing-fast downloads and seamless streaming anywhere",
                icon: "📶",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-b from-gravity-border/10 to-gravity-dark/10 border border-gravity-border/30 rounded-lg hover:border-gravity-border/60 transition-colors"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gravity-gray">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 border-t border-gravity-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold">
              You Might Also Like
            </h2>
            <a
              href="#"
              className="inline-flex items-center text-gravity-blue hover:text-gravity-gray transition-colors"
            >
              View All Products
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Gravity Buds Pro",
                price: "$249",
                image:
                  "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=400&h=300&q=80",
                description:
                  "Premium wireless earbuds with active noise cancellation",
              },
              {
                name: "Gravity Watch Ultra",
                price: "$449",
                image:
                  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&h=300&q=80",
                description: "Advanced smartwatch with health monitoring",
              },
              {
                name: "Gravity Tablet Pro",
                price: "$899",
                image:
                  "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=400&h=300&q=80",
                description: "Powerful tablet for creativity and productivity",
              },
            ].map((product, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gradient-to-br from-gravity-purple/20 to-gravity-blue/20 rounded-lg overflow-hidden mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://via.placeholder.com/400x300/333/fff?text=" +
                        encodeURIComponent(product.name);
                    }}
                  />
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-gravity-blue transition-colors">
                  {product.name}
                </h3>
                <p className="text-gravity-gray text-sm mb-2">
                  {product.description}
                </p>
                <p className="font-semibold">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-gradient-to-r from-gravity-purple/10 to-gravity-blue/10 border-t border-gravity-border/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Experience the Future?
          </h2>
          <p className="text-lg text-gravity-gray mb-8 max-w-2xl mx-auto">
            Join millions of users who trust Gravity electronics for their daily
            technology needs. Get yours today with free shipping.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gravity-gradient rounded-lg text-white font-semibold hover:opacity-90 transition-opacity">
              Shop Now
            </button>
            <button className="px-8 py-4 border-2 border-gravity-border/50 rounded-lg text-white font-semibold hover:border-gravity-border transition-colors">
              Find a Store
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
