import { Shippori_Mincho, Bebas_Neue} from 'next/font/google';


const shippori = Bebas_Neue({ 
  weight: '400',
  subsets: ['latin'],
})

export default function NavBar() {
  return (
    <section className="bg-[#c3bdb533] py-5 px-5">


      <div className={shippori.className}>
      <li className=" justify-end flex list-none text-gray-950">
        
        <p className="text-xl m-3 group relative w-max">
          <a href="">Home</a>
          <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-black group-hover:w-3/6"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-black group-hover:w-3/6"></span>
        </p>


        <p className="text-xl m-3 group relative w-max">
          <a href="">Menu</a>
          <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-black group-hover:w-3/6"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-black group-hover:w-3/6"></span>
        </p>

        <p className="text-xl m-3 group relative w-max">
          <a href="">Recipes</a>
          <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-black group-hover:w-3/6"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-black group-hover:w-3/6"></span>
        </p>

        <p className="text-xl m-3 group relative w-max">
          <a href="">Contact</a>
          <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-black group-hover:w-3/6"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-black group-hover:w-3/6"></span>
        </p>

        <p className="text-xl m-3 group relative w-max">
          <a href="">About</a>
          <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-black group-hover:w-3/6"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-black group-hover:w-3/6"></span>
        </p>
      </li>
    </div>
    </section>
  );
}

