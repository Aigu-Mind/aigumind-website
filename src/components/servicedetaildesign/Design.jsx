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
                            Brand Identity and Visual Design
                        </h2>
                        <div className="mb-3 font-[satoshi]">
                            <span className="font-bold">Strategic Overview</span>
                            <p className="text-gray-700 text-sm mt-1">
                                We create tailored business applications that streamline
                                operations, enhance productivity, and provide competitive
                                advantages through technology. Our custom development services
                                address unique business requirements that off-the-shelf
                                solutions cannot meet, delivering measurable improvements in
                                efficiency and user experience.
                            </p>
                        </div>
                        <div className="mb-3">
                            <span className="font-bold">Core Capabilities</span>
                            <p className="text-gray-700 text-sm mt-1">
                                Full-stack web application development using React and Next.js;
                                API development and third-party system integrations; user
                                interface design optimized for business workflows; database
                                architecture and optimization for performance at scale.
                            </p>
                        </div>
                        <div>
                            <span className="font-bold">Delivery Approach</span>
                            <p className="text-gray-700 text-sm mt-1">
                                Development follows agile methodology with regular stakeholder
                                reviews and iterative feedback cycles. We provide comprehensive
                                testing including security audits, user acceptance testing
                                phases, and detailed documentation. Post-launch support includes
                                monitoring, maintenance, and feature enhancement based on user
                                feedback.
                            </p>
                        </div>
                    </div>
                    {/* Right Image Block */}
                    <div className="flex justify-end items-start relative">
                        <div className="relative w-full max-w-[370px]">
                            <img
                                src="/images/design2.png"
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
                                src="/images/design4.png"
                                alt="Commerce Infrastructure"
                                className="cursor-pointer hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>
                    {/* Right Block */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4 font-[satoshi]">
                            Brand Identity and Visual Design
                        </h2>
                        <div className="mb-3 font-[satoshi]">
                            <span className="font-bold">Strategic Overview</span>
                            <p className="text-gray-700 text-sm mt-1">
                                We create tailored business applications that streamline operations, enhance productivity, and provide competitive advantages through technology.
                                Our custom development services address unique business requirements that off-the-shelf solutions cannot meet, delivering measurable improvements in efficiency
                                and user experience.
                            </p>
                        </div>
                        <div className="mb-3">
                            <span className="font-bold">Core Capabilities</span>
                            <p className="text-gray-700 text-sm mt-1">
                                Full-stack web application development using React and Next.js; API development and
                                third-party system integrations; user interface design optimized for business workflows; database architecture
                                and optimization for performance at scale.
                            </p>
                        </div>
                        <div>
                            <span className="font-bold">Delivery Approach</span>
                            <p className="text-gray-700 text-sm mt-1">
                                Development follows agile methodology with regular stakeholder reviews and iterative feedback cycles.
                                We provide comprehensive testing including security audits, user acceptance testing phases, and detailed documentation.
                                Post-launch support includes monitoring, maintenance, and feature enhancement based on user feedback.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Third Row */}
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left Block */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4 font-[satoshi]">
                            User Experience and Interface Design
                        </h2>
                        <div className="mb-3 font-[satoshi]">
                            <span className="font-bold">Strategic Overview</span>
                            <p className="text-gray-700 text-sm mt-1">
                                We architect and implement scalable ecommerce platforms that support rapid business growth while maintaining exceptional customer experiences.
                                Our platform engineering services enable businesses to handle increased transaction volumes, expand into new markets, and adapt quickly to changing customer expectations.
                            </p>
                        </div>
                        <div className="mb-3">
                            <span className="font-bold">Core Capabilities</span>
                            <p className="text-gray-700 text-sm mt-1">
                                Custom theme development optimized for conversion and performance; advanced platform integrations connecting inventory, CRM, and fulfillment systems; seamless migrations between platforms with zero downtime; mobile-first responsive design ensuring optimal experiences across all devices.
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
                                src="/images/design3.png"
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
