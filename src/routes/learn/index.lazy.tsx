import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/learn/')({
  component: Learn,
})

function Learn() {
  return <div>Hello "/learn/"!</div>
}
