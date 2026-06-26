// ==============================================
// ЛАБОРАТОРНАЯ РАБОТА №7
// Проектирование ядра данных сайта
// ==============================================

console.log('=== ЛАБОРАТОРНАЯ РАБОТА №7 ===');
console.log('');

// ==============================================
// ШАГ 1: Проектирование архитектуры (Создание БД)
// ==============================================

console.log('=== ШАГ 1: Проектирование архитектуры ===');

const portfolioData = {
    // 1. Профиль пользователя
    profile: {
        name: 'Артем',
        profession: 'Начинающий ML разработчик',
        age: 20,
        city: 'Саранск',
        email: 'artem.ml@example.com'
    },

    // 2. Массив проектов (не менее 5)
    projects: [
        {
            id: 1,
            title: 'Классификатор изображений',
            category: 'Машинное обучение',
            likes: 156,
            technologies: ['Python', 'TensorFlow', 'Keras', 'NumPy']
        },
        {
            id: 2,
            title: 'Сентимент-анализ текстов',
            category: 'NLP',
            likes: 89,
            technologies: ['Python', 'PyTorch', 'Hugging Face', 'Pandas']
        },
        {
            id: 3,
            title: 'ML-пайплайн на C++',
            category: 'Бэкенд',
            likes: 45,
            technologies: ['C++', 'Python', 'pybind11', 'CMake']
        },
        {
            id: 4,
            title: 'Прогнозирование временных рядов',
            category: 'Машинное обучение',
            likes: 132,
            technologies: ['Python', 'Keras', 'TensorFlow', 'Matplotlib']
        },
        {
            id: 5,
            title: 'Рекомендательная система фильмов',
            category: 'Data Science',
            likes: 210,
            technologies: ['Python', 'Pandas', 'Scikit-learn', 'NumPy']
        },
        {
            id: 6,
            title: 'Визуализация данных в реальном времени',
            category: 'Веб',
            likes: 78,
            technologies: ['JavaScript', 'D3.js', 'HTML', 'CSS']
        }
    ],

    // 3. Настройки сайта (Map)
    preferences: new Map([
        ['theme', 'dark'],
        ['language', 'ru'],
        ['notifications', true],
        ['showProjects', 6]
    ])
};

console.log('✅ База данных создана!');
console.log(`Количество проектов: ${portfolioData.projects.length}`);
console.log('Настройки сайта:', Object.fromEntries(portfolioData.preferences));
console.log('');

// ==============================================
// ШАГ 2: Анализ профиля (Методы объектов)
// ==============================================

console.log('=== ШАГ 2: Анализ профиля ===');

// Получаем массив всех ключей из объекта profile
const profileKeys = Object.keys(portfolioData.profile);
console.log('Ключи профиля пользователя:', profileKeys);

// Дополнительно: получаем массив всех значений
const profileValues = Object.values(portfolioData.profile);
console.log('Значения профиля пользователя:', profileValues);

// Дополнительно: получаем массив пар [ключ, значение]
const profileEntries = Object.entries(portfolioData.profile);
console.log('Пары ключ-значение профиля:');
profileEntries.forEach(([key, value]) => {
    console.log(`  ${key}: ${value}`);
});

console.log('');

// ==============================================
// ШАГ 3: Выборка лучших работ (filter + map)
// ==============================================

console.log('=== ШАГ 3: Выборка лучших работ ===');

// Фильтруем проекты с лайками > 100
const popularProjects = portfolioData.projects.filter(project => project.likes > 100);

console.log(`Проектов с более чем 100 лайками: ${popularProjects.length}`);

// Преобразуем отфильтрованные проекты в строки
const popularProjectStrings = popularProjects.map(project =>
    `Проект: "${project.title}" из категории "${project.category}" (❤️ ${project.likes} лайков)`
);

console.log('Лучшие проекты:');
popularProjectStrings.forEach(str => console.log(`  ${str}`));

console.log('');

// ==============================================
// ШАГ 4: Подсчет статистики (Циклы)
// ==============================================

console.log('=== ШАГ 4: Подсчет статистики ===');

// Вариант 1: с использованием цикла for
let totalLikes = 0;
for (let i = 0; i < portfolioData.projects.length; i++) {
    totalLikes += portfolioData.projects[i].likes;
}
console.log(`Общее число лайков (через for): ${totalLikes}`);

// Вариант 2: с использованием forEach (более современный)
let totalLikesForEach = 0;
portfolioData.projects.forEach(project => {
    totalLikesForEach += project.likes;
});
console.log(`Общее число лайков (через forEach): ${totalLikesForEach}`);

// Вариант 3: с использованием reduce (функциональный стиль)
const totalLikesReduce = portfolioData.projects.reduce((sum, project) => sum + project.likes, 0);
console.log(`Общее число лайков (через reduce): ${totalLikesReduce}`);

console.log('');

// ==============================================
// ШАГ 5: Облако тегов (Коллекция Set)
// ==============================================

console.log('=== ШАГ 5: Облако тегов (Set) ===');

// Создаем пустую коллекцию Set
const allTechnologies = new Set();

// Проходим по всем проектам и добавляем технологии в Set
portfolioData.projects.forEach(project => {
    project.technologies.forEach(tech => {
        allTechnologies.add(tech);
    });
});

console.log('Уникальные технологии (облако тегов):');
console.log(allTechnologies);

// Преобразуем Set в массив для удобного вывода
const techArray = Array.from(allTechnologies);
console.log(`Всего уникальных технологий: ${techArray.length}`);
console.log('Список технологий:');
techArray.forEach(tech => console.log(`  - ${tech}`));

console.log('');

// ==============================================
// ДОПОЛНИТЕЛЬНЫЙ АНАЛИЗ (Для закрепления)
// ==============================================

console.log('=== ДОПОЛНИТЕЛЬНЫЙ АНАЛИЗ ===');

// 1. Группировка проектов по категориям (используем Set)
const categories = new Set();
portfolioData.projects.forEach(project => {
    categories.add(project.category);
});
console.log('Категории проектов:', Array.from(categories));

// 2. Подсчет проектов в каждой категории
console.log('Количество проектов по категориям:');
categories.forEach(category => {
    const count = portfolioData.projects.filter(p => p.category === category).length;
    console.log(`  ${category}: ${count} проект(ов)`);
});

// 3. Поиск самого популярного проекта
const mostLiked = portfolioData.projects.reduce((best, current) =>
    current.likes > best.likes ? current : best
);
console.log(`Самый популярный проект: "${mostLiked.title}" (❤️ ${mostLiked.likes} лайков)`);

// 4. Поиск проектов с определённой технологией (например, TensorFlow)
const techToFind = 'TensorFlow';
const projectsWithTech = portfolioData.projects.filter(project =>
    project.technologies.includes(techToFind)
);
console.log(`Проекты с использованием ${techToFind}:`);
projectsWithTech.forEach(project => console.log(`  - ${project.title}`));

console.log('');
console.log('=== ВСЕ ЗАДАЧИ ВЫПОЛНЕНЫ ===');