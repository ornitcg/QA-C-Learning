const lessons = [
  {
    id: 1, stage: "cpp", title: "התוכנית הראשונה שלך", time: "8 דק׳",
    body: `<p>תוכנית מחשב היא פשוט <strong>רשימת הוראות</strong> שהמחשב מבצע. ב־C++ כל תוכנית מתחילה בדרך כלל בפונקציה שנקראת <code>main</code>.</p>
      <div class="code-sample"><span class="code-blue">#include</span> &lt;iostream&gt;<br><span class="code-blue">int</span> <span class="code-yellow">main</span>() {<br>&nbsp;&nbsp;std::cout &lt;&lt; <span class="code-green">"היי, עולם!"</span>;<br>&nbsp;&nbsp;<span class="code-purple">return</span> 0;<br>}</div>
      <p><code>cout</code> מציג טקסט, הסימן <code>;</code> מסיים הוראה, ו־<code>return 0</code> אומר שהתוכנית הסתיימה בהצלחה.</p>
      <div class="tip-box">טיפ קטן: לא צריך לזכור הכול עכשיו. קודם מזהות את החלקים, ובהמשך הם יתחברו.</div>`
  },
  {
    id: 2, stage: "cpp", title: "משתנים: לשמור מידע בקוד", time: "10 דק׳",
    body: `<p><strong>משתנה</strong> הוא מקום עם שם שבו התוכנית שומרת מידע. למשל, גיל או מספר ניסיונות.</p><div class="code-sample"><span class="code-blue">int</span> attempts = 3;<br><span class="code-blue">double</span> price = 19.5;<br><span class="code-blue">bool</span> isReady = <span class="code-purple">true</span>;</div><p><code>int</code> מתאים למספר שלם, <code>double</code> למספר עשרוני, ו־<code>bool</code> לערך כן/לא.</p><div class="tip-box">בבדיקות נשתמש במשתנים כדי לייצג נתונים שנרצה לבדוק.</div>`
  },
  {
    id: 3, stage: "qa", title: "מה זה בכלל QA?", time: "7 דק׳",
    body: `<p>QA הם ראשי תיבות של <strong>Quality Assurance</strong> — אבטחת איכות. המטרה היא לבדוק שהתוכנה מתאימה לצורך, ולגלות בעיות לפני שהן מגיעות למשתמשות.</p><p>בודקת QA חושבת כמו חוקרת: מה אמור לקרות? מה אם נזין משהו לא צפוי? האם התוצאה הגיונית?</p><div class="tip-box">QA לא רק "מחפשת באגים" — היא עוזרת לצוות לבנות מוצר טוב ואמין יותר.</div>`
  },
  {
    id: 4, stage: "qa", title: "איך כותבים תרחיש בדיקה?", time: "9 דק׳",
    body: `<p>תרחיש בדיקה מתאר מצב שאותו רוצים לבדוק, צעד אחרי צעד. דוגמה: האם אפשר להתחבר עם פרטים נכונים?</p><p><strong>נתונים:</strong> שם משתמש וסיסמה תקינים<br><strong>פעולה:</strong> לוחצים על "התחברות"<br><strong>תוצאה צפויה:</strong> המשתמשת מגיעה לעמוד הבית</p><div class="tip-box">תוצאה צפויה ברורה עוזרת לנו לדעת אם הבדיקה עברה או נכשלה.</div>`
  },
  {
    id: 5, stage: "auto", title: "בדיקה ידנית מול אוטומטית", time: "6 דק׳",
    body: `<p>בבדיקה <strong>ידנית</strong> אדם מבצע את הצעדים בעצמו. בבדיקה <strong>אוטומטית</strong> קוד מבצע אותם — שוב ושוב, במהירות ובעקביות.</p><p>אוטומציה מעולה למשימות שחוזרות על עצמן. היא לא מחליפה שיקול דעת אנושי, אלא מפנה זמן לחשיבה ובדיקה יצירתית.</p><div class="tip-box">לפני שכותבים אוטומציה, חשוב להבין מה בדיוק צריך לבדוק.</div>`
  },
  {
    id: 6, stage: "auto", title: "הבדיקה האוטומטית הראשונה", time: "12 דק׳",
    body: `<p>בדיקה אוטומטית משווה בין <strong>תוצאה בפועל</strong> לבין <strong>תוצאה צפויה</strong>. אם הן תואמות — הבדיקה עוברת.</p><div class="code-sample"><span class="code-blue">int</span> sum(<span class="code-blue">int</span> a, <span class="code-blue">int</span> b) {<br>&nbsp;&nbsp;<span class="code-purple">return</span> a + b;<br>}<br><span class="code-blue">assert</span>(sum(2, 3) == 5);</div><p>כאן אנחנו בודקות שסכום 2 ו־3 הוא 5. אם לא — הבדיקה תסמן שיש בעיה.</p><div class="tip-box">נלמד להוסיף עוד בדיקות ולטפל גם במקרי קצה בהמשך.</div>`
  },
  {
    id: 7, stage: "interview", title: "איך מספרים על באג?", time: "8 דק׳",
    body: `<p>דיווח באג טוב עוזר למפתחת להבין ולשחזר את הבעיה. כדאי לכלול:</p><p><strong>כותרת ברורה</strong> · <strong>צעדים לשחזור</strong> · <strong>מה ציפינו שיקרה</strong> · <strong>מה קרה בפועל</strong></p><div class="tip-box">תיאור מדויק וענייני הופך אותך לשותפה מצוינת בצוות.</div>`
  },
  {
    id: 8, stage: "interview", title: "מתכוננות לראיון הראשון", time: "10 דק׳",
    body: `<p>ראיון הוא הזדמנות להסביר איך את חושבת ולומדת. אפשר לספר על הבדיקות שכתבת, איך חיפשת מקרה קצה, ומה עשית כשמשהו לא עבד.</p><p>גם אם אין לך תשובה מיד, חשבי בקול ושאלי שאלות הבהרה. <strong>סקרנות ודרך חשיבה הן חלק חשוב מהתפקיד.</strong></p><div class="tip-box">לא צריך להיות מושלמת. צריך להמשיך ללמוד ולדעת להסביר את הדרך.</div>`
  }
];

