const translations = {
  en: {
    
schoolName: "GBLSS Mitho Khan Mirjat",
schoolDistrict: "District Tando Allahyar",
projectPresented: "Presents",
projectSubtitle: "An AI-assisted science learning project",
studentDevelopers: "Student Developers",
class8: "Class 8",
class7: "Class 7",
mentorLabel: "Under the guidance of",
mentorRole: "Teacher / Project Mentor",
    appName:"Sindh Science Explorer", tagline:"Discover • Practise • Improve",
    offlineBadge:"OFFLINE-READY LEARNING", welcomeTitle:"Small steps. Strong science.",
    welcomeText:"Practise science, discover your weak topics, and build confidence one quiz at a time.",
    chooseClass:"Choose your class", chooseClassSub:"Start a short science quiz", classLabel:"Class",
    yourProgress:"Your learning", progressSub:"Saved on this device", quizzesTaken:"Quizzes taken",
    overallAccuracy:"Overall accuracy", revisionButton:"My revision plan",
    installHint:"Tip: Add this app to your Home screen for an app-like experience.",
    backHome:"Back to home", quizComplete:"QUIZ COMPLETE", accuracy:"accuracy",
    reviewAnswers:"Review your answers", nextSteps:"Your next steps", homeButton:"Return home",
    personalPlan:"PERSONAL LEARNING PLAN", revisionTitle:"Your revision plan",
    revisionIntro:"Your plan uses your quiz answers to suggest what to practise next.",
    howItWorks:"How it works", ruleExplanation:"This version uses transparent rules: it counts incorrect answers by topic and recommends topics with the most mistakes. It is not a trained AI model.",
    resetProgress:"Reset saved progress", readyOffline:"Offline-ready", checkAnswer:"Check answer",
    nextQuestion:"Next question", finishQuiz:"See my results", correct:"Correct! Nice work.",
    incorrect:"Not quite. Read the explanation below.", chooseAnswer:"Choose an answer first.",
    great:"Great effort!", keepGoing:"Keep going—you are learning.", excellent:"Excellent work!",
    resultSummary:(score,total)=>`You answered ${score} out of ${total} questions correctly.`,
    className:n=>`Class ${n}`, questionOf:(n,total)=>`Question ${n} of ${total}`,
    correctAnswer:"Correct answer", yourAnswer:"Your answer", explanation:"Explanation",
    reviseTopic:"Revise this topic", mistakes:(n)=>`${n} mistake${n===1?"":"s"}`,
    noDataTitle:"Your plan is ready to grow", noDataText:"Complete a quiz first. Your topic strengths and revision suggestions will appear here.",
    noWeakTitle:"No weak topics found yet", noWeakText:"Try another quiz to build a more complete learning picture.",
    reviseTip:"Revision tip", reviseText:"Review the explanation, then try another quiz on this topic.",
    resetConfirm:"Reset all saved quiz progress on this device?", resetDone:"Your saved progress has been reset.",
    offlineStatus:"Offline mode available", onlineStatus:"Online • offline mode available",
    classTopic:"Topic", scoreLabel:"Score", basedOn:"Based on your saved quiz answers",
    correctCount:(n)=>`${n} correct`, noAnswer:"Not answered"
  },
  sd: {
    appName:"سنڌ سائنس ايڪسپلورر", tagline:"دريافت • مشق • بهتري",
    offlineBadge:"بغير انٽرنيٽ جي سکيا", welcomeTitle:"ننڍا قدم، مضبوط سائنس.",
    welcomeText:"سائنس جي مشق ڪريو، ڪمزور موضوع سڃاڻو ۽ هر ڪوئز سان اعتماد وڌايو.",
    chooseClass:"پنهنجو ڪلاس چونڊيو", chooseClassSub:"سائنس جو مختصر ڪوئز شروع ڪريو", classLabel:"ڪلاس",
    yourProgress:"توهان جي سکيا", progressSub:"هن فون ۾ محفوظ", quizzesTaken:"ڪيل ڪوئز",
    overallAccuracy:"مجموعي درستگي", revisionButton:"منهنجو ورجاءُ منصوبو",
    installHint:"صلاح: هن ايپ کي فون جي Home Screen تي شامل ڪريو.",
    backHome:"واپس گهر", quizComplete:"ڪوئز مڪمل", accuracy:"درستگي",
    reviewAnswers:"پنهنجا جواب ڏسو", nextSteps:"اڳيان قدم", homeButton:"گهر واپس",
    personalPlan:"ذاتي سکيا جو منصوبو", revisionTitle:"توهان جو ورجاءُ منصوبو",
    revisionIntro:"توهان جي جوابن جي بنياد تي ايندڙ مشق لاءِ موضوع تجويز ڪيا وڃن ٿا.",
    howItWorks:"هي ڪيئن ڪم ڪري ٿو", ruleExplanation:"هي نسخو واضح قاعدا استعمال ڪري ٿو: هر موضوع ۾ غلط جواب ڳڻي، وڌيڪ غلطين وارن موضوعن جي ورجاءُ جي صلاح ڏئي ٿو. هي تربيت يافته AI ماڊل ناهي.",
    resetProgress:"محفوظ ٿيل نتيجا ختم ڪريو", readyOffline:"آف لائن لاءِ تيار", checkAnswer:"جواب چيڪ ڪريو",
    nextQuestion:"اڳيون سوال", finishQuiz:"نتيجا ڏسو", correct:"صحيح! تمام سٺو.",
    incorrect:"هي جواب صحيح ناهي. هيٺ وضاحت پڙهو.", chooseAnswer:"پهريان هڪ جواب چونڊيو.",
    great:"سٺي ڪوشش!", keepGoing:"مشق جاري رکو، توهان سکي رهيا آهيو.", excellent:"تمام بهترين!",
    resultSummary:(score,total)=>`${total} مان ${score} سوالن جا جواب صحيح هئا.`,
    className:n=>`ڪلاس ${n}`, questionOf:(n,total)=>`${total} مان سوال ${n}`,
    correctAnswer:"صحيح جواب", yourAnswer:"توهان جو جواب", explanation:"وضاحت",
    reviseTopic:"هن موضوع جو ورجاءُ ڪريو", mistakes:(n)=>`${n} غلطيون`,
    noDataTitle:"توهان جو منصوبو تيار ٿيندو", noDataText:"پهريان ڪوئز مڪمل ڪريو. پوءِ توهان جي موضوعن بابت صلاحون هتي نظر اينديون.",
    noWeakTitle:"في الحال ڪمزور موضوع نه مليو", noWeakText:"وڌيڪ ڪوئز ڪريو ته جيئن سکيا جي بهتر ڄاڻ ملي.",
    reviseTip:"ورجاءُ جي صلاح", reviseText:"وضاحت پڙهو، پوءِ هن موضوع جو ٻيو ڪوئز ڪريو.",
    resetConfirm:"ڇا هن فون مان سڀ محفوظ ٿيل نتيجا ختم ڪجن؟", resetDone:"محفوظ ٿيل نتيجا ختم ڪيا ويا.",
    offlineStatus:"آف لائن موڊ موجود", onlineStatus:"آن لائن • آف لائن موڊ موجود",
    classTopic:"موضوع", scoreLabel:"اسڪور", basedOn:"محفوظ ٿيل جوابن جي بنياد تي",
    correctCount:(n)=>`${n} صحيح`, noAnswer:"جواب نه ڏنو"
  }
};

