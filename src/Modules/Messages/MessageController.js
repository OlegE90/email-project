import generateControllers from '../../Core/generateControllers';

import Message from './MessageSchemas';
import UserTheme from '../Users/Schemas/UserTheme';

export default generateControllers(Message, {
    checkAccessUserToTheme: async (req, res, next, theme_id) => {
        // Проверяем есть ли у пользователя досуп к теме.
        return UserTheme.find({user_id: req.user._id, theme_id }).then(theme => {
            if (!theme) {
                next(new Error('User has not access to theme!'));
            } else {
                req.userThemeId = theme_id;
                next();
            }
        })
        .catch(error => next(error));
    },
    createOne: async ({user, userThemeId, body}, res, next) => {
        try {
            let message = await Message.create(
                {
                    message: body.message || '',
                    user_id: user._id,
                    theme_id: userThemeId
                }
             );
            
            res.status(200).json(message)
        } catch (error) {
            next(error)
        }
    },
    getList: async (req, res, next) => {
        try {
            let userTheme = await Message.find({user_id: req.user._id, theme_id: req.userThemeId}).exec();
            res.status(200).json(userTheme)
        } catch (error) {
            next(error)
        }
    },
});