const stages = [
  { id: "cpp", number: "01", name: "מתחילות עם C++", subtitle: "הבסיס בקצב נוח", className: "stage-purple", tag: "tag-purple", lessons: [1, 2] },
  { id: "qa", number: "02", name: "מבינות את עולם ה־QA", subtitle: "איך חושבות כמו בודקות", className: "stage-orange", tag: "tag-orange", lessons: [3, 4] },
  { id: "auto", number: "03", name: "עושות את זה אוטומטי", subtitle: "מחברות בדיקות ל־C++", className: "stage-teal", tag: "tag-teal", lessons: [5, 6] },
  { id: "interview", number: "04", name: "מוכנות להזדמנות הבאה", subtitle: "באגים, ראיונות ומה שביניהם", className: "stage-pink", tag: "tag-pink", lessons: [7, 8] }
];

const progressKey = "qa-journey-completed-lessons";
let completedLessons = loadProgress();
let activeLessonId = null;

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(progressKey) || "[]");
    return Array.isArray(saved) ? saved.filter(id => lessons.some(lesson => lesson.id === id)) : [];
  } catch (error) {
    console.warn("Could not read saved lesson progress.", error);
    return [];
  }
}

function saveProgress() {
  try {
    localStorage.setItem(progressKey, JSON.stringify(completedLessons));
  } catch (error) {
    console.warn("Could not save lesson progress.", error);
  }
}

function renderRoadmap(filter = "") {
  const list = document.querySelector("#roadmap-list");
  const normalizedFilter = filter.trim().toLocaleLowerCase("he");
  let visibleLessonCount = 0;
  list.innerHTML = stages.map(stage => {
    const stageLessons = stage.lessons.map(id => lessons.find(lesson => lesson.id === id))
      .filter(lesson => !normalizedFilter || lesson.title.toLocaleLowerCase("he").includes(normalizedFilter) ||
        stage.name.toLocaleLowerCase("he").includes(normalizedFilter) || lesson.body.toLocaleLowerCase("he").includes(normalizedFilter));
    if (!stageLessons.length) return "";
    visibleLessonCount += stageLessons.length;
    const stageCompleted = stage.lessons.filter(id => completedLessons.includes(id)).length;
    return `<article class="stage-card ${stage.className}">
      <div class="stage-head"><span class="stage-number">${stage.number}</span><div class="stage-title-wrap"><h3>${stage.name}</h3><p>${stage.subtitle}</p></div><span class="stage-progress">${stageCompleted}/${stage.lessons.length}</span></div>
      <div class="stage-lessons">${stageLessons.map(lesson => `<div class="lesson-row ${completedLessons.includes(lesson.id) ? "completed" : ""}" data-open-lesson="${lesson.id}" tabindex="0" role="button" aria-label="פתיחת השיעור ${lesson.title}">
        <span class="lesson-check" aria-hidden="true">${completedLessons.includes(lesson.id) ? "✓" : ""}</span><span class="lesson-name">${lesson.title}</span><span class="lesson-length">${lesson.time}</span>
      </div>`).join("")}</div></article>`;
  }).join("");
  document.querySelector("#empty-search").hidden = visibleLessonCount !== 0;
  updateProgress();
}

