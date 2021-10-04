export class Survey {
    CandidateName: string ="";
     surveyData =[
         {"id": "1", "question": "Was the interview time and manner (online or in-person) clear to you?", "answer": ""},
         {"id": "2", "question": "Was the person conducting the interview or discussion on time?", "answer": ""},
         {"id": "3", "question": "What position did you apply for?", "answer": ""},
         {"id": "4", "question": "How can we improve our hiring process?", "answer": ""}
     ];

     surveySubQuestionData =[{"id": "1", "question": "What topics were discussed during the interview?", selectedAnswers: [""] }];

     surveysubOptionsList =[
     {"suboption": 'Frontend', "value":'Frontend', Category:'SoftwareEngineering'},
     {"suboption": 'Backend', "value": "Backend", Category:'SoftwareEngineering'},
     {"suboption": 'Database', "value": "Database", Category:'SoftwareEngineering'},
     {"suboption": 'CI-CD', "value": "CI-CD", Category:'SoftwareEngineering'},
     {"suboption": 'Azure', "value": "Azure",Category:'ResearchManagement'},
     {"suboption": 'research', "value":"research", Category:'ResearchManagement'},
     {"suboption": 'DataProcessing', "value":"DataProcessing", Category:'ResearchManagement'},
     {"suboption": 'DataAnalysis', "value":"DataAnalysis", Category:'ResearchManagement'},
     {"suboption": 'PeopleManagement', "value":"PeopleManagement", Category:'ResearchManagement'}]
}