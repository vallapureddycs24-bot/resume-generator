document.addEventListener("DOMContentLoaded", () => {

  const resume = JSON.parse(localStorage.getItem("resume"));
  const container = document.getElementById("templateContainer");

  // Safety check
  if (!resume || !resume.department) {
    alert("Please select a department first");
    window.location.href = "templates.html";
    return;
  }

  const dept = resume.department;
  const templates = departmentTemplates[dept];

  container.innerHTML = "";

  templates.forEach(template => {

    const card = document.createElement("div");
    card.className = "template-card";

    const img = document.createElement("img");
    img.src = templateImages[template];
    img.alt = template;

    const title = document.createElement("h3");
    title.innerText = template.toUpperCase();

    card.appendChild(img);
    card.appendChild(title);

    card.onclick = () => {
      resume.template = template;
      localStorage.setItem("resume", JSON.stringify(resume));

      // ✅ NEXT STEP
      window.location.href = "create.html";
    };

    container.appendChild(card);
  });

});
