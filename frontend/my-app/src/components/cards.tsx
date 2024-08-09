import Image from "next/image";

export default function Card() {
  return (
    <section className="ms:grid-cols-[repeat(2,50%)]  grid">
      <div className="w-full m-auto grid lg:w-[1024px] min-[400px]:grid-cols-[repeat(2,50%)] md:grid-cols-[repeat(3,33.3%)] lg:grid-cols-[repeat(4,25%)] xl:w-[1200px]">
        <div>
          <a href="">
            <div className="m-[5px] group relative overflow-hidden">
              <div className="absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2">
                  Sauerbraten
                </h1>
                <h2 className="absolute lg:w-[26px] md:w-[30px] sm:w-[26px]"></h2>
              </div>
              <Image
                className="w-full"
                width={300}
                height={300}
                src="/img/plato1.jpg"
                alt=""
              />
            </div>
          </a>
        </div>

        <div>
          <a href="">
            <div className="m-[5px] group relative overflow-hidden">
              <div className="absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2">
                  Sushi Salad
                </h1>
                <h2 className="absolute lg:w-[26px] md:w-[30px] sm:w-[26px]"></h2>
              </div>
              <Image
                className="w-full"
                width={300}
                height={300}
                src="/img/plato2.jpg"
                alt=""
              />
            </div>
          </a>
        </div>

        <div>
          <a href="">
            <div className="m-[5px] group relative overflow-hidden">
              <div className="absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2">
                  Camote, manzana y cebolla rostizadas
                </h1>
                <h2 className="absolute lg:w-[26px] md:w-[30px] sm:w-[26px]"></h2>
              </div>

              <Image
                className="w-full"
                width={300}
                height={300}
                src="/img/plato3.jpg"
                alt=""
              />
            </div>
          </a>
        </div>

        <div>
          <a href="">
            <div className="m-[5px] group relative overflow-hidden">
              <div className="absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2">
                  Volovanes de pollo con nueces
                </h1>
                <h2 className="absolute lg:w-[26px] md:w-[30px] sm:w-[26px]"></h2>
              </div>

              <Image
                className="w-full"
                width={300}
                height={300}
                src="/img/plato4.jpg"
                alt=""
              />
            </div>
          </a>
        </div>

        <div>
          <a href="">
            <div className="m-[5px] group relative overflow-hidden">
              <div className="absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2">
                  Satay
                </h1>
                <h2 className="absolute lg:w-[26px] md:w-[30px] sm:w-[26px]"></h2>
              </div>

              <Image
                className="w-full"
                width={300}
                height={300}
                src="/img/plato5.jpg"
                alt=""
              />
            </div>
          </a>
        </div>

        <div>
          <a href="">
            <div className="m-[5px] group relative overflow-hidden">
              <div className="absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2">
                  Burrito
                </h1>
                <h2 className="absolute lg:w-[26px] md:w-[30px] sm:w-[26px]"></h2>
              </div>

              <Image
                className="w-full"
                width={300}
                height={300}
                src="/img/plato6.jpeg"
                alt=""
              />
            </div>
          </a>
        </div>

        <div>
          <a href="">
            <div className="m-[5px] group relative overflow-hidden">
              <div className="absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2">
                  Uramakis
                </h1>
                <h2 className="absolute lg:w-[26px] md:w-[30px] sm:w-[26px]"></h2>
              </div>

              <Image
                className="w-full"
                width={300}
                height={300}
                src="/img/plato7.jpg"
                alt=""
              />
            </div>
          </a>
        </div>

        <div>
          <a href="">
            <div className="m-[5px] group relative overflow-hidden">
              <div className="absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2">
                  {" "}
                  Caldo de Cazuela
                </h1>
                <h2 className="absolute lg:w-[26px] md:w-[30px] sm:w-[26px]"></h2>
              </div>

              <Image
                className="w-full"
                width={300}
                height={300}
                src="/img/plato8.jpg"
                alt=""
              />
            </div>
          </a>
        </div>

        <div>
          <a href="">
            <div className="m-[5px] group relative overflow-hidden">
              <div className="absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2">
                  Sauerbraten
                </h1>
                <h2 className="absolute lg:w-[26px] md:w-[30px] sm:w-[26px]"></h2>
              </div>
              <Image
                className="w-full"
                width={300}
                height={300}
                src="/img/plato1.jpg"
                alt=""
              />
            </div>
          </a>
        </div>

        <div>
          <a href="">
            <div className="m-[5px] group relative overflow-hidden">
              <div className="absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2">
                  Sushi Salad
                </h1>
                <h2 className="absolute lg:w-[26px] md:w-[30px] sm:w-[26px]"></h2>
              </div>
              <Image
                className="w-full"
                width={300}
                height={300}
                src="/img/plato2.jpg"
                alt=""
              />
            </div>
          </a>
        </div>

        <div>
          <a href="">
            <div className="m-[5px] group relative overflow-hidden">
              <div className="absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2">
                  Camote, manzana y cebolla rostizadas
                </h1>
                <h2 className="absolute lg:w-[26px] md:w-[30px] sm:w-[26px]"></h2>
              </div>

              <Image
                className="w-full"
                width={300}
                height={300}
                src="/img/plato3.jpg"
                alt=""
              />
            </div>
          </a>
        </div>

        <div>
          <a href="">
            <div className="m-[5px] group relative overflow-hidden">
              <div className="absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2">
                  Volovanes de pollo con nueces
                </h1>
                <h2 className="absolute lg:w-[26px] md:w-[30px] sm:w-[26px]"></h2>
              </div>

              <Image
                className="w-full"
                width={300}
                height={300}
                src="/img/plato4.jpg"
                alt=""
              />
            </div>
          </a>
        </div>

        <div>
          <a href="">
            <div className="m-[5px] group relative overflow-hidden">
              <div className="absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2">
                  Satay
                </h1>
                <h2 className="absolute lg:w-[26px] md:w-[30px] sm:w-[26px]"></h2>
              </div>

              <Image
                className="w-full"
                width={300}
                height={300}
                src="/img/plato5.jpg"
                alt=""
              />
            </div>
          </a>
        </div>

        <div>
          <a href="">
            <div className="m-[5px] group relative overflow-hidden">
              <div className="absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2">
                  Burrito
                </h1>
                <h2 className="absolute lg:w-[26px] md:w-[30px] sm:w-[26px]"></h2>
              </div>

              <Image
                className="w-full"
                width={300}
                height={300}
                src="/img/plato6.jpeg"
                alt=""
              />
            </div>
          </a>
        </div>

        <div>
          <a href="">
            <div className="m-[5px] group relative overflow-hidden">
              <div className="absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2">
                  Uramakis
                </h1>
                <h2 className="absolute lg:w-[26px] md:w-[30px] sm:w-[26px]"></h2>
              </div>

              <Image
                className="w-full"
                width={300}
                height={300}
                src="/img/plato7.jpg"
                alt=""
              />
            </div>
          </a>
        </div>

        <div>
          <a href="">
            <div className="m-[5px] group relative overflow-hidden">
              <div className="absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2">
                  {" "}
                  Caldo de Cazuela
                </h1>
                <h2 className="absolute lg:w-[26px] md:w-[30px] sm:w-[26px]"></h2>
              </div>

              <Image
                className="w-full"
                width={300}
                height={300}
                src="/img/plato8.jpg"
                alt=""
              />
            </div>
          </a>
        </div>

        <div>
          <a href="">
            <div className="m-[5px] group relative overflow-hidden">
              <div className="absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2">
                  Sauerbraten
                </h1>
                <h2 className="absolute lg:w-[26px] md:w-[30px] sm:w-[26px]"></h2>
              </div>
              <Image
                className="w-full"
                width={300}
                height={300}
                src="/img/plato1.jpg"
                alt=""
              />
            </div>
          </a>
        </div>

        <div>
          <a href="">
            <div className="m-[5px] group relative overflow-hidden">
              <div className="absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2">
                  Sushi Salad
                </h1>
                <h2 className="absolute lg:w-[26px] md:w-[30px] sm:w-[26px]"></h2>
              </div>
              <Image
                className="w-full"
                width={300}
                height={300}
                src="/img/plato2.jpg"
                alt=""
              />
            </div>
          </a>
        </div>

        <div>
          <a href="">
            <div className="m-[5px] group relative overflow-hidden">
              <div className="absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2">
                  Camote, manzana y cebolla rostizadas
                </h1>
                <h2 className="absolute lg:w-[26px] md:w-[30px] sm:w-[26px]"></h2>
              </div>

              <Image
                className="w-full"
                width={300}
                height={300}
                src="/img/plato3.jpg"
                alt=""
              />
            </div>
          </a>
        </div>

        <div>
          <a href="">
            <div className="m-[5px] group relative overflow-hidden">
              <div className="absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2">
                  Volovanes de pollo con nueces
                </h1>
                <h2 className="absolute lg:w-[26px] md:w-[30px] sm:w-[26px]"></h2>
              </div>

              <Image
                className="w-full"
                width={300}
                height={300}
                src="/img/plato4.jpg"
                alt=""
              />
            </div>
          </a>
        </div>

        <div>
          <a href="">
            <div className="m-[5px] group relative overflow-hidden">
              <div className="absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2">
                  Satay
                </h1>
                <h2 className="absolute lg:w-[26px] md:w-[30px] sm:w-[26px]"></h2>
              </div>

              <Image
                className="w-full"
                width={300}
                height={300}
                src="/img/plato5.jpg"
                alt=""
              />
            </div>
          </a>
        </div>

        <div>
          <a href="">
            <div className="m-[5px] group relative overflow-hidden">
              <div className="absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2">
                  Burrito
                </h1>
                <h2 className="absolute lg:w-[26px] md:w-[30px] sm:w-[26px]"></h2>
              </div>

              <Image
                className="w-full"
                width={300}
                height={300}
                src="/img/plato6.jpeg"
                alt=""
              />
            </div>
          </a>
        </div>

        <div>
          <a href="">
            <div className="m-[5px] group relative overflow-hidden">
              <div className="absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2">
                  Uramakis
                </h1>
                <h2 className="absolute lg:w-[26px] md:w-[30px] sm:w-[26px]"></h2>
              </div>

              <Image
                className="w-full"
                width={300}
                height={300}
                src="/img/plato7.jpg"
                alt=""
              />
            </div>
          </a>
        </div>

        <div>
          <a href="">
            <div className="m-[5px] group relative overflow-hidden">
              <div className="absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2">
                  {" "}
                  Caldo de Cazuela
                </h1>
                <h2 className="absolute lg:w-[26px] md:w-[30px] sm:w-[26px]"></h2>
              </div>

              <Image
                className="w-full"
                width={300}
                height={300}
                src="/img/plato8.jpg"
                alt=""
              />
            </div>
          </a>
        </div>
        </div>
      
    </section>
  );
}
