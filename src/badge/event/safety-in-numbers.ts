import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const SafetyInNumbers: IBadgeData = {
    type: BadgeType.EVENT,
    key: "safety-in-numbers",
    names: [
        {value: "Safety in Numbers"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've taken down 33 Zombie Minions, showing you have Glimpsed the Abyss."},
    ],
    acquisition: "Defeat 33 Zombie minions during Zombie Apocalypses.",
    links: [
        {title: "Safety in Numbers Badge", href: "https://paragonwiki.com/wiki/Safety_in_Numbers_Badge"}
    ],
    imageKeys: [{value: "core.event.safety-in-numbers"}]
};