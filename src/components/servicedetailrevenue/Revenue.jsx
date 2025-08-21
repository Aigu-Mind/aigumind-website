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
                            Analytics and Tracking Implementation
                        </h2>
                        <div className="mb-3 font-[satoshi]">
                            <span className="font-bold">Strategic Overview</span>
                            <p className="text-gray-700 text-sm mt-1">
                                We establish comprehensive measurement frameworks that provide accurate, actionable insights into customer behavior and marketing performance. Our analytics implementations enable data-driven decision making, optimize marketing spend efficiency, and demonstrate clear ROI across all digital initiatives.
                            </p>
                        </div>
                        <div className="mb-3">
                            <span className="font-bold">Core Capabilities</span>
                            <p className="text-gray-700 text-sm mt-1">
                                Google Analytics 4 configuration with custom event tracking and conversion funnels; server-side tracking implementation for privacy-compliant data collection; Google Tag Manager setup with advanced trigger configurations; cross-platform attribution modeling connecting online and offline customer touchpoints.
                            </p>
                        </div>
                        <div>
                            <span className="font-bold">Delivery Approach</span>
                            <p className="text-gray-700 text-sm mt-1">
                                Our implementation process begins with data strategy consultation and measurement planning aligned to business objectives. We conduct thorough testing phases to ensure data accuracy, provide comprehensive dashboard creation, and include team training sessions with ongoing support for data interpretation and optimization.
                            </p>
                        </div>
                    </div>
                    {/* Right Image Block */}
                    <div className="flex justify-end items-start relative">
                        <div className="relative w-full max-w-[370px]">
                            <img
                                src="/images/revenue3.png"
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
                                src="/images/revenue2.png"
                                alt="Commerce Infrastructure"
                                className="cursor-pointer hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>
                    {/* Right Block */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4 font-[satoshi]">
                            CRM and Customer Journey Optimization
                        </h2>
                        <div className="mb-3 font-[satoshi]">
                            <span className="font-bold">Strategic Overview</span>
                            <p className="text-gray-700 text-sm mt-1">
                                We design and implement customer relationship management systems that create seamless, personalized customer experiences throughout the entire lifecycle. Our optimization services increase customer lifetime value, improve retention rates, and enable predictive customer behavior analysis for proactive engagement strategies.
                            </p>
                        </div>
                        <div className="mb-3">
                            <span className="font-bold">Core Capabilities</span>
                            <p className="text-gray-700 text-sm mt-1">
                                HubSpot, Zoho, and SugarCRM implementation with custom workflow automation; Customer.io journey mapping and personalization campaigns; lead scoring and qualification automation; customer segmentation and behavioral trigger systems; cross-platform data synchronization and reporting.
                            </p>
                        </div>
                        <div>
                            <span className="font-bold">Delivery Approach</span>
                            <p className="text-gray-700 text-sm mt-1">
                                Implementation begins with customer journey mapping and data architecture planning. We configure systems with comprehensive testing phases, provide team training and adoption support, and include ongoing optimization based on customer engagement analytics and conversion performance metrics.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Third Row */}
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left Block */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4 font-[satoshi]">
                            Revenue Operations Consulting
                        </h2>
                        <div className="mb-3 font-[satoshi]">
                            <span className="font-bold">Strategic Overview</span>
                            <p className="text-gray-700 text-sm mt-1">
                                We align marketing, sales, and customer success operations through unified technology platforms and optimized processes that accelerate revenue growth. Our consulting services eliminate operational silos, improve forecast accuracy, and create scalable revenue generation systems that support sustainable business expansion.
                            </p>
                        </div>
                        <div className="mb-3">
                            <span className="font-bold">Core Capabilities</span>
                            <p className="text-gray-700 text-sm mt-1">
                                Revenue technology stack audit and optimization recommendations; sales and marketing alignment process design; forecasting and pipeline management system implementation; customer success automation and retention strategy development; revenue attribution modeling and performance analytics.                            </p>
                        </div>
                        <div>
                            <span className="font-bold">Delivery Approach</span>
                            <p className="text-gray-700 text-sm mt-1">
                                Consulting engagement starts with comprehensive revenue operations assessment and stakeholder interviews. We design integrated workflows with cross-departmental approval, implement technology solutions with change management support, and provide ongoing performance monitoring with quarterly strategic reviews.                            </p>
                        </div>
                    </div>
                    {/* Right Image Block */}
                    <div className="flex justify-end items-start relative">
                        <div className="relative w-full max-w-[370px]">
                            <img
                                src="/images/revenue1.png"
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
