const agh = {
    faculties: [
        {
            name: 'Wydział Inżynierii Lądowej i Gospodarki Zasobami',
            fields: [
                {
                    id: 'budownictwo',
                    name: 'Budownictwo',
                    subjects: [
                        [ 'maths', 'physics', 'chemistry', 'computer-science' ],
                        [ 'maths', 'physics', 'chemistry', 'computer-science', 'foreign-language' ]
                    ]
                },
                {
                    id: 'inzynieria-gornicza',
                    name: 'Inżynieria Górnicza',
                    subjects: [
                        [ 'maths', 'physics', 'chemistry', 'computer-science' ],
                        [ 'maths', 'physics', 'chemistry', 'computer-science', 'geography', 'foreign-language' ]
                    ]
                },
                {
                    id: 'inzynieria-i-zarzadzanie-pp',
                    name: 'Inżynieria i Zarządzanie Procesami Przemysłowymi',
                    subjects: [
                        [ 'maths', 'physics', 'chemistry', 'computer-science' ],
                        [ 'maths', 'physics', 'chemistry', 'computer-science', 'foreign-language' ]
                    ]
                },
                {
                    id: 'inzynieria-ks',
                    name: 'Inżynieria Kształtowania Środowiska',
                    subjects: [
                        [ 'maths', 'physics', 'chemistry', 'computer-science', 'biology' ],
                        [ 'maths', 'physics', 'chemistry', 'computer-science', 'biology', 'foreign-language', 'geography' ]
                    ]
                },
                {
                    id: 'rewitalizacja-tz',
                    name: 'Rewitalizacja Terenów Zdegradowanych',
                    subjects: [
                        [ 'maths', 'physics', 'chemistry', 'computer-science', 'biology' ],
                        [ 'maths', 'physics', 'chemistry', 'computer-science', 'biology', 'foreign-language', 'geography' ]
                    ]
                }
            ]
        },
        {
            name: 'Wydział Inżynierii Metali i Informatyki Przemysłowej',
            fields: [
                '',
                '',
                '',
                '',
                ''
            ]
        },
    ]
};

const subjects = [
    'Matematyka (poziom rozszerzony)',
    'Fizyka (poziom rozszerzony)',
    'Informatyka (poziom rozszerzony)',
    'Biologia (poziom rozszerzony)',
    'Chemia (poziom rozszerzony)',
    'Geografia (poziom rozszerzony)',
    'Język polski (poziom rozszerzony)',
    'Wiedza o społeczeństwie (poziom rozszerzony)',
    'Historia (poziom rozszerzony)',
    'Historia sztuki (poziom rozszerzony)',
    'Filozofia (poziom rozszerzony)',
    'Język obcy (poziom rozszerzony)'
];

export { agh, subjects };