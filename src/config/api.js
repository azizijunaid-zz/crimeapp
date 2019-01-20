const api = {
    /* Crime Categories Api*/
    getCrimeCategory: () => {
        return new Promise((resolve, reject) => {
            return fetch('https://data.police.uk/api/crime-categories')
                .then(res => resolve(res.json()))
                .catch(err => reject(err));
        })
    },

    /* Forces Api */
    getForces: () => {
        return new Promise((resolve, reject) => {
            return fetch('https://data.police.uk/api/forces')
                .then(res => resolve(res.json()))
                .catch(err => reject(err));
        })
    },

    /* Crimes Api */
    getCrimes: (category, force) => {
        return new Promise((resolve, reject) => {
            return fetch(`https://data.police.uk/api/crimes-no-location?category=${category}&force=${force}`)
                .then(res => resolve(res.json()))
                .catch(err => reject(err));
        })
    },
}

export default api;