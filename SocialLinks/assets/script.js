const socialButtons = document.getElementById("social-buttons");

const socialLinks = [
  {
    social: "Github",
    link: "#",
  },
  {
    social: "Frontend Mentor",
    link: "#",
  },
  {
    social: "LinkedIn",
    link: "#",
  },
  {
    social: "Twitter",
    link: "#",
  },
  {
    social: "Instagram",
    link: "#",
  },
];

socialLinks.forEach((element) => {
  const button = document.createElement("button");
  button.textContent = element.social;
  button.classList.add(
    "bg-grey",
    "text-white",
    "font-inter",
    "py-3",
    "rounded-xl",
    "w-full",
    "max-w-sm"
  );
  socialButtons.appendChild(button);
});
