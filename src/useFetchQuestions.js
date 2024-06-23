import { useState,useEffect } from 'react';
import axios from 'axios';

const useFetchQuestions=(surveyTopic) => {
    const [questions,setQuestions]=useState([
        "What is your favorite framework?",
        "How do you stay updated with technology trends?"
    ]);

    useEffect(() => {
        if (surveyTopic) {
            axios.get(`https://api.example.com/questions?topic=${surveyTopic}`)
                .then(response => setQuestions(response.data))
                .catch(error => console.error('Error fetching questions:',error));
        }
    },[surveyTopic]);

    return questions;
};

export default useFetchQuestions;
