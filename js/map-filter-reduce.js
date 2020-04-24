const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//First Part

let newLanguages = users.filter(user => user.languages.length >= 3);

console.log(newLanguages);

//Second Part

let userEmails = users.map(user => `${user.email}`);

console.log(userEmails);

//Third Part

let totalYearsExp = users.reduce((total, user)=> {
    return total + user.yearsOfExperience / users.length;

}, 0);

console.log(totalYearsExp);

//Fourth Part

let longestUserEmail = users.reduce((longestEmail, user) => {
    if(user.email.length >= longestEmail.length){
        longestEmail = user.email;
    }
    return longestEmail;

},"");

console.log(longestUserEmail);

//Fifth Part