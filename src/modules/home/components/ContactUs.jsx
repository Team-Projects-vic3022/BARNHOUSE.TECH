import React from "react";
import Map from "../../components/Map";
import { Form } from "../../components";

const ContactUs = () => {
  return (
    <div className="container">
      <h2 className="text-[28px] font-bold text-center max-w-3xl mx-auto mb-20">
        SIGN UP FOR A FREE VIEWING OF A PROJECT UNDER CONSTRUCTION?
      </h2>
      <Map />
      <div className="grid grid-cols-[5fr_4fr] mb-20">
        <div>
          <h3 className="mb-8 text-[20px] font-bold">Where to find</h3>
          <p className="mb-8">
            Russia, Moscow, "Krasnogo Mayaka" street, house 24 Bulgaria,
            Plovdiv, bul. 48 "Iztochen"
          </p>
          <div>
            <h3>
              Phone: <span> +7 (916) 911-22-23</span>
            </h3>
            <h3>
              WhatsApp: <span> +359 (878) 359-444</span>
            </h3>
            <h3>
              London: <span> +44 (7440) 540-080</span>
            </h3>
            <h3>
              Email: <span>borkins@gmail.com</span>
            </h3>
          </div>
        </div>
        <Form />
      </div>
      <p className="text-center mb-20">
        In order to be as helpful as possible to our clients who have decided to
        entrust us with the construction of their homes, I offer consultations
        and a personal meeting every week from 10:00 a.m. to 1:00 p.m.
      </p>
    </div>
  );
};

export default ContactUs;
