
document.getElementById('ru-btn').addEventListener('click', function() {
    setLanguage('ru');
});

document.getElementById('en-btn').addEventListener('click', function() {
    setLanguage('en');
});

function setLanguage(lang) {
    const elements = {
        'site-title': {
            'ru': 'Личность: ресурсы и потенциал',
            'en': 'Personality: Resources and Potential'
        },
        'nav-testing': {
            'ru': 'Тестирование',
            'en': 'Testing'
        },
        'nav-about': {
            'ru': 'Об авторах',
            'en': 'About Authors'
        },
        'nav-info': {
            'ru': 'Полезная информация',
            'en': 'Useful Information'
        },
        'nav-research': {
            'ru': 'Новые исследования',
            'en': 'New Research'
        },
        'testing': {
            'ru': '<h2>Тестирование</h2><img src="testing.png" alt="Тестирование"><p>Описание раздела тестирования...</p>',
            'en': '<h2>Testing</h2><img src="testing.png" alt="Testing"><p>Description of the testing section...</p>'
        },
        'about': {
            'ru': '<h2>Об авторах</h2><img src="about.png" alt="Об авторах"><p>Описание раздела об авторах...</p>',
            'en': '<h2>About Authors</h2><img src="about.png" alt="About Authors"><p>Description of the about authors section...</p>'
        },
        'info': {
            'ru': '<h2>Полезная информация</h2><img src="info.png" alt="Полезная информация"><p>Описание раздела полезной информации...</p>',
            'en': '<h2>Useful Information</h2><img src="info.png" alt="Useful Information"><p>Description of the useful information section...</p>'
        },
        'research': {
            'ru': '<h2>Новые исследования</h2><img src="research.png" alt="Новые исследования"><p>Описание раздела новых исследований...</p>',
            'en': '<h2>New Research</h2><img src="research.png" alt="New Research"><p>Description of the new research section...</p>'
        }
    };

    for (const id in elements) {
        document.getElementById(id).innerHTML = elements[id][lang];
    }
}
    