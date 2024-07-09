import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Database Design for Teree Armee',
        description: "I have designed a database for an organization named Teree Armee to store datasets and avoid overwriting and over-replacing issues. Using Python, MySQL, and SSMS, I ensured data storage as well as immutability by storing formulas, table structures, and row/column counts in a separate table. Additionally, I worked on two databases simultaneously.",
        tools: ['Python', 'MySQL', 'SSMS'],
        role: 'Database Design Intern',
        code: '',
        demo: '',
        image: 'crefin', // Assuming 'crefin' is the correct image reference
    },
    {
        id: 2,
        name: 'Cinema-Pedia',
        description: "This website, hosted locally, allows users to search for movies and display comprehensive details, including watch hours and awards. Developed using HTML, CSS, and JavaScript.",
        tools: ['HTML', 'CSS', 'JavaScript'],
        role: 'Personal Project',
        code: 'https://github.com/akhil11sharma/cinema-pedia',
        demo: '',
        image: 'travel', // Assuming 'travel' is the correct image reference
    },
    {
        id: 3,
        name: 'LinkedIn Limit Exhauster',
        description: "Using Selenium, I designed a webdriver to add people based on a search table, facilitating random connections and managing LinkedIn time duration.",
        tools: ['Selenium', 'Python'],
        role: 'Personal Project',
        code: '',
        demo: '',
        image: 'realEstate', // Assuming 'realEstate' is the correct image reference
    },
    {
        id: 4,
        name: 'Liver Disease Prediction and Analysis',
        description: "Associated with Sharda University, this project uses machine learning algorithms to predict liver disease using the Indian Liver Patient Records dataset. Steps included data preprocessing, standardization, feature scaling, and employing various classification algorithms. Neural networks achieved the highest accuracy of 77%, followed by SVM and gradient boosting at 73% and 70%, respectively.",
        tools: ['Python', 'Machine Learning', 'Neural Networks', 'SVM', 'Gradient Boosting'],
        role: 'University Project',
        code: 'https://www.kaggle.com/code/jg7demon/ml-algorithms-for-liver-disease-detection',
        demo: '',
        image: 'ayla', // Assuming 'ayla' is the correct image reference
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
