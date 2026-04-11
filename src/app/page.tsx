"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroOverlay from "@/components/sections/hero/HeroOverlay";
import MetricSplitMediaAbout from "@/components/sections/about/MetricSplitMediaAbout";
import FeatureCardOne from "@/components/sections/feature/FeatureCardOne";
import TestimonialCardThirteen from "@/components/sections/testimonial/TestimonialCardThirteen";
import FaqSplitText from "@/components/sections/faq/FaqSplitText";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import { Phone } from "lucide-react";

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
            title="Asi deberia sentirse cuidar de tu mascota "
            description="Sin urgencias, sin olvidos, sin interrupciones. Solo tranquilidad, sabiendo que todo siempre estará resuelto.
"
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
            title="Así funciona"
            description="Nos encargamos de todo para que tu no tengas que preocuparte por nada. "
            buttons={[{ text: "Hablar por WhatsApp", href: "https://wa.me/573011471991" }]}
            features={[
              { title: "Elegimos contigo ", description: "Te ayudamos a elegir lo mejor según tu peludo. ", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUhrqIzikJzQFgBimWgvnkX4XL/uploaded-1775825783516-zf3bdx3i.jpg" },
              { title: "Gestionamos todo ", description: "Pedidos, tiempos y seguimiento sin que tu tengas que intervenir. ", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUhrqIzikJzQFgBimWgvnkX4XL/uploaded-1775870281669-4bcp5dfu.png" },
              { title: "Lo recibes en tu puerta ", description: "Recibes puntual y sin largos tiempos de envió. ", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/hvac/img-6.jpg" },
            ]}
            gridVariant="uniform-all-items-equal"
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
          />
        </div>
        <div id="testimonials" data-section="testimonials">
          <TestimonialCardThirteen
            title="Lo que dicen nuestros clientes"
            description="La tranquilidad de saber que sus mascotas están bien nutridas."
            testimonials={[
              { id: "1", name: "James R.", handle: "Dueño de Zeus (Labrador)", testimonial: "El servicio es impecable y siempre llegan a tiempo.", rating: 5 },
              { id: "2", name: "Linda M.", handle: "Dueña de Max (Bulldog Francés)", testimonial: "Se siente como si mi Max tuviese padrastro porque se encargan de todo.", rating: 5 },
            ]}
            showRating={true}
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
          />
        </div>
        <div id="faq" data-section="faq">
          <FaqSplitText
            sideTitle="Preguntas Frecuentes"
            buttons={[{ text: "Hablar por WhatsApp", href: "https://wa.me/573011471991" }]}
            faqsAnimation="slide-up"
            useInvertedBackground={false}
            faqs={[
              { id: "1", title: "¿Tienen envíos diarios?", content: "Realizamos entregas todos los días de 8am a 6pm." },
              { id: "2", title: "¿Cómo gestiono mi suscripción?", content: "Puedes modificarla o cancelarla desde nuestro WhatsApp en cualquier momento." },
            ]}
          />
        </div>
        <div id="contact" data-section="contact">
          <ContactCTA
            tag="Contacto"
            tagIcon={Phone}
            title="¿Listo para simplificar tu vida?"
            description="Contáctanos hoy mismo y recibe el alimento premium de tu mascota sin complicaciones."
            buttons={[{ text: "Hablar por WhatsApp", href: "https://wa.me/573011471991" }]}
            background={{ variant: "plain" }}
            useInvertedBackground={false}
          />
        </div>
        <div id="footer" data-section="footer">
          <FooterMedia
            logoText="Cartagena Pet Delivery"
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/hvac/img-10.jpg"
            columns={[
              { title: "Servicios", items: [{ label: "Suscripciones", href: "#services" }] },
              { title: "Empresa", items: [{ label: "Sobre Nosotros", href: "#about" }] },
            ]}
            copyrightText="© 2026 | Cartagena Pet Delivery"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}