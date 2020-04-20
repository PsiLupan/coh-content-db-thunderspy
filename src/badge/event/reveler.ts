import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Reveler: IBadgeData = {
    type: BadgeType.EVENT,
    key: "reveler",
    setTitleId: 611,
    names: [
        {value: "Reveler"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have helped celebrate the 2nd anniversary of City of Heroes."},
    ],
    acquisition: "",
    links: [
        {title: "Reveler Badge", href: "https://paragonwiki.com/wiki/Reveler_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/reveler.png"}]
};
