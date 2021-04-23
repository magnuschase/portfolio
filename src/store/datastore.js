import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

const state = {
    currentComponent: "Main",
    projects: [{
        id: 0,
        title: "music store @ krakweb",
        descPL: "Sklep muzyczny stworzony podczas praktyk w Agencji Interaktywnej Krakweb. Live demo niestety nie jest już dostępne, pozostał jednak projekt graficzny",
        descEN: "Music online store created during my internship at Krakweb. Live demo unfortunately is no longer available, but graphic project is still here",
        elExists: true,
        link: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fi8WNR2nsSQyNtywCbv9shD%2Fmusic.icebergcms.pl'
    },
    {
        id: 1,
        title: "webplayer",
        descPL: "Prosty odtwarzacz dźwięku stworzony przy pomocy NodeJS + NeDB (back-end) i Vue + Vuex (front-end) z użyciem Axiosa. Obsługuje upload plików z użyciem drag & dropa, oraz tworzenie własnych playlist. Kod dostępny do pobrania na GitHubie",
        descEN: "Simple webplayer created with pure NodeJS + NeDB (back-end) and Vue + Vuex (front-end) using Axios. You can upload your own files with Drag & Drop and create your own playlist. Available at GitHub",
        elExists: false,
        img: "https://i.imgur.com/jK9Bg80.png",
        link: 'https://github.com/magnuschase/webplayer'
    },
    ],
    english: true
}

// getters
const getters = {
    getLang(state) {
        return state.english
    }
}

// actions
const actions = {

}
const mutations = {
    CHANGE_COMPONENT(state, val) {
        document.body.style.overflowY = val == "Projects" ? "scroll" : "hidden"
        state.currentComponent = val
    },
    CHANGE_LANGUAGE(state, val) {
        state.english = val
    },
}

//export store 
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})