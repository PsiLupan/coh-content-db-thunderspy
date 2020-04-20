import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Lucky: IBadgeData = {
    type: BadgeType.EVENT,
    key: "lucky",
    setTitleId: 2002,
    names: [
        {value: "Lucky"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have helped celebrate the 7th anniversary of City of Heroes/Villains."},
    ],
    acquisition: "",
    links: [
        {title: "Lucky Badge", href: "https://paragonwiki.com/wiki/Lucky_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/lucky.png"}]
};
