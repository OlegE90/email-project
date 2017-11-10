const index = require('./index');

let searchingMethod = [
    'get',
    'post',
];

//TODO. Переписать без рекурсии.
function utils (currentRoute, prevData = []) {
    const currentClass = currentRoute.index;

    if(currentClass) {
        // Роут.
        let rout = {fullPath: currentClass.fullPath, methods: {}};

        (Object.getOwnPropertyNames(currentClass) || []).map((propName) => {
            searchingMethod.find((method) => {
                if (propName.indexOf(method) !== -1) rout.methods[method] = currentClass[propName];
            });
        });

        prevData.push(rout);
    }

    if(Array.isArray(currentRoute.sub)) {
        currentRoute.sub.map((item) => utils(item, prevData))
    }

    return prevData;
}

module.exports = (app) => {
    const getRoutes = utils(index[0]);

    //console.log(getRoutes);

    getRoutes.map((rout) => {
        searchingMethod.map((method) => {
            let handler = rout.methods[method];

            if (handler) {
                typeof handler === 'function' && app[method](rout.fullPath, handler) ||
                Array.isArray(handler) && app[method](rout.fullPath, ...handler);
            }
        })
    });

    return app;
};