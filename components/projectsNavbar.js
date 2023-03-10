export const NavItem = ({ value, handlerFilterCategory, active }) => {
  let className = "capitalize cursor-pointer hover:text-green";
  if (active === value) className += " text-green";

  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 text-lg overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="mongo" {...props} />
      <NavItem value="next" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
