import React from "react";
import Image from "next/image";

export default function Intelligent() {
  return (
    <>
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Block */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 font-[satoshi]">
              Conversational AI Solutions
            </h2>
            <div className="mb-3 font-[satoshi]">
              <span className="font-bold">Strategic Overview</span>
              <p className="text-gray-700 text-sm mt-1">
                We develop intelligent customer service automation that reduces operational costs while improving customer satisfaction scores. Our conversational AI solutions handle routine inquiries, qualify leads, and provide 24/7 customer support, allowing your team to focus on high-value interactions.              </p>
            </div>
            <div className="mb-3">
              <span className="font-bold">Core Capabilities</span>
              <p className="text-gray-700 text-sm mt-1">
                Custom chatbot development with natural language understanding; knowledge base integration for accurate information retrieval; multi-channel deployment across websites, messaging platforms, and mobile applications; sentiment analysis and escalation protocols for complex inquiries.              </p>
            </div>
            <div>
              <span className="font-bold">Delivery Approach</span>
              <p className="text-gray-700 text-sm mt-1">
                Implementation begins with conversation flow mapping and training data preparation. We conduct iterative testing and refinement phases, provide comprehensive analytics dashboards for performance monitoring, and include ongoing optimization based on user interaction patterns.              </p>
            </div>
          </div>
          {/* Right Image Block */}
          <div className="flex justify-end items-start relative">
            <div className="relative w-full max-w-[370px]">
              <img
                src="/images/intelligent1.png"
                alt="Commerce Platform Engineering"
                className="cursor-pointer hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          {/* Left Image Block */}
          <div className="flex justify-start items-start relative">
            <div className="relative w-full max-w-[370px]">
              <img
                src="/images/intelligent2.png"
                alt="Commerce Infrastructure"
                className="cursor-pointer hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          {/* Right Block */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 font-[satoshi]">
              Workflow Automation Services
            </h2>
            <div className="mb-3 font-[satoshi]">
              <span className="font-bold">Strategic Overview</span>
              <p className="text-gray-700 text-sm mt-1">
                We eliminate manual, repetitive tasks through intelligent automation that reduces operational costs and minimizes human error. Our workflow automation solutions connect disparate business systems, enabling seamless data flow and process efficiency that scales with business growth.              </p>
            </div>
            <div className="mb-3">
              <span className="font-bold">Core Capabilities</span>
              <p className="text-gray-700 text-sm mt-1">
                Business process mapping and automation design using n8n and Make.com platforms; system integration connecting CRMs, email marketing, and operational tools; automated reporting and notification systems; exception handling and escalation protocols for complex scenarios.
              </p>
            </div>
            <div>
              <span className="font-bold">Delivery Approach</span>
              <p className="text-gray-700 text-sm mt-1">
                Implementation starts with comprehensive process audit and optimization recommendations. We design automation workflows with stakeholder approval, conduct thorough testing with fallback procedures, and provide training sessions for process monitoring and management.
              </p>
            </div>
          </div>
        </div>
        {/* Third Row */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Block */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 font-[satoshi]">
              AI Integration and Strategy
            </h2>
            <div className="mb-3 font-[satoshi]">
              <span className="font-bold">Strategic Overview</span>
              <p className="text-gray-700 text-sm mt-1">
                WWe develop comprehensive artificial intelligence strategies that transform business operations through intelligent automation and decision support systems. Our AI integration services identify high-impact use cases, implement scalable solutions, and establish governance frameworks that maximize ROI while managing implementation risks.
              </p>
            </div>
            <div className="mb-3">
              <span className="font-bold">Core Capabilities</span>
              <p className="text-gray-700 text-sm mt-1">
                AI readiness assessment and strategic roadmap development; custom machine learning model development and deployment; existing system integration with AI-powered features; data preparation and model training infrastructure; AI ethics and governance framework establishment.
              </p>
            </div>
            <div>
              <span className="font-bold">Delivery Approach</span>
              <p className="text-gray-700 text-sm mt-1">
                "Strategy development starts with business process analysis and AI opportunity identification. We conduct pilot implementations with success metrics, provide comprehensive change management support, and include ongoing model monitoring with performance optimization and strategic refinement sessions.
              </p>
            </div>
          </div>
          {/* Right Image Block */}
          <div className="flex justify-end items-start relative">
            <div className="relative w-full max-w-[370px]">
              <img
                src="/images/inteligent3.png"
                alt="Commerce Platform Engineering"
                className="cursor-pointer hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
