function createArr(obj) {
	var root;
	if (obj.InStateTuition!= 0) {
		//if a school has in and out of state tuition
		root = 
		{
		  "name": "Rank: " + obj.Rank,
		  "displayNumber": false,
		  "children": [
		    {
		      "name": "Expenses",
		      "displayNumber": false,
		      "children": [
		        {
		          "name": "Weighted Tuition",
		          "displayNumber": true,
		          "size": parseInt(obj.AvgTuition),
		          "children": [
		            {"name": "Out of State Tuition", "displayNumber": true, "size": parseInt(obj.OutOfStateTuition)},
		            {"name": "In State Tuition", "displayNumber": true, "size": parseInt(obj.InStateTuition)}
		            //{"name": "Weighted Tuition", "displayNumber": true, "size": parseInt(obj.AvgTuition)}
		          ]
		        },
		        {"name": "Cost of Living", "displayNumber": true, "size": parseInt(obj.AvgCostLiving)},
		        ]
		    },
		    {
		      "name": "Average Financial Aid Given",
		      "displayNumber": false,
		      "children": [
		        //{"name": "Avg Number not on Financial Aid", "displayNumber": true, "size": parseInt(obj.TotalStudentBody) - parseInt(obj.TotalStudentBody * parseInt(obj.AvgOnFinAid.substr(0, obj.AvgOnFinAid.length - 1)) / 100)},
		        {"name": "Average Number of Students on Financial Aid", "displayNumber": true, "size": parseInt(obj.TotalStudentBody * parseInt(obj.AvgOnFinAid.substr(0, obj.AvgOnFinAid.length - 1)) / 100)},
		         //{"name": "Avg Percentage on Financial Aid", "displayNumber":true, "size": (parseInt(obj.AvgOnFinAid.substr(0, obj.AvgOnFinAid.length - 1)))}
		        {"name": "Average Grant Amount Given", "displayNumber": true, "size": parseInt(obj.AvgGrantAmount)}
		      ]
		    },
		    {
		      "name": "Total Student Body",
		      "displayNumber": true,
		      "size": parseInt(obj.TotalStudentBody),
		      "children": [
		        {"name": "Out of State Students", "displayNumber": true, "size": parseInt(obj.StudentBodyOutOfState)},
		        {"name": "In State Students", "displayNumber": true, "size": parseInt(obj.StudentBodyInState)},
		        //{"name": "Total Student Body", "displayNumber": true, "size": parseInt(obj.TotalStudentBody)}
		      ]
		    },
		    {
		      "name": "Average Career Salaries",
		      "displayNumber": false,
		      "children": [
		        {"name": "Average Starting Salary", "displayNumber": true, "size": parseInt(obj.StartingSalary)},
		        {"name": "Average Mid-Career Salary", "displayNumber": true, "size": parseInt(obj.MidSalary)}
		      ]
		    }
		  ]
		}
	}
	else {
		root = 
			{
			  "name": "Rank: " + obj.Rank,
			  "displayNumber": false,
			  "children": [
			    {
			      "name": "Expenses",
			      "displayNumber": false,
			      "children": [
			        {
			          "name": "Total Tuition",
			          "displayNumber": true,
			          "size": parseInt(obj.AvgTuition)
			        },
			        {"name": "Cost of Living", "displayNumber": true, "size": parseInt(obj.AvgCostLiving)},
			        ]
			    },
			    {
			      "name": "Average Financial Aid Given",
			      "displayNumber": false,
			      "children": [
			       // {"name": "Avg Number not on Financial Aid", "displayNumber": true, "size": parseInt(obj.TotalStudentBody) - parseInt(obj.TotalStudentBody * parseInt(obj.AvgOnFinAid.substr(0, obj.AvgOnFinAid.length - 1)) / 100)},
			        {"name": "Average Number of Students on Financial Aid", "displayNumber": true, "size": parseInt(obj.TotalStudentBody * parseInt(obj.AvgOnFinAid.substr(0, obj.AvgOnFinAid.length - 1)) / 100)},
			         //{"name": "Avg Percentage on Financial Aid", "displayNumber":true, "size": (parseInt(obj.AvgOnFinAid.substr(0, obj.AvgOnFinAid.length - 1)))}
			        {"name": "Average Grant Amount Given", "displayNumber": true, "size": parseInt(obj.AvgGrantAmount)}
			      ]
			    },
			    {
			      "name": "Total Student Body",
			      "displayNumber": true,
			      "size": parseInt(obj.TotalStudentBody)
			    },
			    {
			      "name": "Average Career Salaries",
			      "displayNumber": false,
			      "children": [
			        {"name": "Average Starting Salary", "displayNumber": true, "size": parseInt(obj.StartingSalary)},
			        {"name": "Average Mid-Career Salary", "displayNumber": true, "size": parseInt(obj.MidSalary)}
			      ]
			    }
			  ]
			}
		}
	return root;
}