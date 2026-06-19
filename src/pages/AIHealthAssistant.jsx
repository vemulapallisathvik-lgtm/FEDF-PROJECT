import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRobot, FaUser, FaPaperPlane } from "react-icons/fa";

export default function AIHealthAssistant() {
  const navigate = useNavigate();

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text:
        "Hello! I am your Blood Bank AI Assistant 🩸\n\nYou can ask me about blood donation, eligibility, blood groups, compatibility, plasma, platelets, hemoglobin, storage, emergency blood requests, donor care, and blood bank workflow.",
    },
  ]);

  const [input, setInput] = useState("");

  const compatibility = {
    "O-": {
      donate: ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"],
      receive: ["O-"],
      note: "O- is the universal red blood cell donor.",
    },
    "O+": {
      donate: ["O+", "A+", "B+", "AB+"],
      receive: ["O+", "O-"],
      note: "O+ is one of the most commonly needed blood groups.",
    },
    "A-": {
      donate: ["A-", "A+", "AB-", "AB+"],
      receive: ["A-", "O-"],
      note: "A- can help A and AB patients.",
    },
    "A+": {
      donate: ["A+", "AB+"],
      receive: ["A+", "A-", "O+", "O-"],
      note: "A+ patients can receive from A and O groups.",
    },
    "B-": {
      donate: ["B-", "B+", "AB-", "AB+"],
      receive: ["B-", "O-"],
      note: "B- is less common and important for emergency stock.",
    },
    "B+": {
      donate: ["B+", "AB+"],
      receive: ["B+", "B-", "O+", "O-"],
      note: "B+ can donate to B+ and AB+.",
    },
    "AB-": {
      donate: ["AB-", "AB+"],
      receive: ["AB-", "A-", "B-", "O-"],
      note: "AB- can receive from all Rh-negative groups.",
    },
    "AB+": {
      donate: ["AB+"],
      receive: ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"],
      note: "AB+ is the universal red blood cell recipient.",
    },
  };

  const normalize = (text) => {
    return text
      .toLowerCase()
      .replaceAll("positive", "+")
      .replaceAll("negative", "-")
      .replaceAll("plus", "+")
      .replaceAll("minus", "-")
      .replace(/\s+/g, " ")
      .trim();
  };

  const containsAny = (q, words) => {
    return words.some((word) => q.includes(word));
  };

  const detectBloodGroups = (q) => {
    const groups = ["AB+", "AB-", "A+", "A-", "B+", "B-", "O+", "O-"];
    return groups.filter((g) => q.toUpperCase().includes(g));
  };

  const formatList = (arr) => arr.join(", ");

  const getCompatibilityAnswer = (q) => {
    const groups = detectBloodGroups(q);

    if (groups.length >= 2) {
      const donor = groups[0];
      const recipient = groups[1];

      if (compatibility[donor].donate.includes(recipient)) {
        return `Yes. ${donor} can usually donate red blood cells to ${recipient}.\n\n${donor} can donate to: ${formatList(
          compatibility[donor].donate
        )}.\n\nImportant: Final transfusion must always be confirmed by hospital cross-matching.`;
      } else {
        return `No. ${donor} usually cannot donate red blood cells to ${recipient}.\n\n${donor} can donate to: ${formatList(
          compatibility[donor].donate
        )}.\n\nFor safe transfusion, hospitals always perform blood grouping and cross-matching.`;
      }
    }

    if (groups.length === 1) {
      const g = groups[0];
      return `${g} Blood Group Information:\n\nCan donate to: ${formatList(
        compatibility[g].donate
      )}\n\nCan receive from: ${formatList(compatibility[g].receive)}\n\nNote: ${
        compatibility[g].note
      }`;
    }

    return null;
  };

  const getBotReply = (question) => {
    const q = normalize(question);
    const compatibilityAnswer = getCompatibilityAnswer(q);

    if (
      containsAny(q, [
        "hi",
        "hello",
        "hey",
        "good morning",
        "good afternoon",
        "good evening",
        "namaste",
        "hii",
        "hlo",
      ])
    ) {
      return "Hello! 😊 I am your Blood Bank AI Assistant. Ask me anything about blood donation, compatibility, eligibility, blood storage, plasma, platelets, hemoglobin, or emergency blood requests.";
    }

    if (containsAny(q, ["how are you", "how r u", "how are u"])) {
      return "I am doing great! I am ready to help you with blood bank and donation-related questions. 🩸";
    }

    if (containsAny(q, ["who are you", "what are you", "your name", "what can you do"])) {
      return "I am a Blood Bank AI Assistant. I can answer questions about blood donation, donor eligibility, blood groups, compatibility, plasma, platelets, hemoglobin, storage, hospital requests, inventory, and emergency blood needs.";
    }

    if (containsAny(q, ["thank", "thanks", "tq", "thank you"])) {
      return "You're welcome! 😊 Stay healthy and donate blood safely when you are eligible.";
    }

    if (containsAny(q, ["bye", "goodbye", "see you", "good night"])) {
      return "Goodbye! Take care. Remember, donating blood can save lives. 🩸";
    }

    if (compatibilityAnswer && containsAny(q, ["donate", "receive", "compatible", "compatibility", "blood group", "can", "to"])) {
      return compatibilityAnswer;
    }

    if (containsAny(q, ["universal donor"])) {
      return "O- is known as the universal red blood cell donor because it can usually be given to patients of all blood groups in emergencies. However, hospitals still prefer cross-matching whenever possible.";
    }

    if (containsAny(q, ["universal recipient"])) {
      return "AB+ is known as the universal red blood cell recipient because AB+ patients can usually receive red blood cells from all ABO and Rh blood groups.";
    }

    if (containsAny(q, ["blood group", "abo", "rh factor", "rh"])) {
      return "Blood groups are mainly based on the ABO system and Rh factor.\n\nMain blood groups are: A+, A-, B+, B-, AB+, AB-, O+, and O-.\n\nThe Rh factor is positive (+) or negative (-). Compatibility is very important before transfusion.";
    }

    if (containsAny(q, ["who can donate", "can i donate", "eligible", "eligibility"])) {
      return "A person can usually donate blood if they:\n\n• Are healthy\n• Are generally 18 years or older\n• Have suitable body weight\n• Have normal hemoglobin\n• Have no fever or active infection\n• Are not under restricted medication\n• Have not had recent major surgery\n\nFinal eligibility is always checked by medical staff at the blood bank.";
    }

    if (containsAny(q, ["minimum age", "age to donate", "age limit"])) {
      return "The minimum age for blood donation is usually 18 years in many places. Some blood banks may allow donation only up to around 60–65 years, depending on health and local rules.";
    }

    if (containsAny(q, ["minimum weight", "weight to donate", "body weight"])) {
      return "Many blood banks require a minimum weight of around 45–50 kg for whole blood donation. This is to keep the donor safe after donating blood.";
    }

    if (containsAny(q, ["hemoglobin", "haemoglobin", "hb"])) {
      return "Hemoglobin is the oxygen-carrying protein in red blood cells.\n\nFor blood donation, hemoglobin must be adequate. If hemoglobin is low, the donor may be temporarily rejected to prevent weakness and anemia.";
    }

    if (containsAny(q, ["anemia", "anaemia", "low hb", "low hemoglobin"])) {
      return "A person with anemia or low hemoglobin should usually not donate blood until their hemoglobin improves. Low hemoglobin can cause tiredness, weakness, and dizziness.";
    }

    if (containsAny(q, ["fever", "cold", "cough", "infection", "sick", "ill"])) {
      return "If you have fever, cold, cough, infection, or feel sick, you should not donate blood. Wait until you recover fully. Blood banks may ask you to wait for a specific period after illness.";
    }

    if (containsAny(q, ["diabetes", "sugar"])) {
      return "Some people with well-controlled diabetes may be allowed to donate blood, but eligibility depends on their medication, general health, and blood bank rules. A diabetic donor should always inform the medical staff.";
    }

    if (containsAny(q, ["blood pressure", "bp", "hypertension", "high bp", "low bp"])) {
      return "People with controlled blood pressure may be allowed to donate blood. Very high or very low blood pressure can lead to temporary rejection because donor safety is important.";
    }

    if (containsAny(q, ["tattoo", "piercing"])) {
      return "After a tattoo or piercing, blood donation is usually delayed for a few months because of infection risk. The exact waiting period depends on the blood bank guidelines.";
    }

    if (containsAny(q, ["surgery", "operation"])) {
      return "After surgery, donation may be delayed depending on the type of surgery, healing, infection risk, and medication. Major surgery usually needs a longer waiting period.";
    }

    if (containsAny(q, ["pregnant", "pregnancy", "breastfeeding", "feeding mother"])) {
      return "Pregnant women should not donate blood. After delivery or breastfeeding, donation should only be done after full recovery and medical approval.";
    }

    if (containsAny(q, ["period", "menstruation", "monthly cycle"])) {
      return "Donation during menstruation depends on the person's health, bleeding level, and hemoglobin. If there is weakness, heavy bleeding, or low hemoglobin, donation should be avoided.";
    }

    if (containsAny(q, ["alcohol", "drink alcohol"])) {
      return "Avoid alcohol before and after blood donation. Alcohol can increase dehydration and dizziness risk.";
    }

    if (containsAny(q, ["smoking", "cigarette"])) {
      return "It is better to avoid smoking immediately before and after donation because it can increase dizziness or discomfort.";
    }

    if (containsAny(q, ["medicine", "medication", "tablet", "antibiotic", "blood thinner"])) {
      return "Some medicines may affect donation eligibility. Antibiotics, blood thinners, certain acne medicines, and some long-term medicines may require temporary or permanent deferral. Always tell the blood bank staff about your medicines.";
    }

    if (containsAny(q, ["vaccine", "vaccination"])) {
      return "After vaccination, donation rules depend on the vaccine type and symptoms. If you have fever or feel unwell after a vaccine, wait until you recover.";
    }

    if (containsAny(q, ["dengue"])) {
      return "Dengue patients may need platelets if platelet count becomes very low or if bleeding risk is high. Donation after dengue should be delayed until full recovery and medical clearance.";
    }

    if (containsAny(q, ["malaria"])) {
      return "After malaria, blood donation is usually deferred for a period because malaria can be transmitted through blood. Exact waiting time depends on local guidelines.";
    }

    if (containsAny(q, ["hiv", "aids", "hepatitis", "std"])) {
      return "People with HIV, hepatitis B, hepatitis C, or certain blood-transmissible infections are not eligible to donate blood. Blood banks screen donated blood for safety.";
    }

    if (containsAny(q, ["thyroid"])) {
      return "People with thyroid issues may be allowed to donate if the condition is controlled and they are otherwise healthy. Final decision depends on medical screening.";
    }

    if (containsAny(q, ["asthma"])) {
      return "People with mild, controlled asthma may sometimes donate blood. If asthma is severe, active, or requires frequent medication, donation may be delayed.";
    }

    if (containsAny(q, ["heart disease", "heart patient", "cardiac"])) {
      return "People with heart disease may not be eligible to donate blood, depending on condition severity. Donor safety is important, so medical approval is required.";
    }

    if (containsAny(q, ["cancer"])) {
      return "Cancer patients usually cannot donate blood during treatment. Some past cancer cases may be assessed individually by medical staff depending on type and recovery.";
    }

    if (containsAny(q, ["how often", "gap", "frequency", "again donate", "next donation"])) {
      return "Whole blood donation usually requires a gap of about 3 months. Platelet or plasma donation may have different intervals. Exact rules depend on local blood bank guidelines.";
    }

    if (containsAny(q, ["after donation", "after donating", "post donation", "care after"])) {
      return "After donating blood:\n\n• Rest for a few minutes\n• Drink plenty of water\n• Eat a healthy meal\n• Avoid heavy exercise for the day\n• Avoid alcohol\n• Keep the bandage for a few hours\n• Inform staff if you feel dizzy";
    }

    if (containsAny(q, ["side effects", "dizzy", "weak", "faint", "bruise"])) {
      return "Common mild side effects after donation include dizziness, weakness, slight pain, or bruising. Rest, drink fluids, and eat something. If symptoms are severe or continue, contact medical staff.";
    }

    if (containsAny(q, ["plasma"])) {
      return "Plasma is the liquid part of blood. It carries proteins, clotting factors, nutrients, hormones, and waste products.\n\nPlasma is useful in burns, trauma, liver disease, clotting disorders, and massive bleeding cases.";
    }

    if (containsAny(q, ["platelet", "platelets"])) {
      return "Platelets are blood cells that help with clotting and stop bleeding.\n\nPlatelets are important for dengue patients, cancer patients, chemotherapy patients, surgery patients, and people with low platelet count.";
    }

    if (containsAny(q, ["rbc", "red blood cell", "red cells"])) {
      return "Red blood cells carry oxygen from the lungs to the body using hemoglobin. RBC transfusion is commonly used for anemia, blood loss, surgery, and trauma patients.";
    }

    if (containsAny(q, ["wbc", "white blood cell", "white cells"])) {
      return "White blood cells help the body fight infections. They are part of the immune system. WBCs are usually not the main component used in routine transfusion.";
    }

    if (containsAny(q, ["whole blood"])) {
      return "Whole blood contains red blood cells, white blood cells, platelets, and plasma. It can be separated into components so one donation can help multiple patients.";
    }

    if (containsAny(q, ["blood component", "components"])) {
      return "Main blood components are:\n\n• Red Blood Cells: carry oxygen\n• Platelets: help clotting\n• Plasma: liquid part with proteins and clotting factors\n• Cryoprecipitate: rich in clotting factors";
    }

    if (containsAny(q, ["storage", "stored", "temperature", "cold chain"])) {
      return "Blood storage requires strict temperature control:\n\n• Red blood cells: usually 2°C to 6°C\n• Platelets: room temperature with gentle agitation\n• Plasma: frozen\n\nCold chain monitoring is important to keep blood safe.";
    }

    if (containsAny(q, ["expiry", "expire", "shelf life"])) {
      return "Blood components have different shelf lives:\n\n• Red blood cells: around 35–42 days depending on preservative\n• Platelets: usually about 5 days\n• Plasma: can be stored frozen for much longer\n\nExpired blood must not be used.";
    }

    if (containsAny(q, ["emergency", "urgent", "accident", "need blood", "critical"])) {
      return "For emergency blood need:\n\n1. Confirm patient blood group\n2. Confirm required units\n3. Contact hospital blood bank immediately\n4. Search compatible donors\n5. Use emergency request system\n6. If blood group is unknown, hospitals may use O- in life-threatening emergencies\n\nFor real emergencies, contact the hospital immediately.";
    }

    if (containsAny(q, ["inventory", "stock", "blood stock"])) {
      return "Blood inventory management tracks available units of each blood group, expiry dates, storage temperature, issued units, and emergency stock levels.";
    }

    if (containsAny(q, ["donor matching", "match donor", "find donor"])) {
      return "Donor matching means finding eligible donors with compatible blood group, good health status, recent donation gap, and availability near the hospital.";
    }

    if (containsAny(q, ["request blood", "blood request", "patient request"])) {
      return "A blood request usually needs patient name, age, gender, blood group, required quantity, hospital name, hospital address, and urgency level.";
    }

    if (containsAny(q, ["issue blood", "issuing blood"])) {
      return "Blood is issued only after verifying request details, checking compatibility, confirming stock availability, and updating inventory records.";
    }

    if (containsAny(q, ["cross match", "crossmatch", "cross matching"])) {
      return "Cross-matching is a laboratory test done before transfusion to check whether donor blood is compatible with the patient's blood. It reduces transfusion reaction risk.";
    }

    if (containsAny(q, ["transfusion", "blood transfusion"])) {
      return "Blood transfusion is the process of giving blood or blood components to a patient. It is done for blood loss, anemia, surgery, trauma, cancer care, and other medical needs.";
    }

    if (containsAny(q, ["reaction", "transfusion reaction"])) {
      return "A transfusion reaction can happen if the body reacts to transfused blood. Symptoms may include fever, chills, rash, breathing difficulty, or pain. Medical staff must be informed immediately.";
    }

    if (containsAny(q, ["donation camp", "camp"])) {
      return "A blood donation camp is an organized event where eligible donors donate blood. Camps need registration, donor screening, collection area, storage system, and emergency support.";
    }

    if (containsAny(q, ["benefits", "why donate"])) {
      return "Blood donation helps save lives. One donation can help patients in accidents, surgeries, anemia, cancer treatment, pregnancy complications, and emergencies.";
    }

    if (containsAny(q, ["before donation", "prepare", "pre donation"])) {
      return "Before donating blood:\n\n• Sleep well\n• Eat a healthy meal\n• Drink water\n• Avoid alcohol\n• Carry ID proof\n• Tell staff about medicines or illness\n• Do not donate if you feel sick";
    }

    if (containsAny(q, ["food", "eat", "diet"])) {
      return "Before and after donation, eat iron-rich and healthy foods like leafy vegetables, beans, eggs, meat, fruits, and enough water. Avoid donating on an empty stomach.";
    }

    return "I can help with blood-bank related topics such as donation eligibility, blood groups, compatibility, plasma, platelets, hemoglobin, storage, emergency blood requests, transfusion basics, donor care, and inventory management.\n\nPlease ask a specific blood-related question, for example:\n• Can O+ donate to A+?\n• Who can donate blood?\n• What is plasma?\n• How is blood stored?\n• Can I donate after fever?";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input,
    };

    const botMessage = {
      sender: "bot",
      text: getBotReply(input),
    };

    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-red-700 to-red-500 flex flex-col">
      <div className="bg-black text-white px-8 py-5 flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-3">
          <FaRobot className="text-red-500 text-3xl" />
          <h1 className="text-2xl font-bold">Blood Bank AI Assistant</h1>
        </div>

        <button
          onClick={() => navigate("/dashboard")}
          className="bg-red-600 px-5 py-2 rounded-lg hover:bg-red-700"
        >
          Back to Dashboard
        </button>
      </div>

      <div className="flex-1 max-w-5xl w-full mx-auto p-6">
        <div className="bg-white/95 rounded-3xl shadow-2xl h-[75vh] flex flex-col overflow-hidden">
          <div className="bg-red-600 text-white p-5">
            <h2 className="text-xl font-bold">Ask anything about blood care</h2>
            <p className="text-sm opacity-90">
              Example: Can O+ donate to A+? Who can donate blood? How is blood stored?
            </p>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-5 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender === "bot" && (
                  <div className="bg-red-600 text-white p-3 rounded-full">
                    <FaRobot />
                  </div>
                )}

                <div
                  className={`max-w-[75%] p-4 rounded-2xl shadow whitespace-pre-line ${
                    msg.sender === "user"
                      ? "bg-red-600 text-white rounded-br-none"
                      : "bg-white text-gray-800 rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>

                {msg.sender === "user" && (
                  <div className="bg-black text-white p-3 rounded-full">
                    <FaUser />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="p-5 bg-white border-t flex gap-3">
            <input
              type="text"
              placeholder="Ask about blood donation, compatibility, storage..."
              className="flex-1 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-red-600"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />

            <button
              onClick={handleSend}
              className="bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 flex items-center gap-2"
            >
              <FaPaperPlane />
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}