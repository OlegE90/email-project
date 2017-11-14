const controller = {
    createOne: (model, body) => {
        return new model(body).save();
    },
    getOne: (model) => {
        return Promise.resolve({some: false})
    }
};


const createOne = (model) => (req, res, next) => {
    return controller.createOne(model, req.body)
        .then(result => res.status(201).json(result))
        .catch(error => next(error));
};

const getOne = (model) => (req, res, next) => {
    return controller.getOne(model).then(result => res.json(result));
};


export default (model, overrides = {}) => {
    const defaults = {
        createOne: createOne(model),
        getOne: createOne(model)
    };

    return {...defaults, ...overrides}
};