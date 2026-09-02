var langBtn = document.getElementById("langToggleBtn");
var heroTitle = document.getElementById("heroTitle");
var heroSub = document.getElementById("heroSub");
var heroInput = document.getElementById("heroSearchInput");

var howItWorksTitle = document.getElementById("howItWorksTitle");
var step1Title = document.getElementById("step1Title");
var step1Sub = document.getElementById("step1Sub");
var step2Title = document.getElementById("step2Title");
var step2Sub = document.getElementById("step2Sub");
var step3Title = document.getElementById("step3Title");
var step3Sub = document.getElementById("step3Sub");

var isUrdu = false;

if (langBtn) {
    langBtn.addEventListener("click", function () {
        if (isUrdu == false) {
            heroTitle.innerText = "اپنے علاقے کے ماہر کاریگر منٹوں میں ڈھونڈیں!";
            heroSub.innerText = "تصدیق شدہ مقامی الیکٹریشنز، پلمبرز، مکینکس اور کارپینٹرز سے براہِ راست رابطہ کریں۔";
            heroInput.placeholder = "🔍 کاریگر کا نام یا علاقہ تلاش کریں";

            howItWorksTitle.innerText = "کام کیسے کرتا ہے؟ (۳ آسان مراحل)";
            step1Title.innerText = "۱. مہارت تلاش کریں";
            step1Sub.innerText = "قریب ترین کاریگر تلاش کرنے کے لیے علاقہ یا پیشہ منتخب کریں۔";
            step2Title.innerText = "۲. کاریگر کا انتخاب کریں";
            step2Sub.innerText = "پروفائل، تجربہ اور گاہکوں کی ریٹنگز چیک کریں۔";
            step3Title.innerText = "۳. براہِ راست رابطہ کریں";
            step3Sub.innerText = "بغیر کسی کمیشن کے براہِ راست کال یا واٹس ایپ کریں۔";

            isUrdu = true;
        } else {
            heroTitle.innerText = "Find Skilled Local Karigars in Minutes!";
            heroSub.innerText = "Connect directly with verified local electricians, plumbers, mechanics, and carpenters.";
            heroInput.placeholder = "🔍 Search by skill or area";

            howItWorksTitle.innerText = "HOW IT WORKS (3 SIMPLE STEPS)";
            step1Title.innerText = "1. Search Skill";
            step1Sub.innerText = "Filter area or trade to find nearest karigar";
            step2Title.innerText = "2. Select Karigar";
            step2Sub.innerText = "Check profile, experience & customer ratings";
            step3Title.innerText = "3. Direct Contact";
            step3Sub.innerText = "Call or WhatsApp directly without commission";

            isUrdu = false;
        }
    });
}

var aboutLangBtn = document.getElementById("aboutLangBtn");
var aboutHeroTitle = document.getElementById("aboutHeroTitle");
var aboutHeroSub = document.getElementById("aboutHeroSub");

var isAboutUrdu = false;

if (aboutLangBtn) {
    aboutLangBtn.addEventListener("click", function () {
        if (isAboutUrdu == false) {
            aboutHeroTitle.innerText = "مقامی ہنر مندوں کو مقامی گھروں سے جوڑنا";
            aboutHeroSub.innerText = "کاریگر ڈائریکٹ ایک کمیونٹی پر مبنی اقدام ہے جو مقامی ہنر مندوں کو ڈیجیٹل شناخت اور براہ راست تعاون فراہم کرتا ہے۔";
            isAboutUrdu = true;
        } else {
            aboutHeroTitle.innerText = "Connecting Local Skills with Local Homes";
            aboutHeroSub.innerText = "Karigar Direct is a community-first initiative built to digitize and support local skilled workers directly.";
            isAboutUrdu = false;
        }
    });
}

var regLangBtn = document.getElementById("regLangBtn");
var regHeroTitle = document.getElementById("regHeroTitle");
var regHeroSub = document.getElementById("regHeroSub");

var isRegUrdu = false;

if (regLangBtn) {
    regLangBtn.addEventListener("click", function () {
        if (isRegUrdu == false) {
            regHeroTitle.innerText = "ہمارے مقامی کاریگر نیٹ ورک میں شامل ہوں";
            regHeroSub.innerText = "بغیر کسی کمیشن کے ڈائریکٹ ورکر ڈائریکٹری میں لسٹ ہونے کے لیے آج ہی رجسٹریشن کروائیں۔";
            isRegUrdu = true;
        } else {
            regHeroTitle.innerText = "Join Our Local Karigar Network";
            regHeroSub.innerText = "Register today to get listed on our commission-free direct worker directory.";
            isRegUrdu = false;
        }
    });
}

var submitBtn = document.getElementById("submitRegBtn");

if (submitBtn) {
    submitBtn.addEventListener("click", function () {
        var name = document.getElementById("fullname").value;
        var trade = document.getElementById("trade").value;
        var exp = document.getElementById("experience").value;
        var loc = document.getElementById("location").value;
        var phone = document.getElementById("phone").value;
        var whatsapp = document.getElementById("whatsapp").value;

        if (name == "" || trade == "" || exp == "" || loc == "" || phone == "" || whatsapp == "") {
            alert("Please fill out all the details before submitting!");
        } else {
            alert("Registration Successful! Your profile will be listed soon.");
        }
    });
}

var filterBtns = document.querySelectorAll(".filter-btn");
var cards = document.querySelectorAll(".karigar_card");

if (filterBtns.length > 0) {
    for (var i = 0; i < filterBtns.length; i++) {
        filterBtns[i].addEventListener("click", function () {
            var selectedCategory = this.getAttribute("data-category");

            for (var j = 0; j < cards.length; j++) {
                var cardTrade = cards[j].getAttribute("data-trade");

                if (selectedCategory == "all" || selectedCategory == cardTrade) {
                    cards[j].style.display = "flex";
                } else {
                    cards[j].style.display = "none";
                }
            }
        });
    }
}