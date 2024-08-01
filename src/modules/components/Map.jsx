import React from "react";

const Map = () => {
  return (
    <div className="">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2253.687550851094!2d37.5754184763288!3d55.60745130317785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab284933a9e95%3A0xc7a2ac727b584e57!2sUlitsa%20Krasnogo%20Mayaka%2C%2024%2C%20Moskva%2C%20Russia%2C%20117570!5e0!3m2!1sen!2sng!4v1722378675298!5m2!1sen!2sng"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
