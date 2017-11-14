import {merge} from 'lodash';

const controller = {
    createOne: (model, body) => {
        return model.create(body);
    },
    changeOne: (docFromId, body) => {
        merge(docFromId, body);
        return docFromId.save();
    },
    deleteOne: (docFromId) => {
        return docFromId.remove();
    },
    getOne: (docFromId) => {
        return Promise.resolve(docFromId);
    },
    findByParam: (model, id) => {
        return model.findById(id).exec();
    }
};

const createOne = (model) => (req, res, next) => {
    return controller.createOne(model, req.body)
        .then(result => res.status(201).json(result))
        .catch(error => next(error));
};

const deleteOne = (model) => (req, res, next) => {
    return controller.deleteOne(req.docFromId)
        .then(result => res.status(200).json(result))
        .catch(error => next(error));
};

const changeOne = (model) => (req, res) => {
    return controller.changeOne(req.docFromId, req.body)
        .then(result => res.status(200).json(result))
        .catch(error => next(error));
};

const getOne = (model) => (req, res) => {
    return controller.getOne(req.docFromId)
        .then(result => res.status(200).json(result))
        .catch(error => next(error));
};

const findByParam = (model) => (req, res, next, id) => {
    return controller.findByParam(model, id)
        .then(doc => {
            if (!doc) {
                next(new Error('Not found doc by id!'));
            } else {
                req.docFromId = doc;
                next();
            }
        })
        .catch(error => next(error));
};

export default (model, overrides = {}) => {
    const defaults = {
        createOne: createOne(model),
        changeOne: changeOne(model),
        deleteOne: deleteOne(model),
        getOne: getOne(model),
        findByParam: findByParam(model)
    };

    return {...defaults, ...overrides}
};