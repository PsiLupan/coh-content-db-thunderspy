import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {AtlasPark} from "../../map/atlas-park";

export const AgentOfOrder: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "agent-of-order",
    setTitleId: 2352,
    names: [
        {type: Alternate.H, value: "Agent of Order"},
		{type: Alternate.V, value: "Agent of Chaos"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `Without heroes like you the world would fall into chaos and despair.`},
        {type: Alternate.V, value: `You leave nothing but chaos and destruction in your wake!`}
    ],
    notes: `Rewarded on first login`,
    links: [
        {title: "Agent of Order Badge", href: "https://paragonwiki.com/wiki/Agent_of_Order_Badge"},
		{title: "Agent of Chaos Badge", href: "https://paragonwiki.com/wiki/Agent_of_Chaos_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-varb-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-varb-v.png"}
    ]
};