import { Router } from 'express'

export interface IRouter<T> {
    router: Router
    controller?: T
    initialize(): any
}