import {
  Tag,
  Users,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
  LucideIcon,
  Search,
  Book
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active?: boolean;
};

type Menu = {
  href: string;
  label: string;
  active?: boolean;
  icon: LucideIcon;
  submenus?: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          icon: LayoutGrid,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "Principal",
      menus: [
        // {
        //   href: "",
        //   label: "Posts",
        //   icon: SquarePen,
        //   submenus: [
        //     {
        //       href: "/posts",
        //       label: "All Posts"
        //     },
        //     {
        //       href: "/posts/new",
        //       label: "New Post"
        //     }
        //   ]
        // },
        {
          href: "/library",
          label: "Biblioteca",
          icon: Book
        },
       
        {
          href: "/search",
          label: "Buscar Livros",
          icon: Search
        },
        {
          href: "/categories",
          label: "Categorias",
          icon: Bookmark
        },
      ]
    },
    {
      groupLabel: "Configurações",
      menus: [

        {
          href: "/account",
          label: "Conta",
          icon: Users
        },
        {
          href: "/settings",
          label: "Configurações",
          icon: Settings
        },
      ]
    }
  ];
}
