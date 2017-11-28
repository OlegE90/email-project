export const ROUTES = {
    FULL_PATH: '/',
    THEMES: {
        FULL_PATH: '/theme',
        PATH: 'theme',
        THEME: {
            FULL_PATH: '/theme/:id',
            PATH: ':id',
            EDIT: {
                FULL_PATH: '/theme/:id/edit',
                PATH: ':id/edit'
            },
        }
    },
    ABOUT: {
        FULL_PATH: '/about',
        PATH: 'about'
    },
    LOGIN: {
        FULL_PATH: '/login',
        PATH: 'login'
    }
};