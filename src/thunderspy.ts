import {IGameMapData, IServerData, IServerGroupData, ServerGroupStatus} from "coh-content-db";
import {Maps} from "./map/_maps";
import {IArchetypeData} from "coh-content-db/dist/types/archetype";

export class Thunderspy implements IServerGroupData {
    public readonly key: string = "thunderspy";
    public readonly name: string = "Thunderspy";
    public readonly description: string = "City of Heroes: Thunderspy - [Website](https://thunderspygaming.net/)";
    public readonly status: ServerGroupStatus[] = [];
    public readonly servers: IServerData[] = [
        {name: "COXG"}
    ];
    public readonly repository: string = "https://github.com/n15g/coh-content-db-thunderspy";

    public readonly archetypes: IArchetypeData[] = [
        {key: "arachnos-soldier", name: "Arachnos Soldier"},
        {key: "arachnos-widow", name: "Arachnos Widow"},
        {key: "blaster", name: "Blaster"},
        {key: "brute", name: "Brute"},
        {key: "controller", name: "Controller"},
        {key: "corruptor", name: "Corruptor"},
        {key: "defender", name: "Defender"},
        {key: "dominator", name: "Dominator"},
        {key: "mastermind", name: "Mastermind"},
        {key: "peacebringer", name: "Peacebringer"},
        {key: "scrapper", name: "Scrapper"},
        {key: "stalker", name: "Stalker"},
        {key: "tanker", name: "Tanker"},
        {key: "warshade", name: "Warshade"},
    ];

    public readonly maps: IGameMapData[] = [
        ...Maps
    ];
}
