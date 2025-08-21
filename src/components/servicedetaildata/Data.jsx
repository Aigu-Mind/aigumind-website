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
                            Competitive Intelligence Automation
                        </h2>
                        <div className="mb-3 font-[satoshi]">
                            <span className="font-bold">Strategic Overview</span>
                            <p className="text-gray-700 text-sm mt-1">
                                We provide systematic market intelligence gathering that informs strategic decision making and competitive positioning. Our automated research solutions deliver timely insights on competitor activities, market trends, and industry developments, enabling proactive business strategies.                            </p>
                        </div>
                        <div className="mb-3">
                            <span className="font-bold">Core Capabilities</span>
                            <p className="text-gray-700 text-sm mt-1">
                                Automated competitor monitoring across pricing, product launches, and marketing campaigns; market research data collection from industry sources and B2B platforms; custom reporting dashboards with trend analysis and actionable insights; data validation and quality assurance protocols.                            </p>
                        </div>
                        <div>
                            <span className="font-bold">Delivery Approach</span>
                            <p className="text-gray-700 text-sm mt-1">
                                Projects begin with intelligence requirements gathering and data source identification. We implement automated collection systems with quality controls, provide customized reporting formats, and include regular strategy sessions to interpret findings and recommend actions.                            </p>
                        </div>
                    </div>
                    {/* Right Image Block */}
                    <div className="flex justify-end items-start relative">
                        <div className="relative w-full max-w-[370px]">
                            <img
                                src="/images/data4.png"
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
                                src="/images/data3.png"
                                alt="Commerce Infrastructure"
                                className="cursor-pointer hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>
                    {/* Right Block */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4 font-[satoshi]">
                            Business Data Extraction
                        </h2>
                        <div className="mb-3 font-[satoshi]">
                            <span className="font-bold">Strategic Overview</span>
                            <p className="text-gray-700 text-sm mt-1">
                                We extract valuable business intelligence from complex digital sources including member portals, B2B platforms, and proprietary systems that contain critical market information. Our extraction services provide access to otherwise unavailable data that informs strategic decisions and competitive positioning.                            </p>
                        </div>
                        <div className="mb-3">
                            <span className="font-bold">Core Capabilities</span>
                            <p className="text-gray-700 text-sm mt-1">
                                Member area and B2B portal data extraction with authentication handling; ETA status monitoring and supply chain visibility solutions; product catalog and pricing intelligence gathering; regulatory and compliance data collection; custom extraction solutions for proprietary platforms.                            </p>
                        </div>
                        <div>
                            <span className="font-bold">Delivery Approach</span>
                            <p className="text-gray-700 text-sm mt-1">
                                Projects begin with data source analysis and extraction feasibility assessment. We develop custom extraction protocols with error handling and validation, provide structured data delivery in preferred formats, and include ongoing monitoring with data quality assurance and update notifications.                            </p>
                        </div>
                    </div>
                </div>
                {/* Third Row */}
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left Block */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4 font-[satoshi]">
                            Data Integration and Pipeline Management
                        </h2>
                        <div className="mb-3 font-[satoshi]">
                            <span className="font-bold">Strategic Overview</span>
                            <p className="text-gray-700 text-sm mt-1">
                                We create unified data ecosystems that connect disparate business systems and transform raw information into actionable business intelligence. Our pipeline management services ensure reliable, accurate data flow that supports real-time decision making and strategic planning across all organizational levels.                            </p>
                        </div>
                        <div className="mb-3">
                            <span className="font-bold">Core Capabilities</span>
                            <p className="text-gray-700 text-sm mt-1">
                                Multi-source data integration with transformation and cleansing protocols; automated pipeline monitoring with error detection and recovery; real-time and batch processing solutions; data warehouse and lake architecture design; API development for seamless system connectivity.                            </p>
                        </div>
                        <div>
                            <span className="font-bold">Delivery Approach</span>
                            <p className="text-gray-700 text-sm mt-1">
                                Pipeline development starts with comprehensive data mapping and architecture design. We implement integration solutions with thorough testing and validation phases, provide monitoring dashboards with alerting systems, and include ongoing maintenance with performance optimization and scalability planning.                            </p>
                        </div>
                    </div>
                    {/* Right Image Block */}
                    <div className="flex justify-end items-start relative">
                        <div className="relative w-full max-w-[370px]">
                            <img
                                src="/images/data2.png"
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
