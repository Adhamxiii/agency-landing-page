import Link from "next/link";
import React from "react";

const links = [
  {
    title: "About",
    subLinks: [
      { name: "about", path: "/" },
      { name: "Features", path: "/" },
      { name: "News", path: "/" },
      { name: "Art", path: "/" },
    ],
  },
  {
    title: "Company",
    subLinks: [
      { name: "Blog", path: "/" },
      { name: "Faqs", path: "/" },
      { name: "Payment", path: "/" },
      { name: "Price", path: "/" },
    ],
  },
  {
    title: "Support",
    subLinks: [
      { name: "Account", path: "/" },
      { name: "Contact", path: "/" },
      { name: "Help", path: "/" },
      { name: "Art", path: "/" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="grid grid-cols-2 md:grid-cols-7 gap-8 p-5">
        <div className="col-span-2 space-y-5">
          <h1>Digital</h1>
          <p className="text-gray-400 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sequi
            iure voluptatem non saepe, libero commodi voluptas nisi molestias,
            magni illum fugiat.
          </p>
        </div>

        
          {links.map((link) => (
            <div key={link.title}>
              <h2 className="font-bold py-2">{link.title}</h2>
              <div className="space-y-4 flex flex-col text-sm text-gray-400">
                {link.subLinks.map((item) => (
                  <Link key={item.name} href={item.path}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        

        <div className="col-span-2 space-y-5">
          <h2 className="font-bold">Get In Touch</h2>
          <p className="text-gray-400 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eos
            facilis a facere nesciunt id!
          </p>
          <p>
            <Link
              className="bg-green-500 text-white px-5 py-2 rounded-full font-semibold"
              href="/"
            >
              Contact Us
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
