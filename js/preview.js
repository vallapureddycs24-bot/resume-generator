console.log("RESUME DATA:", JSON.parse(localStorage.getItem("resume")));

document.addEventListener("DOMContentLoaded", () => {

  const resume = JSON.parse(localStorage.getItem("resume"));

  if (!resume || !resume.template) {
    alert("No template selected");
    window.location.href = "templates.html";
    return;
  }

  let html = "";

  switch (resume.template) {

    // SOFTWARE
    case "soft1":
      html = soft1(resume);
      break;
    case "soft2":
      html = soft2(resume);
      break;
    case "soft3":
      html = soft3(resume);
      break;

    // MEDICAL
    case "med1":
      html = med1(resume);
      break;
    case "med2":
      html = med2(resume);
      break;
    case "med3":
      html = med3(resume);
      break;

    // MANAGEMENT
    case "man1":
      html = man1(resume);
      break;
    case "man2":
      html = man2(resume);
      break;

    // GENERAL
    case "gen1":
      html = gen1(resume);
      break;

    default:
      html = "<h2>Invalid Template</h2>";
  }

  document.getElementById("resume").innerHTML = html;
});
