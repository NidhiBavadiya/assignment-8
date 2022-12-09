import CateListdata from './view/CateListdata.vue'
import CateAdd from './view/CateAdd.vue'
import Itemlist from './view/Itemlist.vue'
import AddItem from './view/AddItem.vue'

 
export default [
    { path: '/', component: CateListdata },
    { path: '/adddata', component: CateAdd },
    { path: '/itemlist', component: Itemlist },
    { path: '/itemadd', component: AddItem },

]