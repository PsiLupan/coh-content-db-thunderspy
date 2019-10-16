import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {SirensCall} from "../../map/sirens-call";

export const Piratical: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "piratical",
    names: [{value: "Piratical"}],
    alignment: ALIGNMENT_ANY,
    mapKey: SirensCall.key,
    location: [-867.0, -144.0, 1631.0],
    badgeText: [{value: "The dread pirate Randall set up this lighthouse to lure ships to their demise."}],
    notes: "The Piratical Badge marker is located in a grassy area close the water on the villain base island west of the base in Siren's Call.",
    links: [{title: "Piratical Badge", href: "https://paragonwiki.com/wiki/Piratical_Badge"}],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}
    ],
    vidiotMapKey: "4"
};