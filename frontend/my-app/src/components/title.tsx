import { Roboto} from 'next/font/google'



const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  })
  


export default function Title() {
    return (
        <div className={roboto.className}>
        <h1 className="m-8 text-2xl text-lime-700 ">BITE</h1>
      </div>
    );
  }