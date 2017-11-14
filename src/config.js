let config = null;

if (process.env.NODE_ENV === 'production') {
    config = {
        google: {
            google_client_id: process.env.GOOGLE_CLIENT_ID,
            google_client_secret: process.env.GOOGLE_CLIENT_SECRET,
        },
        mongodb_uri: process.env.MONGODB_URI,
        cookie_key: process.env.COOKIE_KEY
    }
} else {
    config = {
        google: {
            google_client_id: '284083381962-vmlo7lmhpfe58c42q8bn6tqoopcpf0mm.apps.googleusercontent.com',
            google_client_secret: 'BZOLPrzWu63PD0Pgql5qL16Y',
        },
        mongodb_uri: 'mongodb://user_email:password1@ds123725.mlab.com:23725/email-project',
        cookie_key: '3123423423werklwjerkl23io4234'
    }
}

export default config;
