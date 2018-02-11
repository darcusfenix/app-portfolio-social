// @flow
import log4js from "log4js";
import { getSocialModel } from "./SocialFactory";

const log = log4js.getLogger("SOCIAL-CONTROLLER");

export const get = async (req, res) => {
    try {
        const Social = await getSocialModel();
        let items,
            query = {};

        if (req.query.active) {
            query.active = req.query.active === "true";
        }
        items = await Social.find(query);
        res.json(items);
    } catch (err) {
        log.error(err);
        res.status(500).send(err);
    }
};