function updateProgress() {
  const count = completedLessons.length;
  const percent = Math.round(count / lessons.length * 100);
  document.querySelector("#completed-count").textContent = count;
  document.querySelector("#progress-value").textContent = `${percent}%`;
  const ring = document.querySelector("#progress-ring");
  ring.style.background = `conic-gradient(#9175e7 ${percent * 3.6}deg, #eeeaf9 0deg)`;
  ring.querySelector("span").textContent = `${percent}%`;
  ring.setAttribute("aria-label", `${percent} אחוזים הושלמו`);
}

function openLesson(id) {
  const lesson = lessons.find(item => item.id === id);
  if (!lesson) return;
  activeLessonId = id;
  const stage = stages.find(item => item.id === lesson.stage);
  const tag = document.querySelector("#dialog-tag");
  tag.className = `tag ${stage.tag}`;
  tag.textContent = stage.name;
  document.querySelector("#dialog-time").textContent = `◷ ${lesson.time}`;
  document.querySelector("#dialog-title").textContent = lesson.title;
  document.querySelector("#dialog-body").innerHTML = lesson.body;
  const completeButton = document.querySelector("#complete-lesson");
  completeButton.innerHTML = completedLessons.includes(id) ? "השיעור הושלם ✓" : "סיימתי את השיעור <span>✓</span>";
  completeButton.disabled = completedLessons.includes(id);
  document.querySelector("#lesson-dialog").showModal();
}

document.querySelector("#roadmap-list").addEventListener("click", event => {
  const row = event.target.closest("[data-open-lesson]");
  if (row) openLesson(Number(row.dataset.openLesson));
});

document.querySelector("#roadmap-list").addEventListener("keydown", event => {
  const row = event.target.closest("[data-open-lesson]");
  if (row && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    openLesson(Number(row.dataset.openLesson));
  }
});

document.querySelectorAll("[data-open-lesson]").forEach(button => {
  button.addEventListener("click", () => openLesson(Number(button.dataset.openLesson)));
});

document.querySelectorAll("[data-close-dialog]").forEach(button => {
  button.addEventListener("click", () => document.querySelector("#lesson-dialog").close());
});

document.querySelector("#complete-lesson").addEventListener("click", () => {
  if (activeLessonId !== null && !completedLessons.includes(activeLessonId)) {
    completedLessons.push(activeLessonId);
    saveProgress();
    renderRoadmap(document.querySelector("#lesson-search").value);
    document.querySelector("#complete-lesson").innerHTML = "השיעור הושלם ✓";
    document.querySelector("#complete-lesson").disabled = true;
  }
});

document.querySelector("#lesson-search").addEventListener("input", event => renderRoadmap(event.target.value));

document.querySelectorAll(".quiz-option").forEach(option => {
  option.addEventListener("click", () => {
    const feedback = document.querySelector("#quiz-feedback");
    document.querySelectorAll(".quiz-option").forEach(item => item.classList.remove("selected-correct", "selected-wrong"));
    if (option.dataset.answer === "correct") {
      option.classList.add("selected-correct");
      feedback.className = "quiz-feedback";
      feedback.textContent = "בדיוק! QA עוזרת לוודא שהתוכנה עובדת כמו שצריך. כל הכבוד ✨";
    } else {
      option.classList.add("selected-wrong");
      feedback.className = "quiz-feedback incorrect";
      feedback.textContent = "לא בדיוק, אבל זו הזדמנות ללמוד: QA עוזרת לוודא שהתוכנה איכותית ועובדת היטב.";
    }
  });
});

document.querySelectorAll(".side-nav .nav-link").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".side-nav .nav-link").forEach(item => item.classList.remove("active"));
    link.classList.add("active");
  });
});

renderRoadmap();
