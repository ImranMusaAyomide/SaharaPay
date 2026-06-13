import Header from "./components/Header";
import Herosection from "./components/Herosection";
import Build from "./components/Build";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Herosection />
      <Build />
    </div>
  );
}