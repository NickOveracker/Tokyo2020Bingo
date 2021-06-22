// thx to https://twitter.com/jamesajack/status/1406946332531585030
var options = [
    "Greece (GRE) Infection",
    "Refugee Olympic Team (EOR) Infection",
    "Iceland (ISL) Infection",
    "Ireland (IRL) Infection",
    "Azerbaijan (AZE) Infection",
    "Afghanistan (AFG) Infection",
    "American Samoa (ASA) Infection",
    "Virgin Islands (ISV) Infection",
    "United Arab Emirates (UAE) Infection",
    "Algeria (ALG) Infection",
    "Argentina (ARG) Infection",
    "Aruba (ARU) Infection",
    "Albania (ALB) Infection",
    "Armenia (ARM) Infection",
    "Angola (ANG) Infection",
    "Antigua and Barbuda (ANT) Infection",
    "Andorra (AND) Infection",
    "Yemen (YEM) Infection",
    "Great Britain (GBR) Infection",
    "British Virgin Islands (IVB) Infection",
    "Israel (ISR) Infection",
    "Italy (ITA) Infection",
    "Iraq (IRQ) Infection",
    "Iran (IRN) Infection",
    "India (IND) Infection",
    "Indonesia (INA) Infection",
    "Uganda (UGA) Infection",
    "Ukraine (UKR) Infection",
    "Uzbekistan (UZB) Infection",
    "Uruguay (URU) Infection",
    "Ecuador (ECU) Infection",
    "Egypt (EGY) Infection",
    "Estonia (EST) Infection",
    "Eswatini (SWZ) Infection",
    "Ethiopia (ETH) Infection",
    "Eritrea (ERI) Infection",
    "El Salvador (ESA) Infection",
    "Australia (AUS) Infection",
    "Austria (AUT) Infection",
    "Oman (OMA) Infection",
    "Netherlands (NED) Infection",
    "Ghana (GHA) Infection",
    "Cape Verde (CPV) Infection",
    "Guyana (GUY) Infection",
    "Kazakhstan (KAZ) Infection",
    "Qatar (QAT) Infection",
    "Canada (CAN) Infection",
    "Gabon (GAB) Infection",
    "Cameroon (CMR) Infection",
    "The Gambia (GAM) Infection",
    "Cambodia (CAM) Infection",
    "North Macedonia (MKD) Infection",
    "Guinea (GUI) Infection",
    "Guinea-Bissau (GBS) Infection",
    "Cyprus (CYP) Infection",
    "Cuba (CUB) Infection",
    "Kiribati (KIR) Infection",
    "Kyrgyzstan (KGZ) Infection",
    "Guatemala (GUA) Infection",
    "Guam (GUM) Infection",
    "Kuwait (KUW) Infection",
    "Cook Islands (COK) Infection",
    "Grenada (GRN) Infection",
    "Croatia (CRO) Infection",
    "Cayman Islands (CAY) Infection",
    "Kenya (KEN) Infection",
    "Ivory Coast (CIV) Infection",
    "Costa Rica (CRC) Infection",
    "Kosovo (KOS) Infection",
    "Comoros (COM) Infection",
    "Colombia (COL) Infection",
    "Republic of the Congo (CGO) Infection",
    "Democratic Republic of the Congo (COD) Infection",
    "Saudi Arabia (KSA) Infection",
    "Samoa (SAM) Infection",
    "São Tomé and Príncipe (STP) Infection",
    "Zambia (ZAM) Infection",
    "San Marino (SMR) Infection",
    "Sierra Leone (SLE) Infection",
    "Djibouti (DJI) Infection",
    "Jamaica (JAM) Infection",
    "Georgia (GEO) Infection",
    "Syria (SYR) Infection",
    "Singapore (SGP) Infection",
    "Zimbabwe (ZIM) Infection",
    "Switzerland (SUI) Infection",
    "Sweden (SWE) Infection",
    "Sudan (SUD) Infection",
    "Spain (ESP) Infection",
    "Suriname (SUR) Infection",
    "Sri Lanka (SRI) Infection",
    "Slovakia (SVK) Infection",
    "Slovenia (SLO) Infection",
    "Seychelles (SEY) Infection",
    "Equatorial Guinea (GEQ) Infection",
    "Senegal (SEN) Infection",
    "Serbia (SRB) Infection",
    "Saint Kitts and Nevis (SKN) Infection",
    "Saint Vincent and the Grenadines (VIN) Infection",
    "Saint Lucia (LCA) Infection",
    "Somalia (SOM) Infection",
    "Solomon Islands (SOL) Infection",
    "Thailand (THA) Infection",
    "South Korea (KOR) Infection",
    "Chinese Taipei (TPE) Infection",
    "Tajikistan (TJK) Infection",
    "Tanzania (TAN) Infection",
    "Czech Republic (CZE) Infection",
    "Chad (CHA) Infection",
    "Central African Republic (CAF) Infection",
    "China (CHN) Infection",
    "Tunisia (TUN) Infection",
    "Chile (CHI) Infection",
    "Tuvalu (TUV) Infection",
    "Denmark (DEN) Infection",
    "Germany (GER) Infection",
    "Togo (TOG) Infection",
    "Dominica (DMA) Infection",
    "Dominican Republic (DOM) Infection",
    "Trinidad and Tobago (TTO) Infection",
    "Turkmenistan (TKM) Infection",
    "Turkey (TUR) Infection",
    "Tonga (TGA) Infection",
    "Nigeria (NGR) Infection",
    "Nauru (NRU) Infection",
    "Namibia (NAM) Infection",
    "Nicaragua (NCA) Infection",
    "Niger (NIG) Infection",
    "New Zealand (NZL) Infection",
    "Nepal (NEP) Infection",
    "Norway (NOR) Infection",
    "Bahrain (BRN) Infection",
    "Haiti (HAI) Infection",
    "Pakistan (PAK) Infection",
    "Panama (PAN) Infection",
    "Vanuatu (VAN) Infection",
    "Bahamas (BAH) Infection",
    "Papua New Guinea (PNG) Infection",
    "Bermuda (BER) Infection",
    "Palau (PLW) Infection",
    "Paraguay (PAR) Infection",
    "Barbados (BAR) Infection",
    "Palestine (PLE) Infection",
    "Hungary (HUN) Infection",
    "Bangladesh (BAN) Infection",
    "East Timor (TLS) Infection",
    "Bhutan (BHU) Infection",
    "Fiji (FIJ) Infection",
    "Philippines (PHI) Infection",
    "Finland (FIN) Infection",
    "Puerto Rico (PUR) Infection",
    "Brazil (BRA) Infection",
    "Bulgaria (BUL) Infection",
    "Burkina Faso (BUR) Infection",
    "Brunei (BRU) Infection",
    "Burundi (BDI) Infection",
    "Vietnam (VIE) Infection",
    "Benin (BEN) Infection",
    "Venezuela (VEN) Infection",
    "Belarus (BLR) Infection",
    "Belize (BIZ) Infection",
    "Peru (PER) Infection",
    "Belgium (BEL) Infection",
    "Poland (POL) Infection",
    "Bosnia and Herzegovina (BIH) Infection",
    "Botswana (BOT) Infection",
    "Bolivia (BOL) Infection",
    "Portugal (POR) Infection",
    "Hong Kong (HKG) Infection",
    "Honduras (HON) Infection",
    "Marshall Islands (MHL) Infection",
    "Madagascar (MAD) Infection",
    "Malawi (MAW) Infection",
    "Mali (MLI) Infection",
    "Malta (MLT) Infection",
    "Malaysia (MAS) Infection",
    "Federated States of Micronesia (FSM) Infection",
    "South Africa (RSA) Infection",
    "South Sudan (SSD) Infection",
    "Myanmar (MYA) Infection",
    "Mexico (MEX) Infection",
    "Mauritius (MRI) Infection",
    "Mauritania (MTN) Infection",
    "Mozambique (MOZ) Infection",
    "Monaco (MON) Infection",
    "Maldives (MDV) Infection",
    "Moldova (MDA) Infection",
    "Morocco (MAR) Infection",
    "Mongolia (MGL) Infection",
    "Montenegro (MNE) Infection",
    "Jordan (JOR) Infection",
    "Laos (LAO) Infection",
    "Latvia (LAT) Infection",
    "Lithuania (LTU) Infection",
    "Libya (LBA) Infection",
    "Liechtenstein (LIE) Infection",
    "Liberia (LBR) Infection",
    "Romania (ROU) Infection",
    "Luxembourg (LUX) Infection",
    "Rwanda (RWA) Infection",
    "Lesotho (LES) Infection",
    "Lebanon (LBN) Infection",
    "United States (USA) Infection",
    "France (FRA) Infection",
    "Japan (JPN) Infection",
    "State of emergency in Tokyo reinstated",
    "Suga resigns",
    "Koike resigns",
    "Over 1,500 new infections per day in Tokyo",
    "Over 100% hospital bed occupancy in Tokyo",
    "Over 25 deaths per day in Tokyo",
    "Over 6,000 new infections per day in Japan",
    "Cluster in the Olympic village",
    "Media cluster",
    "Volunteer cluster",
    "Spectator cluster",
    "Training camp cluster",
    "Athletes caught sightseeing",
    "Foreign media caught sightseeing",
    "Olympic officials caught sightseeing",
    "Japan runs out of vaccines",
    "Olympics canceled",
    "All spectators banned",
    "Non-vaccinated athletes are vaccinated in Japan",
    "Athlete hospitalized due to Japanese summer heat",
    "Bach catches Covid",
    "Olympic mascots wear masks",
    "Olympic Covid cases are not counted towards the Japanese total",
    "Half of all volunteers quit",
    "Canadians wear those thick sweaty jackets at any time in Japan",
    "Delta becomes the new dominant variant in Japan",
    "No Japanese sponsors run any TV advertising mentioning the Olympics",
    "Athletes complain because of the lack of vegan food options",
    "Athletes complain because of the lack of halal food options",
    "Athletes complain because of the lack of sightseeing options",
    "Athletes complain because of the lack of free condoms",
    "Athletes complain because of happoshu",
    "Streaker in any stadium",
    "Suga approval dips below 30%",
    "China boycotts the Olympics",
    "AKB48 performs during the opening ceremony",
    "Suga dressed as Luigi",
    "Lack of interpreters",
    "Lack of translators"
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

// thx to https://stackoverflow.com/a/2450976/2535523
generateCard = function(name) {
    name = name.replace("@", "");
    name = name.toLowerCase();
    // clone the options array
    var arr = [...options];

    var nameCode = nameToInt(name);
    var seededRandom = Math.seed(nameCode);
    var currentIndex = arr.length,
        randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(seededRandom() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [arr[currentIndex], arr[randomIndex]] = [
            arr[randomIndex], arr[currentIndex]
        ];
    }

    var retArr = arr.slice(0, 24);
    retArr.splice(12, 0, "FREE SPACE");
    return retArr;
};

var updateCard = function() {
    card = generateCard(document.getElementById("username-input").value);

    tbl = document.getElementById("bingotable");

    if (tbl.children.length > 0) {
        tbl.children[0].remove();
    }

    var tbdy = document.createElement('tbody');

    for (var ii = 0; ii < 5; ii++) {
        var tr = document.createElement('tr');

        for (var jj = 0; jj < 5; jj++) {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(card[ii * 5 + jj]));
            tr.appendChild(td)
        }
        tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
};
