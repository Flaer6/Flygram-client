import { api } from '../axios'

class ChatsService {
	async searchChat(query: string) {
		const response = await api.get('/chats/search', {
			params: { query },
		})
		return response.data
	}
	async getUser(id: string) {
		const response = await api.get(`/profile/getUserByID/${id}`)
		return response.data
	}
}

export const chatsService = new ChatsService()
