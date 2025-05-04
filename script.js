const questions = [
    {
      question: "Who is Nigeria’s current Chief of Justice?",
      options: ["Walter Onnoghen", "Tanko Muhammad", "Olukayode Ariwoola", "Ibrahim Tanko"],
      answer: "Olukayode Ariwoola"
    },
    {
      question: "In Nigeria, democracy day is now celebrated on:",
      options: ["May 29", "October 1", "June 12", "June 1"],
      answer: "June 12"
    },
    {
      question: "Which is the most populated country in the world?",
      options: ["India", "USA", "China", "Indonesia"],
      answer: "China"
    },
    {
      question: "Nigeria’s Inspector General of Police is?",
      options: ["Usman Alkali Baba", "Kayode Egbetokun", "Mohammed Adamu", "Ibrahim Idris"],
      answer: "Kayode Egbetokun"
    },
    {
      question: "Which is the second-largest continent in the world?",
      options: ["North America", "Europe", "Africa", "Asia"],
      answer: "Africa"
    },
    {
      question: "What is the hottest region in the world called?",
      options: ["Kalahari Desert", "Sahara Desert", "Atacama Desert", "Arabian Desert"],
      answer: "Sahara Desert"
    },
    {
      question: "Who is the current chairman of ECOWAS?",
      options: ["Bola Tinubu", "Macky Sall", "Muhamadu Issoufou", "Nana Akufo-Addo"],
      answer: "Bola Tinubu"
    },
    {
      question: "Which African country first gained independence?",
      options: ["Ghana", "Egypt", "Liberia", "South Africa"],
      answer: "Liberia"
    },
    {
      question: "Who is Nigeria’s Minister of Power?",
      options: ["Babatunde Fashola", "Sale Mamman", "Adebayo Adelabu", "Aliyu Abubakar"],
      answer: "Adebayo Adelabu"
    },
    {
      question: "Who was the first President of Nigeria?",
      options: ["Tafawa Balewa", "Nnamdi Azikiwe", "Yakubu Gowon", "Olusegun Obasanjo"],
      answer: "Nnamdi Azikiwe"
    },
    {
      question: "Who is the current Sultan of the Sokoto Caliphate?",
      options: ["Abubakar Shekau", "Sa’ad Abubakar", "Muhammadu Salad Abubakar", "Sani Abacha"],
      answer: "Sa’ad Abubakar"
    },
    {
      question: "Who is the current Governor of the Central Bank of Nigeria?",
      options: ["Godwin Emefiele", "Olayemi Cardoso", "Sanusi Lamido", "Okonjo Iweala"],
      answer: "Olayemi Cardoso"
    },
    {
      question: "What does the acronym ECOMOG mean?",
      options: [
        "ECOWAS Communication Group",
        "Economic Committee for Monitoring Oil & Gas",
        "Economic Community Monitoring Group",
        "Economic Coalition for Member States"
      ],
      answer: "Economic Community Monitoring Group"
    },
    {
      question: "Which is the highest mountain in Africa?",
      options: ["Mount Kenya", "Mount Cameroon", "Mount Kilimanjaro", "Mount Elgon"],
      answer: "Mount Kilimanjaro"
    },
    {
      question: "Who is the current Senate President of Nigeria?",
      options: ["Ahmed Lawan", "Bukola Saraki", "Godswill Akpabio", "Rochas Okorocha"],
      answer: "Godswill Akpabio"
    },
    {
      question: "Which continent is the smallest in the world?",
      options: ["Europe", "Australia", "Antarctica", "South America"],
      answer: "Australia"
    },
    {
      question: "Who formed the first political party in Nigeria?",
      options: ["Nnamdi Azikiwe", "Obafemi Awolowo", "Herbert Macaulay", "Tafawa Balewa"],
      answer: "Herbert Macaulay"
    },
    {
      question: "What was the first political party in Nigeria?",
      options: ["NCNC", "AG", "NNDP", "NPC"],
      answer: "NNDP"
    },
    {
      question: "How many Local Government Areas are in Nigeria?",
      options: ["768", "774", "780", "771"],
      answer: "774"
    },
    {
      question: "Which state in Nigeria has the largest number of Local Government Areas?",
      options: ["Lagos", "Kaduna", "Kano", "Rivers"],
      answer: "Kano"
    },
    {
      question: "What does the term MDGs stand for?",
      options: [
        "Millennium Democratic Goals",
        "Modern Development Goals",
        "Millennium Development Goals",
        "Multi-level Development Goals"
      ],
      answer: "Millennium Development Goals"
    },
    {
      question: "How many countries constitute ECOWAS?",
      options: ["15", "16", "13", "10"],
      answer: "15"
    },
    {
      question: "General Yakubu Gowon created how many states in Nigeria in May 1967?",
      options: ["10", "12", "8", "19"],
      answer: "12"
    },
    {
      question: "Who was the first Executive President of Nigeria?",
      options: ["Olusegun Obasanjo", "Goodluck Jonathan", "Shehu Shagari", "Nnamdi Azikiwe"],
      answer: "Shehu Shagari"
    },
    {
      question: "Who is the current Managing Director of NNPC?",
      options: ["Mele Kyari", "Andrew Yakubu", "Maikanti Baru", "Timipre Sylva"],
      answer: "Mele Kyari"
    },
    {
      question: "Who was the longest-serving Senate President of Nigeria?",
      options: ["David Mark", "Joseph Wayas", "Bukola Saraki", "Ken Nnamani"],
      answer: "David Mark"
    },
    {
      question: "Which state in Nigeria has the smallest number of LGAs?",
      options: ["Ekiti", "Bayelsa", "FCT", "Zamfara"],
      answer: "Bayelsa"
    },
    {
      question: "Who is the current INEC Chairman?",
      options: ["Attahiru Jega", "Mahmood Yakubu", "Festus Okoye", "Amina Zakari"],
      answer: "Mahmood Yakubu"
    },
    {
      question: "Which is the second most populated country in the world?",
      options: ["Nigeria", "China", "India", "USA"],
      answer: "India"
    },
    {
      question: "What is Nigeria's official language?",
      options: ["French", "Yoruba", "Hausa", "English"],
      answer: "English"
    },
    {
      question: "When was Nigeria declared and recognized as a nation?",
      options: ["Oct 1, 1959", "Oct 1, 1960", "May 29, 1999", "Jan 1, 1961"],
      answer: "Oct 1, 1960"
    },
    {
      question: "How many continents are there in the world?",
      options: ["6", "5", "7", "8"],
      answer: "7"
    },
    {
      question: "How many senators make up the National Assembly of Nigeria?",
      options: ["108", "109", "110", "111"],
      answer: "109"
    },
    {
      question: "How many members does the House of Representatives of Nigeria have?",
      options: ["350", "360", "370", "365"],
      answer: "360"
    },
    {
      question: "Who was the first female NAFDAC Chairman?",
      options: ["Ngozi Okonjo-Iweala", "Dora Akunyili", "Diezani Alison-Madueke", "Kema Chikwe"],
      answer: "Dora Akunyili"
    },
    {
      question: "Which is the highest court of law in Nigeria?",
      options: ["Court of Appeal", "High Court", "Supreme Court", "Federal Court"],
      answer: "Supreme Court"
    },
    {
      question: "Which is the oldest degree-awarding university in Nigeria?",
      options: ["UNILAG", "ABU Zaria", "UNN Nsukka", "University of Ibadan"],
      answer: "University of Ibadan"
    },
    {
      question: "What is the most common natural resource in Nigeria?",
      options: ["Coal", "Petroleum", "Gold", "Tin"],
      answer: "Petroleum"
    },
    {
      question: "How many countries are in Europe?",
      options: ["50", "48", "44", "47"],
      answer: "44"
    },
    {
      question: "Who was the first African Bishop?",
      options: ["Tunde Bakare", "Samuel Ajayi Crowther", "Benson Idahosa", "Matthew Kukah"],
      answer: "Samuel Ajayi Crowther"
    },
    {
      question: "Which country was the last to win independence from colonial rule?",
      options: ["Namibia", "Angola", "South Africa", "Zimbabwe"],
      answer: "Namibia"
    },
    {
      question: "Where was crude oil first discovered in Nigeria?",
      options: ["Warri", "Port Harcourt", "Oloibiri", "Bonny"],
      answer: "Oloibiri"
    },
    {
      question: "Who was the first Nigerian to become a Nobel Laureate?",
      options: ["Chinua Achebe", "Wole Soyinka", "Ben Okri", "Chimamanda Adichie"],
      answer: "Wole Soyinka"
    },
    {
      question: "Who is the Nigerian current speaker of the House of Representatives?",
      options: ["Femi Gbajabiamila", "Yakubu Dogara", "Tajudeen Abbas", "Aminu Tambuwal"],
      answer: "Tajudeen Abbas"
    },
    {
      question: "How long does it take Mars to complete one revolution?",
      options: ["365 days", "687 days", "225 days", "730 days"],
      answer: "687 days"
    },
    {
      question: "What did the black shield in the Nigerian coat of arms stand for?",
      options: ["The oil wealth", "Nigeria’s strength", "Nigeria’s fertile soil", "The military force"],
      answer: "Nigeria’s fertile soil"
    },
    {
          question: "The practice of raising plants and animals is called",
          options: ["Agriculture", "Agronomy","Horticulture", "Silviculture"],
          answer: "Agriculture"
        },
        {
          question: "Agriculture word derived from",
          options: ["Latin", "Greek","French", "English"],
          answer: "Latin"
        },
        {
          question: "Fire helped in the cultivation of:", 
          options: ["Fruit plants", "Fibre Plant", "Drug yielding plants", "Grain yielding plants"],
          answer: "Grain yielding plants"
        },
        { question: "South East Asia is thought to be centre for the origin of:", 
            option: ["Rice", "Rice and Sugarcane", "Rice, Sugarcane and Mango", "Rice, Sugarcane, Mango and Banana"], 
            answer: "Rice, Sugarcane, Mango and Banana"
         },
        { question: "The physical appearance of soil as indicated by the arrangement of individual particle is known as",
         options: ["type", "Capillarity", "texture", "structure"], 
         answer: "structure"
         },
      { question: "A crop improvement practice where varieties of crops with desirable qualities are imported to a new area is",
         options: ["Selection", "Guarantine", "hybridisation", "introduction"],
          answer: "introduction" 
        },
      { question: "A crop which is self-fertilized is called", 
        options: ["Hybrid", "pure-line", "mutant", "recessive"],
         answer: "Hybrid" 
        },
      { question: "Which of the following mineral element is essential for chlorophyll formulation?", 
        options: ["sodium", "molybdenum", "boron", "manganese"], 
        answer: "manganese"
    },
      { question: "What is the effect of nematode on crop plant?", 
        options: ["the plant wilts", "flowering is induced", "the roots grow faster", "leaves develop answer mosaic appearance"], 
        answer: "the plant wilts" 
    },
      { question: "Layering in crop production is advantageous because", 
        options: ["offspring perform better than their parents", "pollination agents abound to ensure its success", "possible failure of fertilization is avoided", "variability arises in propagates"], 
        answer: "possible failure of fertilization is avoided" 
    },
      { question: "The side effects of crop chemical control does NOT include", 
        options: ["improved quality of farm produce", "environmental pollution", "poisoning of insect", "destruction of the pathogen"],
         answer: "improved quality of farm produce"
        },
      { question: "The common name for Pennisetum purpureum is ___ grass", 
        options: ["bahama", "carpet", "elephant", "guinea"],
         answer: "elephant"
        },
      { question: "Streak disease of maize is caused by", 
        options: ["virus", "nematode", "fungus", "bacterium"], 
        answer: "virus"
    },
      { question: "The process of removing excess water from an agricultural land is",
         options: ["drainage", "dredging", "infiltration", "percolation"], 
         answer: "drainage" 
        },
      { question: "Which of the following is NOT answer biotic factor affecting agricultural production", 
        options: ["pest", "predator", "soil organism", "soil pH"], 
        answer: "soil pH"
    },
      { question: "The factor that influences plant nutrient availability is", 
        options: ["relative humidity", "soil pH", "sunlight", "temperature"],
         answer: "soil pH"
        },
      { question: "Nitrification can best be explained as the conversion of  _____ to _____ by bacteria",
         options: ["nitrites, nitrates", "nitrates, nitrites", "nitrates, gas N", "nitrates, compounds"], 
         answer: "nitrites, nitrates" 
        },
      { question: "All the following are cereals crops except", 
        options: ["maize", "millet", "cowpea", "rice"], 
        answer: "cowpea"
    },
      { question: "Genetic characteristics are passed from parents to offspring through the", 
        options: ["chromosome", "centromere", "gene", "zygote"], 
        answer: "chromosome"
     },
      { question: "The best farm tool for transplanting seedlings is", 
        options: ["hand fork", "shovel", "go-to-hell", "hand trowel"], 
        answer: "hand trowel"
    },
      { question: "Chlorosis observed along veins of leaves is a characteristic symptoms for the deficiency of", 
        options: ["magnesium", "nitrogen", "potassium", "sulphur"], 
        answer: "magnesium"
    },
      { question: "Organisms which transmit a disease organism to crops are called", 
        options: ["parasite", "hosts", "bacteria", "vectors"], 
        answer: "vectors"
    },
      { question: "Soil profile is the", 
        options: ["arrangement of differnt soil particles in different layers", "chemical composition of different layers of soil", "colours exhibited by different layers of soil", "physical composition of different soil layers"],
         answer: "arrangement of differnt soil particles in different layers" 
        },
      { question: "Plants grown mainly for decoration are called", 
        options: ["beautifiers", "flowers", "hedges", "ornamentals"], 
        answer: "ornamentals"
     },
      { question: "The most damaging effect of sucking insects on crops is", 
        options: ["consumption of plant tissues", "complete dehydration of crop plants", "lowering of nutritive value of seeds", "transmission of plant diseases"], 
        answer: "transmission of plant diseases"
    },
      { question: "Which weed is easily dispersed by man?", 
        options: ["Aspilia Africana", "Boerhaavia diffusa", "bougainvilla spp", "Emilia sonchifolia"], 
        answer:  "Emilia sonchifolia"
    },
      { question: "Which crop can be propagated both sexually and vegetatively?", 
        options: ["maize", "millet", "oil palm", "groundnut"], 
        answer:  "oil palm"
    },
      { question: "The small sized beetles which bore into maize grains in storage are called", 
        options: ["borers", "caterpillars", "grubs", "nymphs"], 
        answer: "borers" 
    },
      { question: "The removal of an unproductive cow from the herd is known as", 
        options: ["Castration", "Culling", "Dubbing", "isolation"],
         answer: "Castration"
        },
      { question: "The restriction of animals with rope to a peg is known as", 
        options: ["Tagging", "tattooing", "Tethering", "Tieing"], 
        answer: "Tethering"
    },
      { question: "The practice of mating closely related animals with one another is called", 
        options: ["Cross Breeding", "hybridization", "Inbreeding", "Line breeding"], 
        answer: "Inbreeding"
    },
      { question: "The hormone responsible for female secondary characteristics is called", 
        options: ["progesterone", "relaxin", "Testosterone", "oestrogen"], 
        answer: "oestrogen"
    },
      { question: "Incubators are used to", 
        options: ["hatch eggs", "heat chicks", "stimulate growth", "store eggs"], 
        answer: "hatch eggs"
     },
      { question: "Common feature of nomadic agriculture is ", 
        options: ["bush fallowing", "the primitive husbandry of crops", "the growing of crops amd rearing of animals", " the unsettled husbandry of animals"], 
        answer: "the unsettled husbandry of animals"
     },
      { question: "Which is NOT an animal disease?", 
        options: ["Cocidiosis", "Newcastle disease", "Rinderpest", "Dumping off"], 
        answer: "Dumping off"
    },
      { question: "The most important reason for grouping cattle, sheep and goats together in the study of farm animals is that they are",
         options: ["work animals", "viviparous", "ruminants", "eat grass"], 
        answer: "ruminants"
    },
    { question: "Roughage fed to farm animals is charcterized by avery high content of ", 
        options: ["Fibre", "protein", "fat", "antibodies"],
         answer: "Fibre" 
        },
    { question: "How would you ensure a much faster growth for the chicks that are being prepared for market", 
        options: ["by increasing the quantity of oyster shell in the feed", "by adding a lot of bone meal to their feed", "by increasing the cereal content of their feed", "by feeding them on fish meal as a supplement to the normal feed"], 
        answer: "by feeding them on fish meal as a supplement to the normal feed"
    },
    { question: "The vector for nagana disease in cattle is the ______", 
        options: ["tick", "tsetse fly", "roundworm", "lice"], 
        answer: "tsetse fly"
     },
    { question: "One of the common features of free-range system of poultry keeping is that", 
        options: ["egg production from beds is low", "they involve a high capital input", "the birds are free from poultry disease", "the eggs produced are usually of extra-large grade"], 
        answer: "egg production from beds is low"
    },
    {
        question: "A livestock farmer intends to improve his breeds of cattle. Which of the following should he adopt to achieve his objective?",
        options: ["Crossing, Flushing and creep feeding", "introduction, adlib, feeding and flushing", "cross breeding, branding and creep feeding", "introduction, selection and breeding"],
        answer: "introduction, selection and breeding"
      },
      {
        question: "Litter is often used in poultry keeping to ____",
        options: ["control poultry disease", "protect the birds from predators", "provide a roost for the birds", "provide absorbent layers for the birds’ droppings"],
        answer: "provide absorbent layers for the birds’ droppings"
      },
      {
        question: "What is the name of the organ directly responsible for the respiration of the young of farm animals before birth?",
        options: ["fallopian tube", "placenta", "womb", "Lungs"],
        answer: "placenta"
      },
      {
        question: "Sleeping sickness in farm animals is usually",
        options: ["caused by a trypanosome", "caused by coccidiosis", "transmitted by trypanosomiasis", "transmitted by brucellosis"],
        answer: "caused by a trypanosome"
      },
      {
        question: "Which of the following is not an advantage of artificial insemination?",
        options: ["Semen from one bull can be used to serve many cows", "good qualities of exotic breeds are obtained cheaply", "selected males are used extensively", "infectious diseases are widely transmitted"],
        answer: "infectious diseases are widely transmitted"
      },
      {
        question: "An unproductive animal completely removed from the rest of the stock is said to be",
        options: ["quarantined", "culled", "isolated", "confined"],
        answer: "culled"
      },
      {
        question: "When a farm dies as a result of anthrax disease, it is best to",
        options: ["call a veterinary officer for a post-mortem examination", "throw away the carcass into the bush where animals do not graze.", "cull all other animals on the farm", "cremate the carcass or bury it deeply"],
        answer: "cremate the carcass or bury it deeply"
      },
      {
        question: "If an injured cow bleeds continuously for several hours, it is most likely that the diet being fed to it is deficient in",
        options: ["Vitamin B", "Vitamin C", "Vitamin D", "Vitamin E"],
        answer: "Vitamin C" 
      },
      {
        question: "For artificial insemination to succeed, it must be timed to fall within the oestrus cycle so that",
        options: ["the semen will be virile", "the female will not resist service", "the sperm will survive", "fertilization will take place."],
        answer: "fertilization will take place."
      },
      {
        question: "A famer who applies gypsum on his farmland intends to",
        options: ["decrease soil acidity", "increase soil acidity", "increase microbial activities", "reduce leaching"],
        answer: "decrease soil acidity"
      },
      {
        question: "The essential mineral element necessary for chlorophyll formation is",
        options: ["magnesium", "molybdenum", "sodium", "boron"],
        answer: "magnesium"
      },
      {
        question: "Which of the following is the smallest compartment of the ruminant stomach?",
        options: ["Rumen", "Reticulum", "Omasum", "Abomasum"],
        answer: "Reticulum"
      },
      {
        question: "The 5 carbon sugar compound present in DNA molecule is:",
        options: ["Erythrose", "Deoxyribose", "Ribose", "Ribulose"],
        answer: "Deoxyribose"
      },
      {
        question: "Study of birds which are not classed as poultry is known as",
        options: ["Poultry Science", "Ornithology", "Bird Science", "Poultry Production"],
        answer: "Ornithology"
      },
      {
        question: "Wound does not heal is known as",
        options: ["Maggot wound", "Ulcer", "Infected wound", "Contaminated wound"],
        answer: "Ulcer"
      },
      {
        question: "Which of the following is not a stop codon:",
        options: ["AUG", "UAA", "UGA", "UAG"],
        answer: "AUG"
      },
      {
        question: "The coding sequence within genes that translate into protein is:",
        options: ["Intron", "Exon", "Transposons", "None of the above"],
        answer: "Exon"
      },
      {
        question: "Glucose is:",
        options: ["Filtered, reabsorbed, and secreted", "Filtered, and reabsorbed, but not secreted", "Filtered, and secreted, but not reabsorbed", "Filtered, and neither secreted nor reabsorbed"],
        answer: "Filtered, and reabsorbed, but not secreted"
      },
      {
        question: "In insects, the body part which acts as a protective structure and which provides for the attachment of muscles is known as the",
        options: ["Endoskeleton", "Sclerites", "Abdomen", "Exoskeleton"],
        answer: "Exoskeleton"
      },
      {
        question: "Constant present of a disease or organism in a community-",
        options: ["Epidemic", "Sporadic", "Endemic", "Panzootic"],
        answer: "Endemic"
      },
      {
        question: "Type of transmission caused by physical contact.",
        options: ["direct", "indirect", "contact", "vehicle"],
        answer: "direct"
      },
      {
        question: "Method of carcass disposal are",
        options: ["cremation", "burial", "flamegium", "incineration"],
        answer: "incineration"
      },
      {
        question: "Poultry need one more essential aminoacid ........than cattle",
        options: ["Lysine", "Metheonin", "Glysine", "Cystene"],
        answer: "Cystene"
      },
      {
        question: "Which one is sex linked",
        options: ["dwarfism", "nakedness", "Albinism", "rapid feathering"],
        answer: "rapid feathering"
      },
      {
        question: "Calcium requirement in layer poultry per day is about",
        options: ["0.5 %", "1.5 %", "3.5 %", "10 %"],
        answer: "3.5 %"
      },
      {
        question: "Incubation period if chicken egg",
        options: ["19 days", "23 days", "21 days", "18 days"],
        answer: "21 days"
      },
      {
        question: "Hormone responsible for let down of milk.",
        options: ["Oxytocin", "Prolactine", "Lactate", "Hyluronidase"],
        answer: "Oxytocin"
      },
      {
        question: "Principle object of running dairy farm.",
        options: ["Meat production", "Milk production", "Sale of heifers", "Fodder"],
        answer: "Milk production"
      },
      {
        question: "Length of diestrus period of estrus cycle in bovine is",
        options: ["10 days 89", "13 days", "18 days", "15 days"],
        answer: "15 days"
      },
      {
        question: "Time of ovulation in a cow is",
        options: ["12-24 hrs before the end of estrum", "30-40 hrs after the end of estrum", "About the last day of estrum", "10-15 hrs after the end of estrum"],
        answer: "10-15 hrs after the end of estrum"
      },
      {
        question: "Mutation resulting from replacement of base pair of purinewith purine or pyrimidine with pyrimidine is called as",
        options: ["Transition", "Tansversion", "Translocation", "None of these"],
        answer: "Transition"
      },
      {
        question: "The sudden heritable changes in genetic material is called as",
        options: ["Duplication", "Mutation", "Deletion", "None of these"],
        answer: "Mutation"
      },
      {
        question: "Outward expression of a trait is called",
        options: ["Genotype", "Phenotype", "Karyotype", "all of these"],
        answer: "Phenotype"
      },
      {
        question: "Metallic foreign bodies are mostly recovered from",
        options: ["Esophagus", "Reticulum", "Rumen", "Abomasum"],
        answer: "Reticulum"
      },
      {
        question: "Best time for artificial insemination to get maximum fertility in poultry is",
        options: ["Early morning", "Before noon", "After Noon", "Late evening"],
        answer: "Early morning"
      },
      {
        question: "The brown colour of eggshell is due to which pigments",
        options: ["Carotenoids", "Porphyrin", "Xanthophylls", "None of above"],
        answer: "Porphyrin"
      },
      {
        question: "Stag is the term utilize for",
        options: ["Castrated goat", "Castrated horse", "Castrated sheep", "Castrated pig"],
        answer: "Castrated pig"
      },
      {
        question: "The major input for maximum contribution to cost of milk production",
        options: ["Labour", "Electricity", "Feeding", "Breeding"],
        answer: "Feeding"
      },
      {
        question: "Diploid number of chromosomes in sheep is",
        options: ["60", "54", "38", "64"],
        answer: "54"
      },
      {
        question: "For selection of individuals for traits measured after life, we will prefer",
        options: ["Indirect selection", "Family selection", "Pedigree selection", "Any of these"],
        answer: "Family selection"
      }
      
       
      ];
      
    
  let score = 0;
  let currentQuestionIndex = 0;

  const questionTitle = document.getElementById("question-title");
  const questionText = document.getElementById("question-text");
  const answersContainer = document.querySelector(".answers");
  const loadQuestionButton = document.getElementById("load-question");
  const questionContainer = document.getElementById("question-container");
  const gameOverContainer = document.getElementById("game-over");
  const finalScore = document.getElementById("final-score");
  const restartButton = document.getElementById("restart-game");

  function loadQuestion() {
    const questionNumberInput = document.getElementById("question-number").value;
    const questionNumber = parseInt(questionNumberInput, 10);

    if (isNaN(questionNumber) || questionNumber < 1 || questionNumber > questions.length) {
      alert("Please enter a valid question number.");
      return;
    }

    currentQuestionIndex = questionNumber - 1;
    showQuestion();
  }

  function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
      endGame();
      return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    questionTitle.innerText = `Question ${currentQuestionIndex + 1}`;
    questionText.innerText = currentQuestion.question;

    answersContainer.innerHTML = '';
    currentQuestion.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      button.addEventListener("click", () => handleAnswer(option, currentQuestion));
      answersContainer.appendChild(button);
    });

    questionContainer.classList.remove("hide");
  }

function handleAnswer(selectedAnswer, currentQuestion) {
    const userAnswer = selectedAnswer.trim().toLowerCase();
    const correct = currentQuestion.answer.trim().toLowerCase();
  
    const buttons = answersContainer.querySelectorAll("button");
  
    buttons.forEach(button => {
      const answerText = button.innerText.trim().toLowerCase();
      
      // Disable all buttons
      button.disabled = true;
  
      if (answerText === correct) {
        button.classList.add("correct");
      } else {
        button.classList.add("wrong");
      }
    });
  
    // if (userAnswer === correct) {
    //   score += 1000;
    // } else {
        
    // }
    
  
  }
  
  function endGame() {
    finalScore.innerText = score;
    gameOverContainer.classList.remove("hide");
    questionContainer.classList.add("hide");
  }

  function restartGame() {
    score = 0;
    currentQuestionIndex = 0;
    gameOverContainer.classList.add("hide");
    questionContainer.classList.add("hide");
    document.getElementById("question-number").value = '';
  }

  loadQuestionButton.addEventListener("click", loadQuestion);
  restartButton.addEventListener("click", restartGame);


