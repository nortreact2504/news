import { render, screen } from '@testing-library/react'
import Contact from './Contact'

describe('Contact', () => {
  it('renders the Contact component', () => {
    render(<Contact />)
    
    screen.debug(); // prints out the jsx in the Contact component unto the command line
  })
  it('renders text Loading when props Loading is true', () => {
    render(<Contact loading={false} />)
    expect(screen.queryByText('loading')).toBeNull()
  })
  
  it('rendres text Loading when props Loading is true', () => {
    render(<Contact loading={true} />)
    expect(screen.getByText('loading')).toBeInTheDocument()
  })
})