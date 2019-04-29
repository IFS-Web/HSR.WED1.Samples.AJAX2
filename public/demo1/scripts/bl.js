const BASE_URL = '/api/music';

// TODO: Demo 2 - Second Step, Convert to MusicService class and static BASE_URL field
const musicService = {
    async getAll() {
        const response = await fetch(BASE_URL);
        return await response.json();
    }
};