const questions = [
  {id:"6-1",grade:6,topic:"Living things",topicSd:"جاندار شيون",q:"Which part of a plant mainly absorbs water from soil?",qSd:"ٻوٽي جو ڪهڙو حصو مٽيءَ مان پاڻي جذب ڪري ٿو؟",opts:["Flower","Root","Leaf","Fruit"],optsSd:["گل","پاڙ","پن","ميوو"],a:1,exp:"Roots absorb water and minerals from the soil.",expSd:"پاڙون مٽيءَ مان پاڻي ۽ معدنيات جذب ڪن ٿيون."},
  {id:"6-2",grade:6,topic:"Matter",topicSd:"مادو",q:"Which state of matter has a fixed shape and a fixed volume?",qSd:"مادي جي ڪهڙي حالت جي شڪل ۽ مقدار مقرر هوندا آهن؟",opts:["Gas","Liquid","Solid","Vapour"],optsSd:["گئس","مايع","ٺوس","ٻاڦ"],a:2,exp:"A solid keeps its shape and volume.",expSd:"ٺوس مادو پنهنجي شڪل ۽ مقدار برقرار رکي ٿو."},
  {id:"6-3",grade:6,topic:"Force and motion",topicSd:"قوت ۽ حرڪت",q:"Which force pulls objects toward Earth?",qSd:"ڪهڙي قوت شين کي زمين ڏانهن ڇڪي ٿي؟",opts:["Friction","Gravity","Magnetism","Sound"],optsSd:["رگڙ","ڪشش ثقل","مقناطيسيت","آواز"],a:1,exp:"Gravity attracts objects toward Earth's centre.",expSd:"ڪشش ثقل شين کي زمين جي مرڪز ڏانهن ڇڪي ٿي."},
  {id:"6-4",grade:6,topic:"Human body",topicSd:"انساني جسم",q:"Which organ pumps blood around the body?",qSd:"ڪهڙو عضوو سڄي جسم ۾ رت پمپ ڪري ٿو؟",opts:["Lungs","Stomach","Heart","Kidney"],optsSd:["ڦڦڙ","معدو","دل","بڪيون"],a:2,exp:"The heart pumps blood through blood vessels.",expSd:"دل رت جي نالين ذريعي رت پمپ ڪري ٿي."},
  {id:"6-5",grade:6,topic:"Environment",topicSd:"ماحول",q:"Which of these is a renewable source of energy?",qSd:"هيٺين مان ڪهڙو توانائي جو ٻيهر حاصل ٿيندڙ ذريعو آهي؟",opts:["Coal","Petrol","Sunlight","Natural gas"],optsSd:["ڪوئلو","پيٽرول","سج جي روشني","قدرتي گئس"],a:2,exp:"Sunlight is naturally replenished.",expSd:"سج جي روشني قدرتي طور ٻيهر ملندي رهي ٿي."},

  {id:"7-1",grade:7,topic:"Photosynthesis",topicSd:"ضيايي ترڪيب",q:"What gas do green plants take in during photosynthesis?",qSd:"ضيايي ترڪيب دوران ساوا ٻوٽا ڪهڙي گئس جذب ڪن ٿا؟",opts:["Oxygen","Carbon dioxide","Nitrogen","Hydrogen"],optsSd:["آڪسيجن","ڪاربان ڊاءِ آڪسائيڊ","نائٽروجن","هائيڊروجن"],a:1,exp:"Plants use carbon dioxide, water and light to make food.",expSd:"ٻوٽا خوراڪ ٺاهڻ لاءِ ڪاربان ڊاءِ آڪسائيڊ، پاڻي ۽ روشني استعمال ڪن ٿا."},
  {id:"7-2",grade:7,topic:"Heat",topicSd:"گرمي",q:"Heat usually flows naturally from a...",qSd:"گرمي عام طور قدرتي طور ڪٿان کان ڪٿي منتقل ٿئي ٿي؟",opts:["Cooler object to hotter object","Hotter object to cooler object","Small object to large object","Dark object to light object"],optsSd:["ٿڌي شيءِ کان گرم شيءِ ڏانهن","گرم شيءِ کان ٿڌي شيءِ ڏانهن","ننڍي شيءِ کان وڏي شيءِ ڏانهن","اونداهي شيءِ کان روشن شيءِ ڏانهن"],a:1,exp:"Heat transfers from higher temperature to lower temperature.",expSd:"گرمي وڌيڪ گرمي پد کان گهٽ گرمي پد ڏانهن منتقل ٿئي ٿي."},
  {id:"7-3",grade:7,topic:"Mixtures",topicSd:"آميزو",q:"Which method can separate sand from water?",qSd:"پاڻيءَ مان واري الڳ ڪرڻ لاءِ ڪهڙو طريقو استعمال ٿيندو؟",opts:["Filtration","Melting","Freezing only","Magnetising"],optsSd:["ڇاڻڻ","پگھلائڻ","صرف ڄمائڻ","مقناطيسي بڻائڻ"],a:0,exp:"A filter lets water pass while retaining sand.",expSd:"فلٽر پاڻي کي گذرڻ ڏئي ٿو ۽ واري کي روڪي ٿو."},
  {id:"7-4",grade:7,topic:"Electricity",topicSd:"بجلي",q:"What is needed for a simple bulb circuit to work?",qSd:"سادو بلب وارو سرڪٽ هلائڻ لاءِ ڇا ضروري آهي؟",opts:["An open circuit","A complete circuit","Only a wire","A broken battery"],optsSd:["کليل سرڪٽ","مڪمل سرڪٽ","صرف تار","خراب بيٽري"],a:1,exp:"Electric current needs a complete conducting path.",expSd:"بجليءَ جي وهڪري لاءِ مڪمل رستو ضروري آهي."},
  {id:"7-5",grade:7,topic:"Ecosystems",topicSd:"ماحولي نظام",q:"In a food chain, green plants are usually...",qSd:"کاڌي جي زنجير ۾ ساوا ٻوٽا عام طور ڇا هوندا آهن؟",opts:["Producers","Predators","Decomposers only","Non-living things"],optsSd:["پيدا ڪندڙ","شڪاري","صرف ڳارڻ وارا","غير جاندار شيون"],a:0,exp:"Plants make their own food, so they are producers.",expSd:"ٻوٽا پنهنجي خوراڪ پاڻ ٺاهين ٿا، تنهنڪري اهي پيدا ڪندڙ آهن."},

  {id:"8-1",grade:8,topic:"Cells",topicSd:"خليا",q:"Which structure controls many activities of a typical plant or animal cell?",qSd:"عام ٻوٽي يا جانور جي خليي جون ڪيتريون سرگرميون ڪهڙي بناوت ڪنٽرول ڪري ٿي؟",opts:["Cell wall only","Nucleus","Vacuole only","Cytoplasm only"],optsSd:["صرف خليي جي ڀت","مرڪزيو","صرف خال","صرف سائٽوپلازم"],a:1,exp:"The nucleus contains genetic material and helps control cell activities.",expSd:"مرڪزئي ۾ جينياتي مادو هوندو آهي ۽ اهو خليي جي سرگرمين کي ڪنٽرول ڪرڻ ۾ مدد ڪري ٿو."},
  {id:"8-2",grade:8,topic:"Chemical changes",topicSd:"ڪيميائي تبديليون",q:"Which is a common sign that a chemical reaction may have occurred?",qSd:"ڪهڙي ڳالهه ڪيميائي ردعمل ٿيڻ جي عام نشاني ٿي سگهي ٿي؟",opts:["A new substance forms","Only the object's position changes","A book is moved","A shadow changes shape"],optsSd:["نئون مادو ٺهي","صرف شيءِ جي جاءِ بدلي","ڪتاب کي منتقل ڪيو وڃي","پاڇي جي شڪل بدلي"],a:0,exp:"Chemical reactions form new substances; other evidence may include gas, colour or temperature change.",expSd:"ڪيميائي ردعمل ۾ نوان مادا ٺهن ٿا؛ گئس، رنگ يا گرمي پد جي تبديلي به نشاني ٿي سگهي ٿي."},
  {id:"8-3",grade:8,topic:"Sound",topicSd:"آواز",q:"Sound cannot travel through a...",qSd:"آواز ڪهڙي شيءِ مان سفر نٿو ڪري سگهي؟",opts:["Solid","Liquid","Gas","Vacuum"],optsSd:["ٺوس","مايع","گئس","خلا"],a:3,exp:"Sound needs a material medium, so it cannot travel through a vacuum.",expSd:"آواز کي مادي وسيلي جي ضرورت هوندي آهي، تنهنڪري اهو خلا مان سفر نٿو ڪري سگهي."},
  {id:"8-4",grade:8,topic:"Solar system",topicSd:"شمسي نظام",q:"What is the main reason Earth has seasons?",qSd:"زمين تي موسمن جي تبديليءَ جو بنيادي سبب ڇا آهي؟",opts:["Earth's tilted axis as it orbits the Sun","The Moon makes heat","Earth stops rotating","The Sun circles Earth each day"],optsSd:["سج جي چوڌاري گردش دوران زمين جي محور جو جهڪاءُ","چنڊ گرمي پيدا ڪري ٿو","زمين گهمڻ بند ڪري ٿي","سج هر روز زمين جي چوڌاري گهمي ٿو"],a:0,exp:"Earth's tilted axis changes the angle and duration of sunlight through the year.",expSd:"زمين جي محور جو جهڪاءُ سال دوران سج جي روشنيءَ جو زاويه ۽ مدو بدلائي ٿو."},
  {id:"8-5",grade:8,topic:"Human health",topicSd:"انساني صحت",q:"Which nutrient is mainly used by the body for growth and tissue repair?",qSd:"جسم جي واڌ ۽ بافتن جي مرمت لاءِ ڪهڙو غذائي جزو اهم آهي؟",opts:["Protein","Water only","Salt","Fibre only"],optsSd:["پروٽين","صرف پاڻي","لوڻ","صرف فائبر"],a:0,exp:"Proteins supply amino acids needed to build and repair body tissues.",expSd:"پروٽين جسم جي بافتن جي تعمير ۽ مرمت لاءِ ضروري امينو ايسڊ فراهم ڪن ٿا."}
];

