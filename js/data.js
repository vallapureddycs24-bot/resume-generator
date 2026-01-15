const safe = v => v || "";

/* ================== RENDER HELPERS ================== */

function renderSkills(r) {
  return r.skills?.length
    ? `<ul>${r.skills.map(s => `<li>${s.field0}</li>`).join("")}</ul>`
    : "";
}

function renderEducation(r) {
  return r.education?.length
    ? r.education.map(e =>
        `<p><b>${e.field0}</b><br>${e.field1} (${e.field2})</p>`
      ).join("")
    : "";
}

function renderExperience(r) {
  return r.experience?.length
    ? r.experience.map(e =>
        `<p><b>${e.field1}</b><br>${e.field0} (${e.field2})</p>`
      ).join("")
    : "";
}

function renderProjects(r) {
  return r.projects?.length
    ? r.projects.map(p =>
        `<p><b>${p.field0}</b><br>${p.field1}</p>`
      ).join("")
    : "";
}

function renderCertificates(r) {
  return r.certificates?.length
    ? r.certificates.map(c =>
        `<p>${c.field0} – ${c.field1}</p>`
      ).join("")
    : "";
}

function renderLanguages(r) {
  return r.languages
    ? `<p>${safe(r.languages)}</p>`
    : "";
}

function renderHobbies(r) {
  return r.hobbies
    ? `<p>${safe(r.hobbies)}</p>`
    : "";
}

/* ================== SOFTWARE ================== */

function soft1(r) {
  return `
  <div class="resume soft1">

    <!-- HEADER -->
    <header class="soft1-header">

      <div class="soft1-head-left">
        ${r.photo ? `<img class="soft1-photo" src="${r.photo}" alt="Profile Photo">` : ""}
      </div>

      <div class="soft1-head-right">
        <h1>${safe(r.name)}</h1>
        <p class="soft1-title">${safe(r.profession || "Professional")}</p>

        <div class="soft1-contact">
          ${r.phone ? `<span>📞 ${safe(r.phone)}</span>` : ""}
          ${r.email ? `<span>✉️ ${safe(r.email)}</span>` : ""}
          ${r.location ? `<span>📍 ${safe(r.location)}</span>` : ""}
        </div>
      </div>

    </header>

    <div class="soft1-body">

      <!-- LEFT COLUMN -->
      <aside class="soft1-left">

        ${r.education?.length ? `
        <section>
          <h3>Education</h3>
          ${renderEducation(r)}
        </section>` : ""}

        ${r.skills?.length ? `
        <section>
          <h3>Expertise</h3>
          <ul>
            ${r.skills.map(s => `<li>${s.field0}</li>`).join("")}
          </ul>
        </section>` : ""}

      </aside>

      <!-- RIGHT COLUMN -->
      <main class="soft1-right">

        <section>
          <h3>Profile</h3>
          <p style="white-space:pre-line">
            ${safe(r.summary)}
          </p>
        </section>

        ${r.experience?.length ? `
        <section>
          <h3>Experience</h3>
          ${r.experience.map(e => `
            <div class="soft1-exp">
              <b>${safe(e.field1)}</b><br>
              <small>${safe(e.field0)} | ${safe(e.field2)}</small>
              <p>${safe(e.field3 || "")}</p>
            </div>
          `).join("")}
        </section>` : ""}

      </main>

    </div>

  </div>
  `;
}


