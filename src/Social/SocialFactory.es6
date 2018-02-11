// @flow
import { SocialModel } from "app-portfolio-core/module/Social";
import { connect } from "app-portfolio-core/db";

export const getSocialModel = async () => {
    try {
        const conn = await connect();
        return conn.model("sociales", SocialModel);
    } catch (err) {
        throw err;
    }
};
