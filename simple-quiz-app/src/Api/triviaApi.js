import axios from 'axios';

export const fetchCategories = async () => {
    const res = await axios.get('https://opentdb.com/api_category.php');
    return res.data.trivia_categories;
};

export const fetchQuestions = async (total = 10, cate = 9, diff = 'medium') => {
    const res = await axios.get(
        `https://opentdb.com/api.php?amount=${total}&category=${cate}&difficulty=${diff}&type=multiple`
    );
    return res.data.results;
};