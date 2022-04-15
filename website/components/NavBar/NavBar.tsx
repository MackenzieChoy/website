/**
 * @file the main navbar
 */
import Link from 'next/link';
import { useRouter } from 'next/router';
import ScrollBar from '../ScrollBar/ScrollBar';
export default function NavBar(props) {
  const router = useRouter();

  return (
    <div className="flex w-full flex-col items-center sticky top-0 z-30 bg-skin-fill-primary shadow-slate-300 place-items-start">
      <header className="flex-start flex flex-row w-full justify-between p-4">
        <h1 className="text-skin-primary place-content-end">Your logo here</h1>
        <button
          type="button"
          className=" block text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
        >
          <span className="sr-only">Navigation</span>
          <svg width="24" height="24">
            <path
              d="M5 6h14M5 12h14M5 18h14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            ></path>
          </svg>
        </button>
      </header>
    </div>
  );
}
