import Image from "next/image";




export default function Card() {
  return (

<div className="flex-row flex flex-wrap justify-center">
    <a href="#">
        <Image className="m-4 aspect-square " width={300} height={300} src="/img/plato1.jpg" alt="" />
    </a>
    <a href="#">
        <Image className="m-4 aspect-square" width={300} height={300} src="/img/plato2.jpg" alt="" />
    </a>
    <a href="#">
        <Image className="m-4 aspect-square" width={300} height={300} src="/img/plato3.jpg" alt="" />
    </a>
    <a href="#">
        <Image className="m-4 aspect-square" width={300} height={300} src="/img/plato4.jpg" alt="" />
    </a>
    <a href="#">
        <Image className="m-4 aspect-square" width={300} height={300} src="/img/plato5.jpg" alt="" />
    </a>
    <a href="#">
        <Image className="m-4 aspect-square" width={300} height={300} src="/img/plato6.jpg" alt="" />
    </a>
    <a href="#">
        <Image className="m-4 aspect-square" width={300} height={300} src="/img/plato7.jpg" alt="" />
    </a>
    <a href="#">
        <Image className="m-4 aspect-square" width={300} height={300} src="/img/plato8.jpg" alt="" />
    </a>
   
   
   
</div>
  )
}
