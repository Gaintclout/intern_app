import React from "react";


export default function TermsConditions() {
  return (
    <div className="bg-white text-gray-900">
      {/* HEADER */}
      {/* <Header /> */}

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10">
          Terms and Conditions
        </h1>

        <div className="space-y-8 text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">

          <p>
            These Terms and Conditions apply to your use of all website/app users,
            applications and services provided by <strong>Gaint Clout Technologies</strong>.
            By accessing or using any of the Services, you agree to be bound by these Terms.
          </p>

          <p>
            These Terms incorporate all policies, guidelines, and additional terms posted on
            the platform. All content including text, graphics, logos, videos, code, and design
            is owned by Gaint Clout Technologies and protected by intellectual property laws.
          </p>

          {/* INTELLECTUAL PROPERTY */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
              Intellectual Property Rights Policy
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>All intellectual property rights are owned by us or our licensors.</li>
              <li>All trademarks, logos, and brand elements remain our exclusive property.</li>
              <li>We may modify these terms at any time and notify users accordingly.</li>
              <li>Previous versions govern past usage until acceptance of new terms.</li>
              <li>We may transfer or assign rights under these terms.</li>
              <li>Services are not intended for users under 18 without guardian consent.</li>
            </ul>
          </div>

          {/* ACCOUNT POLICY */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
              Account Registration Policy
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>You must provide accurate and complete information.</li>
              <li>You are responsible for maintaining confidentiality of your account.</li>
              <li>You must report any unauthorized access immediately.</li>
              <li>Automated account creation is prohibited.</li>
              <li>Only one account per user is allowed.</li>
              <li>Account sharing is not permitted.</li>
              <li>You can close your account anytime by contacting us.</li>
              <li>We are not responsible for third-party resources accessed through our platform.</li>
            </ul>
          </div>

          {/* PAYMENT POLICY */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
              Payment Policy
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Prices and project availability may change without notice.</li>
              <li>Product representations are for reference only.</li>
              <li>Selecting a project creates a payment obligation.</li>
              <li>Providing details during checkout confirms cooperation.</li>
              <li>You will receive a receipt after order submission.</li>
              <li>All payment communications are sent to your email.</li>
              <li>All charges including taxes are shown before payment.</li>
              <li>Accepted payment methods are displayed during checkout.</li>
              <li>Projects become yours only after full payment is received.</li>
              <li>We are not liable for payment errors caused by incorrect details.</li>
              <li>If payment fails, we will contact you for further action.</li>
            </ul>
          </div>

          {/* LIABILITY */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
              Liability and Indemnification
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>We limit liability to the maximum extent permitted by law.</li>
              <li>You agree to indemnify us against claims due to misuse.</li>
              <li>Services are provided "as is" without warranties.</li>
              <li>We do not guarantee uninterrupted or error-free service.</li>
              <li>We are not responsible for viruses, bugs, or data loss.</li>
              <li>We do not endorse third-party services or transactions.</li>
              <li>We are not liable for device compatibility issues.</li>
              <li>Liability is limited to the amount paid in last 12 months.</li>
              <li>We are not liable for unauthorized access or hacking incidents.</li>
            </ul>
          </div>

          {/* COMMON PROVISIONS */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
              Common Provisions Policy
            </h2>

            <h3 className="font-semibold mt-4">No Waiver</h3>
            <p>
              Failure to enforce any provision does not waive our rights.
            </p>

            <h3 className="font-semibold mt-4">Service Interruption</h3>
            <p>
              We may interrupt or suspend services for maintenance or due to external factors.
            </p>

            <h3 className="font-semibold mt-4">Service Reselling</h3>
            <p>
              You may not reproduce, copy, sell, or exploit any part of our service without permission.
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
              Contact
            </h2>
            <p>
              gaintclout@gmail.com <br />
             https://gaintclout.com
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}