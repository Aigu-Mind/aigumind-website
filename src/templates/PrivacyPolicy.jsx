import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | Aigumind",
  description: "Learn how Aigumind collects, uses, and protects your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white text-black">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-36 leading-relaxed">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: {new Date().getFullYear()}</p>

        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p>
            This Privacy Policy explains how Aigumind collects, uses, and protects information
            when you interact with our website and services. By using our services, you consent
            to the practices described here. We collect information you provide directly (for
            example, your name and email when you contact us), information generated as you use
            the site (such as pages viewed and actions taken), and technical details sent by your
            device (including IP address, device identifiers, and cookie IDs). We use this data to
            operate the site, deliver features you request, personalize content, improve
            performance, and keep our systems secure and compliant.
          </p>

          <h2 className="text-2xl font-semibold">Data We Handle and How We Use It</h2>
          <p>
            The data we handle generally falls into three categories: contact details and
            correspondence you share with us; usage analytics that help us understand how people
            discover and engage with our content; and diagnostic and security data that allow us to
            detect outages, prevent abuse, and improve reliability. We rely on this information to
            communicate with you, provide support, develop new features, and measure the impact of
            product changes. We may work with carefully selected service providers (for example,
            cloud hosting, analytics, and email tools) who process data on our behalf under
            appropriate contracts and confidentiality obligations. We do not sell your personal
            data.
          </p>

          <h2 className="text-2xl font-semibold">Cookies, Retention, and Security</h2>
          <p>
            We use cookies and similar technologies so the site can remember your preferences,
            maintain sessions, and understand aggregate usage. You can adjust your browser settings
            to limit or block cookies, though some features may not function as intended. We retain
            personal data only for as long as necessary to fulfill the purposes outlined in this
            policy or as required by law. We apply administrative, technical, and physical
            safeguards designed to protect information against unauthorized access, disclosure,
            alteration, and destruction; however, no method of transmission or storage is completely
            secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-semibold">Your Choices and Contact</h2>
          <p>
            Depending on your location, you may have rights to access, correct, delete, or
            restrict the processing of your personal data, and to object to or withdraw consent for
            certain processing. You can exercise these rights by contacting us. Our services are not
            directed to children under 13, and we do not knowingly collect data from children. We
            may update this policy from time to time; material changes will be posted on this page.
            Questions or requests can be sent to support@aigumind.com.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}


