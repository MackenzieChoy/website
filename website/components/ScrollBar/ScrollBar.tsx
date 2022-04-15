/**
 * @file the main navbar
 */
import Link from 'next/link';
import { useRouter } from 'next/router';

export type ScrollBar = {
  items: {
    link: string;
    label: string;
  }[];
};

export default function ScrollBar(props: ScrollBar) {
  const router = useRouter();
  const items = props.items;
  return (
    <ul className="flex flex-row overflow-x-scroll bg-skin-fill-secondary w-full">
      {items?.map((item, index) => {
        return (
          <li key={index} className="p-4">
            <Link href={`/#${item.link}`}>
              <a>{item.label}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