function soft2(r) {
  return `
  <div class="resume soft2">

    <!-- HEADER -->
    <div class="soft2-header">
      <div class="soft2-left">
        <h1>${safe(r.name)}</h1>
        <p>${safe(r.summary)}</p>

        <p>📧 ${safe(r.email)}</p>
        <p>📞 ${safe(r.phone)}</p>
        ${r.location ? `<p>📍 ${safe(r.location)}</p>` : ""}
      </div>

      <div class="soft2-right">
        ${r.photo ? `<img src="${r.photo}" alt="Profile Photo">` : ""}
      </div>
    </div>

    <!-- BODY -->
    <div class="soft2-body">

      <!-- EDUCATION -->
      ${r.education?.length ? `
      <section>
        <h3>Education</h3>
        ${renderEducation(r)}
      </section>` : ""}

      <!-- EXPERIENCE -->
      ${r.experience?.length ? `
      <section>
        <h3>Work Experience</h3>
        ${renderExperience(r)}
      </section>` : ""}

      <!-- SKILLS -->
      ${r.skills?.length ? `
      <section>
        <h3>Professional Skills</h3>
        ${renderSkills(r)}
      </section>` : ""}

      <!-- LANGUAGES -->
      ${r.languages ? `
      <section>
        <h3>Languages</h3>
        <p>${safe(r.languages)}</p>
      </section>` : ""}

      <!-- PERSONAL EVALUATION -->
      ${r.summary ? `
      <section>
        <h3>Personal Evaluation</h3>
        <p style="white-space:pre-line">${safe(r.summary)}</p>
      </section>` : ""}

    </div>

  </div>
  `;
}
function soft3(r) {
  return `
  <div class="resume soft3">

    <!-- LEFT MAIN -->
    <div class="soft3-main">
      <h1 class="soft3-name">${safe(r.name)}</h1>
      <h2 class="soft3-title">${safe(r.profession || "Professional")}</h2>

      <section>
        <h3>Profile Summary</h3>
        <p style="white-space:pre-line">${safe(r.summary)}</p>
      </section>

      ${r.experience?.length ? `
      <section>
        <h3>Work Experience</h3>
        ${renderExperience(r)}
      </section>` : ""}

      ${r.projects?.length ? `
      <section>
        <h3>Projects</h3>
        ${renderProjects(r)}
      </section>` : ""}
    </div>

    <!-- RIGHT SIDEBAR -->
    <aside class="soft3-side">

      ${r.photo ? `
      <div class="soft3-photo">
        <img src="${r.photo}">
      </div>` : ""}

      ${r.education?.length ? `
      <section>
        <h3>Education</h3>
        ${renderEducation(r)}
      </section>` : ""}

      ${r.skills?.length ? `
      <section>
        <h3>Skills</h3>
        ${renderSkills(r)}
      </section>` : ""}

      ${r.languages ? `
      <section>
        <h3>Languages</h3>
        <p>${safe(r.languages)}</p>
      </section>` : ""}

      ${r.hobbies ? `
      <section>
        <h3>Hobbies</h3>
        <p>${safe(r.hobbies)}</p>
      </section>` : ""}

      <section>
        <h3>Contact</h3>
        <p>📞 ${safe(r.phone)}</p>
        <p>📧 ${safe(r.email)}</p>
        ${r.location ? `<p>📍 ${safe(r.location)}</p>` : ""}
      </section>

    </aside>

  </div>
  `;
}

/* ================== MEDICAL ================== */

function med1(r) {
  return `
  <div class="resume med1">

    <!-- TOP HEADER -->
    <div class="med1-header">
      <div class="med1-photo">
        ${r.photo ? `<img src="${r.photo}" />` : ""}
      </div>
      <div class="med1-title">
        <h1>${safe(r.name)}</h1>
        <h3>${safe(r.profession || "Registered Nurse")}</h3>
      </div>
    </div>

    <!-- BODY -->
    <div class="med1-body">

      <!-- LEFT PANEL -->
      <aside class="med1-left">

        <section>
          <h4>Contact</h4>
          ${r.phone ? `<p>📞 ${safe(r.phone)}</p>` : ""}
          ${r.email ? `<p>✉️ ${safe(r.email)}</p>` : ""}
          ${r.location ? `<p>📍 ${safe(r.location)}</p>` : ""}
        </section>

        ${r.skills?.length ? `
        <section>
          <h4>Skills</h4>
          <ul>
            ${r.skills.map(s => `<li>${s.field0}</li>`).join("")}
          </ul>
        </section>` : ""}

        ${r.references ? `
        <section>
          <h4>Reference</h4>
          <p>${safe(r.references)}</p>
        </section>` : ""}

        ${r.certificates?.length ? `
        <section>
          <h4>Certifications</h4>
          ${renderCertificates(r)}
        </section>` : ""}

      </aside>

      <!-- RIGHT PANEL -->
      <main class="med1-right">

        <section>
          <h4>Summary</h4>
          <p style="white-space:pre-line">
            ${safe(r.summary)}
          </p>
        </section>

        ${r.experience?.length ? `
        <section>
          <h4>Work Experience</h4>
          ${r.experience.map(e => `
            <div class="med1-exp">
              <b>${safe(e.field1)}</b>
              <p>${safe(e.field0)}</p>
              <small>${safe(e.field2)}</small>
            </div>
          `).join("")}
        </section>` : ""}

        ${r.education?.length ? `
        <section>
          <h4>Education</h4>
          ${renderEducation(r)}
        </section>` : ""}

      </main>

    </div>

  </div>
  `;
}

