import { HiDocumentDuplicate } from "react-icons/hi";

function Header() {
  return (
    <header className="header bg-gray-900 p-10 container mx-auto border-b border-dashed border-teal-900 rounded-tl-lg rounded-tr-lg">
      <h2 className="uppercase font-semi- text-teal-500 tracking-wider flex gap-3 items-center">
        <span>
          <HiDocumentDuplicate className="" />
        </span>
        <span>Todo app </span>
      </h2>
    </header>
  );
}

export default Header;
