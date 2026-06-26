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

const profileKeys = Object.keys(portfolioData.profile);
console.log('Ключи профиля пользователя:', profileKeys);

const profileValues = Object.values(portfolioData.profile);
console.log('Значения профиля пользователя:', profileValues);

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

const popularProjects = portfolioData.projects.filter(project => project.likes > 100);

console.log(`Проектов с более чем 100 лайками: ${popularProjects.length}`);

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

let totalLikes = 0;
for (let i = 0; i < portfolioData.projects.length; i++) {
    totalLikes += portfolioData.projects[i].likes;
}
console.log(`Общее число лайков (через for): ${totalLikes}`);

let totalLikesForEach = 0;
portfolioData.projects.forEach(project => {
    totalLikesForEach += project.likes;
});
console.log(`Общее число лайков (через forEach): ${totalLikesForEach}`);

const totalLikesReduce = portfolioData.projects.reduce((sum, project) => sum + project.likes, 0);
console.log(`Общее число лайков (через reduce): ${totalLikesReduce}`);

console.log('');

// ==============================================
// ШАГ 5: Облако тегов (Коллекция Set)
// ==============================================

console.log('=== ШАГ 5: Облако тегов (Set) ===');

const allTechnologies = new Set();

portfolioData.projects.forEach(project => {
    project.technologies.forEach(tech => {
        allTechnologies.add(tech);
    });
});

console.log('Уникальные технологии (облако тегов):');
console.log(allTechnologies);

const techArray = Array.from(allTechnologies);
console.log(`Всего уникальных технологий: ${techArray.length}`);
console.log('Список технологий:');
techArray.forEach(tech => console.log(`  - ${tech}`));

console.log('');

// ==============================================
// ДОПОЛНИТЕЛЬНЫЙ АНАЛИЗ (Для закрепления)
// ==============================================

console.log('=== ДОПОЛНИТЕЛЬНЫЙ АНАЛИЗ ===');

const categories = new Set();
portfolioData.projects.forEach(project => {
    categories.add(project.category);
});
console.log('Категории проектов:', Array.from(categories));

console.log('Количество проектов по категориям:');
categories.forEach(category => {
    const count = portfolioData.projects.filter(p => p.category === category).length;
    console.log(`  ${category}: ${count} проект(ов)`);
});

const mostLiked = portfolioData.projects.reduce((best, current) =>
    current.likes > best.likes ? current : best
);
console.log(`Самый популярный проект: "${mostLiked.title}" (❤️ ${mostLiked.likes} лайков)`);

const techToFind = 'TensorFlow';
const projectsWithTech = portfolioData.projects.filter(project =>
    project.technologies.includes(techToFind)
);
console.log(`Проекты с использованием ${techToFind}:`);
projectsWithTech.forEach(project => console.log(`  - ${project.title}`));

console.log('');
console.log('=== ВСЕ ЗАДАЧИ ЛР7 ВЫПОЛНЕНЫ ===');
console.log('');


// ==============================================
// ==============================================
// ЛАБОРАТОРНАЯ РАБОТА №8
// Динамический рендеринг интерфейса
// ==============================================

console.log('=== ЛАБОРАТОРНАЯ РАБОТА №8 ===');
console.log('');

// ==============================================
// ШАГ 1: Очистка статики (Подготовка HTML)
// ==============================================
// В HTML-файле из блока .projects-grid удалены все статические карточки.
// Оставлен только пустой контейнер с id="projects-gallery".
// ==============================================

// ==============================================
// ШАГ 2: Инициализация в JavaScript
// ==============================================

console.log('=== ШАГ 2: Инициализация ===');

// Находим пустой контейнер для карточек
const galleryContainer = document.querySelector('#projects-gallery');

// Проверяем, найден ли контейнер
if (!galleryContainer) {
    console.error('❌ Контейнер .projects-gallery не найден!');
} else {
    console.log('✅ Контейнер найден:', galleryContainer);
}

