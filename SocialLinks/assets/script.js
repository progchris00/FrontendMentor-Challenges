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
  const button = document.createElement("a");
  button.textContent = element.social;
  button.link = element.link;
  button.target = "_blank";
  button.rel = "noopener noreferrer";
  button.classList.add("social-btns");
  socialButtons.appendChild(button);
});
