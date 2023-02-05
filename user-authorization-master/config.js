// Get the config either from environment variables or pick the default
const config = {
	PORT: process.env.PORT || '3000',
	CLIENT_ID: process.env.CLIENT_ID || 'd2b3e422b361914d28a6',
	CLIENT_SECRET: process.env.CLIENT_SECRET || '117aedbaa4216ca24f306e5d5f00747547d741c1',
}

module.exports = config
