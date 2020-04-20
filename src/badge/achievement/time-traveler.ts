import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const TimeTraveler: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "time-traveler",
    setTitleId: 400,
    names: [
        {value: "Time Traveler"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "It seems you have mastered the recursive time flux of Lord Recluse's victory. You've spent 5 " +
        "hours here, though it seems like much longer."}
    ],
    acquisition: "Spend 5 hours in Recluse's Victory",
    links: [
        {title: "Time Traveler Badge", href: "https://paragonwiki.com/wiki/Time_Traveler_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/time.png"}
    ],
};
