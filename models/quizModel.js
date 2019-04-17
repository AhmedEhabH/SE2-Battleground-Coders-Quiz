const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create ninja Schema & model
const QuizSchema = new Schema({
    size:{
        type: Number
    },
    field: {
        type:String
    },
    question: [
        {
            type: String,
            required: [true, 'question field is required']
        }
    ],
    choices: [
        [
            {
                type: String,
                required: [true, 'choices field is required']
            }
        ]
    ],
    answer: [
        {
            type: Array,
            required: [true, 'answer field is required']
        }
    ]
});

const quizdb = mongoose.model('quiz', QuizSchema);

module.exports = quizdb;