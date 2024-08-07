import { BiHome } from "react-icons/bi";

const NavLink = [
  {
    id: 1,
    title: <BiHome size={20} className="asd" />,
    to: "/",
    class:
      "text-[1.6rem] max-md:text-[2rem] font-normal hover:scale-[1.1] transition-all duration-[0.2s] navlink tracking-[0]",
  },
  {
    id: 2,
    title: 'About',
    to: "/about",
    class:
      "text-[1.6rem] max-md:text-[2rem] font-normal hover:scale-[1.1] transition-all duration-[0.2s] navlink tracking-[0]",
  },
  {
    id: 3,
    title: 'Treatment',
    to: "/treatment",
    class:
      "text-[1.6rem] max-md:text-[2rem] font-normal hover:scale-[1.1] transition-all duration-[0.2s] navlink tracking-[0]",
  },
  {
    id: 4,
    title: 'Accommodation',
    to: "/accommodation",
    class:
      "text-[1.6rem] max-md:text-[2rem] font-normal hover:scale-[1.1] transition-all duration-[0.2s] navlink tracking-[0]",
  },
  {
    id: 5,
    title: 'Programs',
    to: "/programs",
    class:
      "text-[1.6rem] max-md:text-[2rem] font-normal hover:scale-[1.1] transition-all duration-[0.2s] navlink tracking-[0]",
  },
  {
    id: 6,
    title: 'Blog',
    to: "/",
    class:
      "text-[1.6rem] max-md:text-[2rem] font-normal hover:scale-[1.1] transition-all duration-[0.2s] navlink tracking-[0]",
  },
  {
    id: 7,
    title: 'Contact',
    to: "/",
    class:
      "text-[1.6rem] max-md:text-[2rem] font-normal hover:scale-[1.1] transition-all duration-[0.2s] navlink tracking-[0]",
  },
  {
    id: 8,
    title: 'Apply For Admission',
    to: "/",
    class:
      "text-[1.6rem] max-md:text-[2rem] font-normal bg-[#00804b] border-[1px] border-[#00804b] text-[white] rounded-md px-[1rem] py-[0.5rem] transition-all duration-[0.2s] hover:border-[1px] hover:border-[black] hover:bg-[#f2f2f2] hover:text-[black] navlink tracking-[0]",
  },
];

export default NavLink;
