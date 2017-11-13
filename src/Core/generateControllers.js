const controller = {
    createOne: (model) => {
        return Promise.resolve({some: false})
    },
    getOne: (model) => {
        return Promise.resolve({some: false})
    }
};


const createOne = (model) => (req, res, next) => {
    return controller.createOne(model).then(result => res.json(result));
};

const getOne = (model) => (req, res, next) => {
    return controller.getOne(model).then(result => res.json(result));
};


module.exports = (model, overrides = {}) => {
    const defaults = {
        createOne: createOne(model),
        getOne: createOne(model)
    };

    return defaults
};