document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("addForm");

    if (!form) return;

    form.addEventListener("submit", function(event) {

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

        fields.forEach(function(field) {

            const input = document.getElementById(field.id);
            if (!input) return;

            const error = input.parentElement.querySelector(".error-message");

            let empty = input.type === "file" ?
                input.files.length === 0 :
                input.value.trim() === "";

            if (empty) {
                if (error) error.textContent = field.message;
                isValid = false;
            } else {
                if (error) error.textContent = "";
            }

        });

        if (!isValid) event.preventDefault();

    });

});
