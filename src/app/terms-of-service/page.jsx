import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service | Aigumind",
  description: "Read the terms that govern your use of Aigumind.",
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-white text-black">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-36 leading-relaxed">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last updated: {new Date().getFullYear()}</p>

        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">Agreement</h2>
          <p>
            These Terms govern your access to and use of Aigumind’s website and services. By
            accessing or using the services, you accept these Terms and our policies. If you use
            the services on behalf of an organization, you represent that you are authorized to
            bind that organization, and “you” refers to the organization.
          </p>

          <h2 className="text-2xl font-semibold">Use and Content</h2>
          <p>
            You agree to use the services in compliance with applicable laws and not to misuse
            them, interfere with their operation, or attempt to access them using methods other
            than the interfaces we provide. Content on the site, including trademarks and
            materials, belongs to Aigumind or our licensors and is protected by law. We may link to
            or integrate third‑party services; we are not responsible for their content or
            practices.
          </p>

          <h2 className="text-2xl font-semibold">Accounts, Warranty, and Liability</h2>
          <p>
            You are responsible for activity under your account and for keeping your credentials
            secure. The services are provided “as is” without warranties of any kind. To the
            maximum extent permitted by law, Aigumind will not be liable for indirect, special,
            incidental, consequential, or punitive damages, or for lost profits or revenues, even if
            we have been advised of the possibility of such damages.
          </p>

          <h2 className="text-2xl font-semibold">Changes and Contact</h2>
          <p>
            We may update these Terms from time to time; changes take effect upon posting. If you
            continue to use the services after an update, you accept the revised Terms. We may
            suspend or terminate access for any reason, including violation of these Terms. For
            questions, contact legal@aigumind.com.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}


