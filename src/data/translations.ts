import type { Language } from '../store/gameStore';

export const translations = {
    en: {
        appTitle: "Fasal Fortune",
        cash: "Cash",
        stress: "Stress",
        risk: "Risk",
        cropHealth: "Crop Health",
        season: "Season",
        next: "Next",
        restart: "Restart Game",
        gameOver: "Game Over",
        scenarios: {
            start_season: {
                title: "New Season Begins",
                text: "It is the sowing season. The soil is ready. You have ₹5000. You need to buy seeds.",
                choices: {
                    buy_high_yield: "Buy High-Yield Seeds (₹2000)",
                    buy_standard: "Buy Standard Seeds (₹500)"
                }
            },
            weather_report: {
                title: "Weather Uncertainty",
                text: "The radio predicts erratic rainfall. There is a risk of drought.",
                choices: {
                    buy_insurance: "Buy Insurance (₹1000)",
                    skip_insurance: "No, save money"
                }
            },
            pest_attack: {
                title: "Pest Attack!",
                text: "Locusts have been spotted! They might attack your crops.",
                choices: {
                    buy_pesticide: "Buy Strong Pesticide (₹1500)",
                    natural_remedy: "Home Remedies (Free)"
                }
            },
            harvest_time: {
                title: "Harvest Day",
                text: "Crops are ready. Market prices are average.",
                choices: {
                    sell_now: "Sell Immediately",
                    wait_for_price: "Store & Wait"
                }
            },
            market_fluctuation: {
                title: "Market Fluctuation",
                text: "Prices dropped slightly. Storage costs are rising.",
                choices: {
                    sell_low: "Sell Now",
                    wait_more: "Wait More (Risk)"
                }
            },
            money_lender: {
                title: "Financial Crunch",
                text: "You need extra cash for machinery. The bank requires paperwork, the moneylender gives cash instantly but at high interest.",
                choices: {
                    bank_loan: "Take Bank Loan (Low Interest)",
                    money_lender: "Money Lender (High Interest)"
                }
            },
            family_emergency: {
                title: "Family Emergency",
                text: "A family member is sick and needs hospital care.",
                choices: {
                    pay_hospital: "Pay Medical Bills (₹2000)",
                    ignore_health: "Use Home Treatment (Risk)"
                }
            },
            gov_scheme: {
                title: "Government Scheme",
                text: "The government announced a subsidy for fertilizers.",
                choices: {
                    apply_scheme: "Apply (Takes time)",
                    buy_market: "Buy from Market (Fast)"
                }
            }
        }
    },
    hi: {
        appTitle: "फसल किस्मत",
        cash: "नकद",
        stress: "तनाव",
        risk: "जोखिम",
        cropHealth: "फसल सेहत",
        season: "मौसम",
        next: "अगला",
        restart: "फिर से शुरू करें",
        gameOver: "खेल समाप्त",
        scenarios: {
            start_season: {
                title: "नए मौसम की शुरुआत",
                text: "बुवाई का समय है। मिट्टी तैयार है। बीज चुनें।",
                choices: {
                    buy_high_yield: "उच्च उपज बीज (₹2000)",
                    buy_standard: "मानक बीज (₹500)"
                }
            },
            weather_report: {
                title: "मौसम की अनिश्चितता",
                text: "अनियमित बारिश की संभावना है।",
                choices: {
                    buy_insurance: "बीमा खरीदें (₹1000)",
                    skip_insurance: "पैसे बचाएं"
                }
            },
            pest_attack: {
                title: "कीट का हमला!",
                text: "टिड्डियों का खतरा है।",
                choices: {
                    buy_pesticide: "कीटनाशक (₹1500)",
                    natural_remedy: "घरेलू उपचार (मुफ्त)"
                }
            },
            harvest_time: {
                title: "कटाई का दिन",
                text: "फसल तैयार है। बाजार भाव औसत हैं।",
                choices: {
                    sell_now: "तुरंत बेचें",
                    wait_for_price: "भंडारण करें"
                }
            },
            market_fluctuation: {
                title: "बाजार में उतार-चढ़ाव",
                text: "कीमतें थोड़ी गिरी हैं।",
                choices: {
                    sell_low: "अभी बेचें",
                    wait_more: "इंतजार करें"
                }
            },
            money_lender: {
                title: "वित्तीय संकट",
                text: "मशीनरी के लिए पैसे चाहिए। बैंक में कागज देने होंगे, साहूकार तुरंत नकद देता है पर ब्याज ज्यादा है।",
                choices: {
                    bank_loan: "बैंक लोन (कम ब्याज)",
                    money_lender: "साहूकार (ज्यादा ब्याज)"
                }
            },
            family_emergency: {
                title: "पारिवारिक आपातकाल",
                text: "परिवार का सदस्य बीमार है। अस्पताल जाना होगा।",
                choices: {
                    pay_hospital: "बिल भरें (₹2000)",
                    ignore_health: "घरेलू इलाज (जोखिम)"
                }
            },
            gov_scheme: {
                title: "सरकारी योजना",
                text: "सरकार ने खाद पर सब्सिडी की घोषणा की है।",
                choices: {
                    apply_scheme: "आवेदन करें",
                    buy_market: "बाजार से खरीदें"
                }
            }
        }
    },
    mr: {
        appTitle: "पीक पाणी",
        cash: "पैसे",
        stress: "तणाव",
        risk: "धोका",
        cropHealth: "पिकांचे आरोग्य",
        season: "हंगाम",
        next: "पुढील",
        restart: "पुन्हा सुरू करा",
        gameOver: "खेळ संपला",
        scenarios: {
            start_season: {
                title: "नवीन हंगाम",
                text: "पेरणीची वेळ आहे. बियाणे निवडा.",
                choices: {
                    buy_high_yield: "चांगले बियाणे (₹2000)",
                    buy_standard: "साधे बियाणे (₹500)"
                }
            },
            weather_report: {
                title: "हवामान",
                text: "पाऊस अनिश्चित आहे.",
                choices: {
                    buy_insurance: "विमा घ्या (₹1000)",
                    skip_insurance: "पैसे वाचवा"
                }
            },
            pest_attack: {
                title: "कीटक हल्ला!",
                text: "टोळधाड येण्याची शक्यता आहे.",
                choices: {
                    buy_pesticide: "कीटकनाशक (₹1500)",
                    natural_remedy: "घरगुती उपाय"
                }
            },
            harvest_time: {
                title: "कापणी",
                text: "पीक तयार आहे.",
                choices: {
                    sell_now: "लगेच विका",
                    wait_for_price: "साठवून ठेवा"
                }
            },
            market_fluctuation: {
                title: "बाजारभाव",
                text: "भाव पडले आहेत.",
                choices: {
                    sell_low: "आता विका",
                    wait_more: "वाट पहा"
                }
            },
            money_lender: {
                title: "पैशांची गरज",
                text: "यंत्रासाठी पैसे हवेत. बँक कागदपत्रे मागते, सावकार लगेच देतो पण व्याज जास्त.",
                choices: {
                    bank_loan: "बँक कर्ज",
                    money_lender: "सावकार"
                }
            },
            family_emergency: {
                title: "आणीबाणी",
                text: "घरातील व्यक्ती आजारी आहे.",
                choices: {
                    pay_hospital: "दवाखाना खर्च (₹2000)",
                    ignore_health: "घरगुती उपचार"
                }
            },
            gov_scheme: {
                title: "सरकारी योजना",
                text: "खतावर सबसिडी आहे.",
                choices: {
                    apply_scheme: "अर्ज करा",
                    buy_market: "बाजारातून घ्या"
                }
            }
        }
    },
    bn: {
        appTitle: "ফসলের ভাগ্য",
        cash: "নগদ",
        stress: "চাপ",
        risk: "ঝুঁকি",
        cropHealth: "ফসলের স্বাস্থ্য",
        season: "ঋতু",
        next: "পরবর্তী",
        restart: "পুনরায় শুরু",
        gameOver: "খেলা সমাপ্ত",
        scenarios: {
            start_season: {
                title: "নতুন মৌসুম",
                text: "বীজ বপনের সময়। মাটি প্রস্তুত।",
                choices: {
                    buy_high_yield: "উন্নত বীজ (₹২০০০)",
                    buy_standard: "সাধারণ বীজ (₹৫০০)"
                }
            },
            weather_report: {
                title: "আবহাওয়া বার্তা",
                text: "অনিশ্চিত বৃষ্টির পূর্বাভাস।",
                choices: {
                    buy_insurance: "বীমা কিনুন (₹১০০০)",
                    skip_insurance: "টাকা বাঁচান"
                }
            },
            pest_attack: {
                title: "পোকার আক্রমণ",
                text: "পঙ্গপাল দেখা গেছে।",
                choices: {
                    buy_pesticide: "কীটনাশক (₹১৫০০)",
                    natural_remedy: "ঘরোয়া প্রতিকার"
                }
            },
            harvest_time: {
                title: "ফসল কাটার দিন",
                text: "ফসল প্রস্তুত। বাজার দর সাধারণ।",
                choices: {
                    sell_now: "এখনই বিক্রি করুন",
                    wait_for_price: "মজুদ করুন"
                }
            },
            market_fluctuation: {
                title: "বাজারের ওঠানামা",
                text: "দাম কিছুটা কমেছে।",
                choices: {
                    sell_low: "এখন বিক্রি করুন",
                    wait_more: "অপেক্ষা করুন"
                }
            },
            money_lender: {
                title: "আর্থিক সংকট",
                text: "টাকার প্রয়োজন। ব্যাংক সময় নেবে, মহাজন দ্রুত দেবে কিন্তু সুদ বেশি।",
                choices: {
                    bank_loan: "ব্যাংক ঋণ",
                    money_lender: "মহাজন"
                }
            },
            family_emergency: {
                title: "পারিবারিক সমস্যা",
                text: "পরিবারের সদস্য অসুস্থ।",
                choices: {
                    pay_hospital: "হাসপাতাল খরচ (₹২০০০)",
                    ignore_health: "ঘরোয়া চিকিৎসা"
                }
            },
            gov_scheme: {
                title: "সরকারি প্রকল্প",
                text: "সারের ওপর ভর্তুকি ঘোষণা।",
                choices: {
                    apply_scheme: "আবেদন করুন",
                    buy_market: "বাজার থেকে কিনুন"
                }
            }
        }
    },
    te: {
        appTitle: "పంట సంపద",
        cash: "డబ్బు",
        stress: "ఒత్తిడి",
        risk: "ప్రమాదం",
        cropHealth: "పంట ఆరోగ్యం",
        season: "సీజన్",
        next: "తర్వాత",
        restart: "మళ్ళీ ఆడండి",
        gameOver: "ఆట ముగిసింది",
        scenarios: {
            start_season: {
                title: "కొత్త సీజన్",
                text: "విత్తనాలు వేసే సమయం. నేల సిద్ధంగా ఉంది.",
                choices: {
                    buy_high_yield: "మంచి విత్తనాలు (₹2000)",
                    buy_standard: "సాధారణ విత్తనాలు (₹500)"
                }
            },
            weather_report: {
                title: "వాతావరణం",
                text: "వర్షాలు అనిశ్చితంగా ఉన్నాయి.",
                choices: {
                    buy_insurance: "బీమా కొనండి (₹1000)",
                    skip_insurance: "డబ్బు ఆదా చేయండి"
                }
            },
            pest_attack: {
                title: "కీటకాల దాడి",
                text: "మిడతల ముప్పు ఉంది.",
                choices: {
                    buy_pesticide: "పురుగుమందు (₹1500)",
                    natural_remedy: "సహజ నివారణ"
                }
            },
            harvest_time: {
                title: "పంట కోత",
                text: "పంట సిద్ధంగా ఉంది.",
                choices: {
                    sell_now: "ఇప్పుడే అమ్మండి",
                    wait_for_price: "నిల్వ చేయండి"
                }
            },
            market_fluctuation: {
                title: "మార్కెట్ ధరలు",
                text: "ధరలు తగ్గాయి.",
                choices: {
                    sell_low: "అమ్మేయండి",
                    wait_more: "వేచి ఉండండి"
                }
            },
            money_lender: {
                title: "డబ్బు అవసరం",
                text: "యంత్రాలకు డబ్బు కావాలి. బ్యాంక్ లోన్ ఆలస్యం, వడ్డీ వ్యాపారి వెంటనే ఇస్తాడు.",
                choices: {
                    bank_loan: "బ్యాంకు రుణం",
                    money_lender: "వడ్డీ వ్యాపారి"
                }
            },
            family_emergency: {
                title: "కుటుంబ సమస్య",
                text: "ఇంట్లో ఒకరు అనారోగ్యంతో ఉన్నారు.",
                choices: {
                    pay_hospital: "ఆసుపత్రి ఖర్చు (₹2000)",
                    ignore_health: "ఇంటి వైద్యం"
                }
            },
            gov_scheme: {
                title: "ప్రభుత్వ పథకం",
                text: "ఎరువులపై సబ్సిడీ.",
                choices: {
                    apply_scheme: "దరఖాస్తు చేయండి",
                    buy_market: "మార్కెట్ లో కొనండి"
                }
            }
        }
    },
    ta: {
        appTitle: "விவசாய வளம்",
        cash: "பணம்",
        stress: "மன அழுத்தம்",
        risk: "ஆபத்து",
        cropHealth: "பயிர் நலம்",
        season: "பருவம்",
        next: "அடுத்து",
        restart: "மீண்டும் தொடங்கு",
        gameOver: "ஆட்டம் முடிந்தது",
        scenarios: {
            start_season: {
                title: "புதிய பருவம்",
                text: "விதைப்பு காலம். மண் தயாராக உள்ளது.",
                choices: {
                    buy_high_yield: "சிறந்த விதைகள் (₹2000)",
                    buy_standard: "சாதாரண விதைகள் (₹500)"
                }
            },
            weather_report: {
                title: "வானிலை",
                text: "மழை நிச்சயமற்றது.",
                choices: {
                    buy_insurance: "காப்பீடு (₹1000)",
                    skip_insurance: "பணம் சேமிக்க"
                }
            },
            pest_attack: {
                title: "பூச்சி தாக்குதல்",
                text: "வெட்டுக்கிளிகள் வரலாம்.",
                choices: {
                    buy_pesticide: "பூச்சிக்கொல்லி (₹1500)",
                    natural_remedy: "இயற்கை வழி"
                }
            },
            harvest_time: {
                title: "அறுவடை",
                text: "பயிர் தயாராக உள்ளது.",
                choices: {
                    sell_now: "உடனே விற்கவும்",
                    wait_for_price: "சேமித்து வைக்கவும்"
                }
            },
            market_fluctuation: {
                title: "சந்தை நிலவரம்",
                text: "விலை குறைந்துள்ளது.",
                choices: {
                    sell_low: "விற்கவும்",
                    wait_more: "காத்திருக்கவும்"
                }
            },
            money_lender: {
                title: "பணத் தேவை",
                text: "இயந்திரத்திற்கு பணம் தேவை. வங்கி தாமதமாகும், கந்துவட்டிக்காரர் உடனே தருவார்.",
                choices: {
                    bank_loan: "வங்கி கடன்",
                    money_lender: "கந்துவட்டி"
                }
            },
            family_emergency: {
                title: "குடும்ப அவசரம்",
                text: "உறவினர் உடல்நலக்குறைவு.",
                choices: {
                    pay_hospital: "மருத்துவ செலவு (₹2000)",
                    ignore_health: "வீட்டு வைத்தியம்"
                }
            },
            gov_scheme: {
                title: "அரசு திட்டம்",
                text: "உர மானியம் அறிவிப்பு.",
                choices: {
                    apply_scheme: "விண்ணப்பிக்கவும்",
                    buy_market: "சந்தையில் வாங்கவும்"
                }
            }
        }
    },
    gu: {
        appTitle: "પાક નસીબ",
        cash: "રોકડ",
        stress: "તણાવ",
        risk: "જોખમ",
        cropHealth: "પાક આરોગ્ય",
        season: "ઋતુ",
        next: "આગળ",
        restart: "ફરી શરૂ કરો",
        gameOver: "રમત પૂરી",
        scenarios: {
            start_season: {
                title: "નવી મોસમ",
                text: "વાવણીનો સમય છે. જમીન તૈયાર છે.",
                choices: {
                    buy_high_yield: "ઉચ્ચ ઉપજ બીજ (₹2000)",
                    buy_standard: "સામાન્ય બીજ (₹500)"
                }
            },
            weather_report: {
                title: "હવામાન",
                text: "વરસાદ અનિયમિત છે.",
                choices: {
                    buy_insurance: "વીમો લો (₹1000)",
                    skip_insurance: "પૈસા બચાવો"
                }
            },
            pest_attack: {
                title: "જીવાત હુમલો",
                text: "તીડનું જોખમ છે.",
                choices: {
                    buy_pesticide: "જંતુનાશક (₹1500)",
                    natural_remedy: "ઘરગથ્થુ ઉપચાર"
                }
            },
            harvest_time: {
                title: "કાપણી",
                text: "પાક તૈયાર છે.",
                choices: {
                    sell_now: "તરત વેચો",
                    wait_for_price: "સંગ્રહ કરો"
                }
            },
            market_fluctuation: {
                title: "બજાર ભાવ",
                text: "ભાવ ઘટ્યા છે.",
                choices: {
                    sell_low: "હવે વેચો",
                    wait_more: "રાહ જુઓ"
                }
            },
            money_lender: {
                title: "નાણાકીય ભીડ",
                text: "પૈસાની જરૂર છે. બેંક લોન ધીમી છે, શાહુકાર ઝડપી છે પણ વ્યાજ વધારે છે.",
                choices: {
                    bank_loan: "બેંક લોન",
                    money_lender: "શાહુકાર"
                }
            },
            family_emergency: {
                title: "કૌટુંબિક કટોકટી",
                text: "પરિવારના સભ્ય બીમાર છે.",
                choices: {
                    pay_hospital: "હોસ્પિટલ ખર્ચ (₹2000)",
                    ignore_health: "ઘરેલુ ઇલાજ"
                }
            },
            gov_scheme: {
                title: "સરકારી યોજના",
                text: "ખાતર સબસિડી.",
                choices: {
                    apply_scheme: "અરજી કરો",
                    buy_market: "બજારમાંથી ખરીદો"
                }
            }
        }
    },
    kn: {
        appTitle: "ಬೆಳೆ ಭಾಗ್ಯ",
        cash: "ಹಣ",
        stress: "ಒತ್ತಡ",
        risk: "ಅಪಾಯ",
        cropHealth: "ಬೆಳೆ ಆರೋಗ್ಯ",
        season: "ಋತು",
        next: "ಮುಂದೆ",
        restart: "ಮರುಪ್ರಾರಂಭಿಸಿ",
        gameOver: "ಆಟ ಮುಗಿದಿದೆ",
        scenarios: {
            start_season: {
                title: "ಹೊಸ ಋತು",
                text: "ಬಿತ್ತನೆ ಸಮಯ. ಮಣ್ಣು ಸಿದ್ಧವಾಗಿದೆ.",
                choices: {
                    buy_high_yield: "ಉತ್ತಮ ಬೀಜಗಳು (₹2000)",
                    buy_standard: "ಸಾಮಾನ್ಯ ಬೀಜಗಳು (₹500)"
                }
            },
            weather_report: {
                title: "ಹವಾಮಾನ",
                text: "ಮಳೆ ಅನಿಶ್ಚಿತವಾಗಿದೆ.",
                choices: {
                    buy_insurance: "ವಿಮೆ ಖರೀದಿಸಿ (₹1000)",
                    skip_insurance: "ಹಣ ಉಳಿಸಿ"
                }
            },
            pest_attack: {
                title: "ಕೀಟಗಳ ದಾಳಿ",
                text: "ಮಿಡತೆಗಳ ಭಯವಿದೆ.",
                choices: {
                    buy_pesticide: "ಕೀಟನಾಶಕ (₹1500)",
                    natural_remedy: "ಮನೆಮದ್ದು"
                }
            },
            harvest_time: {
                title: "ಕಟಾವು",
                text: "ಬೆಳೆ ಸಿದ್ಧವಾಗಿದೆ.",
                choices: {
                    sell_now: "ಈಗಲೇ ಮಾರಾಟ ಮಾಡಿ",
                    wait_for_price: "ಸಂಗ್ರಹಿಸಿ"
                }
            },
            market_fluctuation: {
                title: "ಮಾರುಕಟ್ಟೆ",
                text: "ಬೆಲೆಗಳು ಇಳಿದಿವೆ.",
                choices: {
                    sell_low: "ಮಾರಾಟ ಮಾಡಿ",
                    wait_more: "ಕಾಯಿರಿ"
                }
            },
            money_lender: {
                title: "ಹಣಕಾಸಿನ ತೊಂದರೆ",
                text: "ಹಣದ ಅವಶ್ಯಕತೆಯಿದೆ. ಬ್ಯಾಂಕ್ ಸಾಲ ತಡವಾಗುತ್ತದೆ, ಲೇವಾದೇವಿಗಾರ ಬೇಗ ಕೊಡುತ್ತಾನೆ.",
                choices: {
                    bank_loan: "ಬ್ಯಾಂಕ್ ಸಾಲ",
                    money_lender: "ಲೇವಾದೇವಿಗಾರ"
                }
            },
            family_emergency: {
                title: "ಕುಟುಂಬದ ಆಪತ್ತು",
                text: "ಮನೆಯವರು ಅನಾರೋಗ್ಯದಿಂದ ಬಳಲುತ್ತಿದ್ದಾರೆ.",
                choices: {
                    pay_hospital: "ಆಸ್ಪತ್ರೆ ಖರ್ಚು (₹2000)",
                    ignore_health: "ಮನೆಮದ್ದು"
                }
            },
            gov_scheme: {
                title: "ಸರ್ಕಾರಿ ಯೋಜನೆ",
                text: "ಗೊಬ್ಬರ ಸಬ್ಸಿಡಿ.",
                choices: {
                    apply_scheme: "ಅರ್ಜಿ ಹಾಕಿ",
                    buy_market: "ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ಖರೀದಿಸಿ"
                }
            }
        }
    },
    ml: {
        appTitle: "വിള ഐശ്വര്യം",
        cash: "പണം",
        stress: "സമ്മർദ്ദം",
        risk: "റിസ്ക്",
        cropHealth: "വിള ആരോഗ്യം",
        season: "സീസൺ",
        next: "അടുത്തത്",
        restart: "പുനരാരംഭിക്കുക",
        gameOver: "ഗെയിം കഴിഞ്ഞു",
        scenarios: {
            start_season: {
                title: "പുതിയ സീസൺ",
                text: "വിതയ്ക്കൽ സമയം. മണ്ണ് തയ്യാറാണ്.",
                choices: {
                    buy_high_yield: "നല്ല വിത്തുകൾ (₹2000)",
                    buy_standard: "സാധാരണ വിത്തുകൾ (₹500)"
                }
            },
            weather_report: {
                title: "കാലാവസ്ഥ",
                text: "മഴ അനിശ്ചിതമാണ്.",
                choices: {
                    buy_insurance: "ഇൻഷുറൻസ് (₹1000)",
                    skip_insurance: "പണം ലാഭിക്കാം"
                }
            },
            pest_attack: {
                title: "കീടബാധ",
                text: "വെട്ടുക്കിളി ശല്യം.",
                choices: {
                    buy_pesticide: "കീടനാശിനി (₹1500)",
                    natural_remedy: "നാടൻ പ്രയോഗം"
                }
            },
            harvest_time: {
                title: "വിളവെടുപ്പ്",
                text: "വിളവെടുക്കാറായി.",
                choices: {
                    sell_now: "ഇപ്പോൾ വിൽക്കുക",
                    wait_for_price: "സൂക്ഷിച്ചുവെക്കുക"
                }
            },
            market_fluctuation: {
                title: "വിപണി",
                text: "വില കുറഞ്ഞു.",
                choices: {
                    sell_low: "വിൽക്കുക",
                    wait_more: "കാത്തിരിക്കുക"
                }
            },
            money_lender: {
                title: "സാമ്പത്തിക ആവശ്യം",
                text: "പണം ആവശ്യമുണ്ട്. ബാങ്ക് വായ്പ വൈകും, ബ്ലേഡ് പലിശക്കാർ വേഗം തരും.",
                choices: {
                    bank_loan: "ബാങ്ക് വായ്പ",
                    money_lender: "ബ്ലേഡ് പലിശ"
                }
            },
            family_emergency: {
                title: "അത്യാഹിതം",
                text: "വീട്ടിൽ അസുഖം.",
                choices: {
                    pay_hospital: "ആശുപത്രി ചെലവ് (₹2000)",
                    ignore_health: "നാട്ടുചികിത്സ"
                }
            },
            gov_scheme: {
                title: "സർക്കാർ പദ്ധതി",
                text: "വളത്തിന് സബ്സിഡി.",
                choices: {
                    apply_scheme: "അപേക്ഷിക്കുക",
                    buy_market: "കടയിൽ നിന്ന് വാങ്ങുക"
                }
            }
        }
    },
    pa: {
        appTitle: "ਫਸਲ ਕਿਸਮਤ",
        cash: "ਨਕਦੀ",
        stress: "ਤਣਾਅ",
        risk: "ਜੋਖਮ",
        cropHealth: "ਫਸਲ ਦੀ ਸਿਹਤ",
        season: "ਮੌਸਮ",
        next: "ਅਗਲਾ",
        restart: "ਮੁੜ ਸ਼ੁਰੂ ਕਰੋ",
        gameOver: "ਖੇਡ ਖਤਮ",
        scenarios: {
            start_season: {
                title: "ਨਵਾਂ ਮੌਸਮ",
                text: "ਬਿਜਾਈ ਦਾ ਸਮਾਂ ਹੈ। ਮਿੱਟੀ ਤਿਆਰ ਹੈ।",
                choices: {
                    buy_high_yield: "ਵਧੀਆ ਬੀਜ (₹2000)",
                    buy_standard: "ਆਮ ਬੀਜ (₹500)"
                }
            },
            weather_report: {
                title: "ਮੌਸਮ",
                text: "ਮੀਂਹ ਬੇਯਕੀਨਾ ਹੈ।",
                choices: {
                    buy_insurance: "ਬੀਮਾ ਲਓ (₹1000)",
                    skip_insurance: "ਪੈਸੇ ਬਚਾਓ"
                }
            },
            pest_attack: {
                title: "ਕੀੜੇ ਦਾ ਹਮਲਾ",
                text: "ਟਿੱਡੀ ਦਲ ਦਾ ਖਤਰਾ।",
                choices: {
                    buy_pesticide: "ਕੀਟਨਾਸ਼ਕ (₹1500)",
                    natural_remedy: "ਘਰੇਲੂ ਉਪਾਅ"
                }
            },
            harvest_time: {
                title: "ਵਾਢੀ",
                text: "ਫਸਲ ਤਿਆਰ ਹੈ।",
                choices: {
                    sell_now: "ਹੁਣੇ ਵੇਚੋ",
                    wait_for_price: "ਸਟੋਰ ਕਰੋ"
                }
            },
            market_fluctuation: {
                title: "ਮੰਡੀ",
                text: "ਭਾਅ ਡਿੱਗ ਗਿਆ ਹੈ।",
                choices: {
                    sell_low: "ਵੇਚੋ",
                    wait_more: "ਉਡੀਕ ਕਰੋ"
                }
            },
            money_lender: {
                title: "ਪੈਸੇ ਦੀ ਲੋੜ",
                text: "ਪੈਸੇ ਚਾਹੀਦੇ ਹਨ। ਬੈਂਕ ਲੋਨ ਵਿੱਚ ਦੇਰੀ, ਸ਼ਾਹੂਕਾਰ ਜਲਦੀ ਦਿੰਦਾ ਹੈ ਪਰ ਵਿਆਜ ਵੱਧ।",
                choices: {
                    bank_loan: "ਬੈਂਕ ਲੋਨ",
                    money_lender: "ਸ਼ਾਹੂਕਾਰ"
                }
            },
            family_emergency: {
                title: "ਐਮਰਜੰਸੀ",
                text: "ਪਰਿਵਾਰ ਵਿੱਚ ਬਿਮਾਰੀ।",
                choices: {
                    pay_hospital: "ਹਸਪਤਾਲ ਖਰਚ (₹2000)",
                    ignore_health: "ਘਰੇਲੂ ਇਲਾਜ"
                }
            },
            gov_scheme: {
                title: "ਸਰਕਾਰੀ ਸਕੀਮ",
                text: "ਖਾਦ ਸਬਸਿਡੀ।",
                choices: {
                    apply_scheme: "ਅਪਲਾਈ ਕਰੋ",
                    buy_market: "ਬਾਜ਼ਾਰ ਤੋਂ ਖਰੀਦੋ"
                }
            }
        }
    },
    or: {
        appTitle: "ଫସଲ ଭାଗ୍ୟ",
        cash: "ଟଙ୍କା",
        stress: "ଚାପ",
        risk: "ବିପଦ",
        cropHealth: "ଫସଲ ସ୍ୱାସ୍ଥ୍ୟ",
        season: "ଋତୁ",
        next: "ପରବର୍ତ୍ତୀ",
        restart: "ପୁନଃ ଆରମ୍ଭ",
        gameOver: "ଖେଳ ସମାପ୍ତ",
        scenarios: {
            start_season: {
                title: "ନୂଆ ଋତୁ",
                text: "ବୁଣିବା ସମୟ। ମାଟି ପ୍ରସ୍ତୁତ।",
                choices: {
                    buy_high_yield: "ଉନ୍ନତ ବିହନ (₹୨୦୦୦)",
                    buy_standard: "ସାଧାରଣ ବିହନ (₹୫୦୦)"
                }
            },
            weather_report: {
                title: "ପାଣିପାଗ",
                text: "ବର୍ଷା ଅନିଶ୍ଚିତ।",
                choices: {
                    buy_insurance: "ବୀମା କିଣନ୍ତୁ (₹୧୦୦୦)",
                    skip_insurance: "ଟଙ୍କା ବଞ୍ଚାନ୍ତୁ"
                }
            },
            pest_attack: {
                title: "ପୋକ ଆକ୍ରମଣ",
                text: "ପଙ୍ଗପାଳ ଭୟ।",
                choices: {
                    buy_pesticide: "କୀଟନାଶକ (₹୧୫୦୦)",
                    natural_remedy: "ଘରୋଇ ଉପଚାର"
                }
            },
            harvest_time: {
                title: "ଅମଳ",
                text: "ଫସଲ ପ୍ରସ୍ତୁତ।",
                choices: {
                    sell_now: "ବିକ୍ରି କରନ୍ତୁ",
                    wait_for_price: "ସାଇତି ରଖନ୍ତୁ"
                }
            },
            market_fluctuation: {
                title: "ବଜାର ଦର",
                text: "ଦର କମିଛି।",
                choices: {
                    sell_low: "ବିକ୍ରି କରନ୍ତୁ",
                    wait_more: "ଅପେକ୍ଷା କରନ୍ତୁ"
                }
            },
            money_lender: {
                title: "ଅର୍ଥ ଆବଶ୍ୟକତା",
                text: "ଟଙ୍କା ଦରକାର। ବ୍ୟାଙ୍କ ଋଣ ବିଳମ୍ବ, ସାହୁକାର ଶୀଘ୍ର ଦିଏ କିନ୍ତୁ ସୁଧ ଅଧିକ।",
                choices: {
                    bank_loan: "ବ୍ୟାଙ୍କ ଋଣ",
                    money_lender: "ସାହୁକାର"
                }
            },
            family_emergency: {
                title: "ପାରିବାରିକ ସମସ୍ୟା",
                text: "ଘରେ ଅସୁସ୍ଥ।",
                choices: {
                    pay_hospital: "ଡାକ୍ତରଖାନା ଖର୍ଚ୍ଚ (₹୨୦୦୦)",
                    ignore_health: "ଘରୋଇ ଚିକିତ୍ସା"
                }
            },
            gov_scheme: {
                title: "ସରକାରୀ ଯୋଜନା",
                text: "ସାର ଉପରେ ସବସିଡି।",
                choices: {
                    apply_scheme: "ଆବେଦନ କରନ୍ତୁ",
                    buy_market: "ବଜାରରୁ କିଣନ୍ତୁ"
                }
            }
        }
    }
};

export const getTranslation = (lang: Language, key: string): string => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return key.split('.').reduce((o: any, i) => o?.[i], translations[lang]) as string || key;
};
