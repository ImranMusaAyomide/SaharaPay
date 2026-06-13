import { FiShield, FiLock, FiAlertCircle, FiSmartphone } from "react-icons/fi";
import { MdVerifiedUser } from "react-icons/md";

const securityCards = [
  { icon: <FiShield className="h-7 w-7 text-white" />, label: "SAMA Regulation" },
  { icon: <FiLock className="h-7 w-7 text-white" />, label: "AES-256 Encrypted" },
  { icon: <FiAlertCircle className="h-7 w-7 text-white" />, label: "Fraud Detection" },
  { icon: <FiSmartphone className="h-7 w-7 text-white" />, label: "IOS Launch Well" },
];

const features = [
  {
    title: "KYC Verification",
    description: "Secure ID validation complaint Saudi regulations.",
  },
  {
    title: "Identity Protection",
    description: "Advanced biometric login and unauthorized access alert.",
  },
  {
    title: "Encrypted Transactions",
    description: "Advanced biometric login and unauthorized access alert.",
  },
  {
    title: "Fraud Detection",
    description: "We flag spam account and freeze there funds till further notices.",
  },
];

export default function Security() {
  return (
    <section className="w-full bg-blue-700 py-16 font-[family-name:var(--font-montserrat)]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left */}
          <div className="flex flex-col gap-8">
            <div>
              <span className="inline-block rounded-full border border-white/30 px-4 py-1 text-xs font-medium text-white">
                Trust & Security
              </span>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Security Comes First
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-blue-100">
                We protect your money with multiple layers of defense. From
                advanced encrypted to robust identity verification, Your
                security is our mission.
              </p>
            </div>

            {/* Feature list */}
            <ul className="flex flex-col gap-5">
              {features.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
                    <MdVerifiedUser className="h-3 w-3" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-sm text-blue-200">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — 2x2 card grid */}
          <div className="grid grid-cols-2 gap-4">
            {securityCards.map((card) => (
              <div
                key={card.label}
                className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-blue-600/60 px-6 py-10 text-center backdrop-blur-sm transition-colors hover:bg-blue-600"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  {card.icon}
                </div>
                <p className="text-sm font-semibold text-white">{card.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}