import { useEffect } from "react";

export default function WhatsAppRedirect() {
  useEffect(() => {
    window.location.href = "https://wa.me/917903594651?text=Hi%20Rohit%2C%20I%20want%20to%20connect!";
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-lg font-semibold">Redirecting you to WhatsApp...</p>
    </div>
  );
}