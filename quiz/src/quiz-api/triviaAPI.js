import axios from 'axios';

export const fetchCategories = async () => {
    const res = await axios.get('https://opentdb.com/api_category.php');
    return res.data.trivia_categories;
};

export const fetchQuestions = async (amount = 10, category = 9, difficulty = 'medium') => {
    const res = await axios.get(
        `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
    );
    return res.data.results;
};