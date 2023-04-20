import { HandPalm, Play } from 'phosphor-react'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles'
import { NewCycleForm } from './Components/NewCycleForm'
import { CountDown } from './Components/CountDown'
import { FormProvider, useForm } from 'react-hook-form'
import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CycleContexts'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Inform your task'),
  minutesAmount: zod
    .number()
    .min(5, 'the range must be at minimum 5 minutes')
    .max(60, 'the range must be at maximun 60 minutes'),
})
type NewCycleFormatData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { createNewCycle, activeCycle, interruptCurrentCycle } =
    useContext(CyclesContext)
  const newCycleForm = useForm<NewCycleFormatData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(data: NewCycleFormatData) {
    createNewCycle(data)
    reset()
  }
  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <CountDown />

        {activeCycle ? (
          <StopCountdownButton onClick={interruptCurrentCycle} type="submit">
            <HandPalm size={24} />
            Stop
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Start
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
