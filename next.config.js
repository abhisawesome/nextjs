module.exports = {
    trailingSlash: true,
    exportPathMap: async () => {
        return {
            '/': { page: '/' },
            '/home': { page: '/home' }
        }
    }
}
