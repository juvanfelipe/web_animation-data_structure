import Link from 'next/link';
import { FC } from 'react';


const Side: FC = () => {
  return (
    <div className="fixed left-0 top-0 w-min h-screen text-white flex flex-col justify-center">
      <ul className="flex flex-col items-start p-4">
        <li className="py-2">
          <Link href="/" className='hover:bg-indigo-600'>Home</Link>
        </li>
        <li className="py-2">
          <Link href="/mercury" className='hover:bg-indigo-600'>Mercury</Link>
        </li>
        <li className="py-2">
          <Link href="/venus" className='hover:bg-indigo-600'>Venus</Link>
        </li>
        <li className="py-2">
          <Link href="/earth" className='hover:bg-indigo-600'>Earth</Link>
        </li>
        <li className="py-2">
          <Link href="/mars" className='hover:bg-indigo-600'>Mars</Link>
        </li>
        <li className="py-2">
          <Link href="/jupiter" className='hover:bg-indigo-600'>Jupiter</Link>
        </li>
        <li className="py-2">
          <Link href="/saturn" className='hover:bg-indigo-600'>Saturn</Link>
        </li>
        <li className="py-2">
          <Link href="/uranus" className='hover:bg-indigo-600'>Uranus</Link>
        </li>
        <li className="py-2">
          <Link href="/neptune" className='hover:bg-indigo-600'>Neptune</Link>
        </li>
      </ul>
    </div>
  );
};

export default Side;