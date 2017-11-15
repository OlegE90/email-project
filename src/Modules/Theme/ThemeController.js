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
    },
    getList: async (req, res, next) => {
        try {
            let themesIds = [];
            await UserTheme.find({user_id: req.user._id}).select( 'theme_id' ).lean().exec((err, theme) => {
                if (!err) {
                    theme.map((item) => themesIds.push(item.theme_id));
                } else {
                    throw new Error(err);
                }
            });

            const themes = await Theme.find({_id: {"$in": themesIds}}).lean().exec();

            res.status(200).json(themes)

        } catch (error) {
            next(error)
        }
    }
});