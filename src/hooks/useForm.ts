import { useContext } from 'react'
import { FormContext } from '../components/Form'

export const useForm = () => useContext(FormContext)
