import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Visionary: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "visionary",
    names: [
        {value: "Visionary"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have been successful in a campaign to blind the Overseers in the Shadow Shard."}
    ],
    acquisition: "Defeat 100 Rularuu Overseers",
    links: [
        {title: "Visionary Badge", href: "https://paragonwiki.com/wiki/Visionary_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/visionary.png"}
    ],
};