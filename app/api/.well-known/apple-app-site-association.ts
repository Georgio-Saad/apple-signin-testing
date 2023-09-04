import { NextApiRequest, NextApiResponse } from 'next';

const BUNDLE_ID = 'com.georgio.georgioinsta';
const TEAM_ID = 'FLYMUMASFH';

const association = {
  applinks: {
    apps: [],
    details: [
      {
        appID: `${TEAM_ID}.${BUNDLE_ID}`,
        paths: ['*'],
      },
    ],
  },
};
export default (_: NextApiRequest, response: NextApiResponse) => {
  return response.status(200).send(association);
};
