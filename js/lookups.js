var color12 = [
	"#8dd3c7",
	"#ffffb3",
	"#bebada",
	"#fb8072",
	"#80b1d3",
	"#fdb462",
	"#b3de69",
	"#fccde5",
	"#d9d9d9",
	"#bc80bd",
	"#ccebc5",
	"#ffed6f"
];

var color12alt = [
	"#a6cee3",
	"#1f78b4",
	"#b2df8a",
	"#33a02c",
	"#fb9a99",
	"#e31a1c",
	"#fdbf6f",
	"#ff7f00",
	"#cab2d6",
	"#6a3d9a",
	"#ffff99",
	"#b15928"
];


// var array = []; 
// $.each(surveyData, function(a,b){
//   if($.inArray(b.X, array) === -1){
//     array.push(b.X);
//   }
// });
// console.log(array);  

var surveyQuestions = [
	{
	"id": "watersource",
	"sector": "Water and Sanitation",
	"textEnglish": "Location of drinking water source?",
	"answersEnglish": 
		{
		"handpumps": "hand pump",
		"pipeline": "pipeline",
		"spring": "spring",
		"communaltaps": "communal tap",
		"river": "river",
		"others": "other"
		}
	},
	{
	"id": "ownership",
	"sector": "House and Land",
	"textEnglish": "Ownership status?",
	"answersEnglish":
		{
		"owned": "owned",
		"others": "others",
		"rented": "rented",
		"familyowned": "family owned",
		"public": "public"	
		}
	},
	{
	"id": "housetype",
	"sector": "House and Land",
	"textEnglish": "House type?",
	"answersEnglish":
		{
		"concrete": "concrete",
		"lightmaterials": "light materials",
		"localmaterials": "local materials",
		"wood": "wood"
		}
	},
	{
	"id": "premain",
	"sector": "Livelihood",
	"textEnglish": "Main employment pre-Yolanda?",
	"answersEnglish":
		{
		"farming": "farming",
		"fishing": "fishing",
		"livestock": "livestock",
		"caslabour": "casual labour",
		"skilled": "skilled labour",
		"agrilabour": "agricultural labour",
		"pettytrade": "petty trade",
		"govtemployment": "government employee",
		"privateemployment": "private employee",
		"remittance": "remittance",
		"others": "other"
		}
	},
	{
	"id": "postmain",
	"sector": "Livelihood",
	"textEnglish": "Main employment post-Yolanda?",
	"answersEnglish":
		{
		"farming": "farming",
		"fishing": "fishing",
		"livestock": "livestock",
		"caslabour": "casual labour",
		"skilled": "skilled labour",
		"agrilabour": "agricultural labour",
		"pettytrade": "petty trade",
		"govtemployment": "government employee",
		"privateemployment": "private employee",
		"remittance": "remittance",
		"others": "other"
		}
	},
	{
	"id": "qualified_assistance",
	"sector": "Humanitarian Assistance",
	"textEnglish": "Qualified assistance?",
	"answersEnglish":
		{
		"coreshelter": "coreshelter",
		"shelterrepair": "shelterrepair",
		"livelihood": "livelihood",
		"none": "none"
		}
	},
	// {
	// "id": "govtassistance",
	// "sector": "Humanitarian Assistance",
	// "textEnglish": "Government assistance?",
	// "answersEnglish":
	// 	{
	// 	"coreshelter": "coreshelter",
	// 	"shelterrepair": "shelterrepair",
	// 	"livelihood": "livelihood",
	// 	"shelterrepair none": "shelterrepair none",
	// 	"none": "none"
	// 	}
	// },
	{
	"id": "hmaritalstatus",
	"sector": "House and Land",
	"textEnglish": "Marital status?",
	"answersEnglish":
		{
		"married": "married",
		"widowed": "widowed",
		"living_together": "living together",
		"single": "single",
		"annuled": "annuled"
		}
	},
	// {
	// "id": "terrain",
	// "sector": "House and Land",
	// "textEnglish": "Terrain?",
	// "answersEnglish":
	// 	{
	// 	"plains": "plains",
	// 	"plains highway": "plains highway",
	// 	"highway": "highway",
	// 	"urban": "urban",
	// 	"riverside": "riverside",
	// 	"highway urban": "highway urban",
	// 	"mountains": "mountains",
	// 	"others": "others"
	// 	}
	// },
	{
	"id": "sustaineddamage",
	"sector": "Humanitarian Assistance",
	"textEnglish": "Sustained damage?",
	"answersEnglish":
		{
		"damaged": "damaged",
		"destroyed": "destroyed"
		}
	},
	{
	"id": "residency",
	"sector": "House and Land",
	"textEnglish": "Residency?",
	"answersEnglish":
		{
		"twelvemonth": "twelve months",
		"sixmonths": "six months",
		"twomonths": "two months",
		"onemonth": "one month"
		}
	},
	{
	"id": "safe_water",
	"sector": "Water and Sanitation",
	"textEnglish": "Safe water?",
	"answersEnglish": 
		{
		"yes": "yes",
		"no": "no"
		}
	}
];