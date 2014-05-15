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
	},
	{
	"id": "premain",
	"sector": "Livelihood",
	"textEnglish": "What was your main employment pre-Yolanda?",
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
	"textEnglish": "What was your main employment post-Yolanda?",
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
	}
];