import React from 'react'
import styled from 'styled-components'
import { color, space } from 'styled-system'
import { Box, Flex } from 'reflexbox'
import Fieldset from '../Fieldset'
import UserAvatar from '../UserAvatar'
import Typography from '../Typography'
import Legend from '../Legend'
import Button from '../Button'
import { formatDate } from '../../utils'

const StyledDemandDetailing = styled.div`
  ${color}
  ${space}
  legend {
    font-size: 21px;
  }
  @media only screen and (max-width: 500px) {
    margin-left: 20px;
    padding-left: 0px;
  }
`

const ContentWrapper = styled.div`
  ${color}
  display: flex;
  flex-direction: column;
  border-left: 1px solid #dededf;
  margin-bottom: 40px;
`

const ReportBodyTitle = styled.h3`
  border-bottom: 1px solid #dededf;
  margin-bottom: 28px;
`

const TopicItemWrapper = styled.div`
  margin-bottom: 28px;
  margin-left: 38px;
  &.mainTopic {
    margin-left: -20px;
  }
  &.lastTopic {
    margin-bottom: 0;
  }

  @media only screen and (max-width: 500px) {
    margin-left: 10px;
  }
`

const TopicItem = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 52px;

  @media only screen and (max-width: 500px) {
    padding-left: 30px;
  }
`

const getTopicClass = (value, parameter) => {
  if (value === 0) {
    return 'mainTopic'
  } else if (value === parameter - 1) {
    return 'lastTopic'
  } else {
    return null
  }
}

const DemandDetailing = ({ children, reportTitle, reportKind, detailingData, ...rest }) => {
  return (
    <StyledDemandDetailing {...rest}>
      <Fieldset legend={reportTitle} bordered pt={4} px={['30px', '40px', '40px', '40px']}>
        <ContentWrapper>
          {(detailingData || [])
            .sort((first, last) => last.createdAt - first.createdAt)
            .map((item, index) => (
              <TopicItemWrapper key={item.createdAt} className={getTopicClass(index, (detailingData || {}).length)}>
                {index === 1 && <ReportBodyTitle>{reportKind}</ReportBodyTitle>}
                <Flex alignItems="center" justifyContent="flex-start">
                  <UserAvatar userName={item.interactionResponsibleName} displayName={item.interactionResponsibleName} mr={2} />
                  <Typography fontSize={1} color="lightGrey" m={0}>
                    {formatDate(item.createdAt)}
                  </Typography>
                </Flex>
                <TopicItem>
                  <Box>
                    <Typography fontSize={1} color="#aaa">
                      {item.comment}
                    </Typography>
                  </Box>
                  {index === 0 && <>{children}</>}
                  {(item.documents || {}).length > 0 && item.documents.sort((first, last) => last.createdAt - first.createdAt) && (
                    <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start">
                      <Typography fontSize={1} color="lightGrey" fontWeight={'bold'}>
                        Anexos:
                      </Typography>
                      {item.documents.map((file) => (
                        <Button
                          key={file.fileURL}
                          as="a"
                          target="_blank"
                          rel="noopener noreferrer"
                          href={file.fileURL}
                          linkbutton
                          color="primary"
                          linkButton
                        >
                          {file.name}
                        </Button>
                      ))}
                    </Flex>
                  )}
                </TopicItem>
              </TopicItemWrapper>
            ))}
        </ContentWrapper>
      </Fieldset>
    </StyledDemandDetailing>
  )
}

export default DemandDetailing
