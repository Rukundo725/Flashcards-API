import { extendType, objectType } from "nexus";
import { NexusGenObjects } from "../../nexus-typegen"; 

export const Question = objectType({
    name: "Question", 
    definition(t) {  
        t.nonNull.int("id"); 
        t.nonNull.string("topic"); 
        t.nonNull.string("question"); 
    },
});

let questions: NexusGenObjects["Question"][]= [   
    {
        id: 1,
        topic: "www.howtographql.com",
        question: "Fullstack tutorial for GraphQL",
    },
    {
        id: 2,
        topic: "graphql.org",
        question: "GraphQL official website",
    },
];

export const QuestionQuery = extendType({  
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("feed", {   
            type: "Question",
            resolve(parent, args, context, info) {    
                return questions;
            },
        });
    },
});