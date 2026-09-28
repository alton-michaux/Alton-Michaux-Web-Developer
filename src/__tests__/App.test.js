// app.test.js
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import App from '../App'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'

test('landing page', async () => {
  const user = userEvent.setup()
  render(<App />, { wrapper: BrowserRouter })

  // verify page content for default route
  expect(screen.getByText(/Hey, I'm Alton and I build/i)).toBeInTheDocument()

  // verify page content for expected route after navigating
  // await user.click(screen.getByText(/About/i))
  // expect(screen.getByText(/As a back end developer/i)).toBeInTheDocument()
})

test('about page', () => {
  const aboutRoute = '/about'

  // use <MemoryRouter> when you want to manually control the history
  render(
    <MemoryRouter initialEntries={[aboutRoute]}>
      <App />
    </MemoryRouter>,
  )

  // verify navigation to "no match" route
  expect(screen.getByText(/backend lead developer at Code The Dream Labs/i)).toBeInTheDocument()
})

test('experience page', () => {
  const experienceRoute = '/experience'

  // use <MemoryRouter> when you want to manually control the history
  render(
    <MemoryRouter initialEntries={[experienceRoute]}>
      <App />
    </MemoryRouter>,
  )

  // verify navigation to "no match" route
  expect(screen.getByText(/Code The Dream Labs/i)).toBeInTheDocument()
})

test('work page', () => {
  render(
    <MemoryRouter initialEntries={['/work']}>
      <App />
    </MemoryRouter>,
  )

  expect(screen.getByText(/Selected Work/i)).toBeInTheDocument()
  expect(screen.getByText(/Production hardening for a Django API/i)).toBeInTheDocument()
})

test('contact page', () => {
  const contactRoute = '/contact'

  // use <MemoryRouter> when you want to manually control the history
  render(
    <MemoryRouter initialEntries={[contactRoute]}>
      <App />
    </MemoryRouter>,
  )

  // verify navigation to "no match" route
  expect(screen.getByText(/Github/i)).toBeInTheDocument()
})

test('landing on a bad page', () => {
  const badRoute = '/some/bad/route'

  // use <MemoryRouter> when you want to manually control the history
  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App />
    </MemoryRouter>,
  )

  // verify navigation to "no match" route
  expect(screen.getByText(/No Page Found/i)).toBeInTheDocument()
})
