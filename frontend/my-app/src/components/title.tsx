import { Bebas_Neue } from 'next/font/google';


const ubuntu = Bebas_Neue({
    weight: '400',
    subsets: ['latin'],
  })
  


export default function Title() {
    return (
        <div className={ubuntu.className}>
        <h1 className="mx-7 mb-20 mt-9 text-3xl text-gray-800">Bite</h1>
      </div>
    );
  }