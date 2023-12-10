import Image from "next/image";
import React from "react";
import UiWrapper from "./UiWrapper";

const OurFeatures = () => {
  return (
    <UiWrapper>
      <section className="grid grid-cols-2 items-center gap-20">
        <div>
          <h1 className="text-4xl font-bold mb-6">Technology Strategy</h1>
          <p className="text-gray-500 text-xl">
            We used the newest strategy and talented professionals dedicated to
            finding innovative ways to deliver better business outcomes
          </p>
        </div>
        <div className="flex justify-end">
          <Image
            src="product-launch.svg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
        <div className="flex justify-start">
          <Image
            src="waving.svg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-6">
            Security Awareness & Training
          </h1>
          <p className="text-gray-500 text-xl">
            We&apos;ll help businesses identify how malicious attackers exploit
            vulnerabilities to gain unauthorized access to your system
          </p>
        </div>
      </section>
    </UiWrapper>
  );
};

export default OurFeatures;
