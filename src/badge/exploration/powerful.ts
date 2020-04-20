import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {RiktiWarZone} from "../../map/rikti-war-zone";

export const Powerful: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "powerful",
    setTitleId: 749,
    names: [{value: "Powerful"}],
    alignment: ALIGNMENT_ANY,
    mapKey: RiktiWarZone.key,
    location: [275.7, 84.3, -745.5],
    badgeText: [{value: "This power plant is the glue that holds the operation together. Without it, there would be chaos."}],
    notes: "Eastern side of the power substation, on the ground.",
    links: [
        {title: "Powerful Badge", href: "https://paragonwiki.com/wiki/Powerful_Badge"},
        {title: "Echo: Rikti Crash Site Vidiot Map", href: "https://forums.homecomingservers.com/topic/969-rikti-war-zone-badges-missing/?do=findComment&comment=27161"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}
    ],
    vidiotMapKey: "2"
};
