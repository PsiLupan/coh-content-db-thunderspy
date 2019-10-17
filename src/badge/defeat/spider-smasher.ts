import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const SpiderSmasher: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "spider-smasher",
    setTitleId: 314,
    names: [
        {value: "Spider Smasher"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "You've taken the fight to Arachnos, taking down Lord Recluse's personal soldiers."},
        {type: Alternate.V, value: "You feel you've adequately proven yourself to Lord Recluse by knocking his goons around."}
    ],
    acquisition: "Defeat 200 Arachnos Wolf Spiders",
    links: [
        {title: "Spider Smasher Badge", href: "https://paragonwiki.com/wiki/Spider_Smasher_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/arachnos.png"}
    ],
};