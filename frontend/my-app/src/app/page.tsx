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

      {/* <div className="m-4 ml-[3.7rem] flex">

        <h1>Qr para comensal</h1><br />
        <QRCode
          style={{ height: "100px", width: "100px", margin: "20px" }}
          value="http://localhost:3000/1"
        />
        <br />


        <h1>Qr para caja</h1><br />
        <QRCode
          size={256}
          style={{ height: "100px", width: "100px", margin: "20px" }}
          value="http://localhost:3000/comensal"
          
        />
        <br />

         <h1>Qr para mozo</h1>
         <br />
        <QRCode
          size={256}
          style={{ height: "100px", width: "100px", margin: "20px" }}
          value="https://bite-ruby.vercel.app/mozo"
          
        />
        <br />
        

        
      </div> */}
    </div>
  );
}
