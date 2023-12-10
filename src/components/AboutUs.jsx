import React from "react";
import UiWrapper from "./UiWrapper";

const AboutUs = () => {
  return (
    <UiWrapper>
      <div className="bg-gray-200  rounded-2xl h-48 p-10 overflow-hidden my-10">
        <div className="grid grid-cols-3 gap-3">
          <div>Imgage here</div>
          <div className="col-span-2 mb-4 ">
            <div className="text-2xl font-bold">Our Approach</div>
            <div className="">
              Our service includes a comprehensive consult to help identify gaps
              and opportunities, a comprehensive report that includes a project
              plan with timelines and milestones, a project manager, and a . We
              also offer a suite of quality products that will help you get
              there quickly and smoothly.{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-200 rounded-2xl h-48 p-10 overflow-hidden">
          <div
            className="text-2xl font-bold
          "
          >
            Our Experience
          </div>
          <div>
            For the last 20 years Fast IT Consulting is serving as a business
            and Technology consulting firm that enables companies to achieve
            world-class business performance levels and realize a greater
            return.
          </div>
        </div>
        <div className="bg-gray-200 rounded-2xl h-48 p-10 overflow-hidden">
          <div
            className="text-2xl font-bold
          "
          >
            Why Us?
          </div>

          <div>
            Business mentors are key—that’s why when it comes to client
            selection, we’re choosy. We want to give each of you the time and
            guidance they deserve. We didn’t get there alone. And neither will
            you. Call us today.
          </div>
        </div>
      </div>
    </UiWrapper>
  );
};

export default AboutUs;
