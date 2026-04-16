document.addEventListener("DOMContentLoaded", function () {
  const mainImage = document.getElementById("mainImage");
  const thumbs = document.querySelectorAll(".thumb");
  const placeTitle = document.getElementById("placeTitle");
  const placeDescription = document.getElementById("placeDescription");
  const placeLocation = document.getElementById("placeLocation");
  const placeSeason = document.getElementById("placeSeason");
  const placeActivities = document.getElementById("placeActivities");
  const landmarksList = document.getElementById("landmarksList");

  const placesData = {
    "الرياض": {
      title: "الرياض",
      description: "الرياض هي عاصمة المملكة العربية السعودية وتجمع بين التاريخ العريق والتطور الحضاري والمعالم الثقافية الحديثة.",
      location: "وسط المملكة",
      season: "الشتاء",
      activities: "تسوق، فعاليات، زيارات",
      landmarks: ["برج المملكة", "الدرعية", "المتحف الوطني"]
    },

    "مكة": {
      title: "مكة المكرمة",
      description: "أقدس مدينة في الإسلام ويقصدها المسلمون من جميع أنحاء العالم لأداء الحج والعمرة.",
      location: "غرب المملكة",
      season: "الشتاء",
      activities: "العمرة، الزيارة، التأمل",
      landmarks: ["المسجد الحرام", "جبل النور", "غار حراء"]
    },

    "العلا": {
      title: "العلا",
      description: "واحة تاريخية تضم آثارًا نبطية قديمة وتعد من أبرز الوجهات التراثية في المملكة.",
      location: "غرب المملكة",
      season: "الشتاء والربيع",
      activities: "استكشاف، تصوير، زيارات ثقافية",
      landmarks: ["مدائن صالح", "جبل الفيل", "البلدة القديمة"]
    },

    "الخبر": {
      title: "الخبر",
      description: "مدينة ساحلية حديثة على الخليج العربي وتتميز بواجهاتها البحرية والمرافق الحضرية.",
      location: "المنطقة الشرقية",
      season: "الشتاء",
      activities: "تنزه، مطاعم، تسوق",
      landmarks: ["كورنيش الخبر", "الواجهة البحرية", "جسر الملك فهد"]
    },

    "أبها": {
      title: "أبها",
      description: "مدينة جبلية تشتهر بالأجواء المعتدلة والطبيعة الخضراء والمعالم السياحية الجميلة.",
      location: "جنوب المملكة",
      season: "الصيف",
      activities: "تنزه، رحلات، تصوير",
      landmarks: ["السودة", "قرية المفتاحة", "الجبل الأخضر"]
    },

    "تبوك": {
      title: "تبوك",
      description: "مدينة تاريخية في شمال المملكة وتحيط بها مواقع طبيعية مميزة ومعالم قديمة.",
      location: "شمال المملكة",
      season: "الشتاء",
      activities: "رحلات، تصوير، استكشاف",
      landmarks: ["قلعة تبوك", "وادي الديسة", "المواقع الجبلية"]
    },

    "الدرعية": {
      title: "الدرعية",
      description: "مهد الدولة السعودية الأولى ووجهة تراثية بارزة تعكس عمق التاريخ السعودي.",
      location: "وسط المملكة",
      season: "الشتاء",
      activities: "جولات تراثية، تصوير، استكشاف",
      landmarks: ["حي الطريف", "البجيري", "المعالم التاريخية"]
    },

    "جدة": {
      title: "جدة",
      description: "مدينة ساحلية على البحر الأحمر وتُعرف بأنها البوابة الرئيسية للحجاج ومركز تجاري مهم.",
      location: "غرب المملكة",
      season: "الشتاء",
      activities: "تنزه، تسوق، مطاعم",
      landmarks: ["جدة التاريخية", "الكورنيش", "نافورة الملك فهد"]
    },

    "الأحساء": {
      title: "الأحساء",
      description: "واحة تاريخية مشهورة بالنخيل والتراث الثقافي وتعد من أبرز الوجهات في المنطقة الشرقية.",
      location: "المنطقة الشرقية",
      season: "الشتاء",
      activities: "استكشاف، تصوير، زيارات ثقافية",
      landmarks: ["قصر إبراهيم", "جبل القارة", "الواحة"]
    },

    "الرس": {
      title: "الرس",
      description: "مدينة تاريخية في القصيم تتميز بطابعها المحلي وتراثها الشعبي.",
      location: "وسط المملكة",
      season: "الربيع",
      activities: "تنزه، تصوير، جولات",
      landmarks: ["الأسواق الشعبية", "المعالم التاريخية", "الساحات"]
    },

    "المدينة": {
      title: "المدينة المنورة",
      description: "مدينة ذات مكانة دينية عظيمة وتاريخ إسلامي عريق وتعد من أهم المدن في العالم الإسلامي.",
      location: "غرب المملكة",
      season: "الشتاء",
      activities: "زيارة، تأمل، جولات ثقافية",
      landmarks: ["المسجد النبوي", "قباء", "جبل أحد"]
    },

    "الخرج": {
      title: "الخرج",
      description: "مدينة معروفة بواحاتها ومزارعها وتنوعها الطبيعي، وتعد من المدن الزراعية المهمة.",
      location: "وسط المملكة",
      season: "الربيع",
      activities: "تنزه، تصوير، زيارات",
      landmarks: ["العيون", "المزارع", "المواقع الطبيعية"]
    },

    "الدمام": {
      title: "الدمام",
      description: "عاصمة المنطقة الشرقية ومركز رئيسي لصناعة النفط والتجارة والحياة الحضرية الحديثة.",
      location: "المنطقة الشرقية",
      season: "الشتاء",
      activities: "تنزه، تسوق، أعمال",
      landmarks: ["الكورنيش", "جزيرة المرجان", "الواجهة البحرية"]
    },

    "عنيزة": {
      title: "عنيزة",
      description: "مدينة أنيقة في القصيم معروفة بتراثها وأسواقها الجميلة وأجوائها المحلية.",
      location: "وسط المملكة",
      season: "الربيع",
      activities: "تنزه، تسوق، تصوير",
      landmarks: ["السوق الشعبي", "المتنزهات", "المعالم التراثية"]
    },

    "بريدة": {
      title: "بريدة",
      description: "حاضرة القصيم ومشهورة بأسواق التمور والأنشطة الثقافية وتعد من المدن الحيوية في المنطقة.",
      location: "وسط المملكة",
      season: "الربيع",
      activities: "تسوق، تنزه، زيارات",
      landmarks: ["سوق التمور", "المنتزهات", "الفعاليات"]
    },

    "جازان": {
      title: "جازان",
      description: "منطقة ساحلية جنوبية تتميز بالطبيعة والجزر والتنوع البيئي وتعد وجهة جميلة جنوب المملكة.",
      location: "جنوب المملكة",
      season: "الشتاء",
      activities: "رحلات، تصوير، استكشاف",
      landmarks: ["فرسان", "الواجهة البحرية", "الجبال"]
    },

    "الباحة": {
      title: "الباحة",
      description: "منطقة جبلية ساحرة تتميز بالغابات والقرى التراثية والأجواء المعتدلة.",
      location: "جنوب المملكة",
      season: "الصيف",
      activities: "تنزه، رحلات، تصوير",
      landmarks: ["ذي عين", "الغابات", "القرى القديمة"]
    },

    "الطائف": {
      title: "الطائف",
      description: "مدينة جبلية مرتفعة تُعرف بمناخها المعتدل وإنتاجها للورد الطائفي.",
      location: "غرب المملكة",
      season: "الصيف",
      activities: "تنزه، رحلات، زيارة مزارع",
      landmarks: ["الهدا", "الشفا", "مزارع الورد"]
    },

    "حائل": {
      title: "حائل",
      description: "منطقة تاريخية تتميز بالجبال والآثار والطبيعة الصحراوية وتعد من أبرز مناطق الشمال.",
      location: "شمال المملكة",
      season: "الشتاء",
      activities: "رحلات، تصوير، استكشاف",
      landmarks: ["جبل السمراء", "قلعة عيرف", "النقوش الصخرية"]
    },

    "نيوم": {
      title: "نيوم",
      description: "مشروع مستقبلي ضخم يجمع بين التقنية والطبيعة والسياحة ويعكس رؤية المملكة المستقبلية.",
      location: "شمال غرب المملكة",
      season: "الشتاء",
      activities: "استكشاف، تصوير، متابعة المشاريع",
      landmarks: ["السواحل", "المناطق الجبلية", "المشاريع التطويرية"]
    }
  };

  const params = new URLSearchParams(window.location.search);
  const city = params.get("city");
  const folder = params.get("folder");

  if (city && placesData[city]) {
    const place = placesData[city];

    if (placeTitle) placeTitle.textContent = place.title;
    if (placeDescription) placeDescription.textContent = place.description;
    if (placeLocation) placeLocation.textContent = place.location;
    if (placeSeason) placeSeason.textContent = place.season;
    if (placeActivities) placeActivities.textContent = place.activities;

    if (landmarksList) {
      landmarksList.innerHTML = "";
      place.landmarks.forEach(function (landmark) {
        const li = document.createElement("li");
        li.textContent = landmark;
        landmarksList.appendChild(li);
      });
    }
  }

  if (folder && mainImage && thumbs.length > 0) {
    const imagePaths = [
      `../images/${folder}/1.jpg`,
      `../images/${folder}/2.jpg`,
      `../images/${folder}/3.jpg`
    ];

    mainImage.src = imagePaths[0];
    mainImage.alt = "الصورة الرئيسية";

    thumbs.forEach(function (thumb, index) {
      thumb.src = imagePaths[index];
      thumb.alt = `صورة ${index + 1}`;
    });
  }

  thumbs.forEach(function (thumb) {
    thumb.addEventListener("click", function () {
      if (mainImage) {
        mainImage.src = thumb.src;
      }

      thumbs.forEach(function (t) {
        t.classList.remove("active-thumb");
      });

      thumb.classList.add("active-thumb");
    });
  });
});