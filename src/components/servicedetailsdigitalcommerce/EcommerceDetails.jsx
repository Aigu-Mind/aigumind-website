import React from "react";

export default function EcommerceDetails() {
  return (
    <>
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Block */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 font-[satoshi]">
              Commerce Platform Engineering
            </h2>
            <div className="mb-3 font-[satoshi]">
              <span className="font-bold">Strategic Overview</span>
              <p className="text-gray-700 text-sm mt-1">
                We architect and implement scalable ecommerce platforms that
                support rapid business growth while maintaining exceptional
                customer experiences. Our platform engineering service enables
                businesses to handle increased transaction volumes, expand into
                new markets, and adapt quickly to changing customer
                expectations.
              </p>
            </div>
            <div className="mb-3">
              <span className="font-bold">Core Capabilities</span>
              <p className="text-gray-700 text-sm mt-1">
                Custom theme development optimized for conversion and performance; advanced platform integrations connecting inventory, CRM, and fulfillment systems; seamless migrations
                between platforms with zero downtime; mobile-first responsive design ensuring optimal experiences across all devices.
              </p>
            </div>
            <div>
              <span className="font-bold">Delivery Approach</span>
              <p className="text-gray-700 text-sm mt-1">
                Our platform engineering follows a phased implementation methodology beginning with comprehensive discovery and technical architecture planning. We provide staging environments for thorough testing, conduct performance optimization before launch, and include post-launch monitoring and support to ensure continued optimal performance.
              </p>
            </div>
          </div>
          {/* Right Image Block */}
          <div className="flex justify-end items-start relative">
            <div className="relative w-full max-w-[370px]">
              <img
                src="/images/servicedetail1.png"
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
                src="/images/servicedetail2.png"
                alt="Commerce Infrastructure"
                className="cursor-pointer hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          {/* Right Block */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 font-[satoshi]">
              Commerce Infrastructure
            </h2>
            <div className="mb-3 font-[satoshi]">
              <span className="font-bold">Strategic Overview</span>
              <p className="text-gray-700 text-sm mt-1">
                We build robust, scalable ecommerce infrastructure that supports high-volume transactions while maintaining optimal performance and reliability. Our infrastructure services create the technical foundation for business growth, enabling seamless operations during traffic spikes and providing the flexibility to adapt to evolving market demands.
              </p>
            </div>
            <div className="mb-3">
              <span className="font-bold">Core Capabilities</span>
              <p className="text-gray-700 text-sm mt-1">
                Payment gateway integration with multiple processor support and fraud protection; inventory management system connections with real-time stock synchronization; third-party logistics and fulfillment platform integrations; customer data platform implementation for unified customer profiles; API development for custom integrations and business system connectivity.
              </p>
            </div>
            <div>
              <span className="font-bold">Delivery Approach</span>
              <p className="text-gray-700 text-sm mt-1">
                Infrastructure development starts with scalability planning and technical architecture design. We implement systems with comprehensive load testing and failover protocols, provide detailed integration documentation and monitoring dashboards, and include ongoing maintenance with performance optimization and capacity planning for future growth requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
