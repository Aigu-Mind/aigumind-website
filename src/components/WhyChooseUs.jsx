import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="bg-gradient-to-br from-[#060D14] to-[#122941] py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Why Leading Brands Choose Us
        </h2>
        <p className="text-gray-300 mb-4">
          We don’t just deliver projects — we engineer outcomes. At AIGUMIND,
          every solution is built with AI-first thinking, business impact, and
          long-term scalability in mind.
        </p>
        {/* Blue horizontal line */}
        <div className="mx-auto my-4 h-1 w-24 bg-[#4285F4] rounded mb-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gray-800 bg-opacity-40 border-dott border-gray-400/30 rounded-xl p-6 flex flex-col items-start shadow-lg transition hover:shadow-xl">
            <div className="mb-4">
              {/* Example icon: User */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <image
                  href="/images/why1.png"
                  x="0"
                  y="0"
                  height="32"
                  width="32"
                />
                {/* You can keep or remove the icon path below */}
                {/* <path ... /> */}
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              AI + Human Expertise
            </h3>
            <p className="text-gray-400 text-sm">
              A perfect blend of automation and human insight.
            </p>
          </div>
          <div className="bg-gray-800 bg-opacity-60 rounded-lg p-6 flex flex-col items-start">
            <div className="mb-4 text-white text-2xl">
              {/* Example icon: Chart */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <image
                  href="/images/why2.png"
                  x="0"
                  y="0"
                  height="32"
                  width="32"
                />
                {/* You can keep or remove the icon path below */}
                {/* <path ... /> */}
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Proven Results
            </h3>
            <p className="text-gray-400 text-sm">
              From boosting eCommerce conversions to cutting operational hours
              in half.
            </p>
          </div>
          <div className="bg-gray-800 bg-opacity-60 rounded-lg p-6 flex flex-col items-start">
            <div className="mb-4 text-white text-2xl">
              {/* Example icon: Handshake */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <image
                  href="/images/why3.png"
                  x="0"
                  y="0"
                  height="32"
                  width="32"
                />
                {/* You can keep or remove the icon path below */}
                {/* <path ... /> */}
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              End-to-End Partnership
            </h3>
            <p className="text-gray-400 text-sm">
              We design, build, and continuously optimize your systems.
            </p>
          </div>
          <div className="bg-gray-800 bg-opacity-60 rounded-lg p-6 flex flex-col items-start">
            <div className="mb-4 text-white text-2xl">
              {/* Example icon: Support */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <image
                  href="/images/why4.png"
                  x="0"
                  y="0"
                  height="32"
                  width="32"
                />
                {/* You can keep or remove the icon path below */}
                {/* <path ... /> */}
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              24/7 Global Support
            </h3>
            <p className="text-gray-400 text-sm">
              Always on, wherever your business operates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
