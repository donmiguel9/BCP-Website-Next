import { useRouter } from "next/router";
import Button from "../components/Button";
import TitleSection from "../components/TitleSection";

const Impressum = () => {
  const router = useRouter();
  function download(url) {
    const URL = url;
    if (typeof window !== "undefined") {
      window.location.href = URL;
    }
  }
  return (
    <div>
      <TitleSection
        title="Impressum"
        className="h-[300px] lg:h-[100px] lg:pt-42 lg:pb-20"
        subTitle=""
      />
      <div className="w-1/2 m-auto my-10">
        <p>
          {`Blockchain Presence AG is a Zurich based start-up
          incorporated in December 2020 under Swiss law. The Chief Executive
          Officer is Prof. Dr. Johannes Christian Ewerhart. The company’s
          activities aim at developing and running a universal platform for the
          transfer of real-world information to innovative smart contract
          applications.`}
        </p>
        <p>&nbsp;</p>
        <p className="font-bold">Office and Contact</p>
        <p>Blockchain Presence AG</p>
        <p>Fritz-Fleiner-Weg 15</p>
        <p>8044 Zürich</p>
        <p>Switzerland</p>
        <br />
        <p className="">
          Email:{" "}
          <a
            className="text-blue-400"
            href="mailto:info@blockchainpresence.net"
          >
            info@blockchainpresence.net
          </a>
        </p>
        <br />
        <br /> <p className="font-bold">Company identification number UID</p>
        <br />
        <p>CHE-370.249.799</p>
        <p>&nbsp;</p>
        <br />
        <p className="font-bold">Register of commerce reference number</p>
        <br />
        <p>CH-020-3049583-1</p>
        <div className="mt-10 justify-center">
        <Button
              onClick={() =>
                download("/static/Impressum.pdf")
              }
            >
              Download Impressum
            </Button></div>
        <div className="mt-16">Last update: 29.05.2022</div>

      </div>
    </div>
  );
};

export default Impressum;
