"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Google Ads Conversion Tracking
  const handleConversion = () => {
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-18051535071/5DlPCPzZ5KEcEN-h0p9D'
      });
    }
  };

  const phoneNumber = "+917034621000";
  const whatsappNumber = "917034621000";

  if (!isMounted) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center space-y-4">
      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        aria-label="Call Us"
        onClick={handleConversion}
      >
        <Button
          size="icon"
          className="bg-blue-600 hover:bg-blue-700 duration-300 ease-in-out text-white rounded-full shadow-lg w-14 h-14 hover:scale-110"
        >
          <Phone className="w-6 h-6" />
        </Button>
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onClick={handleConversion}
      >
        <Button
          size="icon"
          className="bg-[#25D366] hover:bg-[#128C7E] duration-300 ease-in-out text-white rounded-full shadow-lg w-14 h-14 hover:scale-110 "
        >
          <FaWhatsapp size={32} className="w-12 h-12 scale-[2]" />
        </Button>
      </a>

      {/* Scroll to Top Button */}
      {isVisible && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="bg-gray-800 hover:bg-gray-700 text-white rounded-full w-14 h-14 shadow-lg animate-in fade-in-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-7 h-7" />
        </Button>
      )}
    </div>
  );
};

export default FloatingButtons;