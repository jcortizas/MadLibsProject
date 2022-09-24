"use strict";

let userInputs = ["Multivac","data","human","universe","Earth","2061","space","energy","planets","overcrowded","Planet X-23","entropy","ligth"];

/*
0 -> Multivac
1 -> data
2 -> human
3 -> universe
4 -> Earth
5 -> 2061
6 -> space
7 -> energy 
8 -> planets
9 -> overcrowded
10 -> Planet X-23
11 -> entropy
12 -> light
*/

// Plot summary of Asimov's short story "The Last Question"
//https://en.wikipedia.org/wiki/The_Last_Question#Plot_summary
let originalStory = `${userInputs[0]}. had been fed ${userInputs[1]} for decades, assessing ${userInputs[1]} and answering questions, allowing man to reach beyond the planetary confines of ${userInputs[4]}. However, in the year 2061,
 ${userInputs[0]} began to understand deeper fundamentals of ${userInputs[2]}ity. In each of the first six scenes, a different character presents the computer with the same question, how the threat to ${userInputs[2]} 
 existence posed by the heat death of the ${userInputs[3]} can be averted: "How can the net amount of ${userInputs[11]} of the ${userInputs[3]} be massively decreased?" That is equivalent to asking, 'Can the increase 
 of the ${userInputs[11]} of the ${userInputs[3]} be reversed?' ${userInputs[0]}'s only response after much 'thinking' is 'INSUFFICIENT ${userInputs[1].toUpperCase()} FOR MEANINGFUL ANSWER'. 
 
 The story jumps forward in time into later eras of ${userInputs[2]} and scientific development. These new eras highlight ${userInputs[2]}ity's goals of searching for "more"; more ${userInputs[6]}, more ${userInputs[7]}, more ${userInputs[8]} 
 to inhabit once the current one becomes ${userInputs[9]}. As ${userInputs[2]}ity's imprint on the ${userInputs[3]} expands, computers have subsequently become more compact, as evidenced in the "Microvac"s, a smaller 
 and more advanced iteration of ${userInputs[0]}, noted in the second era of the story, which details ${userInputs[2]}ity's inhabitation on "${userInputs[10]}". In each era, someone decides to ask the ultimate "last question" 
 regarding the reversal and decrease of ${userInputs[11]}. Each time that ${userInputs[0]}'s descendant is asked the question, it finds itself unable to solve the problem, and all it can answer is "THERE IS AS YET INSUFFICIENT 
 ${userInputs[1].toUpperCase()} FOR A MEANINGFUL ANSWER."

In the last scene, the god-like descendant of ${userInputs[2]}ity, the unified mental process of over a trillion, trillion, trillion ${userInputs[2]}s who have spread throughout the ${userInputs[3]}, watches the stars flicker out, one by one,
as matter and energy end, and with them, space and time. ${userInputs[2]}ity asks AC, ${userInputs[0]}'s ultimate descendant that exists in hyperspace beyond the bounds of gravity or time, the ${userInputs[11]} question 
one last time, before the last of ${userInputs[2]}ity merges with ${userInputs[0]} and disappears. ${userInputs[0]} is still unable to answer but continues to ponder the question even after space and time cease to exist. ${userInputs[0]} ultimately realizes that it has 
not yet combined all of its available ${userInputs[1]} in every possible combination and so begins the arduous process of rearranging and combining every last bit of information that it has gained throughout the eons and through 
its fusion with ${userInputs[2]}ity. Eventually ${userInputs[0]} discovers the answer—that the reversal of ${userInputs[11]} is, in fact, possible—but has nobody to report it to, since the ${userInputs[3]} is already dead. It therefore decides to answer by 
demonstration. The story ends with ${userInputs[0]}'s pronouncement:

    And ${userInputs[0]} said: "LET THERE BE ${userInputs[12].toUpperCase()}!" And there was ${userInputs[12]}"`


console.log(originalStory);

let numberOfQuestions = 13;
let questionArray = [];
let questionCounter = 0;

const query = "Please enter";
questionArray.push(`${query} the name of a supercomputer`);
questionArray.push(`${query} the noum of something a computer can process`);
questionArray.push(`${query} the name of a animal species`);
questionArray.push(`${query} the name of a place`);
questionArray.push(`${query} the name of a planet`);
questionArray.push(`${query} a year in th future`);
questionArray.push(`${query} the name of a place`);
questionArray.push(`${query} the name of valuabble a thing`);
questionArray.push(`${query} the name of another valuabble a thing`);
questionArray.push(`${query} the name of another valuabble a thing`);
questionArray.push(`${query} an adjective`);
questionArray.push(`${query} the name of another planet`);
questionArray.push(`${query} a noum related to physics`);
questionArray.push(`${query} a noum`);

for(let i = numberOfQuestions; i >= 0; i--){
    console.log(questionArray[questionCounter]);
    console.log(`i -> ${i} questionCounter -> ${questionCounter}`);
    questionCounter++;
}






 /*   let originalStory = `Multivac had been fed data for decades, assessing data and answering questions, allowing man to reach beyond the planetary confines of Earth. However, in the year ${userInputs[5]},
    Multivac began to understand deeper fundamentals of humanity. In each of the first six scenes, a different character presents the computer with the same question, how the threat to human 
    existence posed by the heat death of the universe can be averted: "How can the net amount of entropy of the universe be massively decreased?" That is equivalent to asking, 'Can the increase 
    of the entropy of the universe be reversed?' Multivac's only response after much 'thinking' is 'INSUFFICIENT DATA FOR MEANINGFUL ANSWER'. 
    
    The story jumps forward in time into later eras of human and scientific development. These new eras highlight humanity's goals of searching for "more"; more space, more energy, more planets 
    to inhabit once the current one becomes overcrowded. As humanity's imprint on the universe expands, computers have subsequently become more compact, as evidenced in the "Microvac"s, a smaller 
    and more advanced iteration of Multivac, noted in the second era of the story, which details humanity's inhabitation on "Planet X-23". In each era, someone decides to ask the ultimate "last question" 
    regarding the reversal and decrease of entropy. Each time that Multivac's descendant is asked the question, it finds itself unable to solve the problem, and all it can answer is "THERE IS AS YET INSUFFICIENT 
    DATA FOR A MEANINGFUL ANSWER."
   
   In the last scene, the god-like descendant of humanity, the unified mental process of over a trillion, trillion, trillion humans who have spread throughout the universe, watches the stars flicker out, one by one,
   as matter and energy end, and with them, space and time. Humanity asks AC ("Automatic Computer"), Multivac's ultimate descendant that exists in hyperspace beyond the bounds of gravity or time, the entropy question 
   one last time, before the last of humanity merges with AC and disappears. AC is still unable to answer but continues to ponder the question even after space and time cease to exist. AC ultimately realizes that it has 
   not yet combined all of its available data in every possible combination and so begins the arduous process of rearranging and combining every last bit of information that it has gained throughout the eons and through 
   its fusion with humanity. Eventually AC discovers the answer—that the reversal of entropy is, in fact, possible—but has nobody to report it to, since the universe is already dead. It therefore decides to answer by 
   demonstration. The story ends with AC's pronouncement:
   
       And AC said: "LET THERE BE LIGHT!" And there was light—"`*/