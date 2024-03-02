curl "https://clientsettingscdn.roblox.com/v1/settings/application?applicationName=AndroidApp" -o fflags.json
node flagmaker.js /data/data/com.roblox.client/files/exe/ClientSettings/ClientAppSettings.json

