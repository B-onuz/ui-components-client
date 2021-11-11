import React, { memo, useEffect, useState } from 'react'
import styled from 'styled-components'
import { layout, space, compose } from 'styled-system'
import Button from '../Button'

const StyledPagination = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${compose(layout, space)}
`
const PageItem = styled(Button)`
  position: relative;
  border-radius: 32px;
  min-width: 32px;
  height: 32px;
  padding: 0 0.3em;
  background: none;
  overflow: hidden;
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  ${({ theme, color }) => `color: ${theme.colors[color]}`};
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    ${({ theme, color }) => `background-color: ${theme.colors[color]}`};
    transform: translateY(-100%);
    transition: 0.2s ease-in-out;
  }
  &:active {
    background-color: transparent;
  }
  &:hover,
  &:active {
    background-color: transparent;
    &::before {
      transform: translateY(0);
      z-index: 1;
    }
    color: #fff;
  }
  ${({ theme, color, active }) =>
    !!active &&
    `
    color: #fff;
    background-color: ${theme.colors[color]};
  `};
  & > span {
    position: relative;
    z-index: 2;
  }
  &.ellipsis {
    &::before {
      content: none;
      color: #e0e1e2;
    }
    &:hover {
      cursor: default;
      color: #e0e1e2;
      background-color: #f7f8f8;
    }
  }
`

const Pagination = memo(({ children, color, onChangePage, onNextPage, onPrevPage, total, page, onLazyChangePage, lazyTimeout = 300, ...rest }) => {
  const [lazyKey, setLazyKey] = useState()
  const [isFirstItem, setIsFirstItem] = useState(true)
  const [isLastItem, setIsLastItem] = useState(true)
  const [pageMarkers, setPageMarkers] = useState([])

  const defineMarkers = (input) => {
    let marker = 0
    let markersArray = []
    while (marker < input) {
      markersArray[marker] = marker + 1
      marker += 1
    }
    setPageMarkers(markersArray)
    if (markersArray.length <= 7) {
      setIsFirstItem(true)
      setIsLastItem(true)
    }
  }

  useEffect(() => {
    defineMarkers(total)
  }, [])

  useEffect(() => {
    handleEllipsis()
    if (!onLazyChangePage) return
    window.clearTimeout(lazyKey)
    setLazyKey(
      setTimeout(() => {
        onLazyChangePage(page)
      }, lazyTimeout)
    )
  }, [page])

  const handleEllipsis = () => {
    if (total >= 8) {
      if (page < 5) {
        setIsFirstItem(true)
        setIsLastItem(false)
      } else if (page > total - 4) {
        setIsFirstItem(false)
        setIsLastItem(true)
      } else {
        setIsFirstItem(false)
        setIsLastItem(false)
      }
    }
  }

  const handleMarkers = () => {
    if (!!isFirstItem || !!isLastItem) {
      if (!!isFirstItem && !!isLastItem) {
        return pageMarkers.map((item, index) => (
          <PageItem color={color} active={page === item} m={1} key={index} onClick={() => onChangePage(item)}>
            <span>{item}</span>
          </PageItem>
        ))
      } else if (!!isFirstItem) {
        return pageMarkers.map((item, index) => {
          while (index <= 4)
            return (
              <PageItem color={color} active={page === item} m={1} key={index} onClick={() => onChangePage(item)}>
                <span>{item}</span>
              </PageItem>
            )
          if (index === 7)
            return (
              <>
                <PageItem color={'default'} disabled m={1} className="ellipsis">
                  <span>{'...'}</span>
                </PageItem>
                <PageItem color={color} m={1} key={total} onClick={() => onChangePage(total)}>
                  <span>{total}</span>
                </PageItem>
              </>
            )
        })
      } else if (!!isLastItem) {
        return pageMarkers.map((item, index) => {
          if (index === 0)
            return (
              <>
                <PageItem color={color} m={1} key={1} onClick={() => onChangePage(1)}>
                  <span>1</span>
                </PageItem>
                <PageItem color={'default'} m={1} className="ellipsis">
                  <span>{'...'}</span>
                </PageItem>
              </>
            )
          while (total <= index + 5)
            return (
              <PageItem color={color} active={page === item} m={1} key={index} onClick={() => onChangePage(item)}>
                <span>{item}</span>
              </PageItem>
            )
        })
      }
    } else {
      return (
        <>
          <PageItem color={color} m={1} key={1} onClick={() => onChangePage(1)}>
            <span>1</span>
          </PageItem>
          <PageItem color={'default'} m={1} className="ellipsis">
            <span>{'...'}</span>
          </PageItem>
          {pageMarkers.map((item, index) => {
            if (item === page - 1 || item === page || item === page + 1)
              return (
                <PageItem color={color} active={page === item} m={1} key={index} onClick={() => onChangePage(item)}>
                  <span>{item}</span>
                </PageItem>
              )
          })}
          <PageItem color={'default'} disabled m={1} className="ellipsis">
            <span>{'...'}</span>
          </PageItem>
          <PageItem color={color} m={1} key={total} onClick={() => onChangePage(total)}>
            <span>{total}</span>
          </PageItem>
        </>
      )
    }
  }

  return <StyledPagination {...rest}>{handleMarkers()}</StyledPagination>
})
export default Pagination
