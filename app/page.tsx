import Header from "./components/Header";
import Herosection from "./components/Herosection";
import Build from "./components/Build";
import Table from "./components/Table";
import Security from "./components/Security";
import Trustfaqfoot  from "./components/Trustfaqfoot";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Herosection />
      <Build />
      <Table />
      <Security />
      <Trustfaqfoot  />
    </div>
  );
}