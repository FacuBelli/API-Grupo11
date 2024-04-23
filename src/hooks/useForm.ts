import { useContext } from 'react'
import { FormContext } from '../components/Form'

const useForm = () => useContext(FormContext)

export default useForm
