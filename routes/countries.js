var request = require('request');
var config = require('../config');

var countries = {

codes : {"BD":"Bangladesh","BE":"Belgium","BF":"Burkina Faso","BG":"Bulgaria",
  "BA":"Bosnia and Herzegovina","BB":"Barbados","WF":"Wallis and Futuna",
  "BL":"Saint Barthelemy","BM":"Bermuda","BN":"Brunei","BO":"Bolivia","BH":"Bahrain",
  "BI":"Burundi","BJ":"Benin","BT":"Bhutan","JM":"Jamaica","BV":"Bouvet Island","BW":"Botswana",
  "WS":"Samoa","BR":"Brazil","BS":"Bahamas","JE":"Jersey","BY":"Belarus","BZ":"Belize","RU":"Russia",
  "RW":"Rwanda","RS":"Serbia","TL":"Timor-Leste","TM":"Turkmenistan","TJ":"Tajikistan","RO":"Romania",
  "TK":"Tokelau","GW":"Guinea-Bissau","GU":"Guam","GT":"Guatemala","GR":"Greece","GQ":"Equatorial Guinea",
  "JP":"Japan","GY":"Guyana","GG":"Guernsey","GE":"Georgia","GD":"Grenada","GB":"United Kingdom","GA":"Gabon",
  "SV":"El Salvador","GN":"Guinea","GM":"Gambia","GL":"Greenland","GI":"Gibraltar","GH":"Ghana","OM":"Oman",
  "TN":"Tunisia","JO":"Jordan","HR":"Croatia","HT":"Haiti","HU":"Hungary","HK":"Hong Kong","HN":"Honduras",
  "HM":"Heard Island and McDonald Islands","VE":"Venezuela","PR":"Puerto Rico","PS":"Palestinian Territory",
  "PW":"Palau","PT":"Portugal","SJ":"Svalbard","PY":"Paraguay","IQ":"Iraq","PA":"Panama","PF":"French Polynesia",
  "PG":"Papua New Guinea","PE":"Peru","PK":"Pakistan","PH":"Philippines","PN":"Pitcairn","PL":"Poland",
  "PM":"Saint Pierre and Miquelon","ZM":"Zambia","EH":"Western Sahara","EE":"Estonia","EG":"Egypt","ZA":"South Africa",
  "EC":"Ecuador","IT":"Italy","VN":"Vietnam","SB":"Solomon Islands","EU":"European Union","ET":"Ethiopia","SO":"Somalia",
  "ZW":"Zimbabwe","SA":"Saudi Arabia","ES":"Spain","ER":"Eritrea","ME":"Montenegro","MD":"Moldova","MG":"Madagascar",
  "MF":"Saint Martin","MA":"Morocco","MC":"Monaco","UZ":"Uzbekistan","MM":"Myanmar","ML":"Mali","MO":"Macao",
  "MN":"Mongolia","MH":"Marshall Islands","MK":"Macedonia","MU":"Mauritius","MT":"Malta","MW":"Malawi","MV":"Maldives",
  "MP":"Northern Mariana Islands","MS":"Montserrat","MR":"Mauritania","IM":"Isle of Man","UG":"Uganda","MY":"Malaysia",
  "MX":"Mexico","IL":"Israel","FR":"France","IO":"British Indian Ocean Territory",
  "SH":"Saint Helena Ascension and Tristan da Cunha","FI":"Finland","FJ":"Fiji","FK":"Falkland Islands",
  "FM":"Micronesia","FO":"Faroe Islands","NI":"Nicaragua","NL":"Netherlands","NO":"Norway","NA":"Namibia",
  "VU":"Vanuatu","NC":"New Caledonia","NE":"Niger","NF":"Norfolk Island","NG":"Nigeria",
  "NZ":"New Zealand","NP":"Nepal","NR":"Nauru","NU":"Niue","CK":"Cook Islands","CI":"Ivory Coast",
  "CH":"Switzerland","CO":"Colombia","CN":"China","CM":"Cameroon","CL":"Chile","CC":"Cocos Islands",
  "CA":"Canada","CG":"Congo Republic","CF":"Central African Republic","CD":"Congo Democratic Republic",
  "CZ":"Czech Republic","CY":"Cyprus","CX":"Christmas Island","CR":"Costa Rica","CV":"Cape Verde","CU":"Cuba",
  "SZ":"Swaziland","SY":"Syria","KG":"Kyrgyzstan","KE":"Kenya","SR":"Suriname","KI":"Kiribati","KH":"Cambodia",
  "KN":"Saint Kitts and Nevis","KM":"Comoros","ST":"Sao Tome and Principe","SK":"Slovakia","KR":"Korea South",
  "SI":"Slovenia","KP":"Korea North","KW":"Kuwait","SN":"Senegal","SM":"San Marino","SL":"Sierra Leone",
  "SC":"Seychelles","KZ":"Kazakhstan","KY":"Cayman Islands","SG":"Singapore","SE":"Sweden","SD":"Sudan",
  "DO":"Dominican Republic","DM":"Dominica","DJ":"Djibouti","DK":"Denmark","VG":"British Virgin Islands",
  "DE":"Germany","YE":"Yemen","DZ":"Algeria","US":"United States","UY":"Uruguay","YT":"Mayotte","LB":"Lebanon",
  "LC":"Saint Lucia","LA":"Laos","TV":"Tuvalu","TW":"Taiwan","TT":"Trinidad and Tobago","TR":"Turkey","LK":"Sri Lanka",
  "LI":"Liechtenstein","LV":"Latvia","TO":"Tonga","LT":"Lithuania","LU":"Luxembourg","LR":"Liberia","LS":"Lesotho",
  "TH":"Thailand","TF":"French Southern Territories","TG":"Togo","TD":"Chad","TC":"Turks and Caicos Islands",
  "LY":"Libya","VA":"Holy See","VC":"Saint Vincent and the Grenadines","AE":"United Arab Emirates","AD":"Andorra",
  "AG":"Antigua and Barbuda","AF":"Afghanistan","AI":"Anguilla","VI":"Virgin Islands","IS":"Iceland","IR":"Iran",
  "AM":"Armenia","AL":"Albania","AO":"Angola","AN":"Netherlands Antilles","AQ":"Antarctica","AP":"Asia & Pacific",
  "AS":"American Samoa","AR":"Argentina","AU":"Australia","AT":"Austria","AW":"Aruba","IN":"India","TZ":"Tanzania",
  "AZ":"Azerbaijan","IE":"Ireland","ID":"Indonesia","UA":"Ukraine","QA":"Qatar","MZ":"Mozambique"},

getcountires: function(req, res) {
  res.render('index', { title: 'All Countries' , codes:countries.codes});
},

getcountry:function(req, res) {
  var name = req.param('name');
  request.get(config.countryserverurl+name, function(err, r, data){
    if (!err) {
      data = JSON.parse(data);
      if (Object.keys(data).length == 0) {
        res.render('404', { title: 'Oops no data!!'});
      } else {
        res.render('country', { title: data.Name +'\'s Information' , data:data, code:name});
      }
    } else {
      res.render('404', { title: 'Oops no data!!'});
    }
  });
}
};

module.exports = countries;