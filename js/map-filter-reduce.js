let newLanguages = users.filter(user => user.languages.length >= 3);

console.log(newLanguages);

let userEmails = users.map(user => `${user.email}`);

console.log(userEmails);