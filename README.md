Install firebase hosting and emulators with `firebase init`

Create a `/src/firebase.js` file and add `apiKey` and `projectId` (See `/src/firebase-example.js`)

Copy the `/favicon.png` file to `/dist/`

## Test locally with npm
`npm start`

## Test locally with firebase
`npm run build`
`firebase emulators:start`

### Then deploy to test channel
`firebase hosting:channel:deploy SOURCE_CHANNEL_ID`

### Finally deploy to production
`firebase hosting:clone SOURCE_SITE:SOURCE_CHANNEL_ID TARGET_SITE:live`

SOURCE_SITE = projectId

TARGET_SITE = projectId
