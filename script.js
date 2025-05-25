const allQuestions = [
  {
    question: "In get resuscitation adjuncts or helpers, O refer to Oxygenation and Ventilation such as:",
    options: ["A) ABG", "B) Blood typing", "C) SpO2", "D) Lactic acid"],
    correctIndex: 2
  },
  {
    question: "Is acutely ill, injured, harmed or helpless and who requires emergency care.",
    options: ["A) Emergency patient", "B) Critically ill patient", "C) Chronic Patient", "D) Non urgent Patient"],
    correctIndex: 0
  },
  {
    question: "Is patient who is at high risk for actual or potential life-threatening health problems.",
    options: ["A) Emergency patient", "B) Critically ill patient", "C) Chronic Patient", "D) Non urgent Patient"],
    correctIndex: 1
  },
  {
    question: "What is triage?",
    options: ["A) Preparing patients for hospital discharge", "B) Sorting patients in the emergency department based on severity and immediacy", "C) Organizing patients to receive medications", "D) Preparing rooms, spaces, and equipment for admitted patients"],
    correctIndex: 1
  },
  {
    question: "Triage is a sorting process that utilizes critical thinking and a standardized set of guidelines.",
    options: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "Which of the following falls under the category of Resuscitation?",
    options: ["A) Head injuries", "B) Airway obstruction", "C) Chemical exposure to the eyes", "D) GI bleed with stable vital signs"],
    correctIndex: 1
  },
  {
    question: "Sever trauma falls under the category of?",
    options: ["A) Resuscitation", "B) Emergent", "C) Urgent", "D) Less urgent"],
    correctIndex: 1
  },
  {
    question: "Moderate trauma falls under the category of?",
    options: ["A) Emergent", "B) Urgent", "C) Less urgent", "D) Non urgent"],
    correctIndex: 1
  },
  {
    question: "Minor acute trauma falls under the category of?",
    options: ["A) Emergent", "B) Urgent", "C) Less urgent", "D) Non urgent"],
    correctIndex: 2
  },
  {
    question: "Minor NOT acute trauma falls under the category of?",
    options: ["A) Emergent", "B) Urgent", "C) Less urgent", "D) Non urgent"],
    correctIndex: 3
  },
  {
    question: "Minor acute trauma falls under the category of Non urgent",
    options: ["True", "False"],
    correctIndex: 1
  },
  {
    question: "Any pain greater than 3 on a scale of 10 falls under the category of Emergent",
    options: ["True", "False"],
    correctIndex: 1
  },
  {
    question: "Which of the following is considered Triage Level III?",
    options: ["A) Alert head injury without vomiting", "B) Minor trauma", "C) Minor systemic symptoms", "D) Mild to moderate asthma"],
    correctIndex: 3
  },
  {
    question: "Chronic back pain falls under the category of",
    options: ["A) Resuscitation", "B) Emergent", "C) Urgent", "D) Less urgent"],
    correctIndex: 3
  },
  {
    question: "Chronic abdominal pain falls under the category of",
    options: ["A) Emergent", "B) Urgent", "C) Less urgent", "D) Non urgent"],
    correctIndex: 3
  },
  {
    question: "Earache falls under the category of",
    options: ["A) Emergent", "B) Urgent", "C) Less urgent", "D) Non urgent"],
    correctIndex: 2
  },
  {
    question: "Strock falls under the category of",
    options: ["A) Emergent", "B) Urgent", "C) Resuscitation", "D) Non urgent"],
    correctIndex: 0
  },
  {
    question: "Requires medical and nursing intervention within 30 minutes?",
    options: ["A) Resuscitation", "B) Urgent", "C) Less urgent", "D) Non urgent"],
    correctIndex: 1
  },
  {
    question: "In Resuscitation triage, any delay can lead to potentially life-or limb-threatening.",
    options: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "Conditions that are high risk of deterioration, or signs of a time-critical problem fall under?",
    options: ["A) Resuscitation", "B) Emergent", "C) Less urgent", "D) Non urgent"],
    correctIndex: 1
  },
  {
    question: "A patient with Eclampsia fall under?",
    options: ["A) Resuscitation", "B) Emergent", "C) Less urgent", "D) Non urgent"],
    correctIndex: 0
  },
  {
    question: "An Unconsciousness patient fall under?",
    options: ["A) Resuscitation", "B) Emergent", "C) Less urgent", "D) Non urgent"],
    correctIndex: 0
  },
  {
    question: "A patient with severe allergic reaction fall under?",
    options: ["A) Resuscitation", "B) Emergent", "C) Less urgent", "D) Non urgent"],
    correctIndex: 1
  },
  {
    question: "A patient with minor allergic reaction fall under?",
    options: ["A) Resuscitation", "B) Emergent", "C) Less urgent", "D) Non urgent"],
    correctIndex: 2
  },
  {
    question: "Sore throat patient falls under?",
    options: ["A) Resuscitation", "B) Emergent", "C) Less urgent", "D) Non urgent"],
    correctIndex: 3
  },
  {
    question: "Primary survey focuses on examine, diagnose, treat non life-threatening injuries",
    options: ["True", "False"],
    correctIndex: 1
  },
  {
    question: "Stridor plus swelling and/or hives can indicate..",
    options: ["A) Partially obstructed airway", "B) Complete obstructed airway", "C) Anaphylaxis", "D) Pericardial tamponade"],
    correctIndex: 2
  },
  {
    question: "If the patient Can talk normally that indicate an obstructed airway.",
    options: ["True", "False"],
    correctIndex: 1
  },
  {
    question: "Check if the patient is able to swallow saliva or is drooling is performed during?",
    options: ["A) Breathing Assessment", "B) Airway Assessment", "C) Disability Assessment", "D) Circulation Assessment"],
    correctIndex: 1
  },
  {
    question: "Chest in drawing or retractions and abnormal chest wall movement are signs of increased work of breathing.",
    options: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "The absence of breath sounds and dull sounds with percussion on one side can indicate tension pneumothorax.",
    options: ["True", "False"],
    correctIndex: 1
  },
  {
    question: "Which of the following is a sign of poor perfusion?",
    options: ["A) Warm skin", "B) Normal blood pressure", "C) Bradypnea", "D) Absent pulses"],
    correctIndex: 3
  },
  {
    question: "Internal bleeding is often apparent and observable.",
    options: ["True", "False"],
    correctIndex: 1
  },
  {
    question: "Which of the following is involved in the primary survey?",
    options: ["A) Head-to-toe assessment", "B) Insect posterior surfaces", "C) Get resuscitation adjuncts", "D) Past medical history"],
    correctIndex: 2
  },
  {
    question: "How many levels of triage are there?",
    options: ["A) Three", "B) Four", "C) Five", "D) Six"],
    correctIndex: 2
  },
  {
    question: "What is an example of a Level 1 (Resuscitation) condition?",
    options: ["A) Earache", "B) Severe asthma", "C) Cardiac arrest", "D) Headache"],
    correctIndex: 2
  },
  {
    question: "A patient with chest pain would fall under which triage level?",
    options: ["A) Level 1", "B) Level 2", "C) Level 3", "D) Level 5"],
    correctIndex: 1
  },
  {
    question: "The Glasgow Coma Scale is used to:",
    options: ["A) Assess breathing patterns", "B) Measure neurological function", "C) Evaluate heart rate", "D) Check oxygen levels"],
    correctIndex: 1
  },
  {
    question: "What should be done first if the patient cannot talk normally?",
    options: ["A) Assess chest movement and air movement", "B) Check for bleeding", "C) Take a medical history", "D) Administer pain management"],
    correctIndex: 0
  },
  {
    question: "What is a sign of tension pneumothorax?",
    options: ["A) Equal breath sounds on both sides", "B) Dull sounds on percussion", "C) Distended neck veins and shifted trachea", "D) Rapid heart rate and high blood pressure"],
    correctIndex: 2
  },
  {
    question: "What is the primary focus of circulation assessment?",
    options: ["A) Breathing rate and oxygen levels", "B) Blood pressure and heart rate", "C) Signs of poor perfusion and bleeding control", "D) Neurological assessment"],
    correctIndex: 2
  },
  {
    question: "What is the purpose of exposure in the primary survey?",
    options: ["A) Maintain body temperature", "B) Identify hidden injuries", "C) Perform detailed neurological exams", "D) Collect patient history"],
    correctIndex: 1
  },
  {
    question: "The SAMPLE format is used for:",
    options: ["A) Diagnosing life-threatening injuries", "B) Documenting airway conditions", "C) Collecting patient and incident history", "D) Determining oxygen saturation"],
    correctIndex: 2
  },
  {
    question: "What does a Glasgow Coma Scale score of 3-8 indicate?",
    options: ["A) Mild brain injury", "B) Moderate brain injury", "C) Severe brain injury", "D) Normal neurological function"],
    correctIndex: 2
  },
  {
    question: "What does a Glasgow Coma Scale score of 15 indicate?",
    options: ["A) Mild brain injury", "B) Moderate brain injury", "C) Severe brain injury", "D) Normal neurological function"],
    correctIndex: 3
  },
  {
    question: "What is included in a head-to-toe assessment?",
    options: ["A) Focused neurological tests", "B) Inspection, auscultation, and palpation", "C) Reviewing patient history", "D) Obtaining vital signs"],
    correctIndex: 1
  },
  {
    question: "In triage Level 4 (Less Urgent), a patient is likely to present with:",
    options: ["A) Cardiac arrest", "B) Minor trauma and allergic reactions", "C) Head injuries with vomiting", "D) Severe abdominal pain"],
    correctIndex: 1
  },
  {
    question: "What is the last step of the primary survey?",
    options: ["A) Circulation", "B) Get resuscitation adjuncts", "C) Full set of vital signs", "D) Exposure"],
    correctIndex: 1
  },
  {
    question: "How are Level 2 (Emergent) patients prioritized?",
    options: ["A) Require immediate resuscitation", "B) Require care within 10–15 minutes", "C) Require care within 30 minutes", "D) Require care within two hours"],
    correctIndex: 1
  },
  {
    question: "What is the purpose of checking oxygen saturation during the primary survey?",
    options: ["A) Assess airway patency", "B) Monitor peripheral perfusion", "C) Diagnose chronic conditions", "D) Examine neurological function"],
    correctIndex: 1
  },
  {
    question: "During the primary survey, what is checked under \"Exposure\"?",
    options: ["A) Rashes, injuries, and prevention of hypothermia", "B) Oxygen saturation and ventilation", "C) Vital signs and neurological function", "D) Blood pressure and perfusion"],
    correctIndex: 0
  },
  {
    question: "In the primary survey, what is assessed under \"D\" (Disability)?",
    options: ["A) Pupil size, glucose levels, and limb movement", "B) Oxygen saturation and cardiac rate", "C) History of the incident", "D) Inspection for hidden injuries"],
    correctIndex: 0
  },
  {
    question: "What should be done to inspect posterior surfaces in the secondary survey?",
    options: ["A) Roll the patient carefully while maintaining c-spine stabilization", "B) Perform a detailed neurological exam", "C) Administer pain medication", "D) Assess only the limbs for injuries"],
    correctIndex: 0
  },
  {
    question: "A critically ill patient is always at low risk for life-threatening health problems.",
    options: ["True", "False"],
    correctIndex: 1
  },
  {
    question: "In the primary survey, checking for airway patency is optional.",
    options: ["True", "False"],
    correctIndex: 1
  },
  {
    question: "Tension pneumothorax can cause distended neck veins and a shifted trachea.",
    options: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "Hypothermia is not a concern when conducting the primary survey.",
    options: ["True", "False"],
    correctIndex: 1
  },
  {
    question: "What is the maximum score for the Best Motor Response in the Glasgow Coma Scale?",
    options: ["A) 4", "B) 5", "C) 6", "D) 7"],
    correctIndex: 2
  },
  {
    question: "A verbal response that is “Incomprehensible” scores how many points in the Glasgow Coma Scale?",
    options: ["A) 5", "B) 4", "C) 2", "D) 1"],
    correctIndex: 2
  },
  {
    question: "Which Eye Opening response receives a score of 2?",
    options: ["A) To voice", "B) To pain", "C) None", "D) Spontaneous"],
    correctIndex: 1
  }
];


  function shuffleArray(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  const questions = shuffleArray(allQuestions);

  const quizContainer = document.getElementById('quiz');
  const resultContainer = document.getElementById('result');

  // توليد الأسئلة في الصفحة
  questions.forEach((q, index) => {
    const questionBlock = document.createElement('div');
    questionBlock.className = 'question-block';
    questionBlock.id = `q${index}`;

    const questionText = document.createElement('p');
    questionText.innerText = `${index + 1}. ${q.question}`;
    questionBlock.appendChild(questionText);

    q.options.forEach((option, i) => {
      const label = document.createElement('label');
      label.style.display = 'block';
      label.innerHTML = `
        <input type="radio" name="question${index}" value="${i}"> ${option}
      `;
      questionBlock.appendChild(label);
    });

    quizContainer.appendChild(questionBlock);
  });

  function submitQuiz() {
    let score = 0;

    questions.forEach((q, index) => {
      const selected = document.querySelector(`input[name="question${index}"]:checked`);
      const questionBlock = document.getElementById(`q${index}`);

      // إزالة التغذية الراجعة القديمة
      questionBlock.classList.remove("correct", "incorrect");
      const oldFeedback = questionBlock.querySelector(".feedback");
      if (oldFeedback) oldFeedback.remove();

      let feedback = document.createElement("div");
      feedback.className = "feedback";

      if (selected) {
        const selectedValue = parseInt(selected.value);
        if (selectedValue === q.correctIndex) {
          score++;
          questionBlock.classList.add("correct");
          feedback.innerHTML = `✅ Correct`;
          feedback.style.color = "green";
        } else {
          questionBlock.classList.add("incorrect");
          feedback.innerHTML = `❌ Wrong – Correct Answer: <strong>${q.options[q.correctIndex]}</strong>`;
          feedback.style.color = "red";
        }
      } else {
        questionBlock.classList.add("incorrect");
        feedback.innerHTML = `⚠️ Not Answered – Correct Answer: <strong>${q.options[q.correctIndex]}</strong>`;
        feedback.style.color = "orange";
      }

      questionBlock.appendChild(feedback);
    });

    resultContainer.classList.add('result-transition');
    resultContainer.innerText = `You scored ${score} out of ${questions.length}`;
  }

  window.onscroll = function () {
    const btn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  document.getElementById("scrollToTopBtn").onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };