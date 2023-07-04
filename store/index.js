export default createStore({
    state: {
        projets: null,
        testimonials: null
    },
    getters: {

    },
    mutations: {
        setProjects(state, projects){
            state.projects = projects
        },
        setTestimonials(state, testimonials){
            state.testimonials = testimonials
        }
    },
    actions: {
        async getProjects(context) {
            const res = await axios.get(apiUrl)
            const projects = res.data.projects
            context.commit("setProjects", projects)
        },
        async getTestimonials(context) {
            const res = await axios.get(apiUrl)
            const testimonials = res.data.testimonials
            context.commit("setTestimonials", testimonials)
        }
    }
})