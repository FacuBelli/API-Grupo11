import type { UnknownAction } from '@reduxjs/toolkit'
import type { DatabaseTable } from './database'

export interface CustomPayload<T extends DatabaseTable> {
  id?: T['id'],
  body?: Partial<T>
}

export interface CustomAction<T extends DatabaseTable> extends UnknownAction {
  type: string,
  payload: CustomPayload<T>
}
