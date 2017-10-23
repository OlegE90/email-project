module.exports = process.env.NODE_ENV === 'production' ? {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    MONGODB_URI: process.env.MONGODB_URI
} : {
    GOOGLE_CLIENT_ID: '284083381962-vmlo7lmhpfe58c42q8bn6tqoopcpf0mm.apps.googleusercontent.com',
    GOOGLE_CLIENT_SECRET: 'BZOLPrzWu63PD0Pgql5qL16Y',
    MONGODB_URI: 'mongodb://user_email:password1@ds123725.mlab.com:23725/email-project'
};
