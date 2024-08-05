import Image from "next/image";

export default function Card() {
  return (
    <section className="ms:grid-cols-[repeat(2,50%)]  grid">
      <div className="w-full m-auto grid lg:w-[1024px] min-[400px]:grid-cols-[repeat(2,50%)] md:grid-cols-[repeat(3,33.3%)] lg:grid-cols-[repeat(4,25%)] xl:w-[1200px]">
   
    

      <div>
          <a href="">
            <div className="m-[5px] group relative overflow-hidden">
              <div className="flex absolute text-[#e1dfdf] h-full w-full bg-black/70 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2 font-extrabold">
                  Sauerbraten
                </h1>
                <h2 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px]sm:text-xs  mt-12 ml-2 font-light text-sm">Adobo de carne marinada en una mezcla de vinagre, especias y vegetales</h2>
                <strong className="absolute overflow-hidden bg-slate-100 text-gray-950 opacity-90 text-[12px] px-3 py-2 text-center me-2 mb-2 ml-0 self-end m-2 flex hover:bg-black hover:text-white hover:bg-opacity-35 ">$8450,00</strong>
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
              <div className="flex absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2 font-extrabold">
                  Sushi Salad
                </h1>
                <h2 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px]sm:text-xs  mt-12 ml-2 font-light text-sm">Sushi salad con palta, tomate, zanahoria, pepino y lluvia de semillas de sesamo</h2>
                <strong className="absolute overflow-hidden bg-slate-100 text-gray-950 opacity-90 text-[12px] px-3 py-2 text-center me-2 mb-2 ml-0 self-end m-2 flex hover:bg-black hover:text-white hover:bg-opacity-35 ">$7200,00</strong>
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
            <div className="m-[5px] group relative overflow-hidden flex justify-center items-center">
              <div className="flex absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2 font-extrabold">
                  Camote, manzana y cebolla rostizadas
                </h1>
                <h2 className="absolute text-sm w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px]sm:text-xs mt-20 ml-2 font-light">Camotes anarajados y manzanas verdes con aceite de oliva, romero y vinagre balsámico</h2>
                <strong className="absolute overflow-hidden bg-slate-100 text-gray-950 opacity-90 text-[12px] px-3 py-2 text-center me-2 mb-2 ml-0 self-end m-2 flex hover:bg-black hover:text-white hover:bg-opacity-35 ">$5630,00</strong>

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
              <div className="flex absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2 font-extrabold">Volován</h1>
              <h2 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px]sm:text-xs  mt-12 ml-2 font-light text-sm">Volován de pollo con salsa de queso</h2>
              <strong className="absolute overflow-hidden bg-slate-100 text-gray-950 opacity-90 text-[12px] px-3 py-2 text-center me-2 mb-2 ml-0 self-end m-2 flex hover:bg-black hover:text-white hover:bg-opacity-35 ">$5890,99</strong>
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
              <div className="flex absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2 font-extrabold">
                  Satay
                </h1>
                <h2 className="text-sm absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px]sm:text-xs  mt-12 ml-2 font-light">Brocheta de carne marinada, asado a la brasa y servido con una salsa picante elaborada con maní.</h2>
                <strong className="absolute overflow-hidden bg-slate-100 text-gray-950 opacity-90 text-[12px] px-3 py-2 text-center me-2 mb-2 ml-0 self-end m-2 flex hover:bg-black hover:text-white hover:bg-opacity-35 ">$6750,00</strong>
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
              <div className="flex absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2 font-extrabold">
                  Burrito
                </h1>
                <h2 className="text-sm absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px]sm:text-xs  mt-12 ml-2 font-light">Burrito de carne acompañado con frijoles y aguacate </h2>
                <strong className="absolute overflow-hidden bg-slate-100 text-gray-950 opacity-90 text-[12px] px-3 py-2 text-center me-2 mb-2 ml-0 self-end m-2 flex hover:bg-black hover:text-white hover:bg-opacity-35 ">$3599,99</strong>
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
              <div className="flex absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2 font-extrabold">
                  Uramakis
                </h1>
                <h2 className=" text-sm absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px]sm:text-xs  mt-12 ml-2 font-light"> Maki-sushi de  pepino, palito de cangrejo, huevas de gambas y aguacate</h2>
                <strong className="absolute overflow-hidden bg-slate-100 text-gray-950 opacity-90 text-[12px] px-3 py-2 text-center me-2 mb-2 ml-0 self-end m-2 flex hover:bg-black hover:text-white hover:bg-opacity-35 ">$3300,00</strong>
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
              <div className="flex absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2 font-extrabold">
                  Caldo de Cazuela
                </h1>
                <h2 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px]sm:text-xs  mt-12 ml-2 font-light text-sm">Sopa casera hecha con carne y verduras</h2>
                <strong className="absolute overflow-hidden bg-slate-100 text-gray-950 opacity-90 text-[12px] px-3 py-2 text-center me-2 mb-2 ml-0 self-end m-2 flex hover:bg-black hover:text-white hover:bg-opacity-35 ">$3780,89</strong>
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
        </div>    <div>
          <a href="">
            <div className="m-[5px] group relative overflow-hidden">
              <div className="flex absolute text-[#e1dfdf] h-full w-full bg-black/70 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2 font-extrabold">
                  Sauerbraten
                </h1>
                <h2 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px]sm:text-xs  mt-12 ml-2 font-light text-sm">Adobo de carne marinada en una mezcla de vinagre, especias y vegetales</h2>
                <strong className="absolute overflow-hidden bg-slate-100 text-gray-950 opacity-90 text-[12px] px-3 py-2 text-center me-2 mb-2 ml-0 self-end m-2 flex hover:bg-black hover:text-white hover:bg-opacity-35 ">$8450,00</strong>
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
              <div className="flex absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2 font-extrabold">
                  Sushi Salad
                </h1>
                <h2 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px]sm:text-xs  mt-12 ml-2 font-light text-sm">Sushi salad con palta, tomate, zanahoria, pepino y lluvia de semillas de sesamo</h2>
                <strong className="absolute overflow-hidden bg-slate-100 text-gray-950 opacity-90 text-[12px] px-3 py-2 text-center me-2 mb-2 ml-0 self-end m-2 flex hover:bg-black hover:text-white hover:bg-opacity-35 ">$7200,00</strong>
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
            <div className="m-[5px] group relative overflow-hidden flex justify-center items-center">
              <div className="flex absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2 font-extrabold">
                  Camote, manzana y cebolla rostizadas
                </h1>
                <h2 className="absolute text-sm w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px]sm:text-xs mt-20 ml-2 font-light">Camotes anarajados y manzanas verdes con aceite de oliva, romero y vinagre balsámico</h2>
                <strong className="absolute overflow-hidden bg-slate-100 text-gray-950 opacity-90 text-[12px] px-3 py-2 text-center me-2 mb-2 ml-0 self-end m-2 flex hover:bg-black hover:text-white hover:bg-opacity-35 ">$5630,00</strong>

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
              <div className="flex absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2 font-extrabold">Volován</h1>
              <h2 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px]sm:text-xs  mt-12 ml-2 font-light text-sm">Volován de pollo con salsa de queso</h2>
              <strong className="absolute overflow-hidden bg-slate-100 text-gray-950 opacity-90 text-[12px] px-3 py-2 text-center me-2 mb-2 ml-0 self-end m-2 flex hover:bg-black hover:text-white hover:bg-opacity-35 ">$5890,99</strong>
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
              <div className="flex absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2 font-extrabold">
                  Satay
                </h1>
                <h2 className="text-sm absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px]sm:text-xs  mt-12 ml-2 font-light">Brocheta de carne marinada, asado a la brasa y servido con una salsa picante elaborada con maní.</h2>
                <strong className="absolute overflow-hidden bg-slate-100 text-gray-950 opacity-90 text-[12px] px-3 py-2 text-center me-2 mb-2 ml-0 self-end m-2 flex hover:bg-black hover:text-white hover:bg-opacity-35 ">$6750,00</strong>
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
              <div className="flex absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2 font-extrabold">
                  Burrito
                </h1>
                <h2 className="text-sm absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px]sm:text-xs  mt-12 ml-2 font-light">Burrito de carne acompañado con frijoles y aguacate </h2>
                <strong className="absolute overflow-hidden bg-slate-100 text-gray-950 opacity-90 text-[12px] px-3 py-2 text-center me-2 mb-2 ml-0 self-end m-2 flex hover:bg-black hover:text-white hover:bg-opacity-35 ">$3599,99</strong>
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
              <div className="flex absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2 font-extrabold">
                  Uramakis
                </h1>
                <h2 className=" text-sm absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px]sm:text-xs  mt-12 ml-2 font-light"> Maki-sushi de  pepino, palito de cangrejo, huevas de gambas y aguacate</h2>
                <strong className="absolute overflow-hidden bg-slate-100 text-gray-950 opacity-90 text-[12px] px-3 py-2 text-center me-2 mb-2 ml-0 self-end m-2 flex hover:bg-black hover:text-white hover:bg-opacity-35 ">$3300,00</strong>
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
              <div className="flex absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2 font-extrabold">
                  Caldo de Cazuela
                </h1>
                <h2 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px]sm:text-xs  mt-12 ml-2 font-light text-sm">Sopa casera hecha con carne y verduras</h2>
                <strong className="absolute overflow-hidden bg-slate-100 text-gray-950 opacity-90 text-[12px] px-3 py-2 text-center me-2 mb-2 ml-0 self-end m-2 flex hover:bg-black hover:text-white hover:bg-opacity-35 ">$3780,89</strong>
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
        </div>    <div>
          <a href="">
            <div className="m-[5px] group relative overflow-hidden">
              <div className="flex absolute text-[#e1dfdf] h-full w-full bg-black/70 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2 font-extrabold">
                  Sauerbraten
                </h1>
                <h2 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px]sm:text-xs  mt-12 ml-2 font-light text-sm">Adobo de carne marinada en una mezcla de vinagre, especias y vegetales</h2>
                <strong className="absolute overflow-hidden bg-slate-100 text-gray-950 opacity-90 text-[12px] px-3 py-2 text-center me-2 mb-2 ml-0 self-end m-2 flex hover:bg-black hover:text-white hover:bg-opacity-35 ">$8450,00</strong>
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
              <div className="flex absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2 font-extrabold">
                  Sushi Salad
                </h1>
                <h2 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px]sm:text-xs  mt-12 ml-2 font-light text-sm">Sushi salad con palta, tomate, zanahoria, pepino y lluvia de semillas de sesamo</h2>
                <strong className="absolute overflow-hidden bg-slate-100 text-gray-950 opacity-90 text-[12px] px-3 py-2 text-center me-2 mb-2 ml-0 self-end m-2 flex hover:bg-black hover:text-white hover:bg-opacity-35 ">$7200,00</strong>
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
            <div className="m-[5px] group relative overflow-hidden flex justify-center items-center">
              <div className="flex absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2 font-extrabold">
                  Camote, manzana y cebolla rostizadas
                </h1>
                <h2 className="absolute text-sm w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px]sm:text-xs mt-20 ml-2 font-light">Camotes anarajados y manzanas verdes con aceite de oliva, romero y vinagre balsámico</h2>
                <strong className="absolute overflow-hidden bg-slate-100 text-gray-950 opacity-90 text-[12px] px-3 py-2 text-center me-2 mb-2 ml-0 self-end m-2 flex hover:bg-black hover:text-white hover:bg-opacity-35 ">$5630,00</strong>

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
              <div className="flex absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2 font-extrabold">Volován</h1>
              <h2 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px]sm:text-xs  mt-12 ml-2 font-light text-sm">Volován de pollo con salsa de queso</h2>
              <strong className="absolute overflow-hidden bg-slate-100 text-gray-950 opacity-90 text-[12px] px-3 py-2 text-center me-2 mb-2 ml-0 self-end m-2 flex hover:bg-black hover:text-white hover:bg-opacity-35 ">$5890,99</strong>
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
              <div className="flex absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2 font-extrabold">
                  Satay
                </h1>
                <h2 className="text-sm absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px]sm:text-xs  mt-12 ml-2 font-light">Brocheta de carne marinada, asado a la brasa y servido con una salsa picante elaborada con maní.</h2>
                <strong className="absolute overflow-hidden bg-slate-100 text-gray-950 opacity-90 text-[12px] px-3 py-2 text-center me-2 mb-2 ml-0 self-end m-2 flex hover:bg-black hover:text-white hover:bg-opacity-35 ">$6750,00</strong>
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
              <div className="flex absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2 font-extrabold">
                  Burrito
                </h1>
                <h2 className="text-sm absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px]sm:text-xs  mt-12 ml-2 font-light">Burrito de carne acompañado con frijoles y aguacate </h2>
                <strong className="absolute overflow-hidden bg-slate-100 text-gray-950 opacity-90 text-[12px] px-3 py-2 text-center me-2 mb-2 ml-0 self-end m-2 flex hover:bg-black hover:text-white hover:bg-opacity-35 ">$3599,99</strong>
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
              <div className="flex absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2 font-extrabold">
                  Uramakis
                </h1>
                <h2 className=" text-sm absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px]sm:text-xs  mt-12 ml-2 font-light"> Maki-sushi de  pepino, palito de cangrejo, huevas de gambas y aguacate</h2>
                <strong className="absolute overflow-hidden bg-slate-100 text-gray-950 opacity-90 text-[12px] px-3 py-2 text-center me-2 mb-2 ml-0 self-end m-2 flex hover:bg-black hover:text-white hover:bg-opacity-35 ">$3300,00</strong>
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
              <div className="flex absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2 font-extrabold">
                  Caldo de Cazuela
                </h1>
                <h2 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px]sm:text-xs  mt-12 ml-2 font-light text-sm">Sopa casera hecha con carne y verduras</h2>
                <strong className="absolute overflow-hidden bg-slate-100 text-gray-950 opacity-90 text-[12px] px-3 py-2 text-center me-2 mb-2 ml-0 self-end m-2 flex hover:bg-black hover:text-white hover:bg-opacity-35 ">$3780,89</strong>
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
        </div>    <div>
          <a href="">
            <div className="m-[5px] group relative overflow-hidden">
              <div className="flex absolute text-[#e1dfdf] h-full w-full bg-black/70 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2 font-extrabold">
                  Sauerbraten
                </h1>
                <h2 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px]sm:text-xs  mt-12 ml-2 font-light text-sm">Adobo de carne marinada en una mezcla de vinagre, especias y vegetales</h2>
                <strong className="absolute overflow-hidden bg-slate-100 text-gray-950 opacity-90 text-[12px] px-3 py-2 text-center me-2 mb-2 ml-0 self-end m-2 flex hover:bg-black hover:text-white hover:bg-opacity-35 ">$8450,00</strong>
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
              <div className="flex absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2 font-extrabold">
                  Sushi Salad
                </h1>
                <h2 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px]sm:text-xs  mt-12 ml-2 font-light text-sm">Sushi salad con palta, tomate, zanahoria, pepino y lluvia de semillas de sesamo</h2>
                <strong className="absolute overflow-hidden bg-slate-100 text-gray-950 opacity-90 text-[12px] px-3 py-2 text-center me-2 mb-2 ml-0 self-end m-2 flex hover:bg-black hover:text-white hover:bg-opacity-35 ">$7200,00</strong>
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
            <div className="m-[5px] group relative overflow-hidden flex justify-center items-center">
              <div className="flex absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2 font-extrabold">
                  Camote, manzana y cebolla rostizadas
                </h1>
                <h2 className="absolute text-sm w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px]sm:text-xs mt-20 ml-2 font-light">Camotes anarajados y manzanas verdes con aceite de oliva, romero y vinagre balsámico</h2>
                <strong className="absolute overflow-hidden bg-slate-100 text-gray-950 opacity-90 text-[12px] px-3 py-2 text-center me-2 mb-2 ml-0 self-end m-2 flex hover:bg-black hover:text-white hover:bg-opacity-35 ">$5630,00</strong>

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
              <div className="flex absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2 font-extrabold">Volován</h1>
              <h2 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px]sm:text-xs  mt-12 ml-2 font-light text-sm">Volován de pollo con salsa de queso</h2>
              <strong className="absolute overflow-hidden bg-slate-100 text-gray-950 opacity-90 text-[12px] px-3 py-2 text-center me-2 mb-2 ml-0 self-end m-2 flex hover:bg-black hover:text-white hover:bg-opacity-35 ">$5890,99</strong>
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
              <div className="flex absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2 font-extrabold">
                  Satay
                </h1>
                <h2 className="text-sm absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px]sm:text-xs  mt-12 ml-2 font-light">Brocheta de carne marinada, asado a la brasa y servido con una salsa picante elaborada con maní.</h2>
                <strong className="absolute overflow-hidden bg-slate-100 text-gray-950 opacity-90 text-[12px] px-3 py-2 text-center me-2 mb-2 ml-0 self-end m-2 flex hover:bg-black hover:text-white hover:bg-opacity-35 ">$6750,00</strong>
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
              <div className="flex absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2 font-extrabold">
                  Burrito
                </h1>
                <h2 className="text-sm absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px]sm:text-xs  mt-12 ml-2 font-light">Burrito de carne acompañado con frijoles y aguacate </h2>
                <strong className="absolute overflow-hidden bg-slate-100 text-gray-950 opacity-90 text-[12px] px-3 py-2 text-center me-2 mb-2 ml-0 self-end m-2 flex hover:bg-black hover:text-white hover:bg-opacity-35 ">$3599,99</strong>
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
              <div className="flex absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2 font-extrabold">
                  Uramakis
                </h1>
                <h2 className=" text-sm absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px]sm:text-xs  mt-12 ml-2 font-light"> Maki-sushi de  pepino, palito de cangrejo, huevas de gambas y aguacate</h2>
                <strong className="absolute overflow-hidden bg-slate-100 text-gray-950 opacity-90 text-[12px] px-3 py-2 text-center me-2 mb-2 ml-0 self-end m-2 flex hover:bg-black hover:text-white hover:bg-opacity-35 ">$3300,00</strong>
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
              <div className="flex absolute text-white h-full w-full bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px] m-2 font-extrabold">
                  Caldo de Cazuela
                </h1>
                <h2 className="absolute w-[200px] lg:w-[230px] md:w-[200px] sm:w-[190px]sm:text-xs  mt-12 ml-2 font-light text-sm">Sopa casera hecha con carne y verduras</h2>
                <strong className="absolute overflow-hidden bg-slate-100 text-gray-950 opacity-90 text-[12px] px-3 py-2 text-center me-2 mb-2 ml-0 self-end m-2 flex hover:bg-black hover:text-white hover:bg-opacity-35 ">$3780,89</strong>
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
