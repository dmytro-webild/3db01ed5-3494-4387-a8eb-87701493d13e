"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroOverlay from "@/components/sections/hero/HeroOverlay";
import MetricSplitMediaAbout from "@/components/sections/about/MetricSplitMediaAbout";
import FeatureCardOne from "@/components/sections/feature/FeatureCardOne";
import FeatureBorderGlow from "@/components/sections/feature/featureBorderGlow/FeatureBorderGlow";
import FeatureCardEight from "@/components/sections/feature/FeatureCardEight";
import TestimonialCardThirteen from "@/components/sections/testimonial/TestimonialCardThirteen";
import FaqSplitText from "@/components/sections/faq/FaqSplitText";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import { ShieldCheck, Wrench, DollarSign, Phone } from "lucide-react";

export default function HvacPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="directional-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="medium"
      sizing="medium"
      background="aurora"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="semibold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingInline
            brandName="Cartagena Pet Delivery"
            navItems={[
              { name: "Services", id: "services" },
              { name: "About", id: "about" },
              { name: "Testimonials", id: "testimonials" },
              { name: "Contact", id: "contact" },
            ]}
            button={{ text: "WhatsApp", href: "https://wa.me/573011471991" }}
            animateOnLoad={false}
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroOverlay
            title="Alimento premium, sin esfuerzo."
            description="Seleccionamos lo mejor y lo llevamos hasta tu puerta, sin que tengas que pensar en pedidos, tiempos o desplazamientos."
            buttons={[
              { text: "Hablar por WhatsApp", href: "https://wa.me/573011471991" },
            ]}
            buttonAnimation="slide-up"
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUhrqIzikJzQFgBimWgvnkX4XL/uploaded-1775786908406-2i7kq60a.jpg"
            imageAlt="Premium Pet Food Delivery"
            showDimOverlay={true}
            className="bg-[#0D1B2A]"
            dimOverlayClassName="bg-gradient-to-r from-[#0D1B2A]/55 to-transparent"
          />
        </div>

        <div id="about" data-section="about">
          <MetricSplitMediaAbout
            tag="About Us"
            title="Nos encargamos de todo. Tu solo disfrutas "
            description="Aitextoo"
            metrics={[
              { value: "2,500+", title: "Entregas completadas" },
              { value: "98%", title: "Clientes felices" },
            ]}
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/hvac/img-2.jpg"
            mediaAnimation="slide-up"
            metricsAnimation="slide-up"
            useInvertedBackground={false}
          />
        </div>
        <div id="services" data-section="services">
          <FeatureCardOne
            title="Our Services"
            description="From installations to emergency repairs, we have your comfort covered."
            buttons={[{ text: "Hablar por WhatsApp", href: "https://wa.me/573011471991" }]}
            features={[
              { title: "AC Installation", description: "Expert installation of high-efficiency air conditioning systems.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/hvac/img-4.jpg?_wi=1" },
              { title: "Heating Systems", description: "Complete furnace and heat pump installations.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/hvac/img-5.jpg" },
              { title: "Maintenance Plans", description: "Preventative programs to extend system life.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/hvac/img-6.jpg?_wi=1" },
            ]}
            gridVariant="uniform-all-items-equal"
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
          />
        </div>
        <FeatureBorderGlow
          title="Why Choose AirPro"
          description="What sets us apart from the rest"
          features={[
            { icon: ShieldCheck, title: "Reliability & Trust", description: "Looking for a dependable HVAC company?" },
            { icon: Wrench, title: "Quality Workmanship", description: "Our skilled technicians excel in repairs." },
            { icon: DollarSign, title: "Fair & Transparent Pricing", description: "No surprises here!" },
          ]}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
        />
        <div id="testimonials" data-section="testimonials">
          <TestimonialCardThirteen
            title="What Our Clients Say"
            description="Hear from homeowners and businesses who trust us."
            testimonials={[
              { id: "1", name: "James R.", handle: "Homeowner", testimonial: "Fantastic service, on time and clean.", rating: 5 },
              { id: "2", name: "Linda M.", handle: "Business Owner", testimonial: "We use their maintenance plans, highly recommended.", rating: 5 },
            ]}
            showRating={true}
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
          />
        </div>
        <div id="faq" data-section="faq">
          <FaqSplitText
            sideTitle="Frequently Asked Questions"
            buttons={[{ text: "Hablar por WhatsApp", href: "https://wa.me/573011471991" }]}
            faqsAnimation="slide-up"
            faqs={[
              { id: "1", title: "Do you offer emergency service?", content: "Yes, we provide 24/7 service." },
              { id: "2", title: "How often should I service?", content: "We recommend twice a year." },
            ]}
          />
        </div>
        <div id="contact" data-section="contact">
          <ContactCTA
            tag="Get in Touch"
            tagIcon={Phone}
            title="Ready to Stay Comfortable Year-Round?"
            description="Call us today or request a free quote via WhatsApp."
            buttons={[{ text: "Hablar por WhatsApp", href: "https://wa.me/573011471991" }]}
            background={{ variant: "plain" }}
            useInvertedBackground={false}
          />
        </div>
        <div id="footer" data-section="footer">
          <FooterMedia
            logoText="AirPro HVAC"
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/hvac/img-10.jpg"
            columns={[
              { title: "Services", items: [{ label: "Installation", href: "#services" }] },
              { title: "Company", items: [{ label: "About", href: "#about" }] },
            ]}
            copyrightText="© 2026 | AirPro HVAC"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}