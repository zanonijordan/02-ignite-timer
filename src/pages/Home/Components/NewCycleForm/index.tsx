import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { useContext } from 'react'

import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CycleContexts'

export const NewCycleForm = () => {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">I am going to work with</label>
      <TaskInput
        id="task"
        list="task-sugestions"
        placeholder="Give a name to your project"
        {...register('task')}
        disabled={!!activeCycle}
      />
      <datalist id="task-sugestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
      </datalist>
      <label htmlFor="">For</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        {...register('minutesAmount', { valueAsNumber: true })}
        disabled={!!activeCycle}
      />
      <span>minutos.</span>
    </FormContainer>
  )
}
