Install firebase hosting and emulators with `firebase init`

Create a `.env` file in the root folder and add:
- `FIREBASE_ZLIBPUMP_APIKEY=<API_KEY>`
- `FIREBASE_PROJECT_ID=<PROJECT_ID`


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

## Using githooks
To automatically build and test with firebase emulator upon commit. Create the script `.git/hooks/post-commit` and make it executable. Here is an example of the script content:
```
#!/bin/sh
echo "Running build"
npm run build
if ps | grep emulator | grep -v grep; then
    echo "Found emulator process, not starting a new one."
else
    echo "Did not find an emulator process. Starting up"
    firebase emulators:start
fi
```
