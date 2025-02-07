import React from "react";

const AboutUs = () => {
  return (
    <section className="max-w-7xl my-20  mx-auto px-8 flex flex-col gap-20">
      <div className="flex flex-col gap-10 mb-10">
        <h1 className="text-center md:text-4xl text-2xl  font-bold">
          About Admire Holidays
        </h1>
        <p>
          Admire Holidays is more than just a tour and travel company; we are
          your gateway to unforgettable experiences and remarkable journeys.
          With a legacy spanning over 7 years, we have established ourselves as
          a trusted name in the travel and tourism industry, committed to
          delivering excellence at every step of your journey.
        </p>
        <div className="flex flex-col gap-10 pt-10">
          <h1 className="text-center md:text-4xl text-2xl  font-bold">
            Our Story
          </h1>
          <p>
            Our journey began with a simple yet profound mission: to help people
            explore the beauty of our world. Over the years, we have honed our
            expertise and expanded our services to cater to the diverse needs of
            travelers from all walks of life. Whether you seek adventure in the
            mountains, tranquility by the beach, or cultural immersion in
            vibrant cities, Admire Holidays is here to make your travel dreams a
            reality.
          </p>
        </div>
        <div className="flex flex-col gap-10 pt-10">
          <h1 className="text-center md:text-4xl text-2xl  font-bold">
            What Sets Us Apart
          </h1>
          <p>
            Our journey began with a simple yet profound mission: to help people
            explore the beauty of our world. Over the years, we have honed our
            expertise and expanded our services to cater to the diverse needs of
            travelers from all walks of life. Whether you seek adventure in the
            mountains, tranquility by the beach, or cultural immersion in
            vibrant cities, Admire Holidays is here to make your travel dreams a
            reality.
          </p>
          <p>
            <strong> Transparency</strong> : We believe in transparency and
            honesty in all our dealings. From pricing and itinerary details to
            terms and conditions, you can trust us to provide clear and upfront
            information every step of the way.
          </p>
          <p>
            <strong>24/7 Support</strong>: Your safety and comfort are our top
            priorities. That&apos;s why our dedicated support team is available
            around the clock to assist you with any queries or concerns you may
            have before, during, or after your trip
          </p>
        </div>
        <div className="flex flex-col gap-10 pt-10">
          <h1 className="text-center md:text-4xl text-2xl  font-bold">
            Join Us on the Journey
          </h1>
          <p>
            Whether you&apos;re embarking on a solo adventure, planning a
            romantic getaway, or organizing a group tour with friends and
            family, Admire Holidays is here to make your travel dreams come
            true. Join us on the journey of a lifetime and let us help you
            explore the wonders of our world, one unforgettable experience at a
            time.
          </p>
        </div>
      </div>
      <div className="flex justify-center  md:flex-row flex-col items-center gap-8">
        <div className="flex flex-col gap-8">
          <h1 className="md:text-4xl text-2xl text-red-700 font-bold">
            Mission
          </h1>
          <p>
            Our mission is to help people explore the world. We are committed to
            providing you with all kinds of travel and tourism related services.
            We take pride in exceeding our client&apos;s expectations about our
            services. Your satisfaction and excellent service are our main
            goals, while also providing the best value for your hard-earned
            money.
          </p>
        </div>
        <img src="mission.jpeg" className="lg:w-[500px] md:w-[350px]" alt="" />
      </div>
      <div className="flex justify-center md:flex-row flex-col-reverse items-center gap-8">
        <img src="vision.png" className="lg:w-[500px] md:w-[350px]" alt="" />
        <div className="flex flex-col gap-8">
          <h1 className="md:text-4xl text-2xl text-red-700 font-bold">
            Vision
          </h1>
          <p>
            We strive to provide the best business travel services, making your
            dream destinations feel near you. We are committed to providing you
            with the best travel experience you can ever have. Our company aims
            to provide best-in-class personalized travel management services to
            our customers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
