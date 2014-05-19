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
	"sector": "House and Tenure",
	"textEnglish": "Ownership status?",
	"answersEnglish":
		{
		"owned": "owned",
		"familyowned": "family owned",
		"rented": "rented",
		"public": "public",	
		"others": "others"
		}
	},
	{
	"id": "housetype",
	"sector": "House and Tenure",
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
	{
	"id": "govtassistance_shelterrepair",
	"sector": "Humanitarian Assistance",
	"textEnglish": "Government assistance - Shelter Repair",
	"answersEnglish":
		{
		"TRUE": "Yes",
		"FALSE": "No"
		}
	},
	{
	"id": "govtassistance_coreshelter",
	"sector": "Humanitarian Assistance",
	"textEnglish": "Government assistance - Core Shelter",
	"answersEnglish":
		{
		"TRUE": "Yes",
		"FALSE": "No"
		}
	},
	{
	"id": "govtassistance_livelihood",
	"sector": "Humanitarian Assistance",
	"textEnglish": "Government assistance - Livelihood",
	"answersEnglish":
		{
		"TRUE": "Yes",
		"FALSE": "No"
		}
	},
	{
	"id": "govtassistance_none",
	"sector": "Humanitarian Assistance",
	"textEnglish": "No Government assistance",
	"answersEnglish":
		{
		"TRUE": "True",
		"FALSE": "False"
		}
	},
	{
	"id": "hmaritalstatus",
	"sector": "House and Tenure",
	"textEnglish": "Marital status?",
	"answersEnglish":
		{
		"married": "married",
		"widowed": "widowed",
		"living_together": "living together",
		"single": "single",
		"annuled": "annuled",
		"separated": "separated",
		"others": "other"
		}
	},
	{
	"id": "terrain_riverside",
	"sector": "Terrain",
	"textEnglish": "Riverside",
	"answersEnglish":
		{
		"TRUE": "True",
		"FALSE": "False"
		}
	},
	{
	"id": "terrain_beach",
	"sector": "Terrain",
	"textEnglish": "Beach",
	"answersEnglish":
		{
		"TRUE": "True",
		"FALSE": "False"
		}
	},
	{
	"id": "terrain_mountains",
	"sector": "Terrain",
	"textEnglish": "Mountains",
	"answersEnglish":
		{
		"TRUE": "True",
		"FALSE": "False"
		}
	},
	{
	"id": "terrain_plains",
	"sector": "Terrain",
	"textEnglish": "Plains",
	"answersEnglish":
		{
		"TRUE": "True",
		"FALSE": "False"
		}
	},
	{
	"id": "terrain_highway",
	"sector": "Terrain",
	"textEnglish": "Highway",
	"answersEnglish":
		{
		"TRUE": "True",
		"FALSE": "False"
		}
	},
	{
	"id": "terrain_urban",
	"sector": "Terrain",
	"textEnglish": "Urban",
	"answersEnglish":
		{
		"TRUE": "True",
		"FALSE": "False"
		}
	},
	{
	"id": "terrain_others",
	"sector": "Terrain",
	"textEnglish": "Others",
	"answersEnglish":
		{
		"TRUE": "True",
		"FALSE": "False"
		}
	},
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
	"sector": "House and Tenure",
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