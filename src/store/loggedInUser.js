import { defineStore } from 'pinia'

export const useLoggedInUserStore = defineStore({
  id: 'loggedInUser',
  state() {
    return {
      username: 'admin'
    }
  }
})
