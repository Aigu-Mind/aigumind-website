import Header from "../Header.jsx"
import Button from "../Button.jsx"

export default function HeroSectionServiceDetail() {
    return (
        <>
            <section className="relative desktop:min-h-[85vh] laptop:min-h-[95vh] md:min-h-[110vh] sm:min-h-[70vh] overflow-visible">
                {/* Radial Gradient Background */}
                <div
                    className="absolute inset-0 bg-gradient-radial from-[#122941] to-[#060D14]"
                    style={{
                        background: "radial-gradient(ellipse at center, #122941 0%, #060D14 100%)",
                    }}
                />
                {/* Header - positioned absolutely over the gradient */}
                <Header />
                {/* Main Content */}
                <div className="relative z-10 max-w-7xl mx-auto desktop:pt-32 laptop:pt-24 md:pt-20 sm:pt-16 px-12 flex flex-col md:flex-row gap-12 pb-8">
                    {/* Left Side */}
                    <div className="flex-1">
                        <div className="breadcrumb-style mb-2 mt-8 laptop:mt-6 md:mt-4 sm:mt-3 laptop:text-xl md:text-lg sm:text-base">
                            Services / Creative Design and Brand Solutions            </div>
                        <h1 className="heading-style text-white mb-6 laptop:mb-4 md:mb-3 sm:mb-2 leading-tight laptop:text-3xl md:text-2xl sm:text-xl">
                            Elevate Your Brand with
                            <br className="laptop:block md:block sm:hidden" />
                            Comprehensive Visual Design
                            <br className="laptop:block md:block sm:hidden" />
                            and Digital Experiences
                        </h1>
                        <Button>Talk to AI Expert</Button>
                    </div>
                    {/* Right Side */}
                    <div className="right-text-style flex-1 leading-relaxed laptop:text-sm md:text-sm sm:text-xs">
                        Transform your brand's digital presence with our Creative Design and Brand Solutions that seamlessly blend aesthetic 
                        excellence with strategic business objectives. We deliver end-to-end visual design services spanning brand identity, web design, 
                        and digital marketing assets that drive engagement and conversions. Our expertise encompasses modern UI/UX design principles, responsive 
                        web development, and comprehensive brand systems that ensure consistent visual communication across all touchpoints. Whether you're launching 
                        a new brand, redesigning your digital presence, or scaling your visual content strategy, our solutions are crafted to enhance brand recognition, improve 
                        user experiences, and support your business growth objectives.
                    </div>
                </div>
            </section>

            <div className="relative desktop:-mt-75 laptop:-mt-36 md:-mt-70 sm:-mt-8 z-20 w-full max-w-7xl mx-auto">
                <img src="/images/design1.png" alt="Digital Commerce" className="w-full rounded-2xl laptop:rounded-xl md:rounded-lg sm:rounded-md" />
            </div>
        </>
    )
}
