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
                                We create compelling brand identities and visual systems that differentiate your business in competitive markets while building emotional connections with target audiences. Our design solutions establish consistent visual communication that enhances brand recognition, supports marketing objectives, and drives customer engagement across all business touchpoints.
                            </p>
                        </div>
                        <div className="mb-3">
                            <span className="font-bold">Core Capabilities</span>
                            <p className="text-gray-700 text-sm mt-1">
                                Complete brand identity development including logo design, color palettes, and typography systems; comprehensive brand guidelines and visual standards documentation; marketing collateral design for digital and print applications; packaging design and product visualization; social media visual content strategy and template systems; presentation design and corporate communication materials.
                            </p>
                        </div>
                        <div>
                            <span className="font-bold">Delivery Approach</span>
                            <p className="text-gray-700 text-sm mt-1">
                                Brand development begins with comprehensive brand strategy consultation and competitive analysis. We conduct collaborative design workshops with iterative concept refinement, provide detailed brand guideline documentation, and include asset delivery in multiple formats. Post-launch support encompasses brand implementation guidance and ongoing design asset development aligned with evolving business needs.
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
                            User Experience and Interface Design
                        </h2>
                        <div className="mb-3 font-[satoshi]">
                            <span className="font-bold">Strategic Overview</span>
                            <p className="text-gray-700 text-sm mt-1">
                                We design intuitive, conversion-focused user experiences that reduce friction, increase engagement, and drive business results. Our UX/UI design services combine user research insights with modern design principles to create digital experiences that delight users while achieving strategic business objectives.
                            </p>
                        </div>
                        <div className="mb-3">
                            <span className="font-bold">Core Capabilities</span>
                            <p className="text-gray-700 text-sm mt-1">
                                Comprehensive user research and persona development; information architecture planning and user journey mapping; wireframing and prototyping with interactive design validation; responsive interface design optimized for all device types; usability testing and conversion rate optimization; accessibility compliance ensuring inclusive user experiences.
                            </p>
                        </div>
                        <div>
                            <span className="font-bold">Delivery Approach</span>
                            <p className="text-gray-700 text-sm mt-1">
                                Design process starts with user research and stakeholder requirement gathering. We create iterative design prototypes with regular feedback incorporation, conduct usability testing with real users, and provide detailed design specifications for development teams. Ongoing support includes post-launch performance analysis and optimization recommendations based on user behavior data.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Third Row */}
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left Block */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4 font-[satoshi]">
                            Creative Advertising Design
                        </h2>
                        <div className="mb-3 font-[satoshi]">
                            <span className="font-bold">Strategic Overview</span>
                            <p className="text-gray-700 text-sm mt-1">
                                We create visually compelling advertising designs that capture attention and communicate messages effectively across all platforms and formats. Our creative advertising design services focus on producing high-quality visual assets that meet technical specifications while maintaining aesthetic excellence and brand consistency throughout all advertising materials.
                            </p>
                        </div>
                        <div className="mb-3">
                            <span className="font-bold">Core Capabilities</span>
                            <p className="text-gray-700 text-sm mt-1">
                                Custom advertising creative design for Google Ads, Facebook, Instagram, LinkedIn, and other advertising platforms; static and animated banner design in all standard dimensions and file formats; video advertising graphics and motion design elements; print advertising design for magazines, newspapers, and outdoor media; creative asset delivery with platform-specific technical optimizations; brand-consistent advertising design across multiple campaign formats.                            </p>
                        </div>
                        <div>
                            <span className="font-bold">Delivery Approach</span>
                            <p className="text-gray-700 text-sm mt-1">
                                Creative design process begins with client brief review and visual concept development. We create multiple design variations with detailed revisions based on client feedback, provide comprehensive file delivery in all required formats and specifications, and include final asset optimization for intended use platforms. Design iterations continue until client approval with complete file package delivery including source files and usage guidelines.                            </p>
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
