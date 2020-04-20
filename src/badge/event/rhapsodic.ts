import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Rhapsodic: IBadgeData = {
    type: BadgeType.EVENT,
    key: "rhapsodic",
    setTitleId: 2209,
    names: [
        {value: "Rhapsodic"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have helped celebrate the 8th anniversary of City of Heroes/Villains. (This badge was awarded to every character who logged in during the month of May, 2012)"},
    ],
    acquisition: "Awarded upon first login to the game.",
    links: [
        {title: "Rhapsodic Badge", href: "https://paragonwiki.com/wiki/Rhapsodic_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/rhapsodic.png"}]
};
