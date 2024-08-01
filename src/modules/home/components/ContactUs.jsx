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
      <div className="grid grid-cols-[5fr_4fr] mt-[-2rem] mb-20 hmXl:grid-cols-1">
        <div className="hmXl:mb-8">
          <div className="flex">
            <h3 className="mb-8 text-[20px] font-bold mt-14 mr-1">
              Where to find
            </h3>
            <div className="w-[6rem] object-cover h-[6rem]">
              <img
                src="https://static.wixstatic.com/media/d43eb5_50a96102b45b4209815d94077cebb2a6~mv2.jpg/v1/fill/w_73,h_73,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Barnhouse%20logo-2.jpg"
                alt=""
                className="w-full h-full"
              />
            </div>
          </div>{" "}
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
      <p className="text-center mb-20 text-[#a0a09f]">
        In order to be as helpful as possible to our clients who have decided to
        entrust us with the construction of their homes, I offer consultations
        and a personal meeting every week from 10:00 a.m. to 1:00 p.m.
      </p>
    </div>
  );
};

export default ContactUs;
