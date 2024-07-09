import Title from "@/components/title";
import NavBar from "@/components/navbar";

import Card from "@/components/cards";
import QRCode from "react-qr-code";

export default function Home() {
  return (
    <div>
      <NavBar />

      <Title />

      <Card />

      <div className="m-4 ml-[3.7rem] flex">
        <QRCode
          style={{ height: "100px", width: "100px", margin: "20px" }}
          value="https://bite-ruby.vercel.app/comensal"
        />
        <QRCode
          size={256}
          style={{ height: "100px", width: "100px", margin: "20px" }}
          value="https://bite-ruby.vercel.app/caja"
        />
      </div>
    </div>
  );
}
