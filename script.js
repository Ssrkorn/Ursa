document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // ป้องกันไม่ให้หน้าเว็บรีเฟรช
    
    const studentId = document.getElementById("student-id").value;
    const resultDiv = document.getElementById("result");
  
    // ตรวจสอบ Student ID
    if (studentId === "1640401392") {
      resultDiv.innerHTML = `
        <h2>Login Successful!</h2>
        <img src="Grade.png" alt="Welcome Image">
      `;
    } else {
      resultDiv.innerHTML = `<p style="color:red;">Invalid Student ID. Please try again.</p>`;
    }
  });
  