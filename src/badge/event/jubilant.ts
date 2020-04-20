import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Jubilant: IBadgeData = {
    type: BadgeType.EVENT,
    key: "jubilant",
    setTitleId: 1327,
    names: [
        {value: "Jubilant"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have helped celebrate the 5th anniversary of City of Heroes/Villains."},
    ],
    acquisition: "",
    links: [
        {title: "Jubilant Badge", href: "https://paragonwiki.com/wiki/Jubilant_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/jubilant.png"}]
};
