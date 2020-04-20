# coh-content-db-thunderspy
CoH Content DB - Thundrspy data

### Build
`npm run build`

### Publish
`npm publish`

Initialize the database, then load the homecoming data pack:
```
import {CohContentDb} from "coh-content-db";
import {Thunderspy, ThunderspyBadges} from "coh-content-db-thunderspy";

const contentDb = new CohContentDb();
contentDb.load(new Thunderspy());
contentDb.load(new ThunderspyBadges());
```
