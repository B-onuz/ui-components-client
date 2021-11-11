import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { space, layout, compose } from 'styled-system'
import PaceLoading from './PaceLoading'
import shortid from 'shortid'

const StyledTable = styled.table`
  border-spacing: 0;
  position: relative;
  border-collapse: collapse;
  width: 100%;
`

const TableHead = styled.thead`
  background: #f1f3f8;
  display: table-header-group;
`

const TableHeader = styled.th`
  text-transform: uppercase;
  font-size: 0.8em;
  color: #838383;
  font-weight: 400;
  padding: 1em;
  position: relative;
  position: sticky;
  z-index: 2;
  top: 0;
  background: #f1f3f8;
  ${({ width }) =>
    !!width &&
    `
    width: ${width};
  `}
  ${({ minWidth }) =>
    minWidth &&
    `
    min-width: ${minWidth}px;
  `}
  /* padding: 13px 40px; */
  padding: 10px 20px;
  ${({ order }) =>
    order &&
    `
    cursor: pointer;
  `}
  ${({ align }) =>
    align &&
    `
    text-align: ${align};
  `}
`

const OrderArrow = styled.span`
  position: relative;
  width: 20px;
  height: 20px;
  margin-left: 4px;
  @media only screen and (max-width: 500px) {
    transform: rotateZ(90deg);
  }
  ${({ isCurrent }) =>
    !!isCurrent
      ? `
  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 1px;
    height: 8px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    background-color: #000;
    transition: transform 0.25s ease-in-out 0s;
  }`
      : `
    &::before,
    &::after {
      content: '';
      display: block;
      border: solid #838383;
      border-width: 0 1px 1px 0;
      display: inline-block;
      padding: 3px;
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      width: 0px;
      height: 0px;
    }
    &::after {
      top: 4px;
      transform: rotate(-135deg);
    }

    &::before {
      bottom: 4px;
      transform: rotate(45deg);
    }
  `}

  ${({ order, isCurrent }) => {
    if (!!isCurrent) {
      return order === 'asc'
        ? `
      &::before {
        transform: translate3d(-2px, 0px, 0px) rotate(45deg);
      }
      &::after {
        transform: translate3d(3px, 0px, 0px) rotate(-45deg);
      }
    `
        : `
      &::before {
        transform: translate3d(3px, 0px, 0px) rotate(45deg);
      }
      &::after {
        transform: translate3d(-2px, 0px, 0px) rotate(-45deg);
      }
    `
    } else {
      return ''
    }
  }}
`

const TableRow = styled.tr`
  /* padding: 13px 40px; */
  @media only screen and (max-width: 500px) {
    min-width: 150px;
    font-size: 14px;
  }
`

const TableHeaderSpan = styled.span`
  display: inline-flex;
  align-items: center;
  flex-direction: inherit;
  justify-content: flex-start;
  ${({ width }) =>
    !!width &&
    `
    width: ${width};
  `}
  ${({ minWidth }) =>
    minWidth &&
    `
    min-width: ${minWidth}px;
  `}
`

const TableData = styled.td`
  ${({ align }) =>
    align &&
    `
    text-align: ${align};
  `}
  padding: 10px 20px;
  @media only screen and (max-width: 500px) {
    padding: 12px 8px;
    text-align: center;
  }
`

const WrapperTable = styled.div`
  overflow-x: auto;
  position: relative;
  height: 100%;
  width: 100%;
  flex: 1;
`

const Wrapper = styled.div`
  position: relative;
  border: 1px solid #efefef;
  display: flex;
  flex-direction: column;
  flex: ${({ flex }) => flex};
  ${compose(space, layout)}
`

const TableBody = styled.tbody`
  position: relative;
  display: table-row-group;
  & > ${TableRow} {
    background-color: #f8fafc;
    &:nth-child(odd) {
      background-color: #fff;
    }
  }
`

const Table = ({ children, headers, pagination, onChangeOrder, data, flex, loading, ...rest }) => {
  const handleChangeOrder = (item) => {
    if (onChangeOrder) {
      onChangeOrder(item)
    }
  }

  const getDataByKey = ({ item, key }) => {
    const keys = key.split('.')
    return keys.reduce((acc, item) => {
      return acc[item] || ''
    }, item)
  }

  return (
    <Wrapper flex={flex} {...rest}>
      {!!loading && <PaceLoading />}
      <WrapperTable loading={loading}>
        <StyledTable>
          <TableHead>
            <TableRow>
              {(headers || []).map((item) => (
                <TableHeader
                  width={item.width}
                  minWidth={item.minWidth}
                  key={`${shortid.generate()}`}
                  order={item.sort}
                  align={item.align}
                  onClick={() => item.sort && handleChangeOrder(item)}
                >
                  <TableHeaderSpan>
                    {item.title} {item.sort && <OrderArrow isCurrent={!!(pagination.sort === item.key)} order={pagination.order} />}
                  </TableHeaderSpan>
                </TableHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {!(data || []).length && (
              <TableRow>
                <TableData style={{ textAlign: 'center' }} colSpan={(headers || []).length}>
                  {!!loading ? 'Carregando...' : 'Nenhum registro encontrado'}
                </TableData>
              </TableRow>
            )}
            {(data || []).map((row) => (
              <TableRow key={`${shortid.generate()}`}>
                {headers.map((header) =>
                  header.cellComponent ? (
                    <TableData width={header.width} align={header.align} key={`${shortid.generate()}`}>
                      <header.cellComponent row={row} header={header} value={getDataByKey({ key: header.key, item: row })} />
                    </TableData>
                  ) : (
                    <TableData align={header.align} key={`${shortid.generate()}`}>
                      {getDataByKey({ key: header.key, item: row })}
                    </TableData>
                  )
                )}
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </WrapperTable>
    </Wrapper>
  )
}

Table.defaultProps = {}

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.object),
}

export default Table
