import Image from "next/image";

const useCases = [
  {
    image: "/ensure.svg",
    caption: "Ensuring loved ones are supported at home.",
  },
  {
    image: "/pay.svg",
    caption: "Pay the house school fees and other bills.",
  },
  {
    image: "/recharge.svg",
    caption: "Recharge phones and chat with them.",
  },
  {
    image: "/leverage.svg",
    caption: "Leverage send ideas with them and talk more.",
  },
];

const steps = [
  {
    number: "01",
    title: "Create Account",
    description:
      "Download the app and sign up in minutes with just your email or phone.",
  },
  {
    number: "02",
    title: "Verify Identity",
    description:
      "Quick and secure verification process so you can send money safely.",
  },
  {
    number: "03",
    title: "Send Money Instantly",
    description:
      "Choose your beneficiary, enter the amount, and send in seconds.",
  },
];

const features = [
  {
    title: "Instant Transfers",
    description:
      "Money lands in seconds, not days, so your family is always covered.",
  },
  {
    title: "Bank-Level Security",
    description:
      "Your data and funds are secured with encryption and fraud detection.",
  },
  {
    title: "Rates Updates",
    description:
      "Rates are openly updated and confirmed at the start of every transfer.",
  },
  {
    title: "Transfer Tracking",
    description:
      "Easy way to track every step of your transfer in real time.",
  },
  {
    title: "Tiers and Level",
    description:
      "We offer multiple tiers tailored to fit the kind of transfer you make.",
  },
  {
    title: "Arabic & English Support",
    description:
      "Get help in the language you're most comfortable with.",
  },
];

export default function Build() {
  return (
    <div className="w-full bg-white">
      {/* Build for Africans Living and Working In */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Build for Africans Living and Working in the Kingdom of Saudi Arabia
          </h2>
          <p className="mt-4 text-base text-gray-600">
            We understand the importance of every send home SaharaPay
            designed to be reliable finance bridge, supporting millions of
            lives across the African Continent.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((item) => (
            <div key={item.caption} className="flex flex-col gap-3">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
                <Image
                  src={item.image}
                  alt={item.caption}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-gray-600">{item.caption}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Send Money in 3 Easy Steps */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Send Money in 3 Easy Steps
          </h2>
          <p className="mt-4 text-base text-gray-600">
            Get started in quick way. Join over 50k+ users already sending
            money home with ease.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                {step.number}
              </span>
              <h3 className="text-lg font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose SaharaPay */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose SaharaPay?
          </h2>
          <p className="mt-4 text-base text-gray-600">
            We combine industry-leading security with a user first experience
            designed specifically for the Africa Diaspora.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`rounded-2xl p-6 ${
                index % 2 === 1
                  ? "bg-blue-50"
                  : "border border-gray-100 bg-white"
              }`}
            >
              <h3 className="text-base font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}