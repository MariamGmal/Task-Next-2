import React from "react";
import { FaFacebookSquare, FaXTwitter } from "react-icons/fa";
const Socialmedia = () => {
  const socialmedia = [
    {
      title: "facebook",
      icon: <FaFacebookSquare />,
      href: "https://fb/fb",
    },
    {
      title: "twitter",
      icon: <FaXTwitter />,
      href: "https://x/x",
    },
  ];
  return (
    <div>
      {socialmedia.map((item) => (
        // eslint-disable-next-line react/jsx-key
        <a
          style={{ display: "flex", gap: 10 }}
          href={item.href}
          target="_blank">
          <span>{item.title}</span>
          <span>{item.icon}</span>
        </a>
      ))}
    </div>
  );
};

export default Socialmedia;
