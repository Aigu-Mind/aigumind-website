import React from "react";
import Image from "next/image";

export default function EnterpriseDetail() {
  return (
    <>
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Block */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 font-[satoshi]">
              Custom Software Development
            </h2>
            <div className="mb-3 font-[satoshi]">
              <span className="font-bold">Strategic Overview</span>
              <p className="text-gray-700 text-sm mt-1">
                We create tailored business applications that streamline operations, enhance productivity, and provide competitive advantages through technology. Our custom development services address unique business requirements that off-the-shelf solutions cannot meet, delivering measurable improvements in efficiency and user experience.
              </p>
            </div>
            <div className="mb-3">
              <span className="font-bold">Core Capabilities</span>
              <p className="text-gray-700 text-sm mt-1">
                Full-stack web application development using React and Next.js; API development and third-party system integrations; user interface design optimized for business workflows; database architecture and optimization for performance at scale.
              </p>
            </div>
            <div>
              <span className="font-bold">Delivery Approach</span>
              <p className="text-gray-700 text-sm mt-1">
                Development follows agile methodology with regular stakeholder reviews and iterative feedback cycles. We provide comprehensive testing including security audits, user acceptance testing phases, and detailed documentation. Post-launch support includes monitoring, maintenance, and feature enhancement based on user feedback.
              </p>
            </div>
          </div>
          {/* Right Image Block */}
          <div className="flex justify-end items-start relative">
            <div className="relative w-full max-w-[370px]">
              <img
                src="/images/enterprise1.png"
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
                src="/images/enterprise2.png"
                alt="Commerce Infrastructure"
                className="cursor-pointer hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          {/* Right Block */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 font-[satoshi]">
              Cloud Infrastructure Services
            </h2>
            <div className="mb-3 font-[satoshi]">
              <span className="font-bold">Strategic Overview</span>
              <p className="text-gray-700 text-sm mt-1">
                We architect and manage scalable cloud environments that support business growth while ensuring security, performance, and cost efficiency. Our infrastructure services provide the reliable foundation for digital operations, enabling focus on core business activities.
              </p>
            </div>
            <div className="mb-3">
              <span className="font-bold">Core Capabilities</span>
              <p className="text-gray-700 text-sm mt-1">
                AWS and Google Cloud platform implementation with auto-scaling capabilities; serverless architecture design for cost-effective performance; database optimization and backup strategies; security hardening and compliance configuration.
              </p>
            </div>
            <div>
              <span className="font-bold">Delivery Approach</span>
              <p className="text-gray-700 text-sm mt-1">
                Infrastructure design begins with current state assessment and scalability planning. We implement staging and production environments with comprehensive monitoring, provide disaster recovery planning, and include ongoing maintenance and optimization services.
              </p>
            </div>
          </div>
        </div>
        {/* Third Row */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Block */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 font-[satoshi]">
              Security and Performance Engineering
            </h2>
            <div className="mb-3 font-[satoshi]">
              <span className="font-bold">Strategic Overview</span>
              <p className="text-gray-700 text-sm mt-1">
                We implement enterprise-grade security frameworks and performance optimization that protect business assets while ensuring optimal user experiences. Our engineering services reduce security vulnerabilities, improve application response times, and establish compliance readiness that meets industry standards and regulatory requirements.
              </p>
            </div>
            <div className="mb-3">
              <span className="font-bold">Core Capabilities</span>
              <p className="text-gray-700 text-sm mt-1">
                Application security auditing and vulnerability remediation; VPS server hardening with intrusion detection systems; database encryption and access control implementation; performance monitoring with automated optimization recommendations; load testing and capacity planning for traffic scaling.
              </p>
            </div>
            <div>
              <span className="font-bold">Delivery Approach</span>
              <p className="text-gray-700 text-sm mt-1">
                Security assessment begins with comprehensive penetration testing and vulnerability scanning. We implement security measures in phases with minimal disruption, provide detailed compliance documentation, and establish ongoing monitoring with incident response protocols and regular security updates.
              </p>
            </div>
          </div>
          {/* Right Image Block */}
          <div className="flex justify-end items-start relative">
            <div className="relative w-full max-w-[370px]">
              <img
                src="/images/enterprise3.png"
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
