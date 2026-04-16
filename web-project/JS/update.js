document.addEventListener("DOMContentLoaded", function () {
  const citySelector = document.getElementById("citySelector");
  const placeName = document.getElementById("placeName");
  const placeType = document.getElementById("placeType");
  const placeDescription = document.getElementById("placeDescription");
  const placeFeatures = document.getElementById("placeFeatures");
  const placeActivities = document.getElementById("placeActivities");
  const bestLandmarks = document.getElementById("bestLandmarks");
  const currentPlaceName = document.getElementById("currentPlaceName");
  const updateForm = document.getElementById("updateForm");

  const placesData = {
    "العلا": {
      type: "غربية",
      description: "واحة تاريخية تضم آثاراً نبطية قديمة مثل مدائن صالح المسجلة ضمن التراث العالمي.",
      features: "آثار، طبيعة، تراث",
      activities: "استكشاف، تصوير، زيارات ثقافية",
      landmarks: "الحِجر، جبل الفيل، البلدة القديمة"
    },
    "مكة": {
      type: "غربية",
      description: "أقدس مدينة في الإسلام وفيها الكعبة المشرفة التي يتجه إليها المسلمون في صلاتهم.",
      features: "دينية، روحانية، تاريخية",
      activities: "عمرة، زيارة معالم، تأمل",
      landmarks: "المسجد الحرام، جبل النور، غار حراء"
    },
    "الرياض": {
      type: "وسطى",
      description: "عاصمة المملكة وأكبر مدنها وتضم مراكز الحكم والاقتصاد وتُعد القلب الإداري للبلاد.",
      features: "عاصمة، حديثة، اقتصادية",
      activities: "تسوق، زيارات حضرية، فعاليات",
      landmarks: "برج المملكة، الدرعية، المتحف الوطني"
    },
    "تبوك": {
      type: "شمالية",
      description: "مدينة تاريخية في شمال المملكة وتحيط بها مواقع طبيعية بارزة.",
      features: "تاريخ، طبيعة، شمال",
      activities: "رحلات، تصوير، استكشاف",
      landmarks: "قلعة تبوك، وادي الديسة، المواقع الجبلية"
    },
    "أبها": {
      type: "جنوبية",
      description: "مدينة جبلية تشتهر بالأجواء المعتدلة والطبيعة الخضراء.",
      features: "جبال، طبيعة، مناخ معتدل",
      activities: "تنزه، تصوير، رحلات",
      landmarks: "السودة، قرية المفتاحة، جبل أخضر"
    },
    "الخبر": {
      type: "شرقية",
      description: "واجهة بحرية حديثة ومرافق حضرية مميزة على الخليج العربي.",
      features: "بحر، حضرية، حديثة",
      activities: "تنزه، مطاعم، تسوق",
      landmarks: "كورنيش الخبر، الواجهة البحرية، جسر الملك فهد"
    },
    "الدرعية": {
      type: "وسطى",
      description: "مهد الدولة السعودية الأولى ووجهة تراثية بارزة.",
      features: "تراث، تاريخ، ثقافة",
      activities: "جولات تراثية، تصوير، استكشاف",
      landmarks: "حي الطريف، البجيري، المعالم التاريخية"
    },
    "جدة": {
      type: "غربية",
      description: "مدينة ساحلية على البحر الأحمر وتُعرف بكونها البوابة الرئيسية للحجاج.",
      features: "بحر، تاريخ، تجارة",
      activities: "تنزه، تسوق، مطاعم",
      landmarks: "جدة التاريخية، الكورنيش، نافورة الملك فهد"
    },
    "الأحساء": {
      type: "شرقية",
      description: "واحة تاريخية مشهورة بالنخيل والآثار الثقافية.",
      features: "نخيل، واحات، تراث",
      activities: "استكشاف، تصوير، زيارات ثقافية",
      landmarks: "قصر إبراهيم، جبل القارة، الواحة"
    },
    "الرس": {
      type: "وسطى",
      description: "مدينة تاريخية في القصيم تتميز بساحاتها المحلية وتراثها.",
      features: "تراث، أسواق، طابع محلي",
      activities: "تنزه، تصوير، جولات",
      landmarks: "الأسواق الشعبية، المعالم التاريخية، الساحات"
    },
    "المدينة": {
      type: "غربية",
      description: "مدينة مقدسة لها مكانة دينية عظيمة وتاريخ إسلامي عريق.",
      features: "دينية، تاريخية، هادئة",
      activities: "زيارة، تأمل، جولات ثقافية",
      landmarks: "المسجد النبوي، قباء، جبل أحد"
    },
    "الخرج": {
      type: "وسطى",
      description: "مدينة معروفة بواحاتها الزراعية وتنوعها الطبيعي.",
      features: "زراعة، واحات، طبيعة",
      activities: "تنزه، تصوير، زيارات",
      landmarks: "العيون، المزارع، المواقع الطبيعية"
    },
    "الدمام": {
      type: "شرقية",
      description: "عاصمة المنطقة الشرقية ومركز رئيسي للصناعة والنشاط التجاري.",
      features: "اقتصاد، صناعة، بحر",
      activities: "تنزه، تسوق، أعمال",
      landmarks: "الكورنيش، جزيرة المرجان، الواجهة البحرية"
    },
    "عنيزة": {
      type: "وسطى",
      description: "مدينة تراثية في القصيم معروفة بأسواقها وأجوائها المحلية.",
      features: "تراث، أسواق، زراعة",
      activities: "تنزه، تسوق، تصوير",
      landmarks: "السوق الشعبي، المتنزهات، المعالم التراثية"
    },
    "بريدة": {
      type: "وسطى",
      description: "عاصمة القصيم ومشهورة بسوق التمور والأنشطة الثقافية.",
      features: "تمور، تجارة، فعاليات",
      activities: "تسوق، تنزه، زيارات",
      landmarks: "سوق التمور، المنتزهات، الفعاليات"
    },
    "جازان": {
      type: "جنوبية",
      description: "منطقة ساحلية جنوبية تتميز بالطبيعة والجزر والتنوع البيئي.",
      features: "ساحل، جزر، تنوع طبيعي",
      activities: "رحلات، تصوير، استكشاف",
      landmarks: "فرسان، الواجهة البحرية، الجبال"
    },
    "الباحة": {
      type: "جنوبية",
      description: "منطقة جبلية ساحرة تشتهر بالغابات والقرى التراثية والأجواء المعتدلة.",
      features: "جبال، غابات، قرى تراثية",
      activities: "تنزه، رحلات، تصوير",
      landmarks: "ذي عين، الغابات، القرى القديمة"
    },
    "الطائف": {
      type: "غربية",
      description: "مدينة جبلية مشهورة بمناخها المعتدل وإنتاجها للورد الطائفي.",
      features: "ورد، جبال، أجواء معتدلة",
      activities: "تنزه، رحلات، زيارة مزارع",
      landmarks: "الهدا، الشفا، مزارع الورد"
    },
    "حائل": {
      type: "شمالية",
      description: "منطقة تاريخية تتميز بالجبال والآثار والطبيعة الصحراوية.",
      features: "جبال، آثار، صحراء",
      activities: "رحلات، تصوير، استكشاف",
      landmarks: "جبل السمراء، قلعة عيرف، النقوش الصخرية"
    },
    "نيوم": {
      type: "شمالية",
      description: "مشروع مستقبلي ضخم يجمع بين التقنية والطبيعة والسياحة.",
      features: "ابتكار، تقنية، طبيعة",
      activities: "استكشاف، تصوير، متابعة المشاريع",
      landmarks: "السواحل، المناطق الجبلية، المشاريع التطويرية"
    }
  };

  function fillPlaceData(city) {
    const data = placesData[city];
    if (!data) return;

    placeName.value = city;
    placeType.value = data.type;
    placeDescription.value = data.description;
    placeFeatures.value = data.features;
    placeActivities.value = data.activities;
    bestLandmarks.value = data.landmarks;

    if (currentPlaceName) {
      currentPlaceName.textContent = city;
    }
  }

  if (citySelector) {
    citySelector.addEventListener("change", function () {
      fillPlaceData(this.value);
    });
  }

  const params = new URLSearchParams(window.location.search);
  const cityFromUrl = params.get("city");

  if (cityFromUrl && placesData[cityFromUrl] && citySelector) {
    citySelector.value = cityFromUrl;
    fillPlaceData(cityFromUrl);
  }

  document.querySelectorAll("input[placeholder], textarea[placeholder]").forEach(field => {
    const originalPlaceholder = field.placeholder;

    field.addEventListener("focus", () => {
      field.placeholder = "";
    });

    field.addEventListener("blur", () => {
      if (field.value === "") {
        field.placeholder = originalPlaceholder;
      }
    });
  });

  if (updateForm) {
    updateForm.addEventListener("submit", function (e) {
      e.preventDefault();

      let isValid = true;

      const fields = [
        { id: "citySelector", message: "يرجى اختيار المدينة" },
        { id: "placeName", message: "يرجى إدخال اسم المكان" },
        { id: "placeType", message: "يرجى اختيار التصنيف" },
        { id: "placeDescription", message: "يرجى إدخال الوصف" },
        { id: "placeFeatures", message: "يرجى إدخال المميزات" },
        { id: "placeActivities", message: "يرجى إدخال الأنشطة" },
        { id: "bestLandmarks", message: "يرجى إدخال أفضل المعالم زيارة" }
      ];

      fields.forEach(field => {
        const input = document.getElementById(field.id);
        const formGroup = input.closest(".form-group");
        const errorBox = formGroup ? formGroup.querySelector(".error-message") : null;

        if ((input.value || "").trim() === "") {
          if (errorBox) errorBox.textContent = field.message;
          isValid = false;
        } else {
          if (errorBox) errorBox.textContent = "";
        }
      });

      if (isValid) {
        alert("تم حفظ التعديلات بنجاح ✅");
      }
    });
  }
});