function med2(r) {
  return `
  <div class="resume med2">

    <!-- LEFT BLUE PANEL -->
    <aside class="med2-left">

      <div class="med2-photo">
        ${r.photo ? `<img src="${r.photo}">` : ""}
      </div>

      <h1 class="med2-name">${safe(r.name)}</h1>
      <p class="med2-title">${safe(r.profession || "Registered Professional")}</p>

      ${r.skills?.length ? `
      <section>
        <h3>Core Qualifications</h3>
        <ul>
          ${r.skills.map(s => `<li>${s.field0}</li>`).join("")}
        </ul>
      </section>` : ""}

      ${r.certificates?.length ? `
      <section>
        <h3>Certifications</h3>
        <ul>
          ${r.certificates.map(c => `<li>${c.field0}</li>`).join("")}
        </ul>
      </section>` : ""}

      ${r.softSkills?.length ? `
      <section>
        <h3>Soft Skills</h3>
        <ul>
          ${r.softSkills.map(s => `<li>${s}</li>`).join("")}
        </ul>
      </section>` : ""}

      ${r.education?.length ? `
      <section>
        <h3>Education</h3>
        ${renderEducation(r)}
      </section>` : ""}

      ${r.languages ? `
      <section>
        <h3>Languages</h3>
        <p>${safe(r.languages)}</p>
      </section>` : ""}

      ${r.hobbies ? `
      <section>
        <h3>Hobbies</h3>
        <p>${safe(r.hobbies)}</p>
      </section>` : ""}

    </aside>

    <!-- RIGHT WHITE PANEL -->
    <main class="med2-right">

      <section>
        <h2>About Me</h2>
        <p style="white-space:pre-line">${safe(r.summary)}</p>
      </section>

      ${r.experience?.length ? `
      <section>
        <h2>Work Experience</h2>
        ${renderExperience(r)}
      </section>` : ""}

    </main>

  </div>
  `;
}
function med3(r) {
  return `
  <div class="resume med3">

    <!-- HEADER -->
    <header class="med3-header">
      <div class="med3-photo">
        ${r.photo ? `<img src="${r.photo}" />` : ""}
      </div>

      <div class="med3-head-text">
        <h1>${safe(r.name)}</h1>
        <p>${safe(r.profession || "Registered Medical Physician")}</p>

        <div class="med3-contact">
          ${r.email ? `<span>${safe(r.email)}</span>` : ""}
          ${r.phone ? `<span>${safe(r.phone)}</span>` : ""}
          ${r.location ? `<span>${safe(r.location)}</span>` : ""}
        </div>
      </div>
    </header>

    <!-- BODY -->
    <div class="med3-body">

      <!-- LEFT PANEL -->
      <aside class="med3-left">

        ${r.education?.length ? `
        <section>
          <h3>Education</h3>
          ${renderEducation(r)}
        </section>` : ""}

        ${r.skills?.length ? `
        <section>
          <h3>Expertise</h3>
          <ul>
            ${r.skills.map(s => `<li>${s.field0}</li>`).join("")}
          </ul>
        </section>` : ""}

      </aside>

      <!-- RIGHT PANEL -->
      <main class="med3-right">

        <section>
          <h3>Profile</h3>
          <p style="white-space:pre-line">${safe(r.summary)}</p>
        </section>

        ${r.experience?.length ? `
        <section>
          <h3>Experience</h3>
          ${renderExperience(r)}
        </section>` : ""}

      </main>

    </div>
  </div>
  `;
}


/* ================== MANAGEMENT ================== */

function man1(r) {
  return `
  <div class="resume man1">

    <!-- LEFT SIDEBAR -->
    <aside class="man1-left">

      ${r.photo ? `
        <div class="man1-photo">
          <img src="${r.photo}" />
        </div>` : ""}

      <div class="man1-section">
        <h3>Contact</h3>
        ${r.phone ? `<p>${safe(r.phone)}</p>` : ""}
        ${r.email ? `<p>${safe(r.email)}</p>` : ""}
        ${r.location ? `<p>${safe(r.location)}</p>` : ""}
      </div>

      ${r.skills?.length ? `
      <div class="man1-section">
        <h3>Skills</h3>
        <ul>
          ${r.skills.map(s => `<li>${s.field0}</li>`).join("")}
        </ul>
      </div>` : ""}

    </aside>

    <!-- RIGHT CONTENT -->
    <main class="man1-right">

      <h1 class="man1-name">${safe(r.name)}</h1>

      <section>
        <h3>Profile</h3>
        <p style="white-space:pre-line">
          ${safe(r.summary)}
        </p>
      </section>

      ${r.experience?.length ? `
      <section>
        <h3>Experience</h3>
        ${r.experience.map(e => `
          <div class="man1-item">
            <b>${safe(e.field1)}</b><br>
            <small>${safe(e.field0)} | ${safe(e.field2)}</small>
            <p>${safe(e.field3 || "")}</p>
          </div>
        `).join("")}
      </section>` : ""}

      ${r.education?.length ? `
      <section>
        <h3>Education</h3>
        ${renderEducation(r)}
      </section>` : ""}

      <section>
        <h3>References</h3>
        <p>Available upon request</p>
      </section>

    </main>

  </div>
  `;
}

