import { useQuery } from '@tanstack/react-query'
import { chatsService } from '../api/services/chats.service'
import type { IUser } from '../types/types'

export const useSearchUsers = (searchQuery: string) => {
	const {
		data: chats,
		isLoading,
		error,
	} = useQuery({
		queryKey: ['chats', searchQuery],
		queryFn: () => chatsService.searchChat(searchQuery),
		enabled: !!searchQuery,
	})

	return {
		chats,
		isLoading,
		error,
	}
}

export const useGetUser = (id: string) => {
	const {
		data: user,
		isLoading,
		error,
	} = useQuery<IUser, Error>({
		queryKey: ['user', id],
		queryFn: () => chatsService.getUser(id),
	})

	return {
		user,
		isLoading,
		error,
	}
}
