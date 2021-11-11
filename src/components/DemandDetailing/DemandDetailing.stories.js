import React from 'react'
import DemandDetailing from './DemandDetailing'
import { Box, Flex } from 'reflexbox'
import Button from '../Button'
import Typography from '../Typography'

export default {
  title: 'DemandDetailing',
  component: DemandDetailing,
}

const data = [
  {
    interactionResponsibleName: 'Advogado Bonuz',
    isLawyer: true,
    createdAt: 1600977892300,
    comment: `Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:

    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
    The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.

    The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.`,
  },
  {
    interactionResponsibleName: 'Cliente',
    isLawyer: false,
    createdAt: 1600981780257,
    comment:
      'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ',
  },
  {
    interactionResponsibleName: 'Advogado Bonuz',
    isLawyer: true,
    createdAt: 1600981780267,
    comment:
      'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ',
    documents: [
      {
        fileURL: 'https://lorempixel.com/50/50/44',
        fileName: 'contrato_nda_v1.pdf',
        name: 'arquivo_final.png',
      },
      {
        fileURL: 'https://lorempixel.com/50/50',
        fileName: 'contrato_nda_v2.pdf',
        name: 'arquivo_semifinal.png',
      },
    ],
  },
]

export const DemandDetailingExample = () => <DemandDetailing reportTitle="Conclusão" reportKind="Histórico" detailingData={data} />

export const DemandDetailingWithChild = () => (
  <DemandDetailing reportTitle="Conclusão" reportKind="Histórico" detailingData={data}>
    <Flex justifyContent="space-between" my={2}>
      <Typography>Here comes any children content</Typography>
      <Box>
        <Button color="primary" m={2}>
          Button 1
        </Button>
        <Button outline color="primary" m={2}>
          Button 2
        </Button>
      </Box>
    </Flex>
  </DemandDetailing>
)
