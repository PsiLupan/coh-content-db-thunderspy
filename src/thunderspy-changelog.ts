import {IServerGroupData} from "coh-content-db";

export class ThunderspyChangelog implements IServerGroupData {
    public readonly key: string = "thunderspy";
    public readonly changelog: { [id: string]: string } = {
        "1.0.0":
            "* Initial release."
    };
}
