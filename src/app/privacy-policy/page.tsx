"use client";

import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - The Home GlowUp Co.</title>
        <meta
          name="description"
          content="This Privacy Policy explains how The Home GlowUp Co. collects, uses, and protects your personal information when you use our website."
        />
        <meta
          name="keywords"
          content="privacy policy, data protection, personal information, The Home GlowUp Co."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Privacy Policy - The Home GlowUp Co." />
        <meta
          property="og:description"
          content="This Privacy Policy explains how The Home GlowUp Co. collects, uses, and protects your personal information when you use our website."
        />
        <meta property="og:url" content="https://thehomeglowup.com/privacy-policy" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy - The Home GlowUp Co." />
        <meta
          name="twitter:description"
          content="This Privacy Policy explains how The Home GlowUp Co. collects, uses, and protects your personal information when you use our website."
        />
      </Head>
      <main className="flex flex-col items-center justify-center bg-primary min-h-screen px-4 py-8">
        <h1 className="text-3xl font-bold text-tertiary mb-4">Privacy Policy</h1>
        <div className="max-w-3xl text-left text-tertiary">
          <p className="mb-4">
            This Privacy Policy describes how The Home GlowUp Co. ("we", "us", or "our")
            collects, uses, and shares your personal information when you use our website
            (the "Site").
          </p>
          <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
          <p className="mb-4">
            We collect various types of information in connection with the services we
            provide, including:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              Personal identification information (Name, email address, phone number,
              etc.)
            </li>
            <li>Usage data (pages visited, time spent on the site, etc.)</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-2">How We Use Your Information</h2>
          <p className="mb-4">We use the collected information for various purposes:</p>
          <ul className="list-disc list-inside mb-4">
            <li>To provide and maintain our service</li>
            <li>To notify you about changes to our service</li>
            <li>To provide customer support</li>
            <li>To monitor the usage of our service</li>
            <li>To detect, prevent, and address technical issues</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-2">Sharing Your Information</h2>
          <p className="mb-4">
            We do not share your personal information with third parties except as
            necessary to comply with the law, protect our rights, or provide our services.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Your Data Protection Rights</h2>
          <p className="mb-4">
            You have certain data protection rights, including the right to access,
            update, or delete the information we have on you.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, you can contact us:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>By email: info@thehomeglowupco.com</li>
            <li>
              By visiting this page on our website:{" "}
              <a
                href="https://thehomeglowup.com/contact"
                className="text-blue-600 underline"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
