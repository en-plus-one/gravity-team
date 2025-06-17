import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import GravityLogo from "../components/GravityLogo";
import {
  FloatingOrbs,
  GridPattern,
  GlowingDots,
} from "../components/BackgroundElements";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  phone: z.string().optional(),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Form submitted:", data);

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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

            {/* Navigation */}
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
              <a
                href="#"
                className="text-white text-sm font-normal tracking-[0.53px] uppercase hover:text-gravity-gray transition-colors"
              >
                Our Services
              </a>
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
                Blog
              </a>
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center">
              <button className="flex items-center px-7 py-1 text-white text-sm font-normal tracking-[0.53px] uppercase hover:opacity-90 transition-opacity">
                <div className="w-4 h-4 rounded-full bg-gravity-gradient mr-2"></div>
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <FloatingOrbs />
        <GridPattern />
        <GlowingDots />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-[80px] font-medium leading-tight lg:leading-[90px] mb-6">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl lg:text-[22px] text-gravity-gray max-w-3xl mx-auto mb-12 leading-relaxed lg:leading-9">
            Ready to transform your business with advanced data analytics? We're
            here to help. Reach out to discuss your needs and discover how we
            can drive your success.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gravity-dark to-transparent"></div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl lg:text-[42px] font-medium mb-6 leading-tight">
                  Get in Touch
                </h2>
                <p className="text-lg text-gravity-gray leading-relaxed mb-8">
                  Whether you're looking for enterprise analytics solutions,
                  considering a partnership, or interested in joining our team,
                  we'd love to hear from you.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gravity-gradient rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Email Us</h3>
                    <p className="text-gravity-gray">contact@gravityteam.com</p>
                    <p className="text-gravity-gray">
                      partnerships@gravityteam.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gravity-gradient rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Call Us</h3>
                    <p className="text-gravity-gray">+1 (555) 123-4567</p>
                    <p className="text-gravity-gray">+44 20 7123 4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gravity-gradient rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Our Offices</h3>
                    <p className="text-gravity-gray">
                      123 Data Street, Analytics District
                      <br />
                      Tech City, TC 12345, USA
                    </p>
                    <p className="text-gravity-gray mt-2">
                      45 Innovation Lane
                      <br />
                      London, EC1A 1BB, UK
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gravity-gradient rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Business Hours</h3>
                    <p className="text-gravity-gray">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-gravity-gray">
                      Saturday: 10:00 AM - 4:00 PM
                    </p>
                    <p className="text-gravity-gray">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-gravity-border/10 to-gravity-dark/50 border border-gravity-border/30 rounded-lg p-8 lg:p-12">
                <h3 className="text-2xl lg:text-[32px] font-medium mb-8">
                  Send us a Message
                </h3>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">
                              First Name *
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                className="bg-gravity-dark/50 border-gravity-border/50 text-white placeholder:text-gravity-muted focus:border-gravity-blue"
                                placeholder="John"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">
                              Last Name *
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                className="bg-gravity-dark/50 border-gravity-border/50 text-white placeholder:text-gravity-muted focus:border-gravity-blue"
                                placeholder="Doe"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">
                            Email Address *
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              className="bg-gravity-dark/50 border-gravity-border/50 text-white placeholder:text-gravity-muted focus:border-gravity-blue"
                              placeholder="john.doe@company.com"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">
                              Company
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                className="bg-gravity-dark/50 border-gravity-border/50 text-white placeholder:text-gravity-muted focus:border-gravity-blue"
                                placeholder="Your Company"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">
                              Phone Number
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="tel"
                                className="bg-gravity-dark/50 border-gravity-border/50 text-white placeholder:text-gravity-muted focus:border-gravity-blue"
                                placeholder="+1 (555) 123-4567"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">
                            Subject *
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="bg-gravity-dark/50 border-gravity-border/50 text-white focus:border-gravity-blue">
                                <SelectValue placeholder="Select a subject" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-gravity-dark border-gravity-border">
                              <SelectItem
                                value="enterprise"
                                className="text-white"
                              >
                                Enterprise Analytics Solutions
                              </SelectItem>
                              <SelectItem
                                value="partnership"
                                className="text-white"
                              >
                                Partnership Opportunities
                              </SelectItem>
                              <SelectItem
                                value="careers"
                                className="text-white"
                              >
                                Career Opportunities
                              </SelectItem>
                              <SelectItem
                                value="support"
                                className="text-white"
                              >
                                Technical Support
                              </SelectItem>
                              <SelectItem value="other" className="text-white">
                                Other Inquiry
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">
                            Message *
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              className="bg-gravity-dark/50 border-gravity-border/50 text-white placeholder:text-gravity-muted focus:border-gravity-blue min-h-[120px]"
                              placeholder="Tell us about your project, requirements, or any questions you have..."
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gravity-gradient hover:opacity-90 text-white text-lg font-medium py-6 rounded-sm transition-opacity"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>

              {/* Background effects for form */}
              <div className="absolute -top-4 -left-4 -right-4 -bottom-4 bg-gradient-to-br from-gravity-purple/5 to-gravity-blue/5 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <GlowingDots className="opacity-30" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-[48px] font-medium mb-6 leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gravity-gray leading-relaxed">
              Quick answers to common questions about our services and
              processes.
            </p>
          </div>

          <div className="space-y-8">
            <div className="border border-gravity-border/30 rounded-lg p-6 hover:border-gravity-border/50 transition-colors">
              <h3 className="text-xl font-medium mb-3">
                How quickly can you implement an analytics solution?
              </h3>
              <p className="text-gravity-gray leading-relaxed">
                Implementation timelines vary depending on complexity, but most
                enterprise solutions are deployed within 4-8 weeks. We provide a
                detailed timeline during our initial consultation.
              </p>
            </div>

            <div className="border border-gravity-border/30 rounded-lg p-6 hover:border-gravity-border/50 transition-colors">
              <h3 className="text-xl font-medium mb-3">
                Do you offer ongoing support and maintenance?
              </h3>
              <p className="text-gravity-gray leading-relaxed">
                Yes, we provide 24/7 monitoring and support for all our
                enterprise clients. Our support packages include regular system
                updates, performance optimization, and technical assistance.
              </p>
            </div>

            <div className="border border-gravity-border/30 rounded-lg p-6 hover:border-gravity-border/50 transition-colors">
              <h3 className="text-xl font-medium mb-3">
                Can you integrate with our existing systems?
              </h3>
              <p className="text-gravity-gray leading-relaxed">
                Absolutely. We have experience integrating with 500+ different
                data sources and systems. Our team will assess your current
                infrastructure and provide a seamless integration plan.
              </p>
            </div>

            <div className="border border-gravity-border/30 rounded-lg p-6 hover:border-gravity-border/50 transition-colors">
              <h3 className="text-xl font-medium mb-3">
                What industries do you serve?
              </h3>
              <p className="text-gravity-gray leading-relaxed">
                We serve clients across 25+ industries including finance,
                healthcare, retail, manufacturing, technology, and more. Our
                solutions are customized to meet industry-specific requirements.
              </p>
            </div>
          </div>
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

export default Contact;
