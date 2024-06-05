const faqsContainer = document.getElementById("faqs");
const faqs = [
  {
    id: 0,
    header: "What is Frontend Mentor, and how will it help me? ",
    panel:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building. ",
  },
  {
    id: 1,
    header: "Is Frontend Mentor free? ",
    panel:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    id: 2,
    header: "Can I use Frontend Mentor projects in my portfolio?",
    panel:
      " Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    id: 3,
    header: "How can I get help if I'm stuck on a challenge?",
    panel:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

const loadQuestions = (array) => {
  const questionsHTML = array
    .map((faqs) => {
      return `
      <h3>
        <button aria-expanded="false"
                aria-controls="accordion-panel-${faqs.id}"
                id="accordion-header-${faqs.id}" data-accordion-header>
          ${faqs.header}
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/></svg>
        </button>
    </h3>
    <section id="accordion-panel-${faqs.id}"
             aria-labelledby="accordion-header-${faqs.id}"
             hidden>
      <p>${faqs.panel}</p>
    </section>
    `;
    })
    .join("");

  faqsContainer.innerHTML = questionsHTML;
};

faqsContainer.onclick = function (event) {
  let target = event.target;
  let closestButton = target.closest("button").id;
  let id = closestButton.split("-")[2];
  let section = document.getElementById(`accordion-panel-${id}`);

  if (section.hasAttribute("hidden")) {
    section.removeAttribute("hidden");
  } else {
    section.setAttribute("hidden", "");
  }
};

loadQuestions(faqs);
