'use client';

import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: 'Privacy Policy',
      content: [
        `At AdmireHolidays, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect the information you provide to us through our website and services.`,
        `• We may collect personal information such as your name, contact details, email address, and travel preferences when you make inquiries, bookings, or sign up for our services.`,
        `• We use this information to personalize your experience, provide the services you request, communicate with you, and improve our offerings.`,
        `• Your payment information is securely processed through trusted third-party payment processors, and we do not store your payment details.`
      ]
    },
    {
      title: 'Information Sharing',
      content: [
        `• We do not sell, trade, or rent your personal information to third parties.`,
        `• We may share your information with trusted service providers who assist us in operating our website, conducting our business, or servicing you, as long as they agree to keep this information confidential.`,
        `• We may also share your information when required by law or to protect our rights, property, or safety, or that of others.`
      ]
    },
    {
      title: 'Data Security',
      content: [
        `• We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.`,
        `• However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.`
      ]
    },
    {
      title: 'Cookies',
      content: [
        `• We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic.`,
        `• You can choose to disable cookies through your browser settings, but this may affect the functionality of our website.`
      ]
    },
    {
      title: 'Third-Party Links',
      content: [
        `Our website may contain links to third-party websites, which have their own privacy policies. We are not responsible for the privacy practices or content of these websites.`
      ]
    },
    {
      title: 'Updates to Privacy Policy',
      content: [
        `We may update this Privacy Policy from time to time, and any changes will be reflected on this page. We encourage you to review this Policy periodically.`,
        `By using our website and services, you consent to the collection and use of your information as described in this Privacy Policy.`
      ]
    },
    {
      title: 'Terms and Conditions',
      content: [
        `Please read these Terms and Conditions carefully before using our website or booking our services.`
      ]
    },
    {
      title: '1. Agreement',
      content: [
        `By accessing or using our website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these Terms, you may not use our website or services.`
      ]
    },
    {
      title: '2. Booking and Payments',
      content: [
        `• All bookings are subject to availability and confirmation.`,
        `• Prices listed on our website are in the currency specified and are subject to change without notice.`,
        `• Payments must be made in full at the time of booking unless otherwise specified.`
      ]
    },
    {
      title: '3. Cancellations and Refunds',
      content: [
        `• Cancellation policies vary depending on the service booked. Please refer to the specific terms provided at the time of booking.`,
        `• Refunds, if applicable, will be processed in accordance with our cancellation policy.`
      ]
    },
    {
      title: '4. Intellectual Property',
      content: [
        `All content on our website, including text, graphics, logos, images, and software, is the property of TripToHoneymoon and is protected by copyright and other intellectual property laws.`
      ]
    },
    {
      title: '5. Limitation of Liability',
      content: [
        `We are not liable for any direct, indirect, incidental, special, or consequential damages arising from your use of our website or services.`
      ]
    },
    {
      title: '6. Governing Law',
      content: [
        `These Terms and Conditions shall be governed by and construed in accordance with the laws of India.`
      ]
    },
    {
      title: 'Contact Us',
      content: [
        `• Address: 34, Sewak Park (1st floor), Dwarka more metro, Near metro pillar no772, New Delhi 110059.`,
        `• Phone: 011-40612834`,
        `• Email: info@admireholidays.com`,
        `• Website: https://admireholidays.com`,
        `• Business Hours: 10:00 AM to 06:00 PM`,
        `Thank you for choosing Admire Holidays. We look forward to making your honeymoon unforgettable!`
      ]
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto px-6 py-16"
    >
      <div className="space-y-16">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-blue-500 pb-2">
              {section.title}
            </h2>
            <div className="space-y-3 text-gray-700">
              {section.content.map((para, i) => (
                <p key={i} className="leading-relaxed">{para}</p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default PrivacyPolicy;
