import React, { useState } from 'react'
import Table from './Table'
import Button from '../Button'
import Input from '../Input'
import ContextMenu from '../ContextMenu'
import { action } from '@storybook/addon-actions'
import { faPlus, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'

export default {
  title: 'Table',
  component: Table,
}

const functionA = action('Função A')

const functionB = action('Função B')

const functionC = action('Função C')

const contextOptions = [
  {
    text: 'editar',
    buttonFunction: functionA,
  },
  {
    text: 'adicionar',
    buttonFunction: functionB,
  },
  {
    text: 'excluir',
    buttonFunction: functionC,
  },
]

export const TableExample = () => {
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
    <Table
      width={[1]}
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
          title: 'Especialidades',
          key: 'especialidades',
          sort: true,
          align: 'left',
          width: '350px',
        },
        {
          title: 'Tarefas',
          key: 'tarefas',
          sort: true,
          align: 'center',
        },
        {
          title: 'Ações',
          key: 'actions',
          align: 'center',
          width: '50px',
        },
      ]}
      data={[
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Last Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
      ]}
    />
  )
}

export const TableExampleMaxHeight = () => {
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
    <Table
      width={[2 / 3]}
      onChangeOrder={handleChangeOrder}
      maxHeight={200}
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
          title: 'Especialidades',
          key: 'especialidades',
          sort: true,
          align: 'left',
        },
        {
          title: 'Tarefas',
          key: 'tarefas',
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
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Last Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
      ]}
    />
  )
}

export const TableLoadingWithData = () => {
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
    <Table
      width={[2 / 3]}
      onChangeOrder={handleChangeOrder}
      maxHeight={200}
      loading={true}
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
          title: 'Especialidades',
          key: 'especialidades',
          sort: true,
          align: 'left',
        },
        {
          title: 'Tarefas',
          key: 'tarefas',
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
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Last Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
      ]}
    />
  )
}
export const TableLoadingDynamicWithData = () => {
  const [sort, setSort] = useState('nome')
  const [order, setOrder] = useState('asc')
  const [loading, setLoading] = useState(false)
  const [loadingTime, setLoadingTime] = useState(300)

  const handleChangeOrder = (item) => {
    if (item.key === sort) {
      setOrder(order === 'asc' ? 'desc' : 'asc')
    } else {
      setSort(item.key)
      setOrder('asc')
    }
  }

  const handleLoadingButton = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }

  const handleChangeLoadingTime = (e) => {
    setLoadingTime(e.target.value)
  }

  return (
    <>
      <Input value={loadingTime} onChange={handleChangeLoadingTime} />
      <Button color={'primary'} onClick={handleLoadingButton}>
        Carregar
      </Button>
      <Table
        width={[2 / 3]}
        onChangeOrder={handleChangeOrder}
        maxHeight={200}
        loading={loading}
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
            title: 'Especialidades',
            key: 'especialidades',
            sort: true,
            align: 'left',
          },
          {
            title: 'Tarefas',
            key: 'tarefas',
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
          { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
          { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
          { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
          { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
          { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
          { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
          { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
          { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
          { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
          { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
          { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
          { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
          { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
          { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
          { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
          { nome: 'Last Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        ]}
      />
    </>
  )
}

export const TableWithCellComponent = () => {
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
    <>
      <Table
        width={[2 / 3]}
        onChangeOrder={handleChangeOrder}
        // maxHeight={200}
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
            title: 'Especialidades',
            key: 'especialidades',
            sort: true,
            align: 'left',
            minWidth: 500,
          },
          {
            title: 'Tarefas',
            key: 'tarefas',
            sort: true,
            cellComponent({ row, headers, value }) {
              return (
                <span style={{ color: 'red', textDecoration: 'underline' }}>
                  {value} - {row._id}
                </span>
              )
            },
            align: 'center',
          },
          {
            title: 'Ações',
            key: 'actions',
            align: 'center',
            cellComponent({ row, headers, value }) {
              return <ContextMenu contextMenuActions={contextOptions} contextFunctions buttonIcon={faPlus} direction={'right'} />
            },
          },
        ]}
        data={[
          { _id: '1', nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
          { _id: '2', nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
          { _id: '3', nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
          { _id: '4', nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
          { _id: '5', nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
          { _id: '6', nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
          { _id: '7', nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
          { _id: '8', nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
          { _id: '9', nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
          { _id: '10', nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
          { _id: '11', nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
          { _id: '12', nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
          { _id: '13', nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
          { _id: '14', nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
          { _id: '15', nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
          { _id: '16', nome: 'Last Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        ]}
      />
    </>
  )
}

export const TableEmpty = () => {
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
    <Table
      width={[2 / 3]}
      onChangeOrder={handleChangeOrder}
      maxHeight={200}
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
          title: 'Especialidades',
          key: 'especialidades',
          sort: true,
          align: 'left',
        },
        {
          title: 'Tarefas',
          key: 'tarefas',
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
  )
}
export const LoadingWithEmpty = () => {
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
    <Table
      width={[2 / 3]}
      onChangeOrder={handleChangeOrder}
      maxHeight={200}
      loading={true}
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
          title: 'Especialidades',
          key: 'especialidades',
          sort: true,
          align: 'left',
        },
        {
          title: 'Tarefas',
          key: 'tarefas',
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
  )
}
