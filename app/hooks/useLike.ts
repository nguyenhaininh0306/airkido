import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useCallback, useMemo } from 'react'
import { toast } from 'react-hot-toast'
import { SafeUser } from '../types'
import useLoginModal from './useLoginModal'

interface IUseLike {
  listingId: string
  currentUser?: SafeUser | null
}

const useLike = ({ listingId, currentUser }: IUseLike) => {
  const router = useRouter()
  const loginModal = useLoginModal()

  const hasLike = useMemo(() => {
    const list = currentUser?.favoriteIds || []

    return list.includes(listingId)
  }, [listingId, currentUser])

  const toggleLike = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation()

      if (!currentUser) {
        return loginModal.onOpen()
      }

      try {
        let request

        if (hasLike) {
          request = () => axios.delete(`/api/like/${listingId}`)
        } else {
          request = () => axios.post(`/api/like/${listingId}`)
        }

        await request()
        router.refresh()
      } catch (error: any) {
        toast.error('Something went wrong!!!')
      }
    },
    [currentUser, listingId, hasLike, loginModal, router]
  )

  return {
    hasLike,
    toggleLike,
  }
}

export default useLike
