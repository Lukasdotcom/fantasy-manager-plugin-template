# How to Create a Plugin

1. Just use this repository as a template and then go into the plugin folder.
2. Install dependencies and run `npm install`
3. Edit Sample.json to your liking.
   - Change the id.
   - Set the version to 1.0.0
   - Change the description to your liking (optional you can remove the entry if you do not want a description).
   - If your plugin needs settings you can put them into input like this:
     - "settings": {
       "variant": "string",
       "name": "example",
       "description": "This is a description of what this input does"
       }
   - You can then add a min_version key if you require features only available in a certain server version. For the values you can choose go to [Version Changes](#Minimum-Version)
4. Now you can start programming your plugin. Go into the index.ts file and change it so it returns the correct values for your league.
5. When you are done with that run `npm test` and fix all the errors. This will make sure that your code is well written and formatted.
6. Now you just publish your github repository and then go to the Sample.json file and copy the link to the raw code. This link should be importable as a plugin.

# How to update Plugin

1. Update all the files that are not in the plugin folder and run `npm install`. This will give you the newest types, settings, and dependencies.
2. Change the files in the plugin folder that you want to change for the update.
3. Now run `npm test` to fix anything new and then you can update the plugin.
4. Update the version number in the Sample.json file.

# Best Practices

Create a release everytime you update the plugin and make sure the links in the Sample.json file point to the release version.

# Minimum Version

Currently there is only one version that exists which is 1.12.0.
