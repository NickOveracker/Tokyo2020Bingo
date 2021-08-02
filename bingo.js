// thx to https://twitter.com/jamesajack/status/1406946332531585030
let participantInfections = [
    ["Greece (GRE) Infection", false],
    ["Refugee Olympic Team (EOR) Infection", false],
    ["Iceland (ISL) Infection", false],
    ["Ireland (IRL) Infection", false],
    ["Azerbaijan (AZE) Infection", false],
    ["Afghanistan (AFG) Infection", false],
    ["American Samoa (ASA) Infection", false],
    ["Virgin Islands (ISV) Infection", false],
    ["United Arab Emirates (UAE) Infection", false],
    ["Algeria (ALG) Infection", false],
    ["Argentina (ARG) Infection", true, "https://www.reuters.com/lifestyle/sports/athletics-world-champion-vaulter-kendricks-out-with-covid-says-father-2021-07-29/"],
    ["Aruba (ARU) Infection", false],
    ["Albania (ALB) Infection", false],
    ["Armenia (ARM) Infection", false],
    ["Angola (ANG) Infection", false],
    ["Antigua and Barbuda (ANT) Infection", false],
    ["Andorra (AND) Infection", false],
    ["Yemen (YEM) Infection", false],
    ["Great Britain (GBR) Infection", false],
    ["British Virgin Islands (IVB) Infection", false],
    ["Israel (ISR) Infection", true, "https://www3.nhk.or.jp/news/html/20210709/k10013129611000.html"],
    ["Italy (ITA) Infection", false],
    ["Iraq (IRQ) Infection", false],
    ["Iran (IRN) Infection", false],
    ["India (IND) Infection", false],
    ["Indonesia (INA) Infection", false],
    ["Uganda (UGA) Infection", true, "https://www.japantimes.co.jp/news/2021/06/23/national/uganda-olympian-covid/"],
    ["Ukraine (UKR) Infection", false],
    ["Uzbekistan (UZB) Infection", false],
    ["Uruguay (URU) Infection", false],
    ["Ecuador (ECU) Infection", false],
    ["Egypt (EGY) Infection", false],
    ["Estonia (EST) Infection", false],
    ["Eswatini (SWZ) Infection", false],
    ["Ethiopia (ETH) Infection", false],
    ["Eritrea (ERI) Infection", false],
    ["El Salvador (ESA) Infection", false],
    ["Australia (AUS) Infection", false],
    ["Austria (AUT) Infection", false],
    ["Oman (OMA) Infection", false],
    ["Netherlands (NED) Infection", true, "https://www.usatoday.com/story/sports/olympics/2021/07/21/2021-olympics-two-out-after-testing-positive-covid-19-tokyo/8038119002/"],
    ["Ghana (GHA) Infection", false],
    ["Cape Verde (CPV) Infection", false],
    ["Guyana (GUY) Infection", false],
    ["Kazakhstan (KAZ) Infection", false],
    ["Qatar (QAT) Infection", false],
    ["Canada (CAN) Infection", false],
    ["Gabon (GAB) Infection", false],
    ["Cameroon (CMR) Infection", false],
    ["The Gambia (GAM) Infection", false],
    ["Cambodia (CAM) Infection", false],
    ["North Macedonia (MKD) Infection", false],
    ["Guinea (GUI) Infection", false],
    ["Guinea-Bissau (GBS) Infection", false],
    ["Cyprus (CYP) Infection", false],
    ["Cuba (CUB) Infection", false],
    ["Kiribati (KIR) Infection", false],
    ["Kyrgyzstan (KGZ) Infection", false],
    ["Guatemala (GUA) Infection", false],
    ["Guam (GUM) Infection", false],
    ["Kuwait (KUW) Infection", false],
    ["Cook Islands (COK) Infection", false],
    ["Grenada (GRN) Infection", false],
    ["Croatia (CRO) Infection", false],
    ["Cayman Islands (CAY) Infection", false],
    ["Kenya (KEN) Infection", false],
    ["Ivory Coast (CIV) Infection", false],
    ["Costa Rica (CRC) Infection", false],
    ["Kosovo (KOS) Infection", false],
    ["Comoros (COM) Infection", false],
    ["Colombia (COL) Infection", false],
    ["Republic of the Congo (CGO) Infection", false],
    ["Democratic Republic of the Congo (COD) Infection", false],
    ["Saudi Arabia (KSA) Infection", false],
    ["Samoa (SAM) Infection", false],
    ["São Tomé and Príncipe (STP) Infection", false],
    ["Zambia (ZAM) Infection", false],
    ["San Marino (SMR) Infection", false],
    ["Sierra Leone (SLE) Infection", false],
    ["Djibouti (DJI) Infection", false],
    ["Jamaica (JAM) Infection", false],
    ["Georgia (GEO) Infection", false],
    ["Syria (SYR) Infection", false],
    ["Singapore (SGP) Infection", false],
    ["Zimbabwe (ZIM) Infection", false],
    ["Switzerland (SUI) Infection", false],
    ["Sweden (SWE) Infection", false],
    ["Sudan (SUD) Infection", false],
    ["Spain (ESP) Infection", false],
    ["Suriname (SUR) Infection", false],
    ["Sri Lanka (SRI) Infection", false],
    ["Slovakia (SVK) Infection", false],
    ["Slovenia (SLO) Infection", false],
    ["Seychelles (SEY) Infection", false],
    ["Equatorial Guinea (GEQ) Infection", false],
    ["Senegal (SEN) Infection", false],
    ["Serbia (SRB) Infection", true, "https://www.japantimes.co.jp/news/2021/07/05/national/serbia-olympian-covid-test/"],
    ["Saint Kitts and Nevis (SKN) Infection", false],
    ["Saint Vincent and the Grenadines (VIN) Infection", false],
    ["Saint Lucia (LCA) Infection", false],
    ["Somalia (SOM) Infection", false],
    ["Solomon Islands (SOL) Infection", false],
    ["Thailand (THA) Infection", false],
    ["South Korea (KOR) Infection", true, "https://www.insidethegames.biz/articles/1110326/ioc-member-ryu-tests-positive-covid19#.YPNTR8y3R0p.twitter"],
    ["Chinese Taipei (TPE) Infection", false],
    ["Tajikistan (TJK) Infection", false],
    ["Tanzania (TAN) Infection", false],
    ["Czech Republic (CZE) Infection", true, "https://www.zwemza.com/?p=63153"],
    ["Chad (CHA) Infection", false],
    ["Central African Republic (CAF) Infection", false],
    ["China (CHN) Infection", false],
    ["Tunisia (TUN) Infection", false],
    ["Chile (CHI) Infection", false],
    ["Tuvalu (TUV) Infection", false],
    ["Denmark (DEN) Infection", false],
    ["Germany (GER) Infection", true, "https://www.reuters.com/article/uk-olympics-2020-crd-geschke/olympics-german-cyclist-geschke-tests-positive-for-covid-19-out-of-road-race-idUSKBN2ET1MS"],
    ["Togo (TOG) Infection", false],
    ["Dominica (DMA) Infection", false],
    ["Dominican Republic (DOM) Infection", false],
    ["Trinidad and Tobago (TTO) Infection", true, "https://www3.nhk.or.jp/nhkworld/en/news/20210731_11/"],
    ["Turkmenistan (TKM) Infection", false],
    ["Turkey (TUR) Infection", false],
    ["Tonga (TGA) Infection", false],
    ["Nigeria (NGR) Infection", true, "https://news.tv-asahi.co.jp/news_society/articles/000222768.html"],
    ["Nauru (NRU) Infection", false],
    ["Namibia (NAM) Infection", false],
    ["Nicaragua (NCA) Infection", false],
    ["Niger (NIG) Infection", false],
    ["New Zealand (NZL) Infection", false],
    ["Nepal (NEP) Infection", false],
    ["Norway (NOR) Infection", false],
    ["Bahrain (BRN) Infection", false],
    ["Haiti (HAI) Infection", false],
    ["Pakistan (PAK) Infection", false],
    ["Panama (PAN) Infection", false],
    ["Vanuatu (VAN) Infection", false],
    ["Bahamas (BAH) Infection", false],
    ["Papua New Guinea (PNG) Infection", false],
    ["Bermuda (BER) Infection", false],
    ["Palau (PLW) Infection", false],
    ["Paraguay (PAR) Infection", false],
    ["Barbados (BAR) Infection", false],
    ["Palestine (PLE) Infection", false],
    ["Hungary (HUN) Infection", false],
    ["Bangladesh (BAN) Infection", false],
    ["East Timor (TLS) Infection", false],
    ["Bhutan (BHU) Infection", false],
    ["Fiji (FIJ) Infection", false],
    ["Philippines (PHI) Infection", true, "https://news.abs-cbn.com/video/sports/07/23/21/olympics-team-ph-coach-asymptomatic-in-quarantine"],
    ["Finland (FIN) Infection", false],
    ["Puerto Rico (PUR) Infection", false],
    ["Brazil (BRA) Infection", false],
    ["Bulgaria (BUL) Infection", false],
    ["Burkina Faso (BUR) Infection", false],
    ["Brunei (BRU) Infection", false],
    ["Burundi (BDI) Infection", false],
    ["Vietnam (VIE) Infection", false],
    ["Benin (BEN) Infection", false],
    ["Venezuela (VEN) Infection", false],
    ["Belarus (BLR) Infection", false],
    ["Belize (BIZ) Infection", false],
    ["Peru (PER) Infection", false],
    ["Belgium (BEL) Infection", false],
    ["Poland (POL) Infection", false],
    ["Bosnia and Herzegovina (BIH) Infection", false],
    ["Botswana (BOT) Infection", false],
    ["Bolivia (BOL) Infection", false],
    ["Portugal (POR) Infection", false],
    ["Hong Kong (HKG) Infection", false],
    ["Honduras (HON) Infection", false],
    ["Marshall Islands (MHL) Infection", false],
    ["Madagascar (MAD) Infection", false],
    ["Malawi (MAW) Infection", false],
    ["Mali (MLI) Infection", false],
    ["Malta (MLT) Infection", false],
    ["Malaysia (MAS) Infection", false],
    ["Federated States of Micronesia (FSM) Infection", false],
    ["South Africa (RSA) Infection", true, "https://www3.nhk.or.jp/nhkworld/en/news/20210717_16/"],
    ["South Sudan (SSD) Infection", false],
    ["Myanmar (MYA) Infection", false],
    ["Mexico (MEX) Infection", false],
    ["Mauritius (MRI) Infection", false],
    ["Mauritania (MTN) Infection", false],
    ["Mozambique (MOZ) Infection", false],
    ["Monaco (MON) Infection", false],
    ["Maldives (MDV) Infection", false],
    ["Moldova (MDA) Infection", false],
    ["Morocco (MAR) Infection", false],
    ["Mongolia (MGL) Infection", false],
    ["Montenegro (MNE) Infection", false],
    ["Jordan (JOR) Infection", false],
    ["Laos (LAO) Infection", false],
    ["Latvia (LAT) Infection", false],
    ["Lithuania (LTU) Infection", false],
    ["Libya (LBA) Infection", false],
    ["Liechtenstein (LIE) Infection", false],
    ["Liberia (LBR) Infection", false],
    ["Romania (ROU) Infection", false],
    ["Luxembourg (LUX) Infection", false],
    ["Rwanda (RWA) Infection", false],
    ["Lesotho (LES) Infection", false],
    ["Lebanon (LBN) Infection", false],
    ["United States (USA) Infection", true, "https://english.kyodonews.net/news/2021/07/9eae6e7fc4f2-breaking-news-us-female-gymnast-in-japan-for-olympics-tests-positive-for-covid.html"],
    ["France (FRA) Infection", false],
    ["Japan (JPN) Infection", false]
];
let otherEvents = [
    ["State of emergency in Tokyo reinstated", true, "https://edition.cnn.com/2021/07/08/asia/japan-state-of-emergency-olympics-intl-hnk/index.html"],
    ["Suga resigns", false],
    ["Koike resigns", false],
    ["Over 1,500 new infections per day in Tokyo", true, "https://stopcovid19.metro.tokyo.lg.jp/en"],
    ["Over 100% hospital bed occupancy in Tokyo", false],
    ["Over 25 deaths per day in Tokyo", false],
    ["Over 6,000 new infections per day in Japan", true, "https://japantoday.com/category/national/Tokyo-reports-record-2-848-new-coronavirus-cases-nationwide-tally-7-629"],
    ["Cluster in the Olympic village", true, "https://english.satarknews.com/two-athletes-test-positive-for-covid-19-in-olympic-village-officials/"],
    ["Media cluster", false],
    ["Volunteer cluster", false],
    ["Russian Olympic Committee (ROC) Infection", true, "https://tass.com/sport/1313943"],
    ["Training camp cluster", false],
    ["Athletes caught sightseeing", true, "https://news.yahoo.co.jp/articles/dbc0e1c5b9a246206f025d43d44b335d53d4a37b"],
    ["Foreign media caught sightseeing", true, "https://twitter.com/AlfieJapanorama/status/1420040602566098951"],
    ["Olympic officials caught sightseeing", false],
    ["Japan runs out of vaccines", true, "https://twitter.com/jamesajack/status/1414038388504735745"],
    ["Olympics canceled", false],
    ["All spectators banned", true, "https://edition.cnn.com/2021/07/08/asia/japan-state-of-emergency-olympics-intl-hnk/index.html"],
    ["Non-vaccinated athletes are vaccinated in Japan", true, "https://english.kyodonews.net/news/2021/05/629bd2373907-japan-to-start-vaccinating-olympic-athletes-from-june-1-joc.html"],
    ["Athlete hospitalized due to Japanese summer heat", true, "https://www.reuters.com/lifestyle/sports/olympics-archery-russian-archer-passes-out-under-tokyos-scorching-heat-2021-07-23/"],
    ["Bach catches Covid", false],
    ["Olympic mascots wear masks", false],
    ["Olympic Covid cases are not counted towards the Japanese total", false],
    ["Half of all volunteers quit", true, "https://www.asahi.com/ajw/articles/14408545"],
    ["Canadians wear those thick sweaty jackets at any time in Japan", false],
    ["Delta becomes the new dominant variant in Japan", false],
    ["No Japanese sponsors run any TV advertising mentioning the Olympics", false],
    ["Athletes complain because of the lack of vegan food options", false],
    ["Athletes complain because of the lack of halal food options", true, "https://nordot.app/791573286711459840"],
    ["Athletes complain because of the lack of sightseeing options", true, "https://www.japantimes.co.jp/sports/2021/06/12/olympics/summer-olympics/softball/australia-softball-tokyo-olympics-coronavirus/"],
    ["Athletes complain because of the lack of free condoms", false],
    ["Athletes complain because of happoshu", false],
    ["Streaker in any stadium", false],
    ["Suga approval dips below 30%", false],
    ["China boycotts the Olympics", false],
    ["AKB48 performs during the opening ceremony", false],
    ["Suga dressed as Luigi", false],
    ["Lack of interpreters", false],
    ["Lack of translators", false]
];

