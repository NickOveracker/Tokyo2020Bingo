// thx to https://twitter.com/jamesajack/status/1406946332531585030
var participantInfections = [
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
    ["Argentina (ARG) Infection", false],
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
    ["Netherlands (NED) Infection", false],
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
    ["South Korea (KOR) Infection", false],
    ["Chinese Taipei (TPE) Infection", false],
    ["Tajikistan (TJK) Infection", false],
    ["Tanzania (TAN) Infection", false],
    ["Czech Republic (CZE) Infection", false],
    ["Chad (CHA) Infection", false],
    ["Central African Republic (CAF) Infection", false],
    ["China (CHN) Infection", false],
    ["Tunisia (TUN) Infection", false],
    ["Chile (CHI) Infection", false],
    ["Tuvalu (TUV) Infection", false],
    ["Denmark (DEN) Infection", false],
    ["Germany (GER) Infection", false],
    ["Togo (TOG) Infection", false],
    ["Dominica (DMA) Infection", false],
    ["Dominican Republic (DOM) Infection", false],
    ["Trinidad and Tobago (TTO) Infection", false],
    ["Turkmenistan (TKM) Infection", false],
    ["Turkey (TUR) Infection", false],
    ["Tonga (TGA) Infection", false],
    ["Nigeria (NGR) Infection", false],
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
    ["Philippines (PHI) Infection", false],
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
    ["South Africa (RSA) Infection", false],
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
    ["United States (USA) Infection", false],
    ["France (FRA) Infection", false],
    ["Japan (JPN) Infection", false]
];
var otherEvents = [
    ["State of emergency in Tokyo reinstated", true, "https://edition.cnn.com/2021/07/08/asia/japan-state-of-emergency-olympics-intl-hnk/index.html"],
    ["Suga resigns", false],
    ["Koike resigns", false],
    ["Over 1,500 new infections per day in Tokyo", false],
    ["Over 100% hospital bed occupancy in Tokyo", false],
    ["Over 25 deaths per day in Tokyo", false],
    ["Over 6,000 new infections per day in Japan", false],
    ["Cluster in the Olympic village", false],
    ["Media cluster", false],
    ["Volunteer cluster", false],
    ["Spectator cluster", false],
    ["Training camp cluster", false],
    ["Athletes caught sightseeing", false],
    ["Foreign media caught sightseeing", false],
    ["Olympic officials caught sightseeing", false],
    ["Japan runs out of vaccines", false],
    ["Olympics canceled", false],
    ["All spectators banned", true, "https://edition.cnn.com/2021/07/08/asia/japan-state-of-emergency-olympics-intl-hnk/index.html"],
    ["Non-vaccinated athletes are vaccinated in Japan", true, "https://english.kyodonews.net/news/2021/05/629bd2373907-japan-to-start-vaccinating-olympic-athletes-from-june-1-joc.html"],
    ["Athlete hospitalized due to Japanese summer heat", false],
    ["Bach catches Covid", false],
    ["Olympic mascots wear masks", false],
    ["Olympic Covid cases are not counted towards the Japanese total", false],
    ["Half of all volunteers quit", false],
    ["Canadians wear those thick sweaty jackets at any time in Japan", false],
    ["Delta becomes the new dominant variant in Japan", false],
    ["No Japanese sponsors run any TV advertising mentioning the Olympics", false],
    ["Athletes complain because of the lack of vegan food options", false],
    ["Athletes complain because of the lack of halal food options", false],
    ["Athletes complain because of the lack of sightseeing options", false],
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
nameToInt = function(name) {
    retval = 0;

    primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];

    for (var ii = 0; ii < name.length && ii < primes.length; ii++) {
        retval += primes[ii] * name.charCodeAt(ii);
    }

    return retval;
};

// thx to https://stackoverflow.com/a/29450606/2535523
Math.seed = function(s) {
    var mask = 0xffffffff;
    var m_w = (123456789 + s) & mask;
    var m_z = (987654321 - s) & mask;

    return function() {
        m_z = (36969 * (m_z & 65535) + (m_z >>> 16)) & mask;
        m_w = (18000 * (m_w & 65535) + (m_w >>> 16)) & mask;

        var result = ((m_z << 16) + (m_w & 65535)) >>> 0;
        result /= 4294967296;
        return result;
    }
};

var shuffle = function(randomFunc, inputArr) {
    var currentIndex = inputArr.length;
    var randomIndex;
    var arr = [... inputArr];
    
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

// thx to https://stackoverflow.com/a/2450976/2535523
var generateCard = function(name, interesting = false) {
    name = name.replace("@", "");
    name = name.toLowerCase();
    
    var nameCode = nameToInt(name);
    var seededRandom = Math.seed(nameCode);
    var retArr;
    
    if(interesting) {
        var arr1 = shuffle(seededRandom, participantInfections);
        var arr2 = shuffle(seededRandom, otherEvents);
        var retArr  = arr1.slice(0,12).concat(arr2.slice(0,12));
        var retArr = shuffle(seededRandom, retArr);
    }
    else {
        // clone the options array
        retArr = participantInfections.concat(otherEvents);
        retArr = shuffle(seededRandom, retArr);
        retArr = retArr.slice(0, 24);
    }

    retArr.splice(12, 0, ["FREE SPACE", true, "http://www.nyan.cat/index.php?cat=gb"]);
    return retArr;
};

var updateCard = function() {
    card = generateCard(document.getElementById("username-input").value, document.getElementById("interesting-mode-input").checked);

    tbl = document.getElementById("bingotable");

    if (tbl.children.length > 0) {
        tbl.children[0].remove();
    }

    var tbdy = document.createElement('tbody');

    for (var ii = 0; ii < 5; ii++) {
        var tr = document.createElement('tr');

        for (var jj = 0; jj < 5; jj++) {
            var td = document.createElement('td');
            var txt = document.createTextNode(card[ii * 5 + jj][0]);
            
            td.appendChild(txt);

            if(card[ii * 5 + jj][1]) {
                td.onclick = ((iii, jjj) => {
                    return () => {
                        window.open(card[iii * 5 + jjj][2], '_blank').focus();
                    }
                })(ii, jj);
                td.className = "checked-off";
            } else {
                td.onclick = ((iii, jjj) => {
                    return () => {
                        window.open("https://www.google.com/search?q=" + encodeURIComponent(card[ii * 5 + jj][0]), '_blank').focus();
                    }
                })(ii, jj);
            }
            tr.appendChild(td)
        }
        tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
};
