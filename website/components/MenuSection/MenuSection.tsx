/**
 * @File a section of a menu (eg. dessert, appetizers, lunch...)
 */
import Card from '../Card/Card';
import type { CSS } from '@/types/';
export type Menu = {
  section: Section[];
};

export type Section = {
  name: string;
  sectionLink: string;
  menuItem: MenuItem[];
};
export type MenuItem = {
  name: string;
  price: number;
  description?: string;
};

export default function MenuSection(props: Menu) {
  let menuSections = props.section;
  return (
    <>
      {menuSections.map((section, index) => {
        let menuItems = section.menuItem;

        return (
          <>
            <h1
              id={section.sectionLink}
              className="text-3xl flex justify-center"
            >
              {section.name}
            </h1>
            <div>{renderMenuItems(menuItems)}</div>
          </>
        );
      })}
    </>
  );
}

/**
 * Renders the list of items within the given section
 *
 * @param menuItems menu item
 * @returns JSX Menu component
 */
function renderMenuItems(menuItems: MenuItem[]) {
  const menu = menuItems.map((item, index) => {
    return (
      <Card
        title={item.name}
        description={item.description}
        price={item.price}
      />
    );
  });
  return menu;
}