console.log('');

// ==============================================
// ШАГ 3: Фабрика компонентов (Цикл рендеринга)
// ==============================================

console.log('=== ШАГ 3: Фабрика компонентов ===');

// Функция для создания одной карточки проекта
function createProjectCard(project) {
    // 1. Создание главного контейнера карточки
    const card = document.createElement('article');
    card.classList.add('project-card');

    // 2. Создание иконки (эмодзи по категории)
    const icon = document.createElement('div');
    icon.classList.add('project-icon');

    // Выбор иконки в зависимости от категории
    const iconMap = {
        'Машинное обучение': '🧠',
        'NLP': '📊',
        'Бэкенд': '⚙️',
        'Data Science': '📈',
        'Веб': '🌐'
    };
    icon.textContent = iconMap[project.category] || '💻';

    // 3. Создание заголовка
    const title = document.createElement('h3');
    title.classList.add('project-title');
    title.textContent = project.title;

    // 4. Создание описания (категория + количество лайков)
    const desc = document.createElement('p');
    desc.classList.add('project-desc');
    desc.textContent = `${project.category} • ❤️ ${project.likes} лайков`;

    // 5. Создание тега с технологиями
    const tag = document.createElement('span');
    tag.classList.add('project-tag');
    // Показываем первые две технологии
    const techDisplay = project.technologies.slice(0, 2).join(' · ');
    tag.textContent = techDisplay;

    // 6. Сборка карточки: вкладываем все элементы в card
    card.append(icon);
    card.append(title);
    card.append(desc);
    card.append(tag);

    return card;
}

// Функция для рендеринга всех карточек
function renderProjects() {
    console.log('🔄 Начинаем рендеринг проектов...');

    // Очищаем контейнер (на случай, если там что-то есть)
    galleryContainer.innerHTML = '';

    // Проходим по массиву проектов и создаём карточки
    portfolioData.projects.forEach((project, index) => {
        const card = createProjectCard(project);
        galleryContainer.append(card);
        console.log(`  ✅ Карточка ${index + 1}: "${project.title}" создана`);
    });

    console.log(`✅ Всего создано карточек: ${portfolioData.projects.length}`);
}

// Запускаем рендеринг
renderProjects();

console.log('');
console.log('=== ВСЕ ЗАДАЧИ ЛР7 И ЛР8 ВЫПОЛНЕНЫ ===');
console.log('');


// ==============================================
// ==============================================
// ЛАБОРАТОРНАЯ РАБОТА №9
// Интерактивность и События
// ==============================================

console.log('=== ЛАБОРАТОРНАЯ РАБОТА №9 ===');
console.log('');

// ==============================================
// ШАГ 1: Бургер-меню / Модальное окно (Событие click)
// ==============================================

console.log('=== ШАГ 1: Модальное окно ===');

// Находим элементы
const modalOverlay = document.getElementById('modalOverlay');
const openModalBtn = document.querySelector('.btn-open-modal');
const closeModalBtn = document.getElementById('modalCloseBtn');

// Проверяем, что все элементы найдены
if (modalOverlay && openModalBtn && closeModalBtn) {
    console.log('✅ Элементы модального окна найдены');

    // Открытие модального окна
    openModalBtn.addEventListener('click', function() {
        modalOverlay.classList.add('active');
        console.log('🔓 Модальное окно открыто');
    });

    // Закрытие модального окна
    closeModalBtn.addEventListener('click', function() {
        modalOverlay.classList.remove('active');
        console.log('🔒 Модальное окно закрыто');
    });

    // Закрытие по клику на оверлей (фон)
    modalOverlay.addEventListener('click', function(event) {
        if (event.target === modalOverlay) {
            modalOverlay.classList.remove('active');
            console.log('🔒 Модальное окно закрыто (клик по фону)');
        }
    });

    // Закрытие по клавише ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modalOverlay.classList.contains('active')) {
            modalOverlay.classList.remove('active');
            console.log('🔒 Модальное окно закрыто (ESC)');
        }
    });

} else {
    console.error('❌ Не найдены элементы модального окна!');
    console.log('  - modalOverlay:', modalOverlay);
    console.log('  - openModalBtn:', openModalBtn);
    console.log('  - closeModalBtn:', closeModalBtn);
}

