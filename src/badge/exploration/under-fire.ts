import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {RiktiWarZone} from "../../map/rikti-war-zone";

export const UnderFire: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "under-fire",
    setTitleId: 751,
    names: [{value: "Under Fire"}],
    alignment: ALIGNMENT_ANY,
    mapKey: RiktiWarZone.key,
    location: [1628.6, 0.3, -1047.3],
    badgeText: [{value: "You just stepped into a major battle zone. Was this all that you signed up for?"}],
    notes: "Next to the road.",
    links: [
        {title: "Under Fire Badge", href: "https://paragonwiki.com/wiki/Under_Fire_Badge"},
        {title: "Echo: Rikti Crash Site Vidiot Map", href: "https://forums.homecomingservers.com/topic/969-rikti-war-zone-badges-missing/?do=findComment&comment=27161"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}
    ],
    vidiotMapKey: "3"
};
