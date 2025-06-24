import {
  ArrowRight,
  Check,
  Star,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  Shield,
  Truck,
  RotateCcw,
} from "lucide-react";
import { useState } from "react";
import GravityLogo from "../components/GravityLogo";
import { FloatingOrbs, GridPattern } from "../components/BackgroundElements";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { cn } from "../lib/utils";

const Product = () => {
  const [selectedVariant, setSelectedVariant] = useState("pro");
  const [selectedColor, setSelectedColor] = useState("midnight");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const productImages = [
    "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1200&h=800&q=80",
    "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1200&h=800&q=80",
    "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=1200&h=800&q=80",
    "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=1200&h=800&q=80",
  ];

  const variants = {
    standard: {
      name: "Gravity Phone Standard",
      price: "$799",
      originalPrice: "$899",
      description: "Essential features for everyday users",
      storage: "128GB",
      savings: "Save $100",
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
      savings: "Save $100",
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
      savings: "Save $100",
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

  const currentVariant = variants[selectedVariant as keyof typeof variants];

  return (
    <div className="min-h-screen bg-gravity-dark text-white">
      {/* Header */}
      <header className="relative z-50 w-full border-b border-gravity-border/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/">
                <GravityLogo size="medium" />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a
                href="/"
                className="text-gravity-gray text-sm font-medium tracking-wide uppercase hover:text-white transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gravity-gray text-sm font-medium tracking-wide uppercase hover:text-white transition-colors"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-gravity-gray text-sm font-medium tracking-wide uppercase hover:text-white transition-colors"
              >
                Our Services
              </a>
              <a
                href="/product"
                className="text-gravity-blue text-sm font-medium tracking-wide uppercase"
              >
                Products
              </a>
              <a
                href="#"
                className="text-gravity-gray text-sm font-medium tracking-wide uppercase hover:text-white transition-colors"
              >
                Work with Us
              </a>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-gravity-gray hover:text-white"
                aria-label="Add to wishlist"
              >
                <Heart className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gravity-gray hover:text-white"
                aria-label="Share product"
              >
                <Share2 className="w-5 h-5" />
              </Button>
              <a
                href="/contact"
                className="flex items-center px-6 py-2 bg-gravity-gradient rounded-lg text-white text-sm font-medium tracking-wide uppercase hover:opacity-90 transition-opacity"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Product Hero Section */}
      <section className="relative overflow-hidden">
        <FloatingOrbs className="opacity-20" />
        <GridPattern className="opacity-5" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center space-x-2 text-sm text-gravity-gray mb-8"
          >
            <a href="/" className="hover:text-white transition-colors">
              Home
            </a>
            <span aria-hidden="true">/</span>
            <a href="/products" className="hover:text-white transition-colors">
              Products
            </a>
            <span aria-hidden="true">/</span>
            <span className="text-white" aria-current="page">
              {currentVariant.name}
            </span>
          </nav>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Product Images - Takes up 3/5 of the layout */}
            <div className="lg:col-span-3 space-y-6">
              {/* Main Image */}
              <div className="relative aspect-[3/2] bg-gradient-to-br from-gravity-purple/10 to-gravity-blue/10 rounded-2xl overflow-hidden group">
                <img
                  src={productImages[currentImageIndex]}
                  alt={`${currentVariant.name} - View ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/1200x800/333/fff?text=Gravity+Phone";
                  }}
                />

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-sm">
                  {currentImageIndex + 1} / {productImages.length}
                </div>

                {/* Wishlist Button */}
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center transition-all"
                >
                  <Heart
                    className={cn(
                      "w-5 h-5",
                      isWishlisted ? "fill-red-500 text-red-500" : "text-white",
                    )}
                  />
                </button>
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-4">
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={cn(
                      "aspect-square rounded-xl overflow-hidden border-2 transition-all hover:scale-105",
                      currentImageIndex === index
                        ? "border-gravity-blue shadow-lg shadow-gravity-blue/20"
                        : "border-gravity-border/30 hover:border-gravity-border/60",
                    )}
                  >
                    <img
                      src={img}
                      alt={`${currentVariant.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://via.placeholder.com/200x200/333/fff?text=GP";
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details - Takes up 2/5 of the layout */}
            <div className="lg:col-span-2 space-y-8">
              {/* Rating and Reviews */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-gravity-gold text-gravity-gold"
                    />
                  ))}
                </div>
                <span className="text-gravity-gray">4.9 (2,847 reviews)</span>
              </div>

              {/* Product Title and Price */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Badge
                    variant="secondary"
                    className="bg-gravity-blue/10 text-gravity-blue border-gravity-blue/20"
                  >
                    {currentVariant.savings}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-gravity-border/30 text-gravity-gray"
                  >
                    {currentVariant.storage}
                  </Badge>
                </div>

                <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
                  {currentVariant.name}
                </h1>

                <div className="flex items-baseline space-x-3">
                  <span className="text-3xl font-bold text-gravity-blue">
                    {currentVariant.price}
                  </span>
                  {currentVariant.originalPrice && (
                    <span className="text-xl text-gravity-gray line-through">
                      {currentVariant.originalPrice}
                    </span>
                  )}
                </div>

                <p className="text-gravity-gray text-lg leading-relaxed">
                  {currentVariant.description}. Experience the future of mobile
                  technology with cutting-edge performance and stunning design.
                </p>
              </div>

              {/* Model Selection */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Choose Your Model</h3>
                <div className="space-y-3">
                  {Object.entries(variants).map(([key, variant]) => (
                    <Card
                      key={key}
                      className={cn(
                        "cursor-pointer border-2 transition-all hover:shadow-lg",
                        selectedVariant === key
                          ? "border-gravity-blue bg-gravity-blue/5 shadow-gravity-blue/20"
                          : "border-gravity-border/30 bg-gravity-dark/50 hover:border-gravity-border/60",
                      )}
                      onClick={() => setSelectedVariant(key)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <div className="font-semibold text-white">
                              {variant.name}
                            </div>
                            <div className="text-sm text-gravity-gray">
                              {variant.description}
                            </div>
                          </div>
                          <div className="text-right space-y-1">
                            <div className="text-xl font-bold text-gravity-blue">
                              {variant.price}
                            </div>
                            {variant.originalPrice && (
                              <div className="text-sm text-gravity-gray line-through">
                                {variant.originalPrice}
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Choose Your Color</h3>
                <div className="flex space-x-4">
                  {Object.entries(colors).map(([key, color]) => (
                    <div
                      key={key}
                      className="flex flex-col items-center space-y-2"
                    >
                      <button
                        onClick={() => setSelectedColor(key)}
                        className={cn(
                          "relative w-12 h-12 rounded-full border-2 transition-all hover:scale-110",
                          selectedColor === key
                            ? "border-gravity-blue shadow-lg shadow-gravity-blue/30"
                            : "border-gray-300 hover:border-gravity-border",
                        )}
                        style={{ backgroundColor: color.hex }}
                      >
                        {selectedColor === key && (
                          <div className="absolute inset-0 rounded-full border-2 border-gravity-blue animate-pulse" />
                        )}
                      </button>
                      <span className="text-xs text-gravity-gray text-center leading-tight">
                        {color.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <Card className="bg-gravity-dark/50 border-gravity-border/30">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-white">
                    Key Features
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {currentVariant.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-gravity-blue flex-shrink-0" />
                      <span className="text-gravity-gray">{feature}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Purchase Section */}
              <div className="space-y-4 pt-4">
                <Button
                  size="lg"
                  className="w-full bg-gravity-gradient hover:opacity-90 text-lg font-semibold py-6"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart - {currentVariant.price}
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-gravity-border/50 text-white hover:bg-gravity-border/10 py-6"
                >
                  Buy Now with Express Checkout
                </Button>

                {/* Trust Signals */}
                <div className="grid grid-cols-3 gap-4 pt-4 text-center">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-8 h-8 bg-gravity-blue/20 rounded-full flex items-center justify-center">
                      <Truck className="w-4 h-4 text-gravity-blue" />
                    </div>
                    <span className="text-xs text-gravity-gray">
                      Free Shipping
                    </span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-8 h-8 bg-gravity-blue/20 rounded-full flex items-center justify-center">
                      <RotateCcw className="w-4 h-4 text-gravity-blue" />
                    </div>
                    <span className="text-xs text-gravity-gray">
                      30-Day Returns
                    </span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-8 h-8 bg-gravity-blue/20 rounded-full flex items-center justify-center">
                      <Shield className="w-4 h-4 text-gravity-blue" />
                    </div>
                    <span className="text-xs text-gravity-gray">
                      2-Year Warranty
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="bg-gravity-border/20" />

      {/* Product Features */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Why Choose Gravity Phone?
            </h2>
            <p className="text-lg text-gravity-gray max-w-3xl mx-auto leading-relaxed">
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
                  "Capture stunning photos and videos with our advanced multi-lens camera system featuring AI-powered photography.",
                icon: "📸",
              },
              {
                title: "Lightning Performance",
                description:
                  "A17 Pro chip delivers console-quality gaming and professional-grade performance with 20% faster processing.",
                icon: "⚡",
              },
              {
                title: "All-Day Battery",
                description:
                  "Up to 29 hours of video playback with intelligent power management and fast wireless charging.",
                icon: "🔋",
              },
              {
                title: "Titanium Design",
                description:
                  "Aerospace-grade titanium construction that's both strong and lightweight with premium finish.",
                icon: "✨",
              },
              {
                title: "Face ID Security",
                description:
                  "Advanced facial recognition technology for secure and convenient access with privacy protection.",
                icon: "🔒",
              },
              {
                title: "5G Connectivity",
                description:
                  "Experience blazing-fast downloads and seamless streaming anywhere with next-gen 5G technology.",
                icon: "📶",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-gradient-to-b from-gravity-border/10 to-gravity-dark/10 border-gravity-border/30 hover:border-gravity-border/60 transition-all hover:shadow-lg hover:shadow-gravity-blue/10"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="text-4xl">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gravity-gray leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="bg-gravity-border/20" />

      {/* Related Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold">
              You Might Also Like
            </h2>
            <Button
              variant="ghost"
              className="text-gravity-blue hover:text-gravity-gray"
            >
              View All Products
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Gravity Buds Pro",
                price: "$249",
                originalPrice: "$299",
                image:
                  "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=400&h=300&q=80",
                description:
                  "Premium wireless earbuds with active noise cancellation and spatial audio",
              },
              {
                name: "Gravity Watch Ultra",
                price: "$449",
                originalPrice: "$549",
                image:
                  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&h=300&q=80",
                description:
                  "Advanced smartwatch with health monitoring and fitness tracking",
              },
              {
                name: "Gravity Tablet Pro",
                price: "$899",
                originalPrice: "$999",
                image:
                  "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=400&h=300&q=80",
                description:
                  "Powerful tablet for creativity and productivity with M2 chip",
              },
            ].map((product, index) => (
              <Card
                key={index}
                className="group cursor-pointer bg-gravity-dark/50 border-gravity-border/30 hover:border-gravity-border/60 transition-all hover:shadow-lg hover:shadow-gravity-blue/10"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-gravity-purple/20 to-gravity-blue/20 rounded-t-lg overflow-hidden">
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
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-semibold text-white group-hover:text-gravity-blue transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gravity-gray text-sm leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-gravity-blue">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gravity-gray line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-gradient-to-r from-gravity-purple/10 to-gravity-blue/10 border-t border-gravity-border/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Experience the Future?
            </h2>
            <p className="text-lg text-gravity-gray max-w-2xl mx-auto leading-relaxed">
              Join millions of users who trust Gravity electronics for their
              daily technology needs. Get yours today with free shipping and our
              best-in-class customer support.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gravity-gradient hover:opacity-90 px-8 py-6 text-lg font-semibold"
            >
              Shop Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gravity-border/50 text-white hover:bg-gravity-border/10 px-8 py-6 text-lg font-semibold"
            >
              Find a Store
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
