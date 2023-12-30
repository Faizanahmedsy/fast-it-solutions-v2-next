import UiWrapper from "@/components/UiWrapper";
import { SERVICES } from "@/lib/constants/servicesConstants";
import React from "react";

const Services = () => {
  return (
    <UiWrapper>
      <h1 className="text-3xl font-bold">Services</h1>
      <hr className="my-4" />

      <div className="grid grid-cols-3 gap-5">
        {SERVICES.map((item, index) => (
          <>
            <div
              key={index}
              className="bg-zinc-100 w-full h-[500px] rounded-xl"
            >
              <div
                className="relative overflow-hidden text-gray-700 bg-clip-border rounded-xl"
                key={index}
              >
                <img
                  src="waving.svg"
                  alt="profile-picture"
                  height={200}
                  width={400}
                />
              </div>
              <div className=" p-4">
                <div className="text-[#5E25D9] text-2xl font-bold">
                  {item.title}
                </div>
                <div className="pt-4 font-medium">{item.description}</div>
              </div>
            </div>
          </>
        ))}
      </div>
    </UiWrapper>
  );
};

export default Services;
