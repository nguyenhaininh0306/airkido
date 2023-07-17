import { Listing, User } from '@prisma/client'

export type SafeListings = Omit<Listing, 'created'> & { createdAt: string }

export type SafeUser = Omit<User, 'createAt' | 'updateAt' | 'emailVerified'> & {
  createAt: string
  updateAt: string
  emailVerified: string | null
}
