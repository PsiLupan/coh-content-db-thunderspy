import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {EchoFaultline} from "../../map/echo-faultline";

export const ClaimDenied: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "claim-denied",
    names: [{value: "Claim Denied"}],
    alignment: ALIGNMENT_HERO,
    mapKey: EchoFaultline.key,
    location: [350.8, -667.6, 198.1],
    notes: "Approx. 360 yds S from the \"Aftershock\" marker in the canyon on top of a half buried building.",
    links: [
        {title: "I25 Faultline badge changes", href: "https://forums.homecomingservers.com/topic/931-echo-falutline-badger-hunter-helpline/"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}]
};