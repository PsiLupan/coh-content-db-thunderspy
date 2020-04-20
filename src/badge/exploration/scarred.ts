import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {RiktiWarZone} from "../../map/rikti-war-zone";

export const Scarred: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "scarred",
    setTitleId: 756,
    names: [{value: "Scarred"}],
    alignment: ALIGNMENT_ANY,
    mapKey: RiktiWarZone.key,
    location: [3216.4, -137.3, -3198.1],
    badgeText: [{value: "The Rikti mother ship ripped a path through this area when it crashed into the ground."}],
    notes: "On a broken fragment of road next to a destroyed building. A wrecked car is pointed at it.",
    links: [
        {title: "Scarred Badge", href: "https://paragonwiki.com/wiki/Scarred_Badge"},
        {title: "Echo: Rikti Crash Site Vidiot Map", href: "https://forums.homecomingservers.com/topic/969-rikti-war-zone-badges-missing/?do=findComment&comment=27161"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}
    ],
    vidiotMapKey: "4"
};