// Map Twitter usernames to unique numbers. They are limited to 15 characters, so we can do this with multiples of the first 15 primes.
// This one's a Nick Overacker Original (tm) and it's why I make the big bucks in some alternate timeline
nameToInt = function(name) {
    retval = 0;

    primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];

    for (let ii = 0; ii < name.length && ii < primes.length; ii++) {
        retval += primes[ii] * name.charCodeAt(ii);
    }

    return retval;
};

// Use this function to generate pseudo-random numbers based on an input seed
// This allows us to generate the same Bingo card every time for a given username
// thx to https://stackoverflow.com/a/29450606/2535523
Math.seed = function(s) {
    let mask = 0xffffffff;
    let m_w = (123456789 + s) & mask;
    let m_z = (987654321 - s) & mask;

    return function() {
        m_z = (36969 * (m_z & 65535) + (m_z >>> 16)) & mask;
        m_w = (18000 * (m_w & 65535) + (m_w >>> 16)) & mask;

        let result = ((m_z << 16) + (m_w & 65535)) >>> 0;
        result /= 4294967296;
        return result;
    }
};

// Shuffle the bingo statements using our new Math.seed function
// thx to https://stackoverflow.com/a/2450976/2535523
let shuffle = function(randomFunc, inputArr) {
    let currentIndex = inputArr.length;
    let randomIndex;
    let arr = [... inputArr];
    
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(randomFunc() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [arr[currentIndex], arr[randomIndex]] = [
            arr[randomIndex], arr[currentIndex]
        ];
    }
    
    return arr;
};