const STORAGE_KEY = "sse-progress-v1";
let lang = "en";
let activeClass = 6;
let quizQuestions = [];
let questionIndex = 0;
let selectedAnswer = null;
let quizAnswers = [];
let lastResult = null;

const $ = (id) => document.getElementById(id);
const t = (key, ...args) => {
  const value = translations[lang][key];
  return typeof value === "function" ? value(...args) : (value ?? key);
};
function loadProgress() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {quizzes:[], topicStats:{}}; }
  catch { return {quizzes:[], topicStats:{}}; }
}
function saveProgress(data) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }
  catch { showToast("Could not save progress on this device."); }
}
function showToast(message) {
  const toast = $("toast"); toast.textContent = message; toast.classList.add("show");
  clearTimeout(showToast.timer); showToast.timer = setTimeout(()=>toast.classList.remove("show"), 2400);
}
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  $(id).classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
}
function updateLanguage() {
  document.documentElement.lang = lang === "sd" ? "sd" : "en";
  document.documentElement.dir = lang === "sd" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key] !== undefined && typeof translations[lang][key] !== "function") el.textContent = translations[lang][key];
  });
  $("languageButton").textContent = lang === "en" ? "سنڌي" : "English";
  $("connectionStatus").lastElementChild.textContent = t("readyOffline");
  renderHomeStats();
  if ($("revisionScreen").classList.contains("active")) renderRevision();
  if ($("quizScreen").classList.contains("active")) renderQuestion();
}
function renderHomeStats() {
  const p = loadProgress();
  const total = p.quizzes.length;
  const all = p.quizzes.reduce((acc,q)=>({correct:acc.correct+q.correct,total:acc.total+q.total}),{correct:0,total:0});
  $("totalQuizzes").textContent = total;
  $("overallAccuracy").textContent = all.total ? `${Math.round(all.correct/all.total*100)}%` : "—";
}
function startQuiz(grade) {
  activeClass = Number(grade);
  quizQuestions = questions.filter(q=>q.grade===activeClass);
  // Stable question order makes the demo easy to test and compare.
  questionIndex = 0; selectedAnswer = null; quizAnswers = [];
  $("quizClassPill").textContent = t("className", activeClass);
  showScreen("quizScreen"); renderQuestion();
}
function renderQuestion() {
  const q = quizQuestions[questionIndex];
  if (!q) return;
  selectedAnswer = null;
  $("questionCounter").textContent = t("questionOf", questionIndex+1, quizQuestions.length);
  $("quizProgress").style.width = `${questionIndex/quizQuestions.length*100}%`;
  $("topicLabel").textContent = lang === "sd" ? q.topicSd : q.topic;
  $("questionText").textContent = lang === "sd" ? q.qSd : q.q;
  $("feedback").textContent = ""; $("feedback").className = "feedback";
  $("nextQuestion").disabled = true; $("nextQuestion").textContent = t("checkAnswer");
  $("answers").innerHTML = "";
  (lang === "sd" ? q.optsSd : q.opts).forEach((label,i)=>{
    const btn = document.createElement("button");
    btn.className = "answer-option"; btn.type = "button";
    btn.innerHTML = `<span class="answer-letter">${String.fromCharCode(65+i)}</span><span></span>`;
    btn.lastElementChild.textContent = label;
    btn.addEventListener("click",()=>selectAnswer(i));
    $("answers").appendChild(btn);
  });
}
function selectAnswer(i) {
  if (selectedAnswer !== null) return;
  selectedAnswer = i;
  const q = quizQuestions[questionIndex];
  const buttons = [...$("answers").querySelectorAll("button")];
  buttons.forEach((btn,j)=>{
    btn.disabled = true;
    if (j === q.a) btn.classList.add("correct");
    if (j === i && i !== q.a) btn.classList.add("incorrect");
  });
  const isCorrect = i === q.a;
  quizAnswers.push({id:q.id,grade:q.grade,topic:q.topic,topicSd:q.topicSd,question:q.q,questionSd:q.qSd,chosen:i,correct:q.a,isCorrect,explanation:q.exp,explanationSd:q.expSd});
  $("feedback").textContent = `${isCorrect ? t("correct") : t("incorrect")} ${lang==="sd"?q.expSd:q.exp}`;
  $("feedback").className = `feedback ${isCorrect?"good":"bad"}`;
  $("nextQuestion").disabled = false;
  $("nextQuestion").textContent = questionIndex === quizQuestions.length-1 ? t("finishQuiz") : t("nextQuestion");
}
function nextQuestion() {
  if (selectedAnswer === null) { showToast(t("chooseAnswer")); return; }
  if (questionIndex < quizQuestions.length-1) { questionIndex++; renderQuestion(); }
  else finishQuiz();
}
function finishQuiz() {
  const correct = quizAnswers.filter(a=>a.isCorrect).length;
  const total = quizAnswers.length;
  const result = {date:new Date().toISOString(),grade:activeClass,correct,total,answers:quizAnswers};
  const p = loadProgress(); p.quizzes.push(result);
  quizAnswers.forEach(a=>{
    const key = `${a.grade}|${a.topic}`;
    if (!p.topicStats[key]) p.topicStats[key] = {grade:a.grade,topic:a.topic,topicSd:a.topicSd,correct:0,wrong:0,attempts:0};
    p.topicStats[key].attempts++;
    if (a.isCorrect) p.topicStats[key].correct++; else p.topicStats[key].wrong++;
  });
  saveProgress(p); lastResult = result;
  renderResults(result); renderHomeStats(); showScreen("resultScreen");
}
function renderResults(result) {
  const pct = Math.round(result.correct/result.total*100);
  $("resultEmoji").textContent = pct>=80?"🏆":pct>=50?"🌱":"💪";
  $("resultTitle").textContent = pct>=80?t("excellent"):pct>=50?t("great"):t("keepGoing");
  $("resultSummary").textContent = t("resultSummary",result.correct,result.total);
  $("scorePercent").textContent = `${pct}%`;
  $("answerReview").innerHTML = "";
  result.answers.forEach(a=>{
    const item = document.createElement("article"); item.className="review-item";
    const title = document.createElement("h3"); title.textContent = lang==="sd"?a.questionSd:a.question;
    const status = document.createElement("div"); status.className=`review-status ${a.isCorrect?"correct":"incorrect"}`;
    status.textContent = `${a.isCorrect?"✓":"✕"} ${a.isCorrect?t("correct"):t("incorrect")}`;
    const answer = document.createElement("p");
    const q = questions.find(x=>x.id===a.id);
    const options = lang==="sd"?q.optsSd:q.opts;
    answer.textContent = `${t("correctAnswer")}: ${options[a.correct]}`;
    const explanation = document.createElement("p"); explanation.textContent = `${t("explanation")}: ${lang==="sd"?a.explanationSd:a.explanation}`;
    item.append(title,status,answer,explanation); $("answerReview").appendChild(item);
  });
  $("resultRecommendations").innerHTML = "";
  const recommendations = getRecommendations().filter(r=>r.wrong>0).slice(0,2);
  if (!recommendations.length) {
    const p=document.createElement("p"); p.className="small-note"; p.textContent=t("noWeakText"); $("resultRecommendations").appendChild(p);
  } else recommendations.forEach((r,i)=>$("resultRecommendations").appendChild(makeRecommendation(r,i)));
}
function getRecommendations() {
  const p = loadProgress();
  return Object.values(p.topicStats).filter(s=>s.attempts>0).map(s=>({
    ...s, accuracy:Math.round(s.correct/s.attempts*100),
    priority:(s.wrong/s.attempts) + (s.wrong*0.08)
  })).sort((a,b)=>b.priority-a.priority || a.accuracy-b.accuracy);
}
function makeRecommendation(r,i) {
  const card=document.createElement("article"); card.className="recommendation-card";
  const top=document.createElement("div"); top.className="rec-top";
  const num=document.createElement("span"); num.className="rec-number"; num.textContent=String(i+1).padStart(2,"0");
  const title=document.createElement("h3"); title.textContent=lang==="sd"?r.topicSd:r.topic;
  const badge=document.createElement("span"); badge.className="mistake-badge"; badge.textContent=t("mistakes",r.wrong);
  top.append(num,title,badge);
  const detail=document.createElement("p"); detail.textContent=`${t("className",r.grade)} • ${r.accuracy}% accuracy • ${t("basedOn")}`;
  const tip=document.createElement("p"); tip.textContent=`${t("reviseTip")}: ${t("reviseText")}`;
  card.append(top,detail,tip); return card;
}
function renderRevision() {
  const list=getRecommendations();
  const target=$("revisionContent"); target.innerHTML="";
  if (!loadProgress().quizzes.length) {
    target.innerHTML=`<div class="empty-state"><strong>${t("noDataTitle")}</strong><p>${t("noDataText")}</p></div>`;
    return;
  }
  const weak=list.filter(r=>r.wrong>0).slice(0,5);
  if (!weak.length) {
    target.innerHTML=`<div class="empty-state"><strong>${t("noWeakTitle")}</strong><p>${t("noWeakText")}</p></div>`;
    return;
  }
  weak.forEach((r,i)=>target.appendChild(makeRecommendation(r,i)));
}
function resetProgress() {
  if (!confirm(t("resetConfirm"))) return;
  localStorage.removeItem(STORAGE_KEY); renderHomeStats(); renderRevision(); showToast(t("resetDone"));
}
document.querySelectorAll("[data-class]").forEach(btn=>btn.addEventListener("click",()=>startQuiz(btn.dataset.class)));
$("languageButton").addEventListener("click",()=>{lang=lang==="en"?"sd":"en";updateLanguage();});
$("nextQuestion").addEventListener("click",nextQuestion);
$("quitQuiz").addEventListener("click",()=>showScreen("homeScreen"));
$("homeAfterQuiz").addEventListener("click",()=>showScreen("homeScreen"));
$("reviewButton").addEventListener("click",()=>{renderRevision();showScreen("revisionScreen");});
$("revisionBack").addEventListener("click",()=>showScreen("homeScreen"));
$("resetProgress").addEventListener("click",resetProgress);
window.addEventListener("online",()=>{$("connectionStatus").lastElementChild.textContent=t("readyOffline");});
window.addEventListener("offline",()=>{$("connectionStatus").lastElementChild.textContent=t("readyOffline");});
if ("serviceWorker" in navigator) {
  window.addEventListener("load",()=>{
    navigator.serviceWorker.register("./sw.js").catch(err=>console.warn("Service worker registration failed:",err));
  });
}
updateLanguage();
