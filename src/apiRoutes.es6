// @flow
import SocialRouter from "./Social/SocialRouter";

export const apiRoutesConfig = app => {
    app.use(SocialRouter);
};