function man2(r) {
  return `
  <div class="resume man2">

    <!-- HEADER -->
    <header class="man2-header">
      <div class="man2-photo">
        ${r.photo ? `<img src="${r.photo}" />` : ""}
      </div>

      <div class="man2-head-text">
        <h1>${safe(r.name)}</h1>
        <p>${safe(r.profession || "Team Manager")}</p>
      </div>
    </header>

    <!-- BODY -->
    <div class="man2-body">

      <!-- LEFT PANEL -->
      <aside class="man2-left">

        <section>
          <h3>Contact Details</h3>
          ${r.email ? `<p>📧 ${safe(r.email)}</p>` : ""}
          ${r.phone ? `<p>📞 ${safe(r.phone)}</p>` : ""}
          ${r.location ? `<p>📍 ${safe(r.location)}</p>` : ""}
        </section>

        ${r.education?.length ? `
        <section>
          <h3>Education</h3>
          ${renderEducation(r)}
        </section>` : ""}

        ${r.skills?.length ? `
        <section>
          <h3>Skills</h3>
          <ul>
            ${r.skills.map(s => `<li>${s.field0}</li>`).join("")}
          </ul>
        </section>` : ""}

      </aside>

      <!-- RIGHT PANEL -->
      <main class="man2-right">

        <section>
          <h3>Summary</h3>
          <p style="white-space:pre-line">${safe(r.summary)}</p>
        </section>

        ${r.experience?.length ? `
        <section>
          <h3>Work Experience</h3>
          ${renderExperience(r)}
        </section>` : ""}

        <section>
          <h3>References</h3>
          <p>References available upon request</p>
        </section>

      </main>

    </div>
  </div>
  `;
}

/* ================== GENERAL ================== */

function gen1(r) {
  return `
  <div class="resume des3">

    <!-- LEFT COLUMN -->
    <aside class="des3-left">

      ${r.photo ? `
        <div class="des3-photo">
          <img src="${r.photo}" />
        </div>` : ""}

      <div class="des3-contact">
        <h3>Contact</h3>
        ${r.phone ? `<p>📞 ${safe(r.phone)}</p>` : ""}
        ${r.email ? `<p>✉️ ${safe(r.email)}</p>` : ""}
        ${r.location ? `<p>📍 ${safe(r.location)}</p>` : ""}
      </div>

      ${r.education?.length ? `
      <div class="des3-education">
        <h3>Education</h3>
        ${renderEducation(r)}
      </div>` : ""}

      ${r.skills?.length ? `
      <div class="des3-skills">
        <h3>Skills</h3>
        <ul>
          ${r.skills.map(s => `<li>${s.field0}</li>`).join("")}
        </ul>
      </div>` : ""}

    </aside>

    <!-- RIGHT COLUMN -->
    <main class="des3-right">

      <h1 class="des3-name">${safe(r.name)}</h1>
      <div class="des3-line"></div>

      <p class="des3-summary">
        ${safe(r.summary)}
      </p>

      <h2 class="des3-title">
        <span>GRAPHIC</span> <mark>DESIGNER</mark>
      </h2>

      ${r.experience?.length ? `
      <section class="des3-experience">
        <h3>Experience</h3>
        ${r.experience.map(e => `
          <div class="des3-exp-item">
            <b>${safe(e.field1)}</b><br>
            <small>${safe(e.field0)} | ${safe(e.field2)}</small>
            <p>${safe(e.field3 || "")}</p>
          </div>
        `).join("")}
      </section>` : ""}

    </main>

  </div>
  `;
}

/*********************************
 TEMPLATE LISTS
**********************************/
const departmentTemplates = {
  software: ["soft1", "soft2", "soft3"],
  medical: ["med1", "med2", "med3"],
  management: ["man1", "man2"],
  others: ["gen1"]
};

const templateImages = {
  soft1: "assets/images/soft1.jpg",
  soft2: "assets/images/soft2.jpg",
  soft3: "assets/images/soft3.jpg",

  med1: "assets/images/med1.jpg",
  med2: "assets/images/med2.jpg",
  med3: "assets/images/med3.jpg",

  man1: "assets/images/man1.jpg",
  man2: "assets/images/man2.jpg",

  gen1: "assets/images/des3.jpg"
};

