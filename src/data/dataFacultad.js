export const pensumList = [
    {
        id: '01',
        carrera: 'Quimica',
        semestre: [
            { primero: ['Mate 1', 'Social Humanistacia 1', 'Quimica'] },
            { segundo: ['Mate 2', 'Social Humanistica 2', 'Quimica 2'] },
        ],
        imagen: './assets/ingenieria/logo_usac.png',
    },
    {
        id: '02',
        carrera: 'Civil',
        semestre: [
            { primero: ['Mate 1', 'Social', 'Quimica'] },
            { segundo: ['Mate 1', 'Social', 'Quimica'] },
        ],
        imagen: './assets/ingenieria/logo_usac.png',
    },
    {
        id: '03',
        carrera: 'Mecanica',
        semestre: [
            { primero: ['Mate 1', 'Social', 'Quimica'] },
            { segundo: ['Mate 1', 'Social', 'Quimica'] },
        ],
        imagen: './assets/ingenieria/logo_usac.png',
    },
];

// Los curos deben tener esta forma:
// Ejemplo
const semestre = [
    {
        primero: [
            {
                curso: 'Mate 1',
                creditos: 7,
                postRequisito: ['Social 2', 'jsdklfjasd'],
                preRequisito: [
                    'Si posee ponerlo',
                    'Si no lleva poner dejar: []',
                ],
            },
            {
                curso: 'Social 1',
                creditos: 7,
                postRequisito: ['Social 2', 'jsdklfjasd'],
                preRequisito: [
                    'Si posee ponerlo',
                    'Si no lleva poner dejar: []',
                ],
            },
            {
                curso: 'Mate 1',
                creditos: 7,
                postRequisito: ['Social 2', 'jsdklfjasd'],
                preRequisito: [
                    'Si posee ponerlo',
                    'Si no lleva poner dejar: []',
                ],
            },
        ],
    },
    {
        Segundo: [
            {
                curso: 'Mate 1',
                creditos: 7,
                postRequisito: ['Social 2', 'jsdklfjasd'],
                preRequisito: [
                    'Si posee ponerlo',
                    'Si no lleva poner dejar: []',
                ],
            },
            {
                curso: 'Social 1',
                creditos: 7,
                postRequisito: ['Social 2', 'jsdklfjasd'],
                preRequisito: [
                    'Si posee ponerlo',
                    'Si no lleva poner dejar: []',
                ],
            },
            {
                curso: 'Mate 1',
                creditos: 7,
                postRequisito: ['Social 2', 'jsdklfjasd'],
                preRequisito: [
                    'Si posee ponerlo',
                    'Si no lleva poner dejar: []',
                ],
            },
        ],
    },
    // Tercer
    // Cuarto
    // Quinto
];
