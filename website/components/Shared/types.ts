/**
 * CSS declarative string
 */
export type CSS = String;

/**
 * Menu properties
 */
export type Menu = {
  section: Section[];
};

/**
 * The section of a menu
 */
export type Section = {
  name: string;
  sectionLink: string;
  menuItem: MenuItem[];
};

/**
 * Represents an item on the menu
 */
export type MenuItem = {
  name: string;
  price: number;
  description?: string;
};