// A pseudo-unique pseudo-randomly generated card for every username
let generateCard = function(name, interesting = false) {
    name = name.replace("@", "");
    name = name.toLowerCase();
    
    let nameCode = nameToInt(name);
    let seededRandom = Math.seed(nameCode);
    let retArr;
    
    if(interesting) {
        // Half infections, half other events
        let arr1 = shuffle(seededRandom, participantInfections);
        let arr2 = shuffle(seededRandom, otherEvents);
        retArr  = arr1.slice(0,12).concat(arr2.slice(0,12));
        retArr = shuffle(seededRandom, retArr);
    }
    else {
        // No constraints on number of each category
        // (i.e., usually almost all boring country + infection entries)
        retArr = participantInfections.concat(otherEvents);
        retArr = shuffle(seededRandom, retArr);
        retArr = retArr.slice(0, 24);
    }

    retArr.splice(12, 0, ["FREE SPACE", true, "http://www.nyan.cat/index.php?cat=gb"]);
    return retArr;
};

// found the beef for you, @wendys
// Generate a bingo card and display it
let updateCard = function() {
    // Actual card generation step
    card = generateCard(document.getElementById("username-input").value, document.getElementById("interesting-mode-input").checked);

    let tbl = document.getElementById("bingotable");

    // Remove any existing elements (in case a card has already been generated)
    if (tbl.children.length > 0) {
        tbl.children[0].remove();
    }

    // Populate the table
    let tbdy = document.createElement('tbody');

    // Row loop
    for (let ii = 0; ii < 5; ii++) {
        let tr = document.createElement('tr');

        // Column loop
        for (let jj = 0; jj < 5; jj++) {
            let td = document.createElement('td');
            let txt = document.createTextNode(card[ii * 5 + jj][0]);
            
            // Add the bingo cell text
            td.appendChild(txt);

            // Linkify the cell
            if(card[ii * 5 + jj][1]) {
                // Checked-off cells (things that have happened and been verified)
                td.onclick = ((iii, jjj) => {
                    return () => {
                        // Link to news source
                        window.open(card[iii * 5 + jjj][2], '_blank').focus();
                    }
                })(ii, jj);
                td.className = "checked-off";
            } else {
                // Unchecked cells (not yet happened/verified)
                td.onclick = ((iii, jjj) => {
                    return () => {
                        // Link to google search
                        window.open("https://www.google.com/search?q=" + encodeURIComponent(card[iii * 5 + jjj][0]), '_blank').focus();
                    }
                })(ii, jj);
            }
            tr.appendChild(td)
        }
        tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
};
