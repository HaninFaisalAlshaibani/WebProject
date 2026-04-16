document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("addForm");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    const fields = [
      { id: "placeName", message: "يرجى إدخال اسم المكان" },
      { id: "mainImage", message: "يرجى اختيار الصورة الرئيسية" },
      { id: "placeDescription", message: "يرجى إدخال الوصف" },
      { id: "placeType", message: "يرجى اختيار التصنيف" },
      { id: "placeFeatures", message: "يرجى إدخال المميزات" },
      { id: "placeActivities", message: "يرجى إدخال الأنشطة" },
      { id: "bestLandmarks", message: "يرجى إدخال أفضل المعالم" },
      { id: "gallery1", message: "يرجى اختيار أول صورة للمعرض" }
    ];

    fields.forEach(field => {
      const input = document.getElementById(field.id);
      const error = input.parentElement.querySelector(".error-message");

      let empty = false;

      if (input.type === "file") {
        empty = input.files.length === 0;
      } else {
        empty = input.value.trim() === "";
      }

      if (empty) {
        error.textContent = field.message;
        isValid = false;
      } else {
        error.textContent = "";
      }
    });

    if (isValid) {
      alert("تمت إضافة المكان بنجاح ✅");
      window.location.href = "dashboard.html";
    }
  });
});