console.log('');

// ==============================================
// ШАГ 2: Перехват отправки формы (Метод preventDefault)
// ==============================================

console.log('=== ШАГ 2: Перехват отправки формы ===');

// Находим форму обратной связи
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    console.log('✅ Форма обратной связи найдена');

    contactForm.addEventListener('submit', function(event) {
        // Останавливаем стандартное поведение (перезагрузку страницы)
        event.preventDefault();

        console.log('📨 Форма перехвачена, перезагрузки не было!');

        // Собираем данные из формы
        const formData = new FormData(contactForm);
        const name = formData.get('user-name') || 'не указано';
        const email = formData.get('user-email') || 'не указано';
        const topic = formData.get('message-topic') || 'не указана';
        const message = formData.get('user-message') || 'не указано';

        // Выводим данные в консоль
        console.log('📋 Данные формы:');
        console.log(`  Имя: ${name}`);
        console.log(`  Email: ${email}`);
        console.log(`  Тема: ${topic}`);
        console.log(`  Сообщение: ${message}`);

        // Показываем уведомление пользователю
        alert(`✅ Спасибо, ${name}! Ваше сообщение отправлено.\n\nМы свяжемся с вами в ближайшее время.`);

        // Очищаем форму (опционально)
        contactForm.reset();

        // Обновляем счетчик символов
        const counter = document.getElementById('charCounter');
        if (counter) {
            counter.textContent = '0/500';
            counter.classList.remove('warning', 'danger');
        }

        console.log('🔄 Форма очищена');
    });
} else {
    console.error('❌ Форма обратной связи не найдена!');
}

console.log('');

// ==============================================
// ШАГ 3: «Живой» счетчик символов (Событие input)
// ==============================================

console.log('=== ШАГ 3: Живой счетчик символов ===');

// Находим текстовое поле и счетчик
const messageTextarea = document.getElementById('user-message');
const charCounter = document.getElementById('charCounter');

const MAX_CHARS = 500;

if (messageTextarea && charCounter) {
    console.log('✅ Текстовое поле и счетчик найдены');

    messageTextarea.addEventListener('input', function(event) {
        // Получаем текущий текст из поля
        const currentText = event.target.value;
        const currentLength = currentText.length;

        // Обновляем счетчик
        charCounter.textContent = `${currentLength}/${MAX_CHARS}`;

        // Визуальная индикация
        charCounter.classList.remove('warning', 'danger');

        if (currentLength > MAX_CHARS * 0.8 && currentLength <= MAX_CHARS) {
            charCounter.classList.add('warning');
        } else if (currentLength > MAX_CHARS) {
            charCounter.classList.add('danger');
        }

        // Ограничиваем длину текста
        if (currentLength > MAX_CHARS) {
            event.target.value = currentText.slice(0, MAX_CHARS);
            charCounter.textContent = `${MAX_CHARS}/${MAX_CHARS}`;
            charCounter.classList.add('danger');
        }

        console.log(`✏️ Введено символов: ${Math.min(currentLength, MAX_CHARS)}/${MAX_CHARS}`);
    });

} else {
    console.error('❌ Текстовое поле или счетчик не найдены!');
    console.log('  - messageTextarea:', messageTextarea);
    console.log('  - charCounter:', charCounter);
}

console.log('');
console.log('=== ВСЕ ЗАДАЧИ ЛР9 ВЫПОЛНЕНЫ ===');
console.log('🎉 Сайт полностью готов!');