const portfolioData={
  profile:{
  name:"Илья",
  profession:"студент",
  age: 18,
},
projects:[
  {
  id:1,
  title:" любимые бренды",
  category:"мода",
  likes:228,
  technologies:["HTML","CSS"]
},
  {
    id: 2,
      title: "Лучшие аутфиты кая",
      category:"дизайнер",
      likes: 314,
      technologies:["HTML","CSS","Grid"]
  },
    {
        id: 3,
        title: "сайт про кая",
        category: "Веб",
        likes: 130,
        technologies: ["HTML", "CSS", "Flexbox"]
    },

    {
        id: 4,
        title: "история  ERD и Rick Owens",
        category: "Мода",
        likes: 160,
        technologies: ["HTML", "CSS", "JavaScript"]
    },

    {
        id: 5,
        title: "тест: насколько вам нравится кай",
        category: "Веб",
        likes: 90,
        technologies: ["JavaScript"]
    }
],
  preferences: new Map([
    ["theme","dark"],
    ["language","ru"]
  ])
};
const profileKeys = Object.keys(portfolioData.profile);

console.log("Ключи профиля:");
console.log(profileKeys);


const popularProjects = portfolioData.projects
    .filter(project => project.likes > 100)
    .map(project =>
        `Проект: ${project.title} из категории ${project.category}`
    );

console.log("Популярные проекты:");
console.log(popularProjects);


let totalLikes = 0;

portfolioData.projects.forEach(project => {
    totalLikes += project.likes;
});

console.log(`Общее число лайков: ${totalLikes}`);



const technologiesSet = new Set();

portfolioData.projects.forEach(project => {
    project.technologies.forEach(technology => {
        technologiesSet.add(technology);
    });
});

console.log("Уникальные технологии:");
console.log(technologiesSet);
