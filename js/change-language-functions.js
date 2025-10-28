var languageContent = {
    greek: {
      languageBtn: "EL",
      mainTitle: "Μεταγραφή Ληξιαρχικής Πράξης Γάμου Έλληνα Πολίτη στο Εξωτερικό",
      pageTitle: "Μεταγραφή Ληξιαρχικής Πράξης Γάμου Έλληνα Πολίτη στο Εξωτερικό",
      infoTitle: "Πληροφορίες για την μεταγραφή ληξιαρχικής πράξης γάμου Έλληνα πολίτη στο εξωτερικό 2025",
      subTitle1: "Αυτό το ερωτηματολόγιο μπορεί να σας βοηθήσει να βρείτε αν δικαιούστε μεταγραφή ληξιαρχικής πράξης γάμου Έλληνα πολίτη στο εξωτερικό.",
      subTitle2: "H συμπλήρωση του ερωτηματολογίου δεν απαιτεί παραπάνω από 10 λεπτά.",
      subTitle3: "Δεν θα αποθηκεύσουμε ούτε θα μοιραστούμε τις απαντήσεις σας.",
      backButton: "Πίσω",
      nextQuestion: "Επόμενη Ερώτηση",
      biggerCursor: "Μεγαλύτερος Δρομέας",
      bigFontSize: "Μεγάλο Κείμενο",
      readAloud: "Ανάγνωση",
      changeContrast: "Αντίθεση",
      readingMask: "Μάσκα Ανάγνωσης",
      footerText: "Αυτό το έργο δημιουργήθηκε για τις ανάγκες της μιας εργασίας κατά τη διάρκεια των προπτυχιακών μας σπουδών στο Πανεπιστήμιο Μακεδονίας. Η ομάδα μας αποτελείται από 2 φοιτητές της Εφαρμοσμένης Πληροφορικής:",
      and: "και",
      student1: "Φοίβος Λαζαρίδης",
      student2: "Σταυρή Ουρανία-Ραφαηλία",
      startBtn:"Ας ξεκινήσουμε",
      chooseAnswer: "Επιλέξτε την απάντησή σας",
      oneAnswer: "Μπορείτε να επιλέξετε μόνο μία επιλογή.",
      errorAn: "Λάθος:",
      choose: "Πρέπει να επιλέξετε μια απάντηση",
    },
    english: {
      languageBtn: "EN",
      mainTitle: "Transcription of a Marriage Certificate of a Greek Citizen Abroad",
      pageTitle: "Transcription of a Marriage Certificate of a Greek Citizen Abroad",
      infoTitle: "Information on the transcription of a marriage certificate of a Greek citizen abroad 2025",
      subTitle1: "This questionnaire can help you determine if you are eligible for transcription of a marriage certificate of a Greek citizen abroad.",
      subTitle2: "Completing the questionnaire should not take more than 10 minutes.",
      subTitle3: "We will neither store nor share your answers.",
      backButton: "Βack",
      nextQuestion: "Next Question",
      biggerCursor: "Bigger Cursor",
      bigFontSize:" Big Font Size",
      readAloud: "Read Aloud",
      changeContrast:" Change Contrast",
      readingMask:" Reading Mask",
      footerText: "This project was created for the needs of an assignment at the University of Macedonia. Our team consists of 2 students of Applied Informatics:",
      and: "and",
      student1: "Foivos Lazaridis",
      student2: "Stavri Ourania-Rafailia",
      startBtn:"Let's start",
      chooseAnswer: "Choose your answer",
      oneAnswer: "You can choose only one option.",
      errorAn: "Error:",
      choose: "You must choose one option",
    }
};
  
// Retrieve the selected language from localStorage or set default to "greek"
var currentLanguage = localStorage.getItem("preferredLanguage") || "greek";

function toggleLanguage() {
    currentLanguage = currentLanguage === "greek" ? "english" : "greek";
    localStorage.setItem("preferredLanguage", currentLanguage);
    updateContent();
}

function updateContent() {
    var components = document.querySelectorAll(".language-component");
     
    components.forEach(function (component) {
        var componentName = component.dataset.component;
        component.textContent = languageContent[currentLanguage][componentName];
    });
}

// Initialize the content based on the selected language
updateContent();