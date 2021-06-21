// thx to https://twitter.com/jamesajack/status/1406946332531585030
var options = [
    "Greece (GRE)",
    "Refugee Olympic Team (EOR)",
    "Iceland (ISL)",
    "Ireland (IRL)",
    "Azerbaijan (AZE)",
    "Afghanistan (AFG)",
    "American Samoa (ASA)",
    "Virgin Islands (ISV)",
    "United Arab Emirates (UAE)",
    "Algeria (ALG)",
    "Argentina (ARG)",
    "Aruba (ARU)",
    "Albania (ALB)",
    "Armenia (ARM)",
    "Angola (ANG)",
    "Antigua and Barbuda (ANT)",
    "Andorra (AND)",
    "Yemen (YEM)",
    "Great Britain (GBR)",
    "British Virgin Islands (IVB)",
    "Israel (ISR)",
    "Italy (ITA)",
    "Iraq (IRQ)",
    "Iran (IRN)",
    "India (IND)",
    "Indonesia (INA)",
    "Uganda (UGA)",
    "Ukraine (UKR)",
    "Uzbekistan (UZB)",
    "Uruguay (URU)",
    "Ecuador (ECU)",
    "Egypt (EGY)",
    "Estonia (EST)",
    "Eswatini",
    "Ethiopia (ETH)",
    "Eritrea (ERI)",
    "El Salvador (ESA)",
    "Australia (AUS)",
    "Austria (AUT)",
    "Oman (OMA)",
    "Netherlands (NED)",
    "Ghana (GHA)",
    "Cape Verde (CPV)",
    "Guyana (GUY)",
    "Kazakhstan (KAZ)",
    "Qatar (QAT)",
    "Canada (CAN)",
    "Gabon (GAB)",
    "Cameroon (CMR)",
    "The Gambia (GAM)",
    "Cambodia (CAM)",
    "North Macedonia (MKD)",
    "Guinea (GUI)",
    "Guinea-Bissau (GBS)",
    "Cyprus (CYP)",
    "Cuba (CUB)",
    "Kiribati (KIR)",
    "Kyrgyzstan (KGZ)",
    "Guatemala (GUA)",
    "Guam (GUM)",
    "Kuwait (KUW)",
    "Cook Islands (COK)",
    "Grenada (GRN)",
    "Croatia (CRO)",
    "Cayman Islands (CAY)",
    "Kenya (KEN)",
    "Ivory Coast (CIV)",
    "Costa Rica (CRC)",
    "Kosovo (KOS)",
    "Comoros (COM)",
    "Colombia (COL)",
    "Republic of the Congo (CGO)",
    "Democratic Republic of the Congo (COD)",
    "Saudi Arabia (KSA)",
    "Samoa (SAM)",
    "São Tomé and Príncipe (STP)",
    "Zambia (ZAM)",
    "San Marino (SMR)",
    "Sierra Leone (SLE)",
    "Djibouti (DJI)",
    "Jamaica (JAM)",
    "Georgia (GEO)",
    "Syria (SYR)",
    "Singapore (SGP)",
    "Zimbabwe (ZIM)",
    "Switzerland (SUI)",
    "Sweden (SWE)",
    "Sudan (SUD)",
    "Spain (ESP)",
    "Suriname (SUR)",
    "Sri Lanka (SRI)",
    "Slovakia (SVK)",
    "Slovenia (SLO)",
    "Seychelles (SEY)",
    "Equatorial Guinea (GEQ)",
    "Senegal (SEN)",
    "Serbia (SRB)",
    "Saint Kitts and Nevis (SKN)",
    "Saint Vincent and the Grenadines (VIN)",
    "Saint Lucia (LCA)",
    "Somalia (SOM)",
    "Solomon Islands (SOL)",
    "Thailand (THA)",
    "South Korea (KOR)",
    "Chinese Taipei (TPE)",
    "Tajikistan (TJK)",
    "Tanzania (TAN)",
    "Czech Republic (CZE)",
    "Chad (CHA)",
    "Central African Republic (CAF)",
    "China (CHN)",
    "Tunisia (TUN)",
    "Chile (CHI)",
    "Tuvalu (TUV)",
    "Denmark (DEN)",
    "Germany (GER)",
    "Togo (TOG)",
    "Dominica (DMA)",
    "Dominican Republic (DOM)",
    "Trinidad and Tobago (TTO)",
    "Turkmenistan (TKM)",
    "Turkey (TUR)",
    "Tonga (TGA)",
    "Nigeria (NGR)",
    "Nauru (NRU)",
    "Namibia (NAM)",
    "Nicaragua (NCA)",
    "Niger (NIG)",
    "New Zealand (NZL)",
    "Nepal (NEP)",
    "Norway (NOR)",
    "Bahrain (BRN)",
    "Haiti (HAI)",
    "Pakistan (PAK)",
    "Panama (PAN)",
    "Vanuatu (VAN)",
    "Bahamas (BAH)",
    "Papua New Guinea (PNG)",
    "Bermuda (BER)",
    "Palau (PLW)",
    "Paraguay (PAR)",
    "Barbados (BAR)",
    "Palestine (PLE)",
    "Hungary (HUN)",
    "Bangladesh (BAN)",
    "East Timor (TLS)",
    "Bhutan (BHU)",
    "Fiji (FIJ)",
    "Philippines (PHI)",
    "Finland (FIN)",
    "Puerto Rico (PUR)",
    "Brazil (BRA)",
    "Bulgaria (BUL)",
    "Burkina Faso (BUR)",
    "Brunei (BRU)",
    "Burundi (BDI)",
    "Vietnam (VIE)",
    "Benin (BEN)",
    "Venezuela (VEN)",
    "Belarus (BLR)",
    "Belize (BIZ)",
    "Peru (PER)",
    "Belgium (BEL)",
    "Poland (POL)",
    "Bosnia and Herzegovina (BIH)",
    "Botswana (BOT)",
    "Bolivia (BOL)",
    "Portugal (POR)",
    "Hong Kong (HKG)",
    "Honduras (HON)",
    "Marshall Islands (MHL)",
    "Madagascar (MAD)",
    "Malawi (MAW)",
    "Mali (MLI)",
    "Malta (MLT)",
    "Malaysia (MAS)",
    "Federated States of Micronesia (FSM)",
    "South Africa (RSA)",
    "South Sudan (SSD)",
    "Myanmar (MYA)",
    "Mexico (MEX)",
    "Mauritius (MRI)",
    "Mauritania (MTN)",
    "Mozambique (MOZ)",
    "Monaco (MON)",
    "Maldives (MDV)",
    "Moldova (MDA)",
    "Morocco (MAR)",
    "Mongolia (MGL)",
    "Montenegro (MNE)",
    "Jordan (JOR)",
    "Laos (LAO)",
    "Latvia (LAT)",
    "Lithuania (LTU)",
    "Libya (LBA)",
    "Liechtenstein (LIE)",
    "Liberia (LBR)",
    "Romania (ROU)",
    "Luxembourg (LUX)",
    "Rwanda (RWA)",
    "Lesotho (LES)",
    "Lebanon (LBN)",
    "United States (USA)",
    "France (FRA)",
    "Japan (JPN)",
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

		for(var ii = 0; ii < name.length && ii < primes.length; ii++) {
				retval += primes[ii] * name.charCodeAt(ii);
		}

		return retval;
};

// thx to https://stackoverflow.com/a/29450606/2535523
Math.seed = function(s) {
    var mask = 0xffffffff;
    var m_w  = (123456789 + s) & mask;
    var m_z  = (987654321 - s) & mask;

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

  var nameCode = nameToInt(name);
  var seededRandom = Math.seed(nameCode);
  var currentIndex = options.length,  randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(seededRandom() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [options[currentIndex], options[randomIndex]] = [
      options[randomIndex], options[currentIndex]];
  }

  var retArr = options.slice(0,24);
  retArr.splice(12,0,"FREE SPACE");
  return retArr;
};

//generateCard("nick_overacker");
