import {
  createContext,
  type DetailedHTMLProps,
  type FormHTMLAttributes,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'

interface Props extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  children: ReactNode
}

export const FormContext = createContext<HTMLFormControlsCollection | undefined>(undefined)

export default function Form({ children, ...formProps }: Props) {
  const ref = useRef<HTMLFormElement>(null)
  const [formElements, setFormElements] = useState<HTMLFormControlsCollection>()

  useEffect(() => {
    setFormElements(ref.current?.elements)
  }, [])

  return (
    <form {...formProps} ref={ref}>
      <FormContext.Provider value={formElements}>{children}</FormContext.Provider>
    </form>
  )
}
