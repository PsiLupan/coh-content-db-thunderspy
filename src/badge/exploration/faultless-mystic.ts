import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {Faultline} from "../../map/faultline";

export const FaultlessMystic: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "faultless-mystic",
    setTitleId: 120,
    names: [{value: "Faultless Mystic"}],
    alignment: ALIGNMENT_HERO,
    badgeText: [{value: `Ley Lines are powerful forces of mystical energy that crisscross the planet. Paragon City's proximity to Ley Line crossings makes it a prime location for magical villain groups.`}],
    mapKey: Faultline.key,
    location: [-843.6, -406.8, -715.2],
    notes: "Approx. 173 yrds NNE of the \"Precipice\" marker in the crevice next to a burn out car.",
    links: [
        {title: "I25 Faultline badge changes", href: "https://forums.homecomingservers.com/topic/931-echo-falutline-badger-hunter-helpline/"}
    ],
    icons: [
		{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}
	],
    vidiotMapKey: "2"
};
