/**
 * @file the main navbar
 */
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function NavBar(props) {
  const router = useRouter()

  return (
    <header className="flex w-full justify-self-start sticky top-0 z-30 bg-slate-800 shadow-slate-300 ">
      <button
        type="button"
        className="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
      >
        <span className="sr-only">Navigation</span>
        <svg width="24" height="24">
          <path
            d="M5 6h14M5 12h14M5 18h14"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          ></path>
        </svg>
      </button>
      <ul className="hidden">
        {props.links?.map((link) => {
          let isActive = router.pathname == link.href ? 'text-orange-50' : ''
          return (
            <li key={link.href} className="p-6">
              <Link href={link.href}>
                <a
                  className={`${isActive} hover:shadow-slate-700 link-underline`}
                >
                  {link.text}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </header>
  )
}
