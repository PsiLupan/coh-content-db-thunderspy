import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Celebrant: IBadgeData = {
    type: BadgeType.EVENT,
    key: "celebrant",
    setTitleId: 250,
    names: [
        {value: "Celebrant"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have helped celebrate the 1 year anniversary of City of Heroes."},
    ],
    acquisition: "",
    links: [
        {title: "Celebrant Badge", href: "https://paragonwiki.com/wiki/Celebrant_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/celebrant.png"}]
};
