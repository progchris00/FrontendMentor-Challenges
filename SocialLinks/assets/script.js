const socialButtons = document.getElementById("social-buttons");

const socialLinks = [
  {
    social: "GitHub",
    link: "https://github.com/progchris00",
  },
  {
    social: "Frontend Mentor",
    link: "https://www.frontendmentor.io/profile/progchris00",
  },
  {
    social: "LinkedIn",
    link: "https://www.linkedin.com/in/christian-ortiz-b45b39256/",
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
  button.href = element.link;
  button.target = "_blank";
  button.rel = "noopener noreferrer";
  button.classList.add("social-btns");
  socialButtons.appendChild(button);
});
