import React, { useState } from 'react'
import Box from './Box'
import Table from '../Table'

export default {
  title: 'Box',
  component: Box,
}

export const BoxExample = () => {
  const [sort, setSort] = useState('nome')
  const [order, setOrder] = useState('asc')

  const handleChangeOrder = (item) => {
    if (item.key === sort) {
      setOrder(order === 'asc' ? 'desc' : 'asc')
    } else {
      setSort(item.key)
      setOrder('asc')
    }
  }

  return (
    <Box width={1000} px={0} py={37} m={30}>
      <Table
        width={1}
        maxHeight={200}
        onChangeOrder={handleChangeOrder}
        pagination={{
          sort,
          order,
        }}
        headers={[
          {
            title: 'Advogados',
            key: 'nome',
            sort: true,
            align: 'left',
          },
          {
            title: 'Nome',
            key: 'lawyer.first',
            sort: true,
            align: 'left',
          },
          {
            title: 'Sobrenome',
            key: 'lawyer.last',
            sort: true,
            align: 'center',
          },
          {
            title: 'Ações',
            key: 'actions',
            align: 'center',
          },
        ]}
        data={[
          { nome: 'Nome do advogado', lawyer: { first: 'Jhon', last: 'Silva' }, tarefas: 10 },
          { nome: 'Nome do advogado', lawyer: { first: 'Jhon', last: 'Silva' }, tarefas: 10 },
          { nome: 'Nome do advogado', lawyer: { first: 'Jhon', last: 'Silva' }, tarefas: 10 },
          { nome: 'Nome do advogado', lawyer: { first: 'Jhon', last: 'Silva' }, tarefas: 10 },
          { nome: 'Nome do advogado', lawyer: { first: 'Jhon', last: 'Silva' }, tarefas: 10 },
          { nome: 'Nome do advogado', lawyer: { first: 'Jhon', last: 'Silva' }, tarefas: 10 },
          { nome: 'Nome do advogado', lawyer: { first: 'Jhon', last: 'Silva' }, tarefas: 10 },
          { nome: 'Nome do advogado', lawyer: { first: 'Jhon', last: 'Silva' }, tarefas: 10 },
          { nome: 'Nome do advogado', lawyer: { first: 'Jhon', last: 'Silva' }, tarefas: 10 },
          { nome: 'Nome do advogado', lawyer: { first: 'Jhon', last: 'Silva' }, tarefas: 10 },
          { nome: 'Nome do advogado', lawyer: { first: 'Jhon', last: 'Silva' }, tarefas: 10 },
          { nome: 'Nome do advogado', lawyer: { first: 'Jhon', last: 'Silva' }, tarefas: 10 },
          { nome: 'Nome do advogado', lawyer: { first: 'Jhon', last: 'Silva' }, tarefas: 10 },
          { nome: 'Nome do advogado', lawyer: { first: 'Jhon', last: 'Silva' }, tarefas: 10 },
          { nome: 'Nome do advogado', lawyer: { first: 'Jhon', last: 'Silva' }, tarefas: 10 },
          { nome: 'Last Nome do advogado', lawyer: { first: 'Jhon', last: 'Silva' }, tarefas: 10 },
        ]}
      />
    </Box>
  )
}
export const EmptyTableNoBorderBoxExample = () => {
  const [sort, setSort] = useState('nome')
  const [order, setOrder] = useState('asc')

  const handleChangeOrder = (item) => {
    if (item.key === sort) {
      setOrder(order === 'asc' ? 'desc' : 'asc')
    } else {
      setSort(item.key)
      setOrder('asc')
    }
  }

  return (
    <Box width={1000} px={0} py={37} m={30} noBorder>
      <Table
        width={1}
        maxHeight={200}
        onChangeOrder={handleChangeOrder}
        pagination={{
          sort,
          order,
        }}
        headers={[
          {
            title: 'Advogados',
            key: 'nome',
            sort: true,
            align: 'left',
          },
          {
            title: 'Nome',
            key: 'lawyer.first',
            sort: true,
            align: 'left',
          },
          {
            title: 'Sobrenome',
            key: 'lawyer.last',
            sort: true,
            align: 'center',
          },
          {
            title: 'Ações',
            key: 'actions',
            align: 'center',
          },
        ]}
        data={[]}
      />
    </Box>
  )
}
