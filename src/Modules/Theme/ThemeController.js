import generateControllers from '../../Core/generateControllers';

import Theme from '../../Schemas/Theme';
import UserTheme from '../../Schemas/UserTheme';

export default generateControllers(Theme, {
    createOne: async (req, res, next) => {
        try {
            let theme = await Theme.create(req.body);
            let userTheme = await UserTheme.create({user_id: req.user._id, theme_id: theme._id});

            res.status(200).json(theme)
        } catch (error) {
            next(error)
        }
    }
});