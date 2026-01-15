document.addEventListener("DOMContentLoaded", () => {

  const deptSelect = document.getElementById("departmentSelect");
  const continueBtn = document.getElementById("continueBtn");

  continueBtn.addEventListener("click", () => {

    const department = deptSelect.value;

    if (!department) {
      alert("Please select a department");
      return;
    }

    // Save department
    let resume = JSON.parse(localStorage.getItem("resume")) || {};
    resume.department = department;
    localStorage.setItem("resume", JSON.stringify(resume));

    // ✅ GO TO TEMPLATE PAGE
    window.location.href = "template-select.html";
  });

});
