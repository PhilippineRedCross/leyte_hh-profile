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

// W14 has some with no answer because question may be N/A
// W17 "88": "Other"  is actually just a blank in the data, SAME FOR SOME OTHERS!!!
// H13... if there was an answer for "other" then added an 88 to list of answers

// key for 1 answer or multi answer? add note into text?

var surveyQuestions = [
	{
	"id": "watersource",
	"sector": "Water and Sanitation",
	"textEnglish": "Where is the drinking water source located?",
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
	"textEnglish": "What is your ownership status?",
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
	"textEnglish": "What is the house type?",
	"answersEnglish":
		{
		"concrete": "concrete",
		"lightmaterials": "light materials",
		"localmaterials": "local materials",
		"wood": "wood"
		}
	}
];