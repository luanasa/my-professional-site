

async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/luanasa/portfolio-lua-dio/main/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()
}