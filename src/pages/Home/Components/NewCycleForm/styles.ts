import styled, { css } from 'styled-components'

export const FormContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: ${theme['gray-100']};
    font-size: 1.125rem;
    font-weight: bold;
    flex-wrap: wrap;
  `}
`

export const BaseInput = styled.input`
  ${({ theme }) => css`
    background: transparent;
    height: 2.5rem;
    border: 0;
    border-bottom: 2px solid ${({ theme }) => theme['gray-500']};
    font-weight: bold;
    font-size: 1.125rem;
    padding: 0 0.5rem;
    color: ${({ theme }) => theme['gray-100']};

    &:focus {
      box-shadow: none;
      border-color: ${({ theme }) => theme['green-500']};
    }

    &::placeholder {
      color: ${({ theme }) => theme['gray-500']};
    }
  `}
`

export const TaskInput = styled(BaseInput)`
  ${({ theme }) => css`
    flex: 1;
    &::-webkit-calendar-picker-indicator {
      display: none !important;
    }
  `}
`

export const MinutesAmountInput = styled(BaseInput)`
  ${({ theme }) => css`
    width: 4rem;
  `}
`
