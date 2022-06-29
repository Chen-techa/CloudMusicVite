import { defineStore } from 'pinia'
import action from './action'
import getters from './getters'
import state from './state'

export const mapStore = defineStore('id', {
    state,
    action,
    getters
})