import { Dispatch, SetStateAction } from 'react'

export interface ISort {
    empty: boolean
    sorted: boolean
    unsorted: boolean
}

export interface IPageable {
    offset: number
    pageNumber: number
    pageSize: number
    sort: ISort
    unpaged: boolean
}

export interface IPagination {
    totalRegistros: number
    totalPaginas: number
    linhasPorPagina: number
    paginaAtual: number
    setNumberPage: Dispatch<SetStateAction<number>>
}

export interface IPageResult<T> {
    content: T[]
    empty: boolean
    first: boolean
    last: boolean
    number: number
    numberOfElements: number
    pageable: IPageable
    size: number
    sort: ISort
    totalElements: number
    totalPages: number
}
