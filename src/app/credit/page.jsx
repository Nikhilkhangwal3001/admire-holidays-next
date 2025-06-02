import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#F5F9FF] min-h-screen py-24 px-6 sm:px-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1D3557] mb-14 text-center">
            Terms and Conditions of Admire Holidays
          </h1>

          <section className="mb-10 rounded-xl shadow-md border border-[#A8DADC] bg-white p-6">
            <h2 className="text-2xl font-bold text-[#457B9D] mb-4">1. Acceptance of Terms</h2>
            <p className="text-[#333333] leading-relaxed">
              By accessing or using the services provided by Admire Holidays through our website{" "}
              <a
                href="https://www.admireholidays.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E63946] hover:underline"
              >
                www.admireholidays.com
              </a>
              , you agree to be bound by the following terms and conditions. If you do not agree with
              any part of these terms and conditions, you may not access or use our services.
            </p>
          </section>

          <section className="mb-10 rounded-xl shadow-md border border-[#A8DADC] bg-white p-6">
            <h2 className="text-2xl font-bold text-[#457B9D] mb-4">2. Booking and Payments</h2>
            <p className="text-[#333333] mb-3 leading-relaxed">
              <strong>2.1. Booking Confirmation:</strong> All bookings made through Admire Holidays are
              subject to availability and confirmation. We reserve the right to accept or reject any
              booking request.
            </p>
            <p className="text-[#333333] mb-3 leading-relaxed">
              <strong>2.2. Payment:</strong> Full payment is required at the time of booking unless
              otherwise specified. Payment methods accepted are listed on our website. Prices are
              quoted in the currency specified and are subject to change without notice.
            </p>
            <p className="text-[#333333] leading-relaxed">
              <strong>2.3. Additional Charges:</strong> Any additional charges incurred during your trip,
              including but not limited to, optional activities, meals, transportation, and personal
              expenses, are your responsibility.
            </p>
          </section>

          <section className="mb-10 rounded-xl shadow-md border border-[#A8DADC] bg-white p-6">
            <h2 className="text-2xl font-bold text-[#457B9D] mb-4">3. Cancellations and Refunds</h2>
            <p className="text-[#333333] mb-3 leading-relaxed">
              <strong>3.1. Cancellation Policy:</strong> Cancellation fees may apply depending on the
              terms and conditions of the service providers (e.g., airlines, hotels, tour operators)
              and the timing of the cancellation. Details of our cancellation policy are available on
              our website.
            </p>
            <p className="text-[#333333] leading-relaxed">
              <strong>3.2. Refunds:</strong> Refunds, if applicable, will be processed in accordance
              with the cancellation policy and may be subject to administrative fees.
            </p>
          </section>

          <section className="mb-10 rounded-xl shadow-md border border-[#A8DADC] bg-white p-6">
            <h2 className="text-2xl font-bold text-[#457B9D] mb-4">4. Travel Documents and Insurance</h2>
            <p className="text-[#333333] mb-3 leading-relaxed">
              <strong>4.1. Travel Documents:</strong> It is your responsibility to ensure that you
              possess valid passports, visas, and any other required travel documents for your trip.
              Admire Holidays is not liable for any consequences resulting from inadequate
              documentation.
            </p>
            <p className="text-[#333333] leading-relaxed">
              <strong>4.2. Travel Insurance:</strong> We strongly recommend purchasing travel
              insurance to protect yourself against unforeseen circumstances such as trip
              cancellations, medical emergencies, and lost luggage.
            </p>
          </section>

          <section className="mb-10 rounded-xl shadow-md border border-[#A8DADC] bg-white p-6">
            <h2 className="text-2xl font-bold text-[#457B9D] mb-4">5. Changes and Amendments</h2>
            <p className="text-[#333333] mb-3 leading-relaxed">
              <strong>5.1. Changes by You:</strong> Any requests for changes or amendments to your
              booking must be made in writing and are subject to availability and approval by Admire
              Holidays and the relevant service providers. Additional charges may apply.
            </p>
            <p className="text-[#333333] leading-relaxed">
              <strong>5.2. Changes by Admire Holidays:</strong> We reserve the right to make changes to
              your itinerary, accommodations, transportation, and other aspects of your trip if
              necessary due to unforeseen circumstances or events beyond our control. We will make
              reasonable efforts to notify you of any changes as soon as possible.
            </p>
          </section>

          <section className="mb-10 rounded-xl shadow-md border border-[#A8DADC] bg-white p-6">
            <h2 className="text-2xl font-bold text-[#457B9D] mb-4">6. Liability</h2>
            <p className="text-[#333333] mb-3 leading-relaxed">
              <strong>6.1. Limitation of Liability:</strong> Admire Holidays acts as an intermediary
              between you and the service providers (e.g., airlines, hotels, tour operators) and is
              not liable for any loss, injury, damage, or delay arising from the acts or omissions of
              these third parties.
            </p>
            <p className="text-[#333333] leading-relaxed">
              <strong>6.2. Indemnification:</strong> You agree to indemnify and hold Admire Holidays
              harmless from any claims, liabilities, damages, costs, or expenses (including legal
              fees) arising from your use of our services or your violation of these terms and
              conditions.
            </p>
          </section>

          <section className="mb-10 rounded-xl shadow-md border border-[#A8DADC] bg-white p-6">
            <h2 className="text-2xl font-bold text-[#457B9D] mb-4">7. Governing Law and Jurisdiction</h2>
            <p className="text-[#333333] leading-relaxed">
              These terms and conditions shall be governed by and construed in accordance with the
              laws of [insert jurisdiction]. Any disputes arising out of or in connection with these
              terms and conditions shall be subject to the exclusive jurisdiction of the courts of
              [insert jurisdiction].
            </p>
          </section>

          <section className="mb-20 rounded-xl shadow-md border border-[#A8DADC] bg-white p-6">
            <h2 className="text-2xl font-bold text-[#457B9D] mb-4">8. Contact Information</h2>
            <p className="text-[#333333] leading-relaxed">
              If you have any questions or concerns about these terms and conditions, please contact
              us at <span className="font-semibold">[insert contact information]</span>.
            </p>
            <p className="mt-4 text-[#333333] leading-relaxed">
              By using the services of Admire Holidays, you acknowledge that you have read,
              understood, and agreed to abide by these terms and conditions.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
