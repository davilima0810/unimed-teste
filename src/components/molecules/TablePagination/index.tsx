import React, { HTMLAttributes, memo, ReactElement, useEffect, useMemo } from 'react'

import Skeleton from 'react-loading-skeleton'

import Pagination from '../Pagination'

import * as S from './styles'
import { NumberUtils } from '@/utils/numberUtils'

interface Title {
    label: string
    value: string
}

interface Pagination {
    totalPaginas: number
    totalRegistros: number
    paginaAtual: number
    linhasPorPagina: number
    setNumberPage: React.Dispatch<React.SetStateAction<number>>
}

type Props = {
    titles: Title[]
    pagination?: Pagination

    values: Array<any>

    customGridStyles?: string
    emptyText?: string

    isLoading?: boolean

    enableTitleByItem?: boolean
} & HTMLAttributes<HTMLElement>

function TablePagination({
    pagination,
    titles,
    values,
    customGridStyles,
    emptyText = 'Nenhum resultado encontrado',
    isLoading = false,
    enableTitleByItem = false,
    ...props
}: Props) {
    const showLoader = isLoading === undefined ? values?.length === 0 : isLoading

    return (
        <S.Wrapper {...props}>
            {!enableTitleByItem && (
                <S.TableTitle customGridStyles={customGridStyles}>
                    {titles.map((element) => (
                        <div key={element.value}>{element.label}</div>
                    ))}
                </S.TableTitle>
            )}
            <S.TableBody>
                {showLoader &&
                    Array.from({ length: 10 }).map((_, idx) => (
                        <Skeleton key={idx} baseColor="#F6F6F9" highlightColor="#d0d0d0" borderRadius={4} style={{ height: 36 }} />
                    ))}
                {values?.length === 0 && !isLoading && <S.EmptyRow>{emptyText}</S.EmptyRow>}
                {!showLoader &&
                    values?.map((element, index) =>
                        enableTitleByItem ? (
                            <div key={`div-${index}`} style={{ backgroundColor: '#f6f6f9', borderRadius: '8px' }}>
                                {titles.map((titulo, idx) => (
                                    <div key={`${titulo.label}-${idx}`} style={{ padding: '16px 16px' }}>
                                        {titulo.label}
                                    </div>
                                ))}
                                <S.TableRow key={index} customGridStyles={customGridStyles} style={{ padding: '0px 16px 16px 16px' }}>
                                    {titles.map((titulo, idx) => (
                                        <S.TableCol key={idx} style={{ fontWeight: 'bold' }}>
                                            {typeof element[titulo.value] === 'string' ? (
                                                <span title={element[titulo.value]} className="value" style={{ color: 'rgba(0, 0, 0, 0.88)' }}>
                                                    {element[titulo.value]}
                                                </span>
                                            ) : (
                                                element[titulo.value]
                                            )}
                                        </S.TableCol>
                                    ))}
                                </S.TableRow>
                            </div>
                        ) : (
                            <S.TableRow key={index} customGridStyles={customGridStyles}>
                                {titles.map((titulo, idx) => (
                                    <S.TableCol key={idx}>
                                        {typeof element[titulo.value] === 'string' ? (
                                            <span title={element[titulo.value]} className="value">
                                                {element[titulo.value]}
                                            </span>
                                        ) : (
                                            element[titulo.value]
                                        )}
                                    </S.TableCol>
                                ))}
                            </S.TableRow>
                        )
                    )}
            </S.TableBody>

            {pagination ? (
                <S.TableFooter>
                    <Pagination
                        totalPage={pagination?.totalPaginas}
                        totalRegister={pagination?.totalRegistros}
                        actualPage={pagination?.paginaAtual}
                        setNumberPage={pagination?.setNumberPage}
                    />

                    <S.HeaderContentDemands>
                        <div className="tabs-demands-right">
                            <p>
                                {NumberUtils.maskNumberInt(((pagination?.paginaAtual + 1) * pagination?.linhasPorPagina - values.length || 0) + 1)} -{' '}
                                {NumberUtils.maskNumberInt(
                                    pagination?.paginaAtual * pagination?.linhasPorPagina +
                                        values.length +
                                        (pagination?.paginaAtual + 1 === pagination?.totalPaginas ? 0 : 1)
                                )}
                                {' de '}
                                {NumberUtils.maskNumberInt(pagination?.totalRegistros)}
                            </p>
                        </div>
                    </S.HeaderContentDemands>
                </S.TableFooter>
            ) : null}
        </S.Wrapper>
    )
}

export default memo(TablePagination)
