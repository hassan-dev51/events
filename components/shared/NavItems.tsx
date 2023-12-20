import React from "react";

const NavItems = () => {
  const headerLinks = [
    {
      label: "Home",
      route: "/",
    },
    {
      label: "Create Event",
      route: "/events/create",
    },
    {
      label: "My Profile",
      route: "/profile",
    },
  ];
  return (
    <div>
      <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
        {headerLinks.map((link) => {
          return (
            <li
              key={link.route}
              className={`${"text-primary-500"} flex-center p-medium-16 whitespace-nowrap`}
            >
              {link.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default NavItems;
