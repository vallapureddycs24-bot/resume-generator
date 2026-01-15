/*********************************
 LOAD RESUME
**********************************/
let resume = JSON.parse(localStorage.getItem("resume")) || {};

/*********************************
 SECTION VISIBILITY
**********************************/
function hideAllSections() {
  document.querySelectorAll(".section").forEach(s => s.style.display = "none");
}

function showSections(...ids) {
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = "block";
  });
}

function loadDepartmentFields() {
  hideAllSections();

  if (resume.department === "software") {
    showSections("edu-section", "cert-section", "exp-section", "proj-section");
  }
  if (resume.department === "medical") {
    showSections("edu-section", "cert-section", "exp-section");
  }
  if (resume.department === "management") {
    showSections("edu-section", "cert-section", "exp-section");
  }
  if (resume.department === "others") {
    showSections("edu-section");
  }
}

loadDepartmentFields();

/*********************************
 ADD BLOCK HELPER
**********************************/
function createRow(className, fields) {
  const row = document.createElement("div");
  row.className = className;

  fields.forEach(f => {
    const el = document.createElement(f.type || "input");
    el.placeholder = f.placeholder;
    el.oninput = renderPreview;
    row.appendChild(el);
  });

  const btn = document.createElement("button");
  btn.type = "button";
  btn.textContent = "❌";
  btn.onclick = () => {
    row.remove();
    renderPreview();
  };

  row.appendChild(btn);
  return row;
}

/*********************************
 ADD EDUCATION
**********************************/
function addEducation() {
  document.getElementById("education-container").appendChild(
    createRow("edu-item", [
      { placeholder: "Degree" },
      { placeholder: "Institute" },
      { placeholder: "Year" }
    ])
  );
}

/*********************************
 ADD CERTIFICATE
**********************************/
function addCertificate() {
  document.getElementById("certificate-container").appendChild(
    createRow("cert-item", [
      { placeholder: "Certificate" },
      { placeholder: "Issued By" }
    ])
  );
}

/*********************************
 ADD EXPERIENCE
**********************************/
function addExperience() {
  document.getElementById("experience-container").appendChild(
    createRow("exp-item", [
      { placeholder: "Organization" },
      { placeholder: "Role" },
      { placeholder: "Duration" }
    ])
  );
}

/*********************************
 ADD PROJECT
**********************************/
function addProject() {
  document.getElementById("project-container").appendChild(
    createRow("proj-item", [
      { placeholder: "Project Title" },
      { type: "textarea", placeholder: "Description" }
    ])
  );
}

/*********************************
 ADD SKILL
**********************************/
function addSkill() {
  document.getElementById("skills").appendChild(
    createRow("skill-item", [
      { placeholder: "Skill" }
    ])
  );
}

/*********************************
 ADD LANGUAGE
**********************************/
function addLanguage() {
  document.getElementById("languages").appendChild(
    createRow("language-item", [
      { placeholder: "Language" }
    ])
  );
}

/*********************************
 ADD HOBBY
**********************************/
function addHobby() {
  document.getElementById("hobbies").appendChild(
    createRow("hobby-item", [
      { placeholder: "Hobby" }
    ])
  );
}

/*********************************
 COLLECT DATA
**********************************/
function collect(selector, count) {
  return [...document.querySelectorAll(selector)].map(row => {
    const obj = {};
    for (let i = 0; i < count; i++) {
      obj["field" + i] = row.children[i].value;
    }
    return obj;
  });
}

function collectSimple(selector) {
  return [...document.querySelectorAll(selector)]
    .map(i => i.value)
    .filter(v => v);
}

/*********************************
 LIVE PREVIEW
**********************************/
function renderPreview() {
  if (!window.previewBox) return;

  resume.name = document.getElementById("name")?.value || "";
  resume.email = document.getElementById("email")?.value || "";
  resume.phone = document.getElementById("phone")?.value || "";
  resume.location = document.getElementById("location")?.value || "";
  resume.summary = document.getElementById("summary")?.value || "";

  resume.education = collect(".edu-item", 3);
  resume.certificates = collect(".cert-item", 2);
  resume.experience = collect(".exp-item", 3);
  resume.projects = collect(".proj-item", 2);

  resume.skills = collect(".skill-item", 1);
  resume.languages = collectSimple(".language-item input").join(", ");
  resume.hobbies = collectSimple(".hobby-item input").join(", ");

  localStorage.setItem("resume", JSON.stringify(resume));

  switch (resume.template) {
    case "soft1": window.previewBox.innerHTML = soft1(resume); break;
    case "soft2": window.previewBox.innerHTML = soft2(resume); break;
    case "soft3": window.previewBox.innerHTML = soft3(resume); break;
    case "med1":  window.previewBox.innerHTML = med1(resume);  break;
    case "med2":  window.previewBox.innerHTML = med2(resume);  break;
    case "med3":  window.previewBox.innerHTML = med3(resume);  break;
    case "man1":  window.previewBox.innerHTML = man1(resume);  break;
    case "man2":  window.previewBox.innerHTML = man2(resume);  break;
    case "gen1":  window.previewBox.innerHTML = gen1(resume);  break;
  }
}

/*********************************
 INPUT LISTENERS (✅ FIX HERE)
**********************************/
document.addEventListener("DOMContentLoaded", () => {

  window.previewBox = document.getElementById("livePreview");

  ["name", "email", "phone", "location", "summary"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("input", renderPreview);
  });

  // ✅ PHOTO UPLOAD (WORKING)
  const photoInput = document.getElementById("photo");
  if (photoInput) {
    photoInput.addEventListener("change", function () {
      const file = this.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = () => {
        resume.photo = reader.result;
        localStorage.setItem("resume", JSON.stringify(resume));
        renderPreview();
      };
      reader.readAsDataURL(file);
    });
  }

  renderPreview();
});

/*********************************
 SUBMIT
**********************************/
document.getElementById("resumeForm").addEventListener("submit", e => {
  e.preventDefault();
  localStorage.setItem("resume", JSON.stringify(resume));
  window.location.href = "preview.html";
});
