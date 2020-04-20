import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {RiktiWarZone} from "../../map/rikti-war-zone";

export const Asunder: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "asunder",
    setTitleId: 757,
    names: [{value: "Asunder"}],
    alignment: ALIGNMENT_ANY,
    mapKey: RiktiWarZone.key,
    location: [3954.1, 34.0, -3858.8],
    badgeText: [{value: "This fort is the prime location to be for surveilling Rikti activity. Unfortunately, it's also the furthest from the Vanguard base and, thus, a big target for the Rikti."}],
    notes: "On top of the pillbox.",
    links: [
        {title: "Asunder Badge", href: "https://paragonwiki.com/wiki/Asunder_Badge"},
        {title: "Echo: Rikti Crash Site Vidiot Map", href: "https://forums.homecomingservers.com/topic/969-rikti-war-zone-badges-missing/?do=findComment&comment=27161"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}
    ],
    vidiotMapKey: "5"
};
