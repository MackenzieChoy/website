/**
 * @File A user's menu
 */
import ScrollBar from '../ScrollBar/ScrollBar';
import MenuSection from '../MenuSection/MenuSection';
import type { CSS, Section, Menu } from '@/types/';

export default function Menu(props: Menu) {
  const section = props.section;
  let items = section.map((s) => {
    return {
      label: s.name,
      link: s.sectionLink,
    };
  });
  return (
    <>
      <ScrollBar items={items} />
      <MenuSection section={section} />
    </>
  );
}
