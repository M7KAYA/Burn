const allQuestions = [
  {
    question: "What is the outermost layer of the skin called?",
    options: ["a) Dermis", "b) Subcutaneous tissue", "c) Epidermis", "d) Hypodermis"],
    correctIndex: 2
  },
  {
    question: "Which layer of the skin provides strength and structure?",
    options: ["a) Epidermis", "b) Dermis", "c) Subcutaneous tissue", "d) Hypodermis"],
    correctIndex: 1
  },
  {
    question: "What type of burn affects only the epidermal layer?",
    options: ["a) Partial-thickness burn", "b) Full-thickness burn", "c) Superficial burn", "d) Deep partial-thickness burn"],
    correctIndex: 2
  },
  {
    question: "Which of the following is NOT a function of the skin?",
    options: ["a) Vitamin production", "b) Immune response", "c) Bone support", "d) Temperature regulation"],
    correctIndex: 2
  },
  {
    question: "What is the primary cause of death at the scene of a fire?",
    options: ["a) Hypoxia and carbon monoxide poisoning", "b) Severe burns", "c) Electric shock", "d) Chemical exposure"],
    correctIndex: 0
  },
  {
    question: "Which factor does NOT determine the degree of burn injury?",
    options: ["a) Temperature of the injuring agent", "b) Duration of exposure", "c) Color of the injuring agent", "d) Area of the body exposed"],
    correctIndex: 2
  },
  {
    question: "What is a characteristic of full-thickness burns?",
    options: ["a) They heal with minimal intervention.", "b) They affect only the epidermis.", "c) They expose the fat layer.", "d) They are painful and blanch under pressure."],
    correctIndex: 2
  },
  {
    question: "According to the 'rule of nines,' what percentage of TBSA is allocated to one arm?",
    options: ["a) 9%", "b) 18%", "c) 1%", "d) 4.5%"],
    correctIndex: 0
  },
  {
    question: "Which burn site is associated with a higher risk of inhalation injury?",
    options: ["a) Hands", "b) Feet", "c) Face", "d) Legs"],
    correctIndex: 2
  },
  {
    question: "What is a common complication of deep partial-thickness burns?",
    options: ["a) Rapid healing", "b) Scarring and loss of function", "c) No scarring", "d) Increased hair growth"],
    correctIndex: 1
  },
  {
    question: "Which phase of burn care focuses on wound closure and infection prevention?",
    options: ["a) Emergent phase", "b) Acute phase", "c) Rehabilitation phase", "d) Resuscitative phase"],
    correctIndex: 1
  },
  {
    question: "What is the priority during the emergent phase of burn care?",
    options: ["a) Psychological counseling", "b) Fluid resuscitation", "c) Scar prevention", "d) Occupational therapy"],
    correctIndex: 1
  },
  {
    question: "What is the goal of hypertonic saline solution in burn treatment?",
    options: ["a) Reduce edema and prevent pulmonary complications", "b) Increase urine output", "c) Replace lost hemoglobin", "d) Speed up wound healing"],
    correctIndex: 0
  },
  {
    question: "What is a key nursing intervention for promoting gas exchange in burn patients?",
    options: ["a) Administering IV opioids", "b) Providing humidified oxygen", "c) Elevating burned extremities", "d) Applying heat shields"],
    correctIndex: 1
  },
  {
    question: "Which complication is indicated by decreased urine output and increased BUN levels?",
    options: ["a) Acute renal failure", "b) Paralytic ileus", "c) Curling’s ulcer", "d) Compartment syndrome"],
    correctIndex: 0
  },
  {
    question: "What is a sign of compartment syndrome in a burned extremity?",
    options: ["a) Increased urine output", "b) Loss of peripheral pulses", "c) Hypothermia", "d) Hyperactive bowel sounds"],
    correctIndex: 1
  },
  {
    question: "Which medication is used to prevent Curling’s ulcer in burn patients?",
    options: ["a) Antacids and histamine blockers", "b) IV opioids", "c) Hypertonic saline", "d) Lactated Ringer’s solution"],
    correctIndex: 0
  },
  {
    question: "What is the primary focus of the rehabilitation phase in burn care?",
    options: ["a) Fluid resuscitation", "b) Wound closure", "c) Physical and psychosocial adjustment", "d) Pain management"],
    correctIndex: 2
  },
  {
    question: "Which of the following is a thermal burn source?",
    options: ["a) Hydrofluoric acid", "b) Electric current", "c) Hot cooking pan", "d) Nuclear radiation"],
    correctIndex: 2
  },
  {
    question: "What is the first-degree burn also known as?",
    options: ["a) Superficial burn", "b) Partial-thickness burn", "c) Full-thickness burn", "d) Deep dermal burn"],
    correctIndex: 0
  },
  {
    question: "Which layer of the skin is primarily composed of adipose tissue?",
    options: ["a) Epidermis", "b) Dermis", "c) Subcutaneous tissue", "d) Stratum corneum"],
    correctIndex: 2
  },
  {
    question: "What is a critical factor in assessing burn severity?",
    options: ["a) Hair color of the patient", "b) Percentage of TBSA burned", "c) Shoe size", "d) Blood type"],
    correctIndex: 1
  },
  {
    question: "What is the primary cause of scarring in burns?",
    options: ["a) Superficial burns", "b) Deep partial-thickness burns", "c) First-degree burns", "d) Sunburns"],
    correctIndex: 1
  },
  {
    question: "What is the purpose of the nasogastric tube in severe burn patients?",
    options: ["a) To administer antibiotics", "b) To prevent nausea and aspiration", "c) To measure core temperature", "d) To monitor blood pressure"],
    correctIndex: 1
  },
  {
    question: "Which of the following is a symptom of inhalation injury?",
    options: ["a) Increased urine output", "b) Singed nostrils", "c) Hypothermia", "d) Bradycardia"],
    correctIndex: 1
  },
  {
    question: "What is the primary electrolyte imbalance in the emergent phase of burns?",
    options: ["a) Sodium excess", "b) Potassium excess", "c) Calcium deficit", "d) Magnesium excess"],
    correctIndex: 1
  },
  {
    question: "What is the recommended urine output for burn patients during fluid resuscitation?",
    options: ["a) 10 mL/hour", "b) 30 mL/hour", "c) 50 mL/hour", "d) 100 mL/hour"],
    correctIndex: 1
  },
  {
    question: "Which of the following is NOT a priority in the emergency department for burn patients?",
    options: ["a) Airway management", "b) Pain relief", "c) Cosmetic surgery", "d) Circulation support"],
    correctIndex: 2
  },
  {
    question: "What is the primary purpose of the 'rule of nines'?",
    options: ["a) To estimate the extent of burns", "b) To diagnose inhalation injury", "c) To measure pain levels", "d) To assess kidney function"],
    correctIndex: 0
  },
  {
    question: "Which phase of burn care includes nutritional support?",
    options: ["a) Emergent phase", "b) Acute phase", "c) Rehabilitation phase", "d) Immediate phase"],
    correctIndex: 1
  },
  {
    question: "What is a characteristic of superficial partial-thickness burns?",
    options: ["a) They expose the fat layer.", "b) They heal with minimal intervention.", "c) They cause extensive scarring."],
    correctIndex: 1
  },
  {
    question: "What is the primary cause of metabolic acidosis in burn patients?",
    options: ["a) Loss of bicarbonate ions", "b) Excess potassium", "c) Sodium retention", "d) Hyperventilation"],
    correctIndex: 0
  },
  {
    question: "What is the primary role of the subcutaneous tissue?",
    options: ["a) To produce keratinocytes", "b) To provide a cushion between skin layers and bones", "c) To regulate body temperature", "d) To protect against UV radiation"],
    correctIndex: 1
  },
  {
    question: "Which of the following is a sign of hypovolemic shock in burn patients?",
    options: ["a) Increased urine output", "b) Decreased blood pressure", "c) Hyperactive bowel sounds", "d) Bradycardia"],
    correctIndex: 1
  },
  {
    question: "What is the primary treatment for compartment syndrome in burn patients?",
    options: ["a) Administering antacids", "b) Performing escharotomies", "c) Increasing fluid intake", "d) Applying ice packs"],
    correctIndex: 1
  },
  {
    question: "Which of the following is a goal of the rehabilitation phase?",
    options: ["a) Fluid resuscitation", "b) Preventing contractures", "c) Wound debridement", "d) Pain management"],
    correctIndex: 1
  },
  {
    question: "What is the primary cause of hemoconcentration in burn patients?",
    options: ["a) Loss of plasma into extravascular space", "b) Excess fluid intake", "c) Increased urine output", "d) Hyperventilation"],
    correctIndex: 0
  },
  {
    question: "The epidermis is the innermost layer of the skin.",
    options: ["True", "False"],
    correctIndex: 1
  },
  {
    question: "Full-thickness burns may involve fat, muscle, and bone.",
    options: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "Superficial burns usually cause scarring and require surgical treatment.",
    options: ["True", "False"],
    correctIndex: 1
  },
  {
    question: "The 'rule of nines' helps estimate the total body surface area affected by burns.",
    options: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "Facial burns may indicate possible inhalation injury.",
    options: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "Partial-thickness burns affect both the epidermis and dermis.",
    options: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "Burns on the hands and feet do not affect mobility or function.",
    options: ["True", "False"],
    correctIndex: 1
  },
  {
    question: "Carbon monoxide binds to hemoglobin more readily than oxygen.",
    options: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "Burns are classified only by the cause of injury.",
    options: ["True", "False"],
    correctIndex: 1
  },
  {
    question: "The emergent phase of burn care includes securing the airway and initiating fluid resuscitation.",
    options: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "Electrical burns always show severe external damage.",
    options: ["True", "False"],
    correctIndex: 1
  },
  {
    question: "Pain is usually absent in full-thickness burns.",
    options: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "Curling’s ulcer is a complication caused by stress in burn patients.",
    options: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "Escharotomy is performed to relieve pressure and restore circulation in burned limbs.",
    options: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "Hyperkalemia can occur in the early phase of severe burns.",
    options: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "Burn patients should be kept cold to prevent infection.",
    options: ["True", "False"],
    correctIndex: 1
  },
  {
    question: "Skin grafts are always required for superficial burns.",
    options: ["True", "False"],
    correctIndex: 1
  },
  {
    question: "High protein and calorie intake are important for burn wound healing.",
    options: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "Burn injuries can lead to increased risk of infection due to loss of skin barrier.",
    options: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "Inhalation injury should be suspected if the patient has singed nasal hair and carbonaceous sputum.",
    options: ["True", "False"],
    correctIndex: 0